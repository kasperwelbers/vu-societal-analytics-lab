import { load } from "outstatic/server";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const { content } = await getData();
  return (
    <>
      <div className="animate-fade-in">
        <section className="relative mt-8 mb-16 md:mb-12">
          <div
            className="relative prose md:prose-xl"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </div>
    </>
  );
}

async function getData() {
  const db = await load();

  const page = await db
    .find({ collection: "pages", slug: "contact" }, ["content"])
    .first();

  const content = await markdownToHtml(page.content);

  return { content };
}
