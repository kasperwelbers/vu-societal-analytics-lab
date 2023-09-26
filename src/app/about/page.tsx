import { load } from "outstatic/server";
import markdownToHtml from "@/lib/markdownToHtml";
import PersonItem from "@/components/PersonItem";

export default async function Index() {
  const { content, people } = await getData();
  return (
    <div className="">
      <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row">
        <div
          className="flex-auto relative w-full max-w-2xl mx-auto lg:mx-0 prose md:prose-xl mt-4 lg:mt-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex ml-auto w-full lg:w-1/3 mt-4 lg:mt-8">
          <div className="prose-xl flex flex-col mx-auto items-center gap-8">
            <h2>The Societal Analytics Lab Team</h2>
            {people.map((person) => {
              return <PersonItem key={person.name} person={person} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const db = await load();

  const page = await db
    .find({ collection: "pages", slug: "about" }, ["content"])
    .first();

  const content = await markdownToHtml(page.content);

  const allPeople = await db
    .find({ collection: "people" }, ["title", "content", "coverImage"])
    .sort({ publishedAt: 1 })
    .toArray();

  const people = allPeople.map((person) => {
    return {
      name: person.title,
      avatar: person.coverImage || "",
      function: person.content,
    };
  });

  return { content, people };
}
