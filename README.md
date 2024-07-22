# BobIA

_Este é um projeto educativo desenvolvido para auxiliar os alunos na disciplina de Arquitetura Computacional. Ele consiste em uma API e uma interface web que utilizam o serviço de inteligência artificial Google Generative AI (Gemini) para responder perguntas relacionadas ao tema da disciplina._

## Instalação e Configuração

### Clonar o repositório:

```bash
git clone https://github.com/BandTec/BobIA.git
```

### Instalar as dependências:

*Navegue até o diretório clonado e execute o seguinte comando para instalar as dependências necessárias:*

```bash
npm install
```

### Configurar as variáveis de ambiente:

⚠️⚠️⚠️*O arquivo .env deve ser criado e conter as variáveis de ambiente necessárias para configurar a aplicação. Você deve definir as seguintes variáveis:*

```env
MINHA_CHAVE='sua_chave_do_Google_Generative_AI'
PORTA=3000
```

_*Substitua 'sua_chave_do_Google_Generative_AI' pela sua chave de API do Google Generative AI, conforme orientações em material de aula.*_

## Utilização

### Iniciar o servidor:

*Para iniciar o servidor, execute o seguinte comando:*

```bash
npm start
```

### Acessar a interface web:

*Acesse http://localhost:3000 em um navegador da web para acessar a interface de usuário. Você poderá digitar uma pergunta e clicar no botão "Gerar Resposta" para receber uma resposta da inteligência artificial.*

## Estrutura do Projeto

- **main.js:** Este arquivo contém o código principal da API, incluindo a configuração do servidor Express e a definição das rotas.
- **index.html:** Esta é a interface de usuário web que permite aos usuários interagir com a API.
- **.env:** Este arquivo contém as variáveis de ambiente necessárias para configurar o projeto, incluindo a chave de API do Google Generative AI e a porta do servidor. Você deve criar este arquivo após clonar o BobIA em sua máquina.
- **package.json:** Este arquivo contém as informações do projeto e as dependências necessárias.

## Autores

- Matheus Matos (@MatheusFerreiraMatos)
- Alexander Gonçalves (@gfalexander)
- Marise Miranda (@miranda500)

## Fontes bibliográficas

- [1] [NodeJs](https://nodejs.org/en)
- [2] [NPM](https://nodejs.org/en)
- [3] [Gemini](https://nodejs.org/en)
- [4] [DotEnv](https://www.npmjs.com/package/express)
- [5] [Express](https://www.npmjs.com/package/express)
- [6] [Get started with the Gemini API in Node.js applications](https://ai.google.dev/tutorials/get_started_node?hl=en)

Licenças
---------

Este projeto é licenciado sob a licença Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). Consulte o arquivo LICENSE-CC-BY-NC para obter detalhes.

Partes específicas deste projeto estão licenciadas sob a Licença MIT. Consulte o arquivo LICENSE para obter detalhes.

