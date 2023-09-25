import { load } from "outstatic/server";
import ContentGrid from "../components/ContentGrid";
import markdownToHtml from "../lib/markdownToHtml";

export default async function Index() {
  const { content, allProjects } = await getData();
  return (
    <div className="max-w-6xl mx-auto p-0 md:pt-16 md:pb-16 px-2 md:px-4">
      <div className="flex flex-col-reverse items-center md:flex-row">
        <div>
          <div
            className="relative w-full prose max-w-2xl lg:prose-xl font-semibold leading-9 z-10 p-4 rounded bg-background-transparent backdrop-blur-md text-black"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <img
          alt={"Logo"}
          src={"images/logo.png"}
          className="p-4 py-8 w-1/3 h-1/3"
        />
      </div>
      <div className="max-w-6xl mx-auto px-5 pt-10">
        {allProjects.length > 0 && (
          <ContentGrid
            title="Projects"
            items={allProjects}
            collection="projects"
          />
        )}
      </div>
    </div>
  );
}

async function getData() {
  const db = await load();

  const page = await db
    .find({ collection: "pages", slug: "home" }, ["content", "title"])
    .first();

  const content = await markdownToHtml(page.content);

  const allProjects = await db
    .find({ collection: "projects" }, ["title", "slug", "coverImage"])
    .sort({ publishedAt: -1 })
    .toArray();

  return {
    content,
    allProjects,
  };
}
