import { Article } from ".";

export default interface Comment {
  username: string,
  email: string,
  content: string,
  article: Article,
};
