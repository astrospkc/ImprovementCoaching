// import React from "react";

import Buttons from "./Buttons";

const Videopage = () => {
  return (
    <>
      <div>
        <Buttons />
      </div>
      <div>Video</div>
    </>
  );
};

export default Videopage;

// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]

// AIzaSyBWLq0JLuIJ7H4-80H--J7zgBipvBrEUWc

// playlist
// https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY] HTTP/1.1

// one video with id
//  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] HTTP/1.1
