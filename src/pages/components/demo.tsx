import { Inter } from "next/font/google";

export interface DemoProps {
  title: string;
  sourceLink: string;
  audioSrc: string;
  tagline: string;
}

const inter = Inter({ subsets: ["latin"] });

export function Demo({ title, sourceLink, audioSrc, tagline }: DemoProps) {
  return (
    <div
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-neutral-700"
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        {title}
      </h2>
      <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
        {tagline}{" "}
        <a className="underline" href={sourceLink}>
          source
        </a>
      </p>

      <audio className="w-full my-6" controls>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
