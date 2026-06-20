import { useRef } from "react";
import { Upload, Trash2 } from "lucide-react";
import { useAdmin } from "@/context/AdminContext";
import { useContent } from "@/context/ContentContext";

export default function HeroPhoto({ className }) {
  const { isAdmin } = useAdmin();
  const { photos, addPhoto, deletePhoto } = useContent();
  const inputRef = useRef(null);

  const photo = photos.find(p => p.section === "hero");

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await addPhoto("hero", file);
    e.target.value = "";
  };

  return (
    <div className={`${className} relative flex items-center justify-center overflow-hidden`}>
      {photo ? (
        <>
          <img src={photo.url} alt="Zostava" className="absolute inset-0 h-full w-full object-cover" />
          {isAdmin && (
            <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 bg-black/60 opacity-0 hover:opacity-100 transition-opacity">
              <button
                onClick={() => inputRef.current?.click()}
                className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition-colors"
              >
                <Upload size={13} />
                Zmeniť
              </button>
              <button
                onClick={() => deletePhoto(photo.id, photo.storage_path)}
                className="flex items-center gap-1.5 rounded-md bg-red-500/20 px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/30 transition-colors"
              >
                <Trash2 size={13} />
                Odstrániť
              </button>
            </div>
          )}
        </>
      ) : isAdmin ? (
        <button
          onClick={() => inputRef.current?.click()}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
        >
          <Upload size={24} />
          <span className="font-display text-xs uppercase tracking-[0.3em]">Nahrať foto</span>
        </button>
      ) : (
        <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground/50">
          Fotka zostavy
        </span>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
    </div>
  );
}
