import Zuma from "@/templates/Zuma";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col text-center p-24">
      <h1>THIS IS ZUMA BEAN</h1>
      <Zuma />
    </main>
  );
}
