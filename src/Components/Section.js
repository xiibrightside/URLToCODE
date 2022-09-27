import React, { useState } from "react";
import URLToCode from "./URLToCode";
import CodeToURL from "./CodeToURL.js";

const Section = () => {
  const [section, setSection] = useState(true);

  return (
    <div className="section-container flex flex-col justify-center items-center">
      <div className="section-buttons flex flex-row">
        <button
          className={`${section ? `active` : `none`}`}
          onClick={() => setSection(true)}
        >
          URL to CODE
        </button>
        <button
          className={`${!section ? `active` : `none`}`}
          onClick={() => setSection(false)}
        >
          CODE to URL
        </button>
      </div>
      <div>{section ? <URLToCode /> : <CodeToURL />}</div>
    </div>
  );
};

export default Section;
