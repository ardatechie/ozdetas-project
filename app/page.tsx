import HomeClient from "@/components/HomeClient";
import { stones } from "../data/stones";

export default function Home() {
  return <HomeClient stones={stones} />;
}