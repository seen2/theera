// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getRecentVideoes } from '../../../../utils/getDataFromYoutube'

type Data = {
  videoes: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const videoes=await getRecentVideoes();
  res.status(200).json({ videoes })
}
