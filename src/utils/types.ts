interface Data {
  id: string;
  content: string;
  createdAt: string;
  accountId: string;
  sourceId: string;
  podcastFileUrl: string;
  source: {
    id: string;
    createdAt: string;
    accountId: string;
    sourceData: {
      id: string;
      url: string;
      type: string;
      createdAt: string;
      sourceId: string;
    }[];
  };
}
export interface ApiResponse {
  data: Data;
}
