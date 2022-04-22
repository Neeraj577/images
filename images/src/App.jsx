import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { ACCESS_KEY } from "./config/key";
import { FaBeer } from "react-icons/fa";
import "./image.css";

function App() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=30`
      )
      .then((response) => {
        setImageList(response.data);
      });
  }, []);

  // const searchImage = (query) => {
  //   const filteredImageList = imageList.filter((image) => {
  //     image.user.name = image.user.name === image.user.name;

  //     return image.user.name.includes(query);
  //   });
  //   setImageList(filteredImageList);
  // };
  return (
    <>
      <div style={{ background: "linear-gradient(#008080, 	#00FF00)" }}>
        <h2 style={{ textAlign: "center" }}> Image display webite</h2>
        {/* <center>
          <input type="text" onChange={(e) => searchImage(e.target.value)} />
        </center> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",

            objectfit: "cover",

            marginTop: "20px",
          }}
        >
          <br /> <br /> <br />
          {imageList.map((image) => {
            return (
              <div
                key={image.id}
                style={{ padding: "20px", textAlign: "center" }}
              >
                {" "}
                <div className="card">
                  <img
                    src={image.urls.regular}
                    alt={image.alt_description}
                    height="300px"
                    width="210px"
                    className="card-image"
                  />
                  <h3 className="card-title">Uploaded By: {image.user.name}</h3>
                </div>
                <br />
                {image.alt_discription
                  ? image.alt_description
                  : "Manual description."}{" "}
                <FaBeer /> {image.likes}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
