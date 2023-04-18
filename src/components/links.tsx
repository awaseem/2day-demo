import React from "react";
import { inter } from "./fonts";

export interface LinksProps {
  urls: string[];
}

export function Links({ urls }: LinksProps) {
  return (
    <div className="px-5 py-4" rel="noopener noreferrer">
      <div className="flex flex-row items-center mb-3">
        <h2 className={`${inter.className} text-2xl font-semibold`}>
          🔗 Take these links...
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        {urls.map(url => (
          <div
            key={url}
            className="${inter.className} max-w-[30ch] m-4 lg:mx-4"
          >
            <div className="w-full rounded-md bg-gradient-to-r from-pink-500 via-pink-800 to-blue-700 p-1">
              <div
                className={`${inter.className} h-full w-full text-sm items-center truncate bg-black back p-4 break-words text-ellipsis`}
              >
                <a className="underline" href={url}>
                  {url}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
