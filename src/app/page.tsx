import { load } from "outstatic/server";
import markdownToHtml from "../lib/markdownToHtml";
import { Links } from "@/components/Navbar";
import { useRef } from "react";
import Background from "./background";

export default async function Index() {
  const { content, coverImage } = await getData();

  return (
    <div className="relative animate-fade-in">
      <Background>
        <div className="relative flex z-20 y mt-[clamp(9rem,27vw,30rem)]">
          <div className="flex max-w-[1200px] mx-auto px-4 md:px-8 ">
            <div
              className="flex-auto relative w-full max-w-2xl mx-auto lg:mx-0 prose lg:prose-xl mt-8 p-8 rounded prose-invert bg-[hsl(var(--secondary)/0.93)]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </Background>
    </div>
  );
}

async function getData() {
  const db = await load();

  const page = await db
    .find({ collection: "pages", slug: "home" }, [
      "content",
      "title",
      "coverImage",
    ])
    .first();

  const content = await markdownToHtml(page.content);

  return {
    content,
    coverImage: page.coverImage,
  };
}
