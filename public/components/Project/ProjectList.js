import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projectList }) => {
  return (
    <div>
      <h1>Produkter</h1>

      <div
        className="main-card-container"
        style={{ display: "flex", gap: "20px" }}
      >
        {projectList.map((item) => (
          <Link key={item.id} to={`/project/${item.id}`}>
            <div
              className="card-container"
              style={{ border: "1px solid black", padding: "20px" }}
            >
              {/*<img className="images" />*/}
            </div>
            <div className="card-container">
              <h2>{item.name}</h2>
              <p>
                a line in section 1.10.32. The standard chunk of Lorem Ipsum
                used since the 1500s is reproduced below for those interested.
                Sections
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
