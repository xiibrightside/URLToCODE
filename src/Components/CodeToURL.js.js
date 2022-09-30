/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Loading from "./Loading";

const Reverse = () => {
  const [code, setCode] = useState("");
  const [URL, setURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [link, setLink] = useState(false);

  const clearForm = () => {
    document.getElementById("url-form").reset();
    setURL("");
    setError("");
    setLoading(false);
  };

  const handleChange = (event) => {
    if (!event.target.value) {
      setURL("");
      setCode("");
      setError("");
      setLink("");
    } else {
      setCode(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!code) {
      setCode("");
      setError("you didn't Enter Anything");
    } else {
      const fetchURL = async () => {
        try {
          setLoading(true);
          const res = await fetch(`https://api.shrtco.de/v2/info?code=${code}`);
          const data = await res.json();
          setURL(data.result.url);
          console.log(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchURL();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="form-container flex flex-col justify-center items-center gap-5">
        <form id="url-form" onSubmit={handleSubmit}>
          <div className="input-bar flex flex-row">
            <input
              className="outline-none"
              onChange={handleChange}
              placeholder="Input CODE"
            ></input>
            <button className="flex justify-center items-center">
              Get URL
            </button>
          </div>
        </form>
        <div className="output-container flex flex-row">
          <div className="output-box flex justify-center items-center">
            {URL && (
              <a
                onMouseOver={() => setLink(true)}
                onMouseLeave={() => setLink(false)}
                href={URL}
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            )}
          </div>
          <button
            className="flex justify-center items-center"
            onClick={clearForm}
          >
            <i className="fa-xl fa-solid fa-rotate-right"></i>
          </button>
        </div>
      </div>
      <div className="loading-error flex flex-col items-end gap-5">
        {loading && <Loading />}
        {link && <p>{URL}</p>}
        {error && <div className="messages">Whoops, {error}</div>}
      </div>
    </div>
  );
};

export default Reverse;
