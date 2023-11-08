import type { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router"


// export default function (req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).send("Auth")
// }

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        const {productId}=req.query
        res.send(`Genera una compra en nuestra base de datos y además genera una orden de pago en MercadoPago. Devuelve una URL de MercadoPago a donde vamos a redigirigir al user para que pague. ${productId}`)
    }
})