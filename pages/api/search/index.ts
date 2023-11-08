import type { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router"


// export default function (req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).send("Auth")
// }

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        const {q, offset, limit}=req.query
        res.send(`Buscar productos en nuestra base de datos. Chequea stock y todo lo necesario. ${q}, ${offset}, ${limit}`)
    }
})