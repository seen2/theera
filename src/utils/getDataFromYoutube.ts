export const getPlaylistsFromChannel = async function () {
  const API_KEY = process.env.API_KEY;
  const result = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCS7wp52_Hot7wohyHlSEdag&maxResults=100&key=${API_KEY}`
  );
  const data = result.json();
  console.log(data);

  return data;
};
