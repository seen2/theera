// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPlaylistsFromChannel } from "../../../../utils/getDataFromYoutube";

type Data = {
  playlists?: any[];
  msg?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const playlists = await getPlaylistsFromChannel();

    res.status(200).json({ playlists: [...playlists] });
  } catch (error) {
    res.status(400).json({ msg: "Something Went Wrong" });
  }
}
