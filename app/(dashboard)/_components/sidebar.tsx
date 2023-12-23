import LoggedUser from "@/components/loggedUser";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-full  flex flex-col overflow-y-auto bg-[#111827]">
      <div className="p-6 ">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
      <div className="h-full flex-1 overflow-y-auto"></div>
      <div className="">
        <LoggedUser />
      </div>
    </div>
  );
};

export default Sidebar;
