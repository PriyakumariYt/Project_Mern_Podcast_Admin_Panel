import React from 'react'

const Home = () => {
  return (
    <>
    <div className='Home'>
    <div className="text-box">
        <h1>Welcome To My PodCast</h1>
        <p>
          Get your Podcast listed in all of the top Podcast directories
          <br />
          Easy,
          <br />
          and Powerful Tools.
        </p>
        <a href="" className="btn">
          Visit Us To Know More
        </a>
      </div>
    </div>
       

      {/* 2nd
       */}
       <div className="smallContainer">
        <div className="small-container">
          <div className="icons">
            <i className="fa-solid fa-radio"></i>
          </div>
          <p>Radio</p>
        </div>
        <div className="small-container">
          <div className="icons">
            <i className="fa-solid fa-music"></i>
          </div>

          <p>Music</p>
        </div>
        <div className="small-container">
          <div className="icons">
            <i className="fa-solid fa-podcast"></i>
          </div>
          <p>Podcast</p>
        </div>
        <div className="small-container">
          <div className="icons">
            <i className="fa-solid fa-video"></i>
          </div>
          <p>Video</p>
        </div>
      </div>
      {/* 3RD */}
      <div className="Containers">
        <div className="text">
          <h2>New Episode!</h2>
          <h1>
            The DiviNation <br />
            Podcast
          </h1>
          <p>
            A podcast series about life in the Aussie bush, mateship & the RFDS
            in rural communities. Catch up on our latest episode on your
            favourite platform today. Start listening now. 24-Hour Emergency
            Service.
          </p>
          <div className="play">
            <i className="fa-solid fa-play"></i>
          </div>
          <div className="buttons-1">Play Now</div>
          <div className="buttons-2">Subscribe Now</div>
        </div>
      </div>
       </>
  )
}

export default Home
