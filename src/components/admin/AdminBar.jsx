import { useAdmin } from "@/context/AdminContext";
import { LogOut } from "lucide-react";

export default function AdminBar() {
  const { isAdmin, logout } = useAdmin();

  if (!isAdmin) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-amber-500 text-black text-sm flex items-center justify-between px-4 py-1.5">
      <span className="font-semibold">Admin mode — edits save automatically</span>
      <button
        onClick={logout}
        className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
      >
        <LogOut size={14} />
        Exit
      </button>
    </div>
  );
}
