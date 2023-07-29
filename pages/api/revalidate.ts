// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=b6a8069badda62e91c6a91a5d23ca05f

import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({message: 'Invalid token', secret: req.query.secret})
    }

    const path = req.query.path as string

    await res.revalidate(path)

    return res.json({revalidated: true})
}