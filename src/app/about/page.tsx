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

  const people = [
    {
      name: "Wouter van Atteveldt",
      avatar:
        "https://research.vu.nl/files-asset/22705903/Dr._Wouter_van_Atteveldt_tcm250_36346.jpg?w=160&f=webp",
      title: "Professor",
      function: "Lab director",
    },
    {
      name: "Kasper Welbers",
      avatar:
        "https://avatars.githubusercontent.com/u/6179240?s=400&u=bc62bb664986df4c700fdc68fc3539ca0893a0f8&v=4",
      title: "Assistant Professor",
      function: "Lab co-director",
    },
  ];

  return { content, people };
}
