// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getVideoDetails } from '../../../../utils/getDataFromYoutube'

type Data = {
  video: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {video_id}=req.query;
  const video=await getVideoDetails(video_id as unknown as string);
  res.status(200).json({ video});
}
