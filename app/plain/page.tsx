import { auth } from "@clerk/nextjs/server";
import { NavBar } from "../_components/nav-bar";
import { redirect } from "next/navigation";

export default async function PlainPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  return (
    <div>
      <NavBar />
    </div>
  );
}
