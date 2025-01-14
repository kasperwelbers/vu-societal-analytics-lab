import { load } from "outstatic/server";
import ContentGrid from "@/components/ContentGrid";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const { content, allPosts, allServices } = await getData();

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-4 md:px-8">
      <section className="mt-8 mb-16 md:mb-12">
        <div
          className="prose md:prose-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>

      {allServices.length > 0 && (
        <ContentGrid items={allServices} collection="services" />
      )}
    </div>
  );
}

async function getData() {
  const db = await load();

  const page = await db
    .find({ collection: "pages", slug: "services" }, ["content"])
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

  const allServices = await db
    .find({ collection: "services" }, ["title", "slug", "coverImage"])
    .sort({ publishedAt: -1 })
    .toArray();

  return {
    content,
    allPosts,
    allServices,
  };
}
