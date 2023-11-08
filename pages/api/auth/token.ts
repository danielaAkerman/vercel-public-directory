import type { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router"

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        res.send(`Recibe un email y un código y valida que sean los correctos. En el caso de que sean correctos devuelve un token e invalida el código.`)
    }
})