"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <div>
      <Button variant={"logout"} onClick={() => signOut()}>
        Sign-out
      </Button>
    </div>
  );
};

export default Logout;
