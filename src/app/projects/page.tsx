import { load } from "outstatic/server";
import ContentGrid from "@/components/ContentGrid";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const { content, allPosts, allProjects } = await getData();

  return (
    <div className="animate-fade-in">
      <section className="mt-8 mb-16 md:mb-12">
        <div
          className="prose md:prose-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>

      {allProjects.length > 0 && (
        <ContentGrid items={allProjects} collection="projects" />
      )}
    </div>
  );
}

async function getData() {
  const db = await load();

  const page = await db
    .find({ collection: "pages", slug: "projects" }, ["content"])
    .first();

  const content = await markdownToHtml(page.content);

  const allPosts = await db
    .find({ collection: "posts" }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "tags",
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  const allProjects = await db
    .find({ collection: "projects" }, ["title", "slug", "coverImage"])
    .sort({ publishedAt: -1 })
    .toArray();

  return {
    content,
    allPosts,
    allProjects,
  };
}
