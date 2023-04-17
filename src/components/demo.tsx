import { Inter } from "next/font/google";
import logo from "../../../public/vox_logo.jpg";
import Image, { StaticImageData } from "next/image";

export interface DemoProps {
  title: string;
  audioSrc: string;
  tagline: string;
  imageImport: StaticImageData;

  sourceLink?: string;
}

const inter = Inter({ subsets: ["latin"] });

export function Demo({
  title,
  sourceLink,
  audioSrc,
  tagline,
  imageImport,
}: DemoProps) {
  return (
    <div
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-neutral-700"
      rel="noopener noreferrer"
    >
      <div className="flex flex-row items-center mb-3">
        <Image
          className="mr-3"
          alt={`${title}-logo`}
          width={24}
          src={imageImport}
        />
        <h2 className={`${inter.className} text-2xl font-semibold`}>{title}</h2>
      </div>
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
