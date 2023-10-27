import { DataSource } from 'typeorm'
import { Task } from './tasks/entity/task.entity'

export const myDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'aula',
    entities: [
        Task
    ],
    logging: true,
    synchronize: true
})