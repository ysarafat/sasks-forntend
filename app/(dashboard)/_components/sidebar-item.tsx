"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}
const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/dashboard" && href === "/dashboard") || pathname === href;

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-zinc-300 text-sm font-[500] pl-6 transition-all hover:text-white hover:bg-sky-200/10",
        isActive &&
          "text-white bg-white/20 hover:bg-sky-200/10 hover:text-white"
      )}
    >
      <div className=" flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-zinc-300", isActive && "text-white")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-400 h-full transition-all",
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};

export default SidebarItem;
