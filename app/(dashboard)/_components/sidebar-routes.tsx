"use client";

import { Layout, User2Icon, Users } from "lucide-react";
import SidebarItem from "./sidebar-item";

const routes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Users,
    label: "users",
    href: "/dashboard/users",
  },
  {
    icon: User2Icon,
    label: "Members",
    href: "/dashboard/members",
  },
];
const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
