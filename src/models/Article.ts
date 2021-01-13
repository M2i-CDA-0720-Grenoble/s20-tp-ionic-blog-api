import { Category } from ".";

export default interface Article {
  id: number,
  title: string,
  createdAt: Date,
  updatedAt: Date,
  content: string,
  cover: string,
  category: Category,
}
