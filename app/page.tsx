import Image from "next/image";
import Portrait from "@/public/images/portrait.jpg"
import LinkedIn from "@/public/icons/linkedin.svg"
import Mastodon from "@/public/icons/mastodon.svg"
import Github from "@/public/icons/github.svg"
import EmailLink from "./components/EmailLink"

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
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
          </div>
        </div>
      </header>
      <main>
      </main>
    </>
  );
}
