import { Router } from "express";
import * as TaskController from './task.controller'


const router = Router()

router.get('/tasks', TaskController.getAllTasks)
router.get('/tasks', TaskController.createTask)
router.post('/tasks/:id', TaskController.deleteTask)

export default router