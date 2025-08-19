"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rishabh Singh",
  description: "Contact Rishabh Singh. Get in touch with me!",
};

const Contact = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main terminal with contact command
    router.replace("/?cmd=contact");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mx-auto mb-4"></div>
        <p>Redirecting to terminal...</p>
      </div>
    </div>
  );
};

export default Contact;
