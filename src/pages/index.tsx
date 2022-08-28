import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../components/Logo";
import TopTabBar from "../layouts/TopTabBar";
import VideoCard from "../components/VideoCard";
import InfoCard from "../components/InfoCard";

const Home: NextPage = () => {
  return (
    <div className="mx-3">
      <TopTabBar>
        <div className="grid">
          <div className="row">
            <div className="col-xl-9">
              <VideoCard />
              
            </div>
            <div className="col-xl-3">
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
            </div>
          </div>
        </div>
      </TopTabBar>
    </div>
  );
};

export default Home;

//https://www.alphavantage.co/

// GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY]
