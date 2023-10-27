Roteiro de Aula: Introdução ao Node.js, V8 e Express.js

**Objetivo da Aula:**
Nesta aula, vamos explorar os fundamentos do Node.js, entender como o motor V8 contribui para seu funcionamento e aprender sobre o framework Express.js.

**I. Introdução ao Node.js  **

**1. O que é Node.js?**
   - Node.js é um ambiente de tempo de execução JavaScript de código aberto que permite que os desenvolvedores executem código JavaScript no lado do servidor, fora do contexto tradicional de navegadores da web.
   - Ele foi criado por Ryan Dahl em 2009 e é mantido pela Node.js Foundation.
   - Diferentemente do JavaScript no navegador, que é principalmente usado para interações do cliente, o Node.js é projetado para construir servidores e aplicativos de rede eficientes.
   - Uma das características mais marcantes do Node.js é seu modelo de E/S não bloqueante, que permite que várias operações de entrada e saída sejam executadas simultaneamente sem bloquear o processo principal.

**2. História do Node.js**
   - A história do Node.js remonta a uma tentativa de Ryan Dahl de criar um servidor web não bloqueante em tempo real.
   - Ele escolheu o mecanismo V8 da Google para executar JavaScript de forma eficiente.
   - O Node.js rapidamente ganhou popularidade, evoluindo para uma plataforma versátil para desenvolvimento de aplicativos web, APIs, aplicativos de desktop e muito mais.

**3. Por que usar o Node.js?**
   - O Node.js oferece diversas vantagens, incluindo:
     - Programação assíncrona que torna a manipulação de muitas conexões simultâneas eficiente.
     - Uso do mesmo idioma (JavaScript) tanto no lado do cliente quanto no lado do servidor.
     - Grande ecossistema de módulos e pacotes disponíveis via npm.
     - Alta escalabilidade e desempenho devido à arquitetura não bloqueante.
     - Comunidade ativa e suporte contínuo de desenvolvedores.
     - Flexibilidade para criar vários tipos de aplicativos, desde APIs RESTful até aplicativos em tempo real.

Esta descrição detalhada deve fornecer aos alunos uma compreensão mais sólida do que é o Node.js e por que é uma escolha popular no desenvolvimento de aplicativos server-side.

Claro, vou expandir a parte 2 para fornecer uma explicação mais detalhada sobre o motor V8:

**II. Entendendo o V8  **

**1. O que é o motor V8?**
   - O motor V8 é o componente fundamental por trás do funcionamento do Node.js, desenvolvido pela Google.
   - É um mecanismo de código aberto de JavaScript, escrito em C++, que é altamente otimizado para melhorar o desempenho da execução do código JavaScript.

**2. Funcionamento do V8**

   - O V8 executa o JavaScript em três principais etapas:
     a. Análise léxica e sintática: O código fonte JavaScript é analisado para entender sua estrutura.
     b. Compilação: O código analisado é convertido em código de máquina altamente otimizado.
     c. Execução: O código de máquina é executado no ambiente do Node.js.

**3. O V8 no Node.js**
   - O Node.js utiliza o V8 como seu mecanismo de execução JavaScript, o que significa que qualquer código JavaScript executado no Node.js passa por esse processo de análise, compilação e execução do V8.
   - O V8 é uma parte crítica do desempenho do Node.js, tornando-o eficiente e rápido.

**4. Otimizações do V8**
   - O V8 implementa várias otimizações, como:
     a. Just-In-Time (JIT) compilation: O V8 compila o código JavaScript em tempo de execução, o que ajuda a melhorar o desempenho.
     b. Coleta de lixo (garbage collection): O V8 gerencia a alocação e desalocação de memória de forma eficiente.
     c. Otimização de código: O V8 aplica otimizações como inline caching e eliminação de código morto para acelerar a execução do código.

Esta explicação detalhada sobre o motor V8 ajuda os alunos a compreenderem como o Node.js é capaz de executar JavaScript de forma tão eficiente, contribuindo para o seu desempenho excepcional em ambientes server-side.   

 

**III. Express.js: Introdução e Funcionamento (30 minutos)**

**1. O que é o Express.js?**
   - Express.js é um framework de aplicativo web para Node.js, projetado para simplificar o desenvolvimento de aplicativos web e APIs.
   - Ele fornece uma camada de abstração que simplifica o roteamento, a manipulação de requisições e respostas, além de oferecer uma variedade de recursos e middleware para desenvolvedores.

