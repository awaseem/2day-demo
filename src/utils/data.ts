import { ApiResponse } from "./types";

const VOX_SOURCE_ID = "5e52e865-dbb9-48eb-9f15-964b41697b7a";
const VERGE_SOURCE_ID = "09809699-cd4b-4cea-b839-f6af183ec5c0";
const REDDIT_SOURCE_ID = "0884334e-01ef-45bd-857f-88fb4617d17a";

function getScripts(sourceId: string) {
  return async () => {
    const url = process.env.TWODAY_SOURCE_API_URL + sourceId;

    const data = await fetch(url, {
      headers: {
        "x-account-id": process.env.ACCOUNT_ID ?? "",
        "x-account-api-key": process.env.ACCOUNT_API_KEY ?? "",
      },
    });

    const apiResponse = (await data.json()) as ApiResponse;
    return apiResponse;
  };
}

export const getVoxData = getScripts(VOX_SOURCE_ID);
export const getVergeData = getScripts(VERGE_SOURCE_ID);
export const getRedditData = getScripts(REDDIT_SOURCE_ID);
