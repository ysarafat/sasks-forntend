import * as z from "zod";

export const formSchema = z.object({
  userId: z.string().min(8, { message: "User ID is required" }),
  password: z.string().min(8, { message: "Password length min 8" }),
});
