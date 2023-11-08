import { test } from "."

export default function testing(req, res) {
    res.status(200).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        test: test(),
    })
}