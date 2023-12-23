"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Logout from "./logout";

const LoggedUser = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div className=" p-6 flex items-center gap-x-2 bg-white/10">
        <Image
          src={session?.user?.image!}
          width={64}
          height={64}
          alt="user
        "
          className="rounded-lg h-[68px] w-[68px]"
        />
        <div>
          <h3 className="text-white text-lg font-medium">
            {session?.user?.name}
          </h3>

          <p className="text-zinc-400 capitalize">
            Role:{" "}
            {session?.user?.role === "superAdmin"
              ? "Super Admin"
              : session?.user?.role}
          </p>
          <p className="text-zinc-400">Id: {session?.user?.userId}</p>
        </div>
      </div>
      <Logout />
    </div>
  );
};

export default LoggedUser;
