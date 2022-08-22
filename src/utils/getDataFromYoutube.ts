export const getPlaylistsFromChannel = async function () {
  const API_KEY = process.env.API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  const result = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=100&key=${API_KEY}`
  );
  const { items } =await result.json();
  return [...items];
};

export const getVideoesFromPlaylist = async (id: string) => {
  const API_KEY = process.env.API_KEY;
  const result = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${id}&key=${API_KEY}`
  );
  const { items } =await result.json();
  return [...items];
};
export const getVideoDetails = async (id: string) => {
  const API_KEY = process.env.API_KEY;
  const result = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
  );
  const { items } =await result.json();
  return [...items];
};

export const getRecentVideoes = async () => {
  const API_KEY = process.env.API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  const result = await fetch(
    `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=25&key=${API_KEY}`
  );
  const { items } =await result.json();
  return [...items];
};

/*
(async function getData() {
  const YOUR_API_KEY="AIzaSyCiG6rVzN_p17OONMmM_g0CwtnAE9MrvwQ";
  const result=await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCS7wp52_Hot7wohyHlSEdag&maxResults=100&key=${YOUR_API_KEY}`);
  const data=result.json();
  console.log(data);
  
})();
*/
