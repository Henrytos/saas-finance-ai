import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
  description: "login page",
};

export default async function LoginPage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2 bg-background">
      {/* LEFT  */}
      <div className="px-8 py-12">
        <div className="h-full w-full items-center">
          <div className="w-full max-w-lg">
            <Image
              width={174}
              height={39}
              className="mb-8"
              alt="logo"
              src="/icon.svg"
            />

            <h1 className="text-2xl font-bold text-white">Bem-vindo</h1>
            <p className="mb-8 text-base font-light text-primary-foreground">
              A Finance AI é uma plataforma de gestão financeira que utiliza IA
              para monitorar suas movimentações, e oferecer insights
              personalizados, facilitando o controle do seu orçamento.
            </p>
            <Button variant="outline">
              <SignInButton>
                <Image
                  width={20}
                  height={20}
                  className="mr-2"
                  alt="logo"
                  src="/google-icon.png"
                />
                Entrar com Google
              </SignInButton>
            </Button>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="relative h-full">
        <Image
          fill
          layout="fill"
          objectFit="cover"
          className="object-cover"
          src="/login.png"
          alt="image of application after sing in"
        />
      </div>
    </div>
  );
}
