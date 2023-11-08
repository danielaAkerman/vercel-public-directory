<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router"


// export default function (req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).send("Auth")
// }

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        res.send(`Devuelve info del user asociado a ese token`)
    },
    async patch(req: NextApiRequest, res: NextApiResponse) {
        res.send(`Permite modificar algunos datos del usuario al que pertenezca el token usado en el request.`)
    }
})
=======
export default function (req,res){
    const miNombre: string= "Dani"
    res.send(miNombre)
}
>>>>>>> 11d64b820d48543f17d010af56f273f81086a152
