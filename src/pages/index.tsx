import { getRedditData, getVergeData, getVoxData } from "@/utils/data";
import { Demo } from "./components/demo";
import { ApiResponse } from "@/utils/types";

interface HomeProps {
  voxData: ApiResponse;
  vergeData: ApiResponse;
  redditData: ApiResponse;
}

export async function getServerSideProps() {
  const [voxData, vergeData, redditData] = await Promise.all([
    getVoxData(),
    getVergeData(),
    getRedditData(),
  ]);

  return {
    props: {
      voxData,
      vergeData,
      redditData,
    },
  };
}

export default function Home({ voxData, vergeData, redditData }: HomeProps) {
  console.log(voxData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          2day Demo 📻
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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

      <div className="my-12 flex flex-col text-center place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:dark:from-transparent before:to-pink-700/10 after:from-red-900 after:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Create Engaging Content from RSS Feeds
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Transform Your Blog or Website Content into Professional Podcasts with
          Our Automated RSS Feed Tool. See examples below from Vox, The Verge
          and Reddit
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:ring-pink-900"
        >
          Learn more
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>

      <div className="mb-32 grid text-center gap-8 lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Demo
          audioSrc={voxData.data.podcastFileUrl}
          title="Vox"
          sourceLink={voxData.data.source.url}
          tagline="The top stories from around with world."
        />
        <Demo
          audioSrc={vergeData.data.podcastFileUrl}
          title="The Verge"
          sourceLink={vergeData.data.source.url}
          tagline="All the hottest tech news rights now."
        />
        <Demo
          audioSrc={redditData.data.podcastFileUrl}
          title="Reddit"
          sourceLink={redditData.data.source.url}
          tagline="The front page of the internet, dive into anything."
        />
      </div>
    </main>
  );
}
