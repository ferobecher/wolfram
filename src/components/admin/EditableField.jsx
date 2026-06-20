import { useRef, useEffect } from "react";
import { useAdmin } from "@/context/AdminContext";

export default function EditableField({ value, onSave, as: Tag = "span", className, multiline = false }) {
  const { isAdmin } = useAdmin();
  const ref = useRef(null);
  const editingRef = useRef(false);

  useEffect(() => {
    if (ref.current && !editingRef.current) {
      ref.current.innerText = value ?? "";
    }
  }, [value]);

  if (!isAdmin) return <Tag className={className}>{value}</Tag>;

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onFocus={() => { editingRef.current = true; }}
      onBlur={async (e) => {
        editingRef.current = false;
        const newVal = e.currentTarget.innerText.trim();
        if (newVal !== value) await onSave(newVal);
      }}
      onKeyDown={(e) => {
        if (!multiline && e.key === "Enter") { e.preventDefault(); e.currentTarget.blur(); }
        if (e.key === "Escape") {
          if (ref.current) ref.current.innerText = value ?? "";
          e.currentTarget.blur();
        }
      }}
      className={`${className} outline-none cursor-text hover:ring-1 hover:ring-primary/40 hover:rounded-sm focus:ring-1 focus:ring-primary/60 focus:rounded-sm transition-shadow`}
    />
  );
}
