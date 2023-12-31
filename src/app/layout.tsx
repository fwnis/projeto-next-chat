import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import UserStorage from "./UserContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Next Chat",
  description: "Next way to chat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className=" bg-black flex justify-center">
        <main className="bg-black sm:w-auto sm:min-w-[30rem] w-full sm:h-[48rem] h-screen text-white p-5 sm:p-10 sm:m-20 sm:rounded-lg rounded-none sm:border sm:border-zinc-900 overflow-hidden">
          <UserStorage>{children}</UserStorage>
        </main>
      </body>
    </html>
  );
}