**2. Instalando o Express.js**
   - Para utilizar o Express.js, você precisa instalá-lo no seu projeto. Isso pode ser feito através do npm (Node Package Manager). O comando para instalar o Express.js é `npm install express`.

**3. Criando uma aplicação Express.js simples**
   - Ao criar uma aplicação Express.js, o primeiro passo é importar o módulo Express.
   - Você pode então criar uma instância do Express e começar a definir rotas, manipuladores de requisição e respostas.
   - Mostrar um exemplo de código que cria um servidor Express básico e define uma rota simples.

**4. Middleware no Express.js**
   - Middleware é uma parte fundamental do Express.js. Explicar que são funções intermediárias que processam as requisições antes de chegarem às rotas finais.
   - Mostrar como usar middleware para tarefas como log de requisições, autenticação, tratamento de erros e muito mais.

**5. Exemplo prático**
   - Desenvolver um aplicativo de lista de tarefas simples usando o Express.js, incluindo rotas para adicionar, exibir e excluir tarefas.
   - Mostrar como os conceitos de roteamento e middleware são aplicados na prática.



**Passo 1: Inicialização do Projeto**

- Crie uma nova pasta para o seu projeto.

```bash
mkdir my-task-app
cd my-task-app
```

**Passo 2: Inicialização do Node.js**

- Inicialize seu projeto Node.js e responda às perguntas conforme necessário.

```bash
npm init
```

**Passo 3: Instalação das Dependências**

- Instale as dependências necessárias, incluindo o Express.js, o TypeORM, o MySQL e outras bibliotecas.

```bash
npm install express @types/express typeorm reflect-metadata mysql nodemon ts-node
npm i typescript --save-dev
```

> para usar o typescript use: {
    "compilerOptions": {
        "lib": ["es5", "es6", "dom"],
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    }
}

