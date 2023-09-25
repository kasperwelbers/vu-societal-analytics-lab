import { load } from "outstatic/server";
import markdownToHtml from "../lib/markdownToHtml";
import { Links } from "@/components/Navbar";

export default async function Index() {
  const { content, coverImage } = await getData();

  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row">
        <div
          className="flex-auto relative w-full max-w-2xl mx-auto lg:mx-0 prose md:prose-xl mt-8 lg:mt-24"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex ml-auto w-full lg:w-1/3">
          <div className="flex lg:flex-col mx-auto">
            <img alt={"Logo"} src={coverImage} className="p-4 py-8" />
            <ul className="flex flex-col mx-auto justify-center prose md:prose-xl lg:prose-2xl">
              <Links />
            </ul>
          </div>
        </div>
      </div>
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
