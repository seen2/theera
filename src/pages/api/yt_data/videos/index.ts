// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRecentVideoes } from "../../../../utils/getDataFromYoutube";

type Data = {
  videoes?: any[];
  msg?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const videoes = await getRecentVideoes();
    res.status(200).json({ videoes });
  } catch (error) {
    res.status(400).json({ msg: "Something Went Wrong" });
  }
}
