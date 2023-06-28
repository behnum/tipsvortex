import getRandomTip from "@/lib/getRandomTip";
import Tip from "./components/Tip";

export default async function Home() {
  const randomTip = await getRandomTip();

  return <Tip {...randomTip} />;
}
