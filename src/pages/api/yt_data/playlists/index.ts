// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPlaylistsFromChannel } from '../../../../utils/getDataFromYoutube'

type Data = {
  playlists: []
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const playlists=await getPlaylistsFromChannel();

  res.status(200).json(playlists);
}
