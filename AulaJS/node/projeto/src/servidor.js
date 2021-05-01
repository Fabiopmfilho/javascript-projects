const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => { // quando nao usa next, nao precisa por
    res.send(bancoDeDados.getProdutos()) // vai converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // json
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})