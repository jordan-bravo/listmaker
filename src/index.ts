import express from 'express';
import chalk from 'chalk';
import bodyParser from 'body-parser'
import { createId } from '@paralleldrive/cuid2'

let items = [
    {
        id: createId(),
        labels: ['todo'],
        contents: 'Walk dog'
    },
    {
        id: createId(),
        labels: ['todo'],
        contents: 'Buy chicken'
    }
]
const app = express();
const port = process.env.PORT || 3030;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/items', (req, res) => {
    res.json(items)
})

app.get('/items/:id', (req, res) => {
    const result = items.filter(e => e.id === req.params.id)[0]
    res.json(result)
})

app.post('/items', (req, res) => {
    const newItem = {
        id: createId(),
        labels: ['todo'],
        contents: req.body.contents
    }
    items.push(newItem)
    res.status(200).json({ success: true })
})

app.put('/items/:id', (req, res) => {
    items = items.filter(e => e.id !== req.params.id)
    items.push(req.body)
    res.status(200).json({ success: true })
})

app.delete('/items', (req, res) => {
    items = items.filter(e => !e.labels.includes('trash'))
    res.status(200).json({ sucess: true })
})

app.listen(port, () => {
    console.log(chalk.green(`listmaker-node listening on port ${port}`))
})
