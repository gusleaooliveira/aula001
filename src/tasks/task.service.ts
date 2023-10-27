import { Task } from './entity/task.entity'
import { myDataSource } from '../app-data-source'

export class TaskService {



    taskRepository = myDataSource.getRepository(Task)

    async getAllTasks() {
        const task = await this.taskRepository.find()
        return task
    }

    async getOneTask(id: number) {
        const task = await this.taskRepository.findOneBy({
            id: id
        })
        return task
    }

    async createTask(description: string) {
        const newTask = new Task()
        newTask.description = description

        return await this.taskRepository.save(newTask)
    }

    async deleteTask(id: number) {
        return await this.taskRepository.delete(id)
    }

    async updateTask(id: number, task) {
        return await this.taskRepository.update(id, task)
    }
}