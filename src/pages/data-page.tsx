import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import CommentThread from "../components/comment-thread/comment-thread.component";
import UserComment from "../components/user-comment/user-comment.component";
import { sampleData, comment } from "../data/sample-data";

import "./data-page.styles.scss";

interface IDataPageProps {}

type Threads = { [key: string]: comment[] };

const DataPage: React.FunctionComponent<IDataPageProps> = (props) => {
  const [displayState, setDisplayState] = useState("List");
  const [threads, setThreads] = useState<Threads>();
  const handleSelect = (e: any) => {
    setDisplayState(e);
  };

  useEffect(() => {
    if (!threads) {
      const tmpThreads: Threads = sampleData.reduce(
        (userComments: Threads, userComment) => {
          if (!userComments[userComment.postId])
            userComments[userComment.postId] = [];
          userComments[userComment.postId].push(userComment);
          return userComments;
        },
        {}
      );
      setThreads(tmpThreads);
    }
  }, [threads]);

  return (
    <div className="home-page-content">
      <div className="data-page-header">
        <h3>Welcome to the data page!</h3>
        <div>Display:</div>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle id="dropdown-basic">{displayState}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="List">List</Dropdown.Item>
            <Dropdown.Item eventKey="Thread">Threads</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {displayState === "List" ? (
        sampleData.map((comment) => (
          <UserComment
            key={comment.id}
            email={comment.email}
            name={comment.name}
            body={comment.body}
          />
        ))
      ) : (
        <div>
          {threads
            ? Object.keys(threads).map((key) => (
                <CommentThread comments={threads[key]} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default DataPage;
