import type { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router"


// export default function (req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).send("Auth")
// }

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        res.send(`Recibe un email y encuentra/crea un user con ese email y le envía un código vía email.`)
    }
})