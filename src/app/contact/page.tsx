import { Metadata } from "next";
import MainContact from "../../components/contact/main";

export const metadata: Metadata = {
  title: "Contact | Rishabh Singh",
  description: "Contact Rishabh Singh. Get in touch with me!",
};

export default function Contact() {
  return <MainContact />;
}
