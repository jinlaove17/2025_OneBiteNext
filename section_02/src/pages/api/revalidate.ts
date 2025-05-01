import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Revalidation Failded");
  }
};

export default handler;
