import React from "react";
import Doclist from "./docs.json";

const Docs = () => {
  return (
    <div>
      {Doclist.map((postDetail, index) => {
        return (
          <div className="docs-container flex flex-col gap-5" key={index}>
            <div className="docs">
              <h1>{postDetail.heading}</h1>
              <p>{postDetail.description}</p>
            </div>
            <div className="divider mb-5"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Docs;
