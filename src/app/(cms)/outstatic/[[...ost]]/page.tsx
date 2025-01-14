import "outstatic/outstatic.css";
import { Outstatic } from "outstatic";
import { OstClient } from "outstatic/client";

interface Params {
  ost: string[];
}

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const ostData = await Outstatic();
  return <OstClient ostData={ostData} params={params} />;
}
