import React, { useEffect, useState } from "react";
import { Button, Dropdown, Table } from "react-bootstrap";
import { DATA } from "./data-page";

interface IPerformancePageProps {}

const PerformancePage: React.FunctionComponent<IPerformancePageProps> = (
  props
) => {
  const [displayState, setDisplayState] = useState("List");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length < 1) {
      const dataJSON = localStorage.getItem(DATA);
      const parsedData = dataJSON ? JSON.parse(dataJSON) : [];
      setData(parsedData);
    }
  }, [data]);

  const clearCache = () => {
    localStorage.setItem(DATA, "");
    setData([]);
  };

  const handleSelect = (e: string | null) => {
    if (!e) {
      throw new Error("displayState selection is not a string!");
    }
    setDisplayState(e);
  };

  return (
    <div className="home-page-content">
      <div className="data-page-header">
        <h3>Performance</h3>
        <div>Display:</div>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle id="dropdown-basic">{displayState}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="List">List</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Button variant="outline-danger" onClick={() => clearCache()}>
        Clear Cache
      </Button>
      <div className="data-display">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Display Type</th>
              <th>Render Time (ms)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry: any, i: number) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{new Date(entry.time).toLocaleString()}</td>
                <td>{entry.displayType}</td>
                <td>{+entry.duration.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PerformancePage;
