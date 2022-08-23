// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getVideoesFromPlaylist } from "../../../../utils/getDataFromYoutube";

type Data = {
  videoes?: any[];
  msg?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { playlist_id } = req.query;
    const videoes = await getVideoesFromPlaylist(
      playlist_id as unknown as string
    );
    res.status(200).json({ videoes: [...videoes] });
  } catch (error) {
    res.status(400).json({ msg: "Something Went Wrong" });
  }
}
