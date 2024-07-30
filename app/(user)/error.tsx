"use client";

import { Button } from "flowbite-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="h-screen grid place-content-center text-6xl">
      <h2>Something went wrong!</h2>
      <Button
        className="my-4 p-4 rounded-sm bg-red-600 text-white font-medium"
        onClick={reset}
      >
        Try again
      </Button>
    </main>
  );
}
