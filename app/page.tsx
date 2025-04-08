"use client";
import { useRouter } from "next/navigation";

// const session = null;
const session = "some text";

export default function Home() {
  const router = useRouter();

  if (!session) {
    throw new Error("Auth in required to access this resource!");
  }
  return (
    <div className="h-screen grid place-content-center text-2xl">home page</div>
  );
}
