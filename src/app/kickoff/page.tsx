import { load } from "outstatic/server";
import markdownToHtml from "@/lib/markdownToHtml";
import PersonItem from "@/components/PersonItem";

const markdown = `
# Join our Kick-off event!

We are excited to announce the Kick-off meeting for the Societal Analytics Lab. 
The meeting will take place on **November 9th at 4pm**, at the **[building], [room]**.

## Why you should join

You already found this website, and it doesn't even serve food and drinks! 
At the kick-off meeting we will tell you more about **what this lab can offer you**, 
while making sure you **have a good time**. 
We also want to hear from you **what you would like to see in the lab**, and how we can help you.
Really, everyone want you to join, including you.

## Who is this lab for?

The lab is for everyone interested in applying computational techniques to study societal issues.
More specifically, we have two primary target groups:

* Researchers that are **not yet familiar or starting out with computational techniques**, but would like to learn more about how they could be used in their research. 
**The societal analystics lab will provide guidance, training and infrastructure**, so that you can chart new territory in your field, and write competitive grant proposals. 
* The tech-savy, **computational masterminds that know what they want to do**, but lack the necessary infrastructure. 
We aim to **facilitate tools and resources**, and would love to hear how you would like to see us spend money.   
`;

export default async function Index() {
  const { content, people } = await getData();
  return (
    <div className="animate-fade-in flex flex-col lg:flex-row max-w-[1200px] mx-auto px-4 md:px-8">
      <div
        className="flex-auto relative w-full max-w-2xl mx-auto lg:mx-0 prose md:prose-xl mt-4 lg:mt-8 overflow-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="relative flex px-4 ml-auto w-full lg:w-1/3 mt-12 lg:mt-8">
        <div className="flex flex-col mx-auto items-center gap-8 flex-auto">
          <h2 className="text-center text-2xl font-bold">
            The Societal Analytics Lab Team
          </h2>
          {people.map((person) => {
            return <PersonItem key={person.name} person={person} />;
          })}
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const db = await load();

  const content = await markdownToHtml(markdown);

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
