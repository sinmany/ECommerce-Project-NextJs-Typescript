import type { Metadata } from "next";
import "@/app/globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { inter, suwannaphum, localCustomFont } from "./fonts";

export const metadata: Metadata = {
  title: "E-STORE",
  description: "E-Store is the website for selling many products!",
  openGraph: {
    title: "e-store",
    description: "Good",
    images:
      "https://lh3.googleusercontent.com/proxy/wiVVmBOkvrJXIhcPQCfEuW1hdjUTNIewkCGwasAprdVHCf4Tm5_EJ6Symc_RYNjNdTrMYl8JfKD8UjXhHrM11DoiGdishjsF-DNItcrwjSQhgMwHtLubwMMh8s1cLNB4iXqz3_cj6WtPYg",
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
        <header>
          <NavbarComponent />
        </header>
        <ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading />}> {children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
