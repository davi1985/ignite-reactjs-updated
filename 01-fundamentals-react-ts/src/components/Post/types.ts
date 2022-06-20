export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}
