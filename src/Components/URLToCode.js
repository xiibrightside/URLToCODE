import React, { useState } from "react";
import Loading from "./Loading";

const Shortner = () => {
  const [url, setUrl] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearForm = () => {
    document.getElementById("url-form").reset();
    setError("");
    setShortURL("");
    setLoading(false);
  };

  const handleChange = (event) => {
    if (!event.target.value) {
      setUrl("");
      setShortURL("");
      setError("");
    } else {
      setUrl(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!url) {
      setUrl("");
      setError("You Didn't Enter Anything");
    } else {
      const fetchURL = async () => {
        try {
          setLoading(true);
          const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${url}`
          );
          const data = await res.json();
          setShortURL(data.result.code);
          setLoading(false);
          setError(false);
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
              placeholder="Input URL"
            ></input>
            <button className="flex justify-center items-center">
              Get CODE
            </button>
          </div>
        </form>
        <div className="output-container flex flex-row w-full justify-between">
          <div className="output-box flex justify-center items-center">
            {shortURL}
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
        {error && <div className="messages">Whoops, {error}</div>}
      </div>
    </div>
  );
};

export default Shortner;
// https://stackoverflow.com/questions/55682763/how-do-i-change-an-active-buttons-appearance-to-look-like-it-has-an-arrow-point
