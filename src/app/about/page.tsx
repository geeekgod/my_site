"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main terminal with about command
    router.replace("/?cmd=about");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mx-auto mb-4"></div>
        <p>Redirecting to terminal...</p>
      </div>
    </div>
  );
}
