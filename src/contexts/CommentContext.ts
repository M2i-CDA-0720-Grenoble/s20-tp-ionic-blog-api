import { createContext } from "react";
import { Comment } from '../models';

interface CommentContextType {
  comments: Comment[];
  addComment: (newComment: Comment) => void,
}

const CommentContext = createContext<CommentContextType>({
  comments: [],
  addComment: () => {},
});

export default CommentContext;
