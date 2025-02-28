import type { MetaFunction } from "@remix-run/node";
import { Links, Meta } from "@remix-run/react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col gap-y-[32px]">
        <div>
          <h1 className="text-black font-[500] text-[24px] leading-[31.2px]">
            We have put together a swing improvement solution to help you{" "}
            <span className="text-[#5773FF]">break 80</span>
          </h1>
        </div>
        <div className="">
          <h2 className="text-[20px] text-black">Pack includes:</h2>
          <hr className="border-t-1 border-[#00000012] mt-4 mb-4"></hr>
          <ul className="border-l-4 border-[#5773FF] text-black font-medium text-[20px] leading-[26px] tracking-[0px] h-[162px] flex flex-col justify-between">
            <li className="pl-2">Swing Analyzer - HackMotion Core</li>
            <li className="pl-2">Drills by coach Tyler Ferrell</li>
            <li className="pl-2">Game improvement plan by HackMotion</li>
          </ul>
          <button className="text-[14px] leading-[18px] mt-8 mb-4 w-[124px] h-[38px] bg-[#5773FF] rounded-full">
            <div className="flex justify-evenly">
              <p className="font-medium ">Start Now</p>
              <img src="icons/arrow_forward.svg" alt="svgArrow"></img>
            </div>
          </button>
          <div className="flex flex-col mt-4 mb-4 gap-4">
            <img src="/img/Improvement Graph.png" alt="improvementGraph"/>
            <img src="/img/Improvement Progress bar.png" alt="improvementGraph" />
            <img src="/img/Frame 4151178.png" alt="improvementGraph" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#5773FF] font-medium text-[32px] leading-[41.6px] tracking-[0px]">The best solution for you: Impact Training Program</h1>
          <hr className="border-t-1 border-[#00000012] mt-4 mb-4"></hr>
          <img src="/img/Frame 4151388.png" alt="swingStance" />
        </div>
      </div>
    </Layout>
  );
}
