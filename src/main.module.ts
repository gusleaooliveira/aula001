import * as express from 'express'
import { myDataSource } from './app-data-source'
import taskModule from './tasks/task.module'

const app = express()
const port = 3000

myDataSource.initialize().then(() => {
    console.log('Banco inicializado!');

    app.use(express.json())
    app.use(taskModule)
    app.listen(port, () => {
        console.log(`http://localhost:${port} `);

    })
}).catch((error) => {
    console.log('Erro:');
    console.log(error);
})


