import markdownToHtml from "@/lib/markdownToHtml";
import { getDocumentSlugs, load } from "outstatic/server";
import DateFormatter from "@/components/DateFormatter";
import Image from "next/image";
import ContentGrid from "@/components/ContentGrid";
import { OstDocument } from "outstatic";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

type Service = {
  tags: { value: string; label: string }[];
} & OstDocument;

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;
}
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const { service } = await getData(params);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: "article",
      url: absoluteUrl(`/services/${service.slug}`),
      images: [
        {
          url: absoluteUrl(service?.coverImage || "/images/og-image.png"),
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: absoluteUrl(service?.coverImage || "/images/og-image.png"),
    },
  };
}

export default async function ServicePage(props: Props) {
  const params = await props.params;
  const { service, moreServices, content } = await getData(params);

  return (
    <div className="animate-fade-in  max-w-[1200px] mx-auto px-4 md:px-8">
      <article className="mb-8 mt-18">
        <div className="grid md:grid-cols-[30%,1fr] gap-8">
          <div className="relative flex justify-center mb-2 md:mb-4 sm:mx-0 ">
            {service.coverImage ? (
              <img
                alt={service.title}
                src={service.coverImage}
                className="w-full md:w-full object-contain"
              />
            ) : null}
          </div>
          <div>
            <h1 className="text-primary text-2xl font-bold md:text-4xl mb-2">
              {service.title}
            </h1>
            <div className="  md:mb-8 text-slate-600">
              <DateFormatter dateString={service.publishedAt} />{" "}
              {service?.author?.name ? `door ${service?.author?.name}` : null}.
            </div>
            {/* <div className="inline-block p-4 border mb-8 font-semibold text-lg rounded shadow">
              {service.description}
            </div> */}
            <div className="max-w-2xl  pt-6">
              <div
                className="prose lg:prose-xl"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </article>
      <div className="border-t border-secondary pt-3 mb-16 mt-32">
        <div className="mt-9">
          {moreServices.length > 0 && (
            <ContentGrid
              title="Other Services"
              items={moreServices}
              collection="services"
            />
          )}
        </div>
      </div>
    </div>
  );
}

async function getData(params: Params) {
  const db = await load();
  const service = await db
    .find<Service>({ collection: "services", slug: params.slug }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
    ])
    .first();

  const content = await markdownToHtml(service.content || "");

  const moreServices = await db
    .find({ collection: "services", slug: { $ne: params.slug } }, [
      "title",
      "slug",
      "coverImage",
    ])
    .toArray();

  return {
    service,
    content,
    moreServices,
  };
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs("projects");
  return posts.map((slug) => ({ slug }));
}
