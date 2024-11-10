import Image from "next/image";
import Hero from "@/app/components/Hero";
import Blocks from "@/app/components/Blocks";

export default function Home() {
  return (
    <>
    <div className="bg-[#252B42] flex  justify-center items-center flex-col w-[1046px] h-[1028px] ml-[197px] top-[104px] pt-20 pb-20 gap-80]">
      <Hero />
      <br />
      <br />

      <Blocks />
    </div>
    </>
  );
}

