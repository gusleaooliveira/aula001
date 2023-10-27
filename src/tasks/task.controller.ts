import { Request, Response, json } from 'express'
import { TaskService } from './task.service'

const taskService = new TaskService()

export const getAllTasks = async (req: Request, res: Response) => {
    const tasks = await taskService.getAllTasks()
    res.json(tasks)
}

export const getOneTask = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    if (!id) {
        return res.status(400).json({ error: 'ID da tarefa inválido.' })
    }
    const task = await taskService.getOneTask(id)
    res.json(task)
}

export const updateTask = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const changeTask = req.body
    if (!id) {
        return res.status(400).json({ error: 'ID da tarefa inválido.' })
    }
    const task = await taskService.updateTask(id, changeTask)
    res.json({ message: 'Tarefa alterada com sucesso.' })
}

export const createTask = async (req: Request, res: Response) => {
    const { description } = req.body
    if (!description) {
        return res.status(400).json({ error: 'A descrição da tarefa é obrigatória' })
    }
    await taskService.createTask(description)
    res.status(201).json({ message: 'Tarefa adicionada com sucesso.' })
}

export const deleteTask = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    if (!id) {
        return res.status(400).json({ error: 'ID da tarefa inválido.' })
    }
    await taskService.deleteTask(id)
    res.json({ message: 'Tarefa removida com sucesso.' })
}


