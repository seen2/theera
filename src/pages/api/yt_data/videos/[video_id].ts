// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getVideoDetails } from '../../../../utils/getDataFromYoutube'

type Data = {
  video?: any[]
  msg?:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const {video_id}=req.query;
  const video=await getVideoDetails(video_id as unknown as string);
  res.status(200).json({ video});
  } catch (error) {
    res.status(400).json({ msg:"Something Went Wrong"});
  }
}
