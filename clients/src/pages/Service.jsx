

import React from 'react';
import { useAuth } from '../ContextApi/TokenApi';
import ServiceCard from './ServiceCard';


const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="Cards">
        <div className="container-fluid mb-5">
          <div className="grid-container">
            {services.map((val, index) => (
              <ServiceCard
                key={index}
                imgSrc={val.imgSrc}
                title={val.title}
              />
            ))}
          </div>
        </div>
      </div>
      {/* 3RD */}
      <div className="h1main">
        <h1>Available On</h1>
      </div>

      <div className="appContainer">
        <div className="app_container">
          <div className="images">
            <img
              src="https://d4.alternativeto.net/av9W-e6ZM0EjPq7Yaw8uUdKx6YEN3Oj8cxgfI2vsc6U/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9nYWFuYV8xMDE1Mjgud2VicA.png"
              alt=""
            />
          </div>
          <p>Gaana</p>
        </div>
        <div className="app_container">
          <div className="images">
            <img
              src="https://store-images.s-microsoft.com/image/apps.53891.13510798886169200.51883b14-b870-433d-9a3a-2dbb79555f10.0d9543af-423b-4c25-81d2-bce527850199"
              alt=""
            />
          </div>

          <p>Jiosaavn</p>
        </div>
        <div className="app_container">
          <div className="images">
            <img
              src="https://www.pngmart.com/files/22/Spotify-Logo-PNG-HD.png"
              alt=""
            />
          </div>
          <p>Spotify</p>
        </div>
        <div className="app_container">
          <div className="images">
   <img src="https://www.svgrepo.com/show/514597/amazon-music.svg"
    alt="" />
          </div>
          <p>Amazon</p>
        </div>
      </div>
    </>
  );
};

export default Service;
