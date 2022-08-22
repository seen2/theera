// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getVideoesFromPlaylist } from "../../../../utils/getDataFromYoutube";

type Data = {
  videoes: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { playlist_id } = req.query;
  const videoes = await getVideoesFromPlaylist(playlist_id as unknown as string);
  res.status(200).json({ videoes:[...videoes] });
}
