import React from "react";
import Doclist from "./docs.json";

const Docs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="divider w-5/12 h-0.5 mb-5"></div>
      {Doclist.map((postDetail, index) => {
        return (
          <div
            className="docs-container w-full flex flex-col justify-center items-center gap-5"
            key={index}
          >
            <div className="docs w-5/12">
              <h1>{postDetail.heading}</h1>
              <p>{postDetail.description}</p>
            </div>
            <div className="divider w-5/12 h-0.5 mb-5"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Docs;
