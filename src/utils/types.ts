interface Source {
  id: string;
  url: string;
  createdAt: string;
  accountId: string;
}

interface Data {
  id: string;
  content: string;
  createdAt: string;
  accountId: string;
  sourceId: string;
  podcastFileUrl: string;
  source: Source;
}

export interface ApiResponse {
  data: Data;
}
