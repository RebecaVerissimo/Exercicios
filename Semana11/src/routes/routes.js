const { Router } = require('express')
const Aluno = require('../models/Aluno')
const Curso = require('../models/Curso')
const Professor = require('../models/Professor');
const { Op } = require("sequelize");


const routes = new Router()

routes.get('/bem_vindo', (req, res) => {
    res.json({name: 'Bem Vindo'})
})

routes.post('/alunos', async (req, res) => {

    try{
        const nome = req.body.nome
        const data_nascimento = req.body.data_nascimento
        const celular = req.body.celular

        if(!nome) {
            return res.status(400).json({message: 'O nome é obrigatório'})
        }

    
        if(!data_nascimento) {
            return res.status(400).json({message: 'A data de nascimento é obrigatória'})
        }

        if(!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
            return res.status(400).json({ messagem: 'A data de nascimento é não está no formato correto' }) 
        }

        const aluno = await Aluno.create({
            nome: nome,
            data_nascimento: data_nascimento,
            celular: celular
        })
        res.status(201).json(aluno)
         
    } catch (error){
        console.log(error.message)
        res.status(500).json({message: "Não foi possivel cadastrar o aluno"})
    }
})

routes.get('/alunos', async (req, res) => {
    const alunos = await Aluno.findAll()
    res.json(alunos)
})

// EXERCICIO 01
routes.post('/cursos', async (req, res) => {

    try{
        const nome = req.body.nome
        const duracao_horas = req.body.duracao_horas

        if(!nome) {
            return res.status(400).json({message: 'O nome é obrigatório'})
        }

        if(!(duracao_horas >= 40 && duracao_horas <= 200)) {
            return res.status(400).json({message: 'A duraçao do curso debe ser entre 40-200 hrs'})
        }

        const curso = await Curso.create({
            nome: nome,
            duracao_horas: duracao_horas,
    })
    res.status(201).json(curso)

    } catch (error){
        console.log(error.message)
        res.status(400).json({message: "Não foi possivel adicionar o curso"})
    }

})

//EXERCICIO 02
// routes.get('/cursos', async (req, res) => {
//     const cursos = await Curso.findAll()
//     res.json(cursos)
// })

//EXERCICIO 03
routes.get('/cursos', async (req, res) => {
    let params = {}

    if(req.query.search_nome)  {
        params.nome = {[Op.iLike]: req.query.search_nome}      
    }

    if(req.query.search_horas)  {
        params.duracao_horas = req.query.search_horas
    }

    const cursos = await Curso.findAll({
        where: params,
        order: [['id', 'ASC']]
    })

    res.json(cursos)
})

//EXERCICIO 04
routes.put('/cursos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const newData = req.body
        let curso = await Curso.findByPk(id)
        if (curso){
           await Curso.update(newData, {where:{id:id}})
       
        res.status(200).send('Curso atualizada com sucesso.')
        }
        
    } catch (error) {
        return res.status(404).send('Curso não encontrada.')
    }
    
})


//EXERCICIO 05
routes.delete('/cursos/:id', async (req, res) => {
    const { id } = req.params

    const curso = await Curso.findByPk(id)
    if(!curso){
        return res.status(404).json({message: 'Curso não encontrado'})
    }

    Curso.destroy({
        where: {
            id:id
        }
    })

    return res.status(204).json({message: 'Curso removido'})
})

//EXERCICIO 06
routes.post('/professores', async (req, res) => {

    try{
        const nome = req.body.nome
        const data_nascimento = req.body.data_nascimento
        const materia = req.body.materia

        if(!nome) {
            return res.status(400).json({message: 'O nome é obrigatório'})
        }

    
        if(!data_nascimento) {
            return res.status(400).json({message: 'A data de nascimento é obrigatória'})
        }

        if(!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
            return res.status(400).json({ messagem: 'A data de nascimento é não está no formato correto' }) 
        }

        if(!materia) {
            return res.status(400).json({message: 'A materia é obrigatória'})
        }

        const professor = await Professor.create({
            nome: nome,
            data_nascimento: data_nascimento,
            materia: materia
        })
        res.status(201).json(professor)
         
    } catch (error){
        console.log(error.message)
        res.status(500).json({message: "Não foi possivel cadastrar o professor"})
    }
})

routes.get('/professores', async (req, res) => {
    const professores = await Professor.findAll()
    res.json(professores)
})

routes.put('/professores/:id', async (req, res) => {
    try {
        const { id } = req.params
        const newData = req.body
        let professor = await Professor.findByPk(id)
        if (professor){
           await Professor.update(newData, {where:{id:id}})
       
        res.status(200).send('Dados do Professor atualizados com sucesso.')
        }
        
    } catch (error) {
        return res.status(404).send('Professor não encontrada.')
    }
    
})

routes.delete('/professores/:id', async (req, res) => {
    const { id } = req.params

    const professor = await Professor.findByPk(id)
    if(!professor){
        return res.status(404).json({message: 'Professor não encontrado'})
    }

    Professor.destroy({
        where: {
            id:id
        }
    })

    return res.status(204).json({})
})

module.exports = routes 