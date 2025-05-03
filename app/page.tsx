import Image from "next/image";
import Portrait from "@/public/images/portrait.jpg"
import LinkedIn from "@/public/icons/linkedin.svg"
import Mastodon from "@/public/icons/mastodon.svg"
import Github from "@/public/icons/github.svg"
import EmailLink from "./components/EmailLink"
import ResumeLink from "./components/ResumeLink";
import Tenacity from "@/public/images/tenacity.png"
import LifelongLearner from "@/public/images/lifelongLearner.png"
import Mature from "@/public/images/mature.png"
import GoalOriented from "@/public/images/goalOriented.png"
import Htlm5 from "@/public/icons/html5.svg"
import Css3 from "@/public/icons/css3.svg"
import Js from "@/public/icons/js.svg"
import React from "@/public/icons/react.svg"
import TypeScript from "@/public/icons/typescript.svg"
import Next from "@/public/icons/next.svg"

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 mx-auto max-w-xl">
        <Image 
          className="rounded-full"
          src={Portrait} 
          width={300} 
          height={300} 
          alt="portrait of a middle aged man with a beard" 
        />
        <div className="flex flex-col justify-center my-auto">
          <h1 className="text-4xl">Hello, my name is <br/><span className="highlight-text">Brock Penner</span>.</h1>
          <h1 className="text-4xl">I am a <br/><span className="highlight-text">junior developer</span>.</h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <p>Find me on </p>
            <a 
              href="https://www.linkedin.com/in/brock-penner-97322062"
              target="_blank"
              rel="noopener norefferer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image 
                src={LinkedIn} 
                alt="LinkedIn icon" 
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://techhub.social/@brockpenner"
              target="_blank"
              rel="noopener norefferer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image 
                src={Mastodon} 
                alt="Mastodon icon" 
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://github.com/orbithammer"
              target="_blank"
              rel="noopener norefferer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image 
                src={Github} 
                alt="Github icon" 
                width={24}
                height={24}
              />
            </a>
            </div>
            <div className="flex justify-center mt-4">
              <EmailLink />
              <ResumeLink />
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col items-center">
          <h2 className="text-2xl">Why hire me?</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-4">
            <div className="flex items-center flex-col max-w-lg mx-2">
              <Image
                src={Tenacity}
                alt="a dog chewing a bone"
                width={192}
                height={192}
                className="rounded-full border-2 border-[#722626] border-solid"
              />
              <h3 className="mt-2 text-xl">Tenacious</h3>
              <p className="my-2">When I sink my teeth into a coding challenge, I don't stop until it's solved.</p>
            </div>
            <div className="flex items-center flex-col max-w-lg mx-2">
              <Image
                src={LifelongLearner}
                alt="a person reading a book"
                width={192}
                height={192}
                className="rounded-full border-2 border-[#722626] border-solid"
              />
              <h3 className="mt-2 text-xl">Life-long Learner</h3>
              <p className="my-2">I am zealous about the continuous cycle of skill development. I embrace new technologies and design patterns.</p>
            </div>
            <div className="flex items-center flex-col max-w-lg mx-2">
              <Image
                src={Mature}
                alt="a man with a beard wearing a suit"
                width={192}
                height={192}
                className="rounded-full border-2 border-[#722626] border-solid"
              />
              <h3 className="mt-2 text-xl">Mature</h3>
              <p className="my-2">Responsible and reliable, I take on tasks with professionalism. I am experienced with adhering to uncertain schedules.</p>
            </div>
            <div className="flex items-center flex-col max-w-lg mx-2">
              <Image
                src={GoalOriented}
                alt="an arrow dead center in a target"
                width={192}
                height={192}
                className="rounded-full border-2 border-[#722626] border-solid"
              />
              <h3 className="mt-2 text-xl">Goal Oriented</h3>
              <p className="my-2">Focused on achieving results, I break complex tasks down into their essential components to deliver the finished product.</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-2xl mt-4">Technologies</h2>
          <div className="flex mt-2 flex-col md:flex-row items-center">
            <div className="flex items-center mb-2">
              <h4 className="flex items-center mr-2">
                <Image 
                  src={Htlm5} 
                  alt="HTML5 icon"
                  width={24}
                  height={24}
                  className="mr-1"
                />
                HTML
              </h4>
              <h4 className="flex items-center mr-2">
                <Image 
                  src={Css3} 
                  alt="CSS3 icon"
                  width={24}
                  height={24}
                  className="mr-1"
                />
                CSS
              </h4>
              <h4 className="flex items-center mr-2">
                <Image 
                  src={Js} 
                  alt="JavaScript icon"
                  width={24}
                  height={24}
                  className="mr-1"
                />
                JavaScript
              </h4>
            </div>
            <div className="flex items-center mb-2">
              <h4 className="flex items-center mr-2">
                <Image 
                  src={React} 
                  alt="React icon"
                  width={24}
                  height={24}
                  className="mr-1"
                />
                React
              </h4>
              <h4 className="flex items-center mr-2">
                <Image 
                  src={TypeScript} 
                  alt="TypeScript icon"
                  width={24}
                  height={24}
                  className="mr-1"
                />
                TypeScript
              </h4>
              <Image 
                src={Next} 
                alt="Next.JS icon"
                width={96}
                height={96}
                className="mr-1"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
