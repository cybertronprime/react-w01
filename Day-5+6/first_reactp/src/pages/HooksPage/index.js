import React, { useState, useEffect } from "react";

const HooksPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUnsplashData = async () => {
    try {
      // const url =
      //   "https://api.unsplash.com/photos/?client_id=jOq9gVsxAQIL4RqrTEBaT00HoMViKqm8zVookGmgjAQ";
      const url =
        "https://api.unsplash.com/search/photos?client_id=jOq9gVsxAQIL4RqrTEBaT00HoMViKqm8zVookGmgjAQ&query=cats";
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data.results);
      console.log(data.results)

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUnsplashData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="img-container">
      {photos.length > 0 &&
        photos.map((photo,index) => {
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
