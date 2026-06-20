import EditableField from "./EditableField";
import { useContent } from "@/context/ContentContext";

export default function EditableText({ contentKey, ...props }) {
  const { content, updateContent } = useContent();
  return (
    <EditableField
      value={content[contentKey] ?? ""}
      onSave={(val) => updateContent(contentKey, val)}
      {...props}
    />
  );
}
