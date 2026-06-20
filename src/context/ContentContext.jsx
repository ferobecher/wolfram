import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState({});
  const [services, setServices] = useState([]);
  const [steps, setSteps] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        console.log("[Supabase] URL:", import.meta.env.VITE_SUPABASE_URL);
        console.log("[Supabase] Key present:", !!import.meta.env.VITE_SUPABASE_ANON_KEY);

        const [c, sv, st, ph] = await Promise.all([
          supabase.from("content").select("key, value"),
          supabase.from("services").select("*").order("sort_order"),
          supabase.from("steps").select("*").order("sort_order"),
          supabase.from("photos").select("*").order("sort_order"),
        ]);

        console.log("[Supabase] content:", c.data, c.error);
        console.log("[Supabase] services:", sv.data, sv.error);
        console.log("[Supabase] steps:", st.data, st.error);

        const map = {};
        c.data?.forEach(({ key, value }) => { map[key] = value; });
        setContent(map);
        setServices(sv.data ?? []);
        setSteps(st.data ?? []);
        setPhotos(ph.data ?? []);
      } catch (err) {
        console.error("[Supabase] load failed:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const updateContent = async (key, value) => {
    setContent(prev => ({ ...prev, [key]: value }));
    await supabase.from("content").update({ value, updated_at: new Date().toISOString() }).eq("key", key);
  };

  const updateService = async (id, field, value) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
    await supabase.from("services").update({ [field]: value }).eq("id", id);
  };

  const updateStep = async (id, field, value) => {
    setSteps(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
    await supabase.from("steps").update({ [field]: value }).eq("id", id);
  };

  const addPhoto = async (section, file) => {
    const ext = file.name.split(".").pop();
    const path = `${section}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("photos").upload(path, file);
    if (error) { console.error(error); return; }
    const { data: { publicUrl } } = supabase.storage.from("photos").getPublicUrl(path);
    const maxOrder = photos.filter(p => p.section === section).length;
    const { data } = await supabase.from("photos")
      .insert({ storage_path: path, url: publicUrl, section, sort_order: maxOrder })
      .select().single();
    if (data) setPhotos(prev => [...prev, data]);
  };

  const deletePhoto = async (id, storagePath) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
    await Promise.all([
      supabase.storage.from("photos").remove([storagePath]),
      supabase.from("photos").delete().eq("id", id),
    ]);
  };

  return (
    <ContentContext.Provider value={{ content, services, steps, photos, loading, updateContent, updateService, updateStep, addPhoto, deletePhoto }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
