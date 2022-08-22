import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/Logo';
import TopTabBar from '../layouts/TopTabBar';

const Home: NextPage = () => {
  return (
    <div className="mx-3">
     <Logo /> 
     <TopTabBar />
    </div>
  )
}

export default Home

//https://www.alphavantage.co/

// GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY] 
