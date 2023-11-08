import type { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router"


// export default function (req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).send("Auth")
// }

export default methods({
    async patch(req: NextApiRequest, res: NextApiResponse) {
        res.send(`PATCH /me/address
        Permite modificar un dato puntual del usuario al que pertenezca el token usado en el request. En este caso el objeto que describe la dirección.`)
    }
})