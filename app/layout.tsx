import type { Metadata } from "next";
import "@/app/globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./(user)/loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./(user)/error";
import { inter, suwannaphum, localCustomFont } from "./(user)/fonts";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "E-Template",
  description: "A good website for user to buy any product",
  openGraph: {
    title: "E-Template",
    description: "A good website for user to buy any product",
    images: [
      {
        url: "https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
        width: 1200,
        height: 630,
        alt: "E-Commerce Preview Image",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable} "h-screen flex flex-col bg-gray-200"`}
      >
        <ThemeProvider>
          <header>
            <NavbarComponent />
          </header>
          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<Loading />}> {children}</Suspense>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
