export const getPlaylistsFromChannel = async function () {
  try {
    const API_KEY = process.env.API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const result = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=100&key=${API_KEY}`
    );
    const { items } = await result.json();
    return [...items];
  } catch (error) {
    throw new Error("Unable to feth");
  }
};

export const getVideoesFromPlaylist = async (id: string) => {
  try {
    const API_KEY = process.env.API_KEY;
    const result = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=100&playlistId=${id}&key=${API_KEY}`
    );
    const data = await result.json();
    return [...data.items];
  } catch (error) {
    throw new Error("Unable to feth");
  }
};

export const getVideoDetails = async (id: string) => {
  try {
    const API_KEY = process.env.API_KEY;
    const result = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
    );
    const { items } = await result.json();
    return [...items];
  } catch (error) {
    throw new Error("Unable to feth");
  }
};

export const getRecentVideoes = async () => {
  try {
    const API_KEY = process.env.API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const result = await fetch(
      `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=25&key=${API_KEY}`
    );
    const { items } = await result.json();
    return [...items];
  } catch (error) {
    throw new Error("Unable to feth");
  }
};
