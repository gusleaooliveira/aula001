import { Router } from "express";
import * as TaskController from './task.controller'


const router = Router()

router.get('/tasks', TaskController.getAllTasks)
router.get('/tasks/:id', TaskController.getOneTask)
router.post('/tasks', TaskController.createTask)
router.put('/tasks/:id', TaskController.updateTask)
router.delete('/tasks/:id', TaskController.deleteTask)

export default router