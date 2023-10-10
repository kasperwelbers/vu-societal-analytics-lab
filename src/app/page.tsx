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
        <div className="relative flex z-20 mt-[clamp(7rem,24vw,12rem)]  lg:-mt-8">
          <div className="flex lg:w-full max-w-[1500px] mx-auto lg:ml-auto  px-4 md:px-8 ">
            <div
              className="flex-auto relative w-full max-w-2xl prose mt-8 p-8 rounded prose-invert bg-[hsl(var(--secondary)/0.93)] lg:bg-primary lg:border-4 border-primary"
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
