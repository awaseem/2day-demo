import {
  getLinkExampleData,
  getRedditData,
  getVergeData,
  getVoxData,
} from "@/utils/data";
import { Demo } from "../components/demo";
import { ApiResponse } from "@/utils/types";

import voxLogo from "@/assets/vox_logo.jpg";
import vergeLogo from "@/assets/verge_logo.png";
import redditLogo from "@/assets/reddit_logo.png";
import { Links } from "@/components/links";

interface HomeProps {
  linkData: ApiResponse;
  voxData: ApiResponse;
  vergeData: ApiResponse;
  redditData: ApiResponse;
}

export async function getServerSideProps() {
  const [linkData, voxData, vergeData, redditData] = await Promise.all([
    getLinkExampleData(),
    getVoxData(),
    getVergeData(),
    getRedditData(),
  ]);

  return {
    props: {
      linkData,
      voxData,
      vergeData,
      redditData,
    },
  };
}

export default function Home({
  linkData,
  voxData,
  vergeData,
  redditData,
}: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          📻 2day Demo
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.ambitionsoftware.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Ambition Software 👋
          </a>
        </div>
      </div>

      <div className="my-12 flex flex-col text-center place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-pink-700/10 after:from-red-900 after:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1 className="mt-4 mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6x text-white">
          Press play on your writing
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
          Transform your writing into engaging AI-generated podcasts. Ditch the
          mics and sound-proof rooms, and tap into a new audience base without
          the added effort. 2day converts your blogs and articles into audio
          podcasts. See it in action. 👇
          <br />
        </p>
        <a
          href="https://github.com/awaseem/2day-api"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:ring-pink-900"
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Source code
        </a>
      </div>

      <div className="mb-8 flex flex-col text-center lg:text-left">
        <Links urls={linkData.data.source.sourceData.map(data => data.url)} />
        <div className="flex justify-center items-center mx-16 lg:my-10">
          <div className="text-7xl">👇</div>
        </div>
        <div className="flex justify-center">
          <Demo
            title="...And create a podcast 🎤"
            audioSrc={linkData.data.podcastFileUrl}
            tagline="Using the links you pass, 2day will summarize the stories and generate a podcast."
          />
        </div>
      </div>

      <div className="my-6 flex flex-col text-center place-items-center">
        <h2 className="mt-4 mb-8 text-xl font-extrabold leading-none tracking-tight md:text-xl lg:text-3xl text-white">
          Check out more examples with RSS
        </h2>
      </div>

      <div className="mb-32 grid text-center gap-8 lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Demo
          audioSrc={voxData.data.podcastFileUrl}
          title="Vox"
          sourceLink={voxData.data.source.sourceData.at(0)?.url}
          tagline="The top stories from around with world."
          imageImport={voxLogo}
        />
        <Demo
          audioSrc={vergeData.data.podcastFileUrl}
          title="The Verge"
          sourceLink={vergeData.data.source.sourceData.at(0)?.url}
          tagline="All the hottest tech news rights now."
          imageImport={vergeLogo}
        />
        <Demo
          audioSrc={redditData.data.podcastFileUrl}
          title="Reddit"
          sourceLink={redditData.data.source.sourceData.at(0)?.url}
          tagline="The front page of the internet, dive into anything."
          imageImport={redditLogo}
        />
      </div>
    </main>
  );
}
