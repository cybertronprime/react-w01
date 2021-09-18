import React, { useState, useEffect } from "react";

const HooksPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("dogs");
  const [input, setInput] = useState("");

  const fetchUnsplashData = async () => {
    try {
      // const url =
      //   "https://api.unsplash.com/photos/?client_id=jOq9gVsxAQIL4RqrTEBaT00HoMViKqm8zVookGmgjAQ";
      const url = `https://api.unsplash.com/search/photos?client_id=jOq9gVsxAQIL4RqrTEBaT00HoMViKqm8zVookGmgjAQ&query=${searchName}`;
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data.results);
      console.log(data.results);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUnsplashData();
  }, [searchName]);


  const searchNew = (e) => {
    e.preventDefault();
    if (input) {
      setSearchName(input);
      console.log(searchName)
    }
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="img-container">
      <div className="form-section">
        <form>
          <div className="input_element">
            <label>Search Query</label>
            <input
              type="text"
              value={input}
              className="input-text"
              placeholder="Enter what you want to search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></input>
          </div>
          <button className="btn btn-dark" onClick={(e) => searchNew(e)}>
            Search
          </button>
        </form>
      </div>
      {photos.length > 0 &&
        photos.map((photo, index) => {
          return (
            <div key={index}>
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="resize-image"
              />
            </div>
          );
        })}
    </div>
  );
};

export default HooksPage;

JSON.stringify();
