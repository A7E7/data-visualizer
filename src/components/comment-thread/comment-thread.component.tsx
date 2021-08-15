import React from "react";
import { comment } from "../../data/sample-data";
import UserComment from "../user-comment/user-comment.component";
import "./comment-thread.styles.scss";

interface ICommentThreadProps {
  comments: comment[];
}

const CommentThread: React.FunctionComponent<ICommentThreadProps> = (props) => {
  return (
    <div className="comment-thread">
      <div className="comment-thread-primary">
        <UserComment
          name={props.comments[0].name}
          email={props.comments[0].email}
          body={props.comments[0].body}
        />
      </div>
      <div className="comment-thread-secondary">
        {props.comments.slice(1).map((comment, i) => (
          <UserComment
            name={comment.name}
            email={comment.email}
            body={comment.body}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentThread;
