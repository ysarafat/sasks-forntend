import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const UserPage = async () => {
  const session = await getServerSession(authOptions);

  const res = await fetch(`${process.env.SERVER_BASE_URL!}/users`, {
    method: "GET",
    headers: {
      authorization: session?.accessTokens?.accessToken!,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  // console.log(data);
  return (
    <div>
      {data?.data?.map((user: any) => (
        <div key={user?.userId}>
          name: {user?.name?.firstName}
          <p>email: {user?.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