> Para gerar o .gitignore use: [gitignore.io](https://www.toptal.com/developers/gitignore)


**Passo 3.1: Instalando o xampp**

O [Xampp](https://www.apachefriends.org/pt_br/download.html) é um software gratuito e de código aberto que fornece um ambiente de desenvolvimento web completo para sistemas Windows, Linux e macOS. Ele combina componentes essenciais, como o servidor web Apache, o sistema de gerenciamento de banco de dados MySQL, o interpretador de linguagem de script PHP e outros recursos opcionais, facilitando a configuração de um servidor web local para testar e desenvolver aplicativos web, sites e scripts dinâmicos. O XAMPP é amplamente utilizado por desenvolvedores e iniciantes em programação para criar e testar projetos web de forma eficiente e prática.

```bash
sudo chmod +x xampp-linux-x64-8.0.28-0-installer.run
./xampp-linux-x64-8.0.28-0-installer.run
sudo /opt/lampp/lampp start
```


**Passo 4: Configuração do TypeORM**

- A configuração de uma fonte de dados (DataSource) para uma aplicação que utiliza o framework de mapeamento objeto-relacional (ORM) TypeORM, com conexão a um banco de dados MySQL. A constante `myDataSource` é criada como uma instância de DataSource, com os seguintes parâmetros de configuração: tipo de banco de dados (MySQL), host onde o banco de dados está localizado (localhost), número da porta (3306), nome de usuário (root), senha (vazia, o que não é recomendado em um ambiente de produção), uma lista vazia de entidades que representam tabelas no banco de dados, a ativação do registro de log (logging) e a sincronização automática com o banco de dados (synchronize). O ORM TypeORM utiliza essas configurações para estabelecer uma conexão com o banco de dados MySQL, mapear entidades e permitir operações de leitura e gravação de dados por meio de código TypeScript de forma simplificada e orientada a objetos. Certifique-se de que, em um ambiente de produção, a senha seja definida de forma segura e que as entidades do banco de dados sejam listadas para que o ORM saiba quais tabelas mapear.

src/app-data-source.ts

```typescript
import { DataSource } from 'typeorm'

export const myDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    entities: [],
    logging: true,
    synchronize: true
})
```


**Passo 5: Configurando o Script no package.json**

Abra o arquivo package.json e adicione um script para iniciar o servidor com Nodemon. Edite a seção "scripts" no arquivo package.json da seguinte maneira:

```json
"scripts": {
  "start": "nodemon src/main.module.ts",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

**Passo 5: Estrutura do Projeto**

- Crie a estrutura de pastas e arquivos do seu projeto. Aqui está uma estrutura sugerida:

```
my-task-app/
  ├── src/tasks/
  |    | ├── task.entity.ts
  |    | ├── task.service.ts
  |    | ├── task.controller.ts
  |    | ├── task.module.ts
  |    ├── main.module.ts
  ├── ormconfig.json
  ├── package.json
```

- Adicione o código para os arquivos `task.entity.ts`, `task.service.ts`, `task.controller.ts`, `task.module.ts` e `main.module.ts` conforme mostrado nas respostas anteriores. 

**1. `task.entity.ts`:**
   - Este arquivo define a entidade `Task`, que representa as informações de uma tarefa. A entidade é mapeada para uma tabela no banco de dados e contém propriedades como `id` e `description`, que são definidas usando os decoradores do TypeORM.

tasks/**task.service.ts**

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
```


**2. `task.service.ts`:**
   - Aqui, o serviço `TaskService` é definido. Ele contém as operações de serviço para lidar com as tarefas. Essas operações incluem:
     - `getAllTasks`: Recupera todas as tarefas do banco de dados.
     - `createTask`: Cria uma nova tarefa no banco de dados.
     - `deleteTask`: Remove uma tarefa com base no ID do banco de dados.

tasks/**task.service.ts**
```typescript
import { getRepository } from 'typeorm';
import { Task } from './task.entity';

export class TaskService {
  async getAllTasks() {
    const taskRepository = getRepository(Task);
    return await taskRepository.find();
  }

  async createTask(description: string) {
    const taskRepository = getRepository(Task);
    const newTask = new Task();
    newTask.description = description;
    await taskRepository.save(newTask);
  }

  async deleteTask(id: number) {
    const taskRepository = getRepository(Task);
    await taskRepository.delete(id);
  }
}
```

**3. `task.controller.ts`:**
   - Neste arquivo, os controladores são definidos para lidar com as requisições HTTP. Cada controlador corresponde a uma rota específica. Os controladores são responsáveis por receber as requisições, chamar as operações de serviço apropriadas e enviar as respostas.
tasks/**task.controller.ts**
```typescript
import { Request, Response } from 'express';
import { TaskService } from './task.service';

const taskService = new TaskService();

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ error: 'A descrição da tarefa é obrigatória.' });
  }
  await taskService.createTask(description);
  res.status(201).json({ message: 'Tarefa adicionada com sucesso.' });
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({ error: 'ID da tarefa inválido.' });
  }
  await taskService.deleteTask(id);
  res.json({ message: 'Tarefa removida com sucesso.' });
};
```

**4. `task.module.ts`:**
   - O módulo `task` é um arquivo que agrupa as rotas relacionadas às tarefas. Aqui, criamos um roteador do Express e definimos as rotas e os controladores correspondentes para listar, criar e excluir tarefas. Este módulo será importado no arquivo principal.

tasks/**task.module.ts**
```typescript
import { Router } from 'express';
import * as TaskController from './task.controller';

const router = Router();

router.get('/tasks', TaskController.getAllTasks);
router.post('/tasks', TaskController.createTask);
router.delete('/tasks/:id', TaskController.deleteTask);

export default router;
```

**5. `main.module.ts`:**

   - Este é o arquivo principal da aplicação. Aqui, criamos uma instância do Express.js e configuramos as rotas e conexões com o banco de dados. Isso inclui a configuração do middleware para lidar com dados JSON, a conexão com o banco de dados PostgreSQL por meio do TypeORM e o uso do módulo `task` para lidar com as rotas relacionadas às tarefas. A aplicação é então iniciada e começa a ouvir as requisições na porta especificada.

Esta estrutura segue as melhores práticas para dividir a aplicação em módulos para facilitar a manutenção, escalabilidade e organização do código. Cada parte desempenha um papel específico na aplicação, tornando-a mais compreensível e expansível. Certifique-se de configurar o banco de dados e instalar as dependências necessárias para executar esse exemplo.

tasks/**main.module.ts**
```typescript
import * as express from 'express';
import { createConnection } from 'typeorm';
import taskModule from './tasks/task.module';

const app = express();
const port = 3000;

createConnection()
  .then(() => {
    app.use(express.json());
    app.use(taskModule);

    app.listen(port, () => {
      console.log(`Servidor Express rodando na porta ${port}`);
    });
  })
  .catch((error) => console.log('Erro de conexão com o banco de dados: ', error));
```

**Passo 6: Rodando o Projeto**

- Inicie o servidor Express.js e a aplicação.

```bash
npm start
```

Agora, sua aplicação está pronta para ser executada. Você pode acessar as rotas de tarefas em `http://localhost:3000`, onde poderá criar, listar e excluir tarefas.
