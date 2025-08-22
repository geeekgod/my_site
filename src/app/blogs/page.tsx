import { Metadata } from "next";
import MainBlogs from "../../components/blogs/main";

export const metadata: Metadata = {
  title: "Blogs | Rishabh Singh",
  description: "Blogs by Rishabh Singh. Read my blogs on various topics!",
};

export default function Blogs() {
  return <MainBlogs />;
}
