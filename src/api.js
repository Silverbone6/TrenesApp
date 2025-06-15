const express = require("express")
const { getAllLines, getLine, createLine, deleteLine, updateLine } = require("./db/lines")
const app = express()
const port = 3000

app.use(express.json())

// GET. /lines
app.get("/lines", (req, res) => {
    const lines = getAllLines()
    res.json(lines)
})

// GET. /lines/<num>
app.get("/lines/:num", (req, res) => {
    const line = getLine(req.params.num)

    if (line === undefined) {
        res.sendStatus(404)
    }
    
    res.send(line)
});

// POST. /lines
app.post("/lines", (req, res) => {
    const number = req.body.number
    const name = req.body.name
    const origin = req.body.origin
    const end = req.body.end

    if (number === undefined) {
        return res.status(400).send("Number not provided")
    }
    if (getLine(number) !== undefined) {
        return res.status(400).send("Line already exists")
    }
    if (name === undefined) {
        return res.status(400).send("Name not provided")
    }
    if (origin === undefined) {
        return res.status(400).send("Origin station not provided")
    }
    if (end === undefined) {
        return res.status(400).send("End station not provided")
    }

    const line = createLine(number, name, origin, end)
    res.status(200).json(line)
})

// DELETE. /lines/<num>
app.delete("/lines/:num", (req, res) => {
    const number = res.params.num
    const line = getLine(number)

    if (line === undefined) {
        return res.status(404);
    }

    deleteLine(number)

    return res.json(line)
})

// PUT. /lines/<num>
app.put("/lines/:num", (req, res) => {
    const number = res.params.num
    const line = getLine(number)

    if (line === undefined) {
        return res.status(404)
    }

    if (req.body === undefined) {
        return res.status(400).send("Body not defined")
    }

    const name = req.body.name
    const origin = req.body.origin
    const end = req.body.end

    if (name === undefined) {
        return res.status(400).send("Name not provided")
    }
    if (origin === undefined) {
        return res.status(400).send("Origin station not provided")
    }
    if (end === undefined) {
        return res.status(400).send("End station not provided")
    }

    updateLine(number, name, origin, end)
    res.json(getLine(number))
})

app.listen(port, () => {
    console.log(`Server initiated at port ${port}`)
})
