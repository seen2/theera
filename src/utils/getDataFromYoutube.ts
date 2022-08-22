export const getPlaylistsFromChannel = async function () {
  const API_KEY = process.env.API_KEY;
  const result = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCS7wp52_Hot7wohyHlSEdag&maxResults=100&key=${API_KEY}`
  );
  const data = result.json();
  console.log(data);

  return data;
};

export const getVideoesFromPlaylist = (id:string) => {
  

};
export const getVideoDetails = (id:string) => {

};


/*
(async function getData() {
  const YOUR_API_KEY="AIzaSyCiG6rVzN_p17OONMmM_g0CwtnAE9MrvwQ";
  const result=await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCS7wp52_Hot7wohyHlSEdag&maxResults=100&key=${YOUR_API_KEY}`);
  const data=result.json();
  console.log(data);
  
})();
*/
