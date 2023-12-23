"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "./constants";

const SignInPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        userId: values.userId,
        password: values.password,
        redirect: redirect ? true : false,
        callbackUrl: "/dashboard",
      });
      console.log(res);
      if (!res?.ok && res?.status === 401) {
        setRedirect(true);
        setError("Something went wrong!");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="h-full flex justify-center items-center px-6 ">
      <div className="md:w-1/4 w-full mx-auto border-t-8 border-black p-6 shadow-md rounded-lg">
        {error && (
          <div className="bg-red-500/10 w-full mb-4 text-center p-1 rounded border border-red-500/20">
            <span className="text-base  text-red-500">{error}</span>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="User ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      className="mt-4"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {loading ? (
              <Button
                className="mt-4 w-full"
                variant="default"
                type="submit"
                disabled={loading}
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Authenticating...
              </Button>
            ) : (
              <Button className="mt-4 w-full" variant="default" type="submit">
                Sign In
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
