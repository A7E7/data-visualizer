import React, { useEffect, useState, Profiler } from "react";
import { Dropdown, Button } from "react-bootstrap";
import CommentThread from "../components/comment-thread/comment-thread.component";
import UserComment from "../components/user-comment/user-comment.component";
import { sampleData, comment } from "../data/sample-data";

import "./data-page.styles.scss";

export const DATA = "data";

interface IDataPageProps {}

type Threads = { [key: string]: comment[] };

const DataPage: React.FunctionComponent<IDataPageProps> = (props) => {
  const [displayState, setDisplayState] = useState("List");
  const [threads, setThreads] = useState<Threads>();
  const [bShouldRenderData, setShouldRenderData] = useState(false);

  const handleSelect = (e: string | null) => {
    if (!e) {
      throw new Error("displayState selection is not a string!");
    }
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

  const onRenderCallback = (
    id: string, // the "id" prop of the Profiler tree that has just committed
    phase: string, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: number, // time spent rendering the committed update
    baseDuration: number, // estimated time to render the entire subtree without memoization
    startTime: number, // when React began rendering this update
    commitTime: number, // when React committed this update
    interactions: any // the Set of interactions belonging to this update
  ) => {
    const newEntry = {
      time: +new Date(),
      displayType: id,
      duration: actualDuration,
    };
    localStorage[DATA] = localStorage[DATA]
      ? JSON.stringify([...JSON.parse(localStorage[DATA]), newEntry])
      : JSON.stringify([newEntry]);
  };

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
      {bShouldRenderData ? (
        <div>
          <Button
            variant="outline-danger"
            onClick={() => setShouldRenderData(false)}
          >
            Reset
          </Button>
          <div className="data-display">
            {displayState === "List" ? (
              <Profiler id="List" onRender={onRenderCallback}>
                {sampleData.map((comment) => (
                  <UserComment
                    key={comment.id}
                    email={comment.email}
                    name={comment.name}
                    body={comment.body}
                  />
                ))}
              </Profiler>
            ) : (
              <div>
                {threads ? (
                  <Profiler id="Threads" onRender={onRenderCallback}>
                    {Object.keys(threads).map((key) => (
                      <CommentThread key={key} comments={threads[key]} />
                    ))}
                  </Profiler>
                ) : null}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Button
          variant="outline-primary"
          onClick={() => setShouldRenderData(true)}
        >
          Render Data
        </Button>
      )}
    </div>
  );
};

export default DataPage;
