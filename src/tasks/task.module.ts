import { Router } from "express";
import * as TaskController from './task.controller'


const router = Router()

router.get('/tasks', TaskController.getAllTasks)
router.post('/tasks', TaskController.createTask)
router.delete('/tasks/:id', TaskController.deleteTask)

export default router