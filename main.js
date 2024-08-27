// importando os bibliotecas necessárias
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const path = require("path");
const fs = require('fs'); // biblioteca nativa do Node que interage com o sistema de arquivos do computador
const pdf = require('pdf-parse'); // biblioteca que extrai texto e outros dados de PDFs

// carregando as variáveis de ambiente do projeto do arquivo .env
require("dotenv").config();

// configurando o servidor express
const app = express();
const PORTA_SERVIDOR = process.env.PORTA ?? '3000';

// configurando o gemini (IA)
const chatIA = new GoogleGenerativeAI(process.env.MINHA_CHAVE);

// configurando o servidor para receber requisições JSON
app.use(express.json());

// configurando o servidor para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// configurando CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

// inicializando o servidor
app.listen(PORTA_SERVIDOR, () => {
    console.info(
        `
        ######                ###    #
        #     #  ####  #####   #    # #
        #     # #    # #    #  #   #   #
        ######  #    # #####   #  #     #
        #     # #    # #    #  #  #######
        #     # #    # #    #  #  #     #
        ######   ####  #####  ### #     #
        `
    );
    console.info(`A API BobIA iniciada, acesse http://localhost:${PORTA_SERVIDOR}`);
});

// rota para receber perguntas e gerar respostas
app.post("/perguntar", async (req, res) => {
    const pergunta = req.body.pergunta;

    try {
        const resultado = await gerarResposta(pergunta);
        res.json({ resultado });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// função para gerar respostas usando o gemini
async function gerarResposta(mensagem) {
    // obtendo o modelo de IA
    const modeloIA = chatIA.getGenerativeModel({ model: "gemini-pro" });

    // aguarda o retorno do texto do PDF para salvar na variável (await/async)
    const fileContext = await lerPDF('./path/para/o/seu/pdf'); // exemplo de parâmetro: './files/aula01.pdf'
    const conteudo = `${fileContext}\n
        Baseado no arquivo enviado acima, responda essa pergunta (se não for do mesmo contexto dos arquivos, peça para que envie corretamente):
        """${mensagem}"""`; // cria uma resposta baseada no contexto do arquivo e da mensagem

    try {
        // gerando conteúdo com base na pergunta
        const resultado = await modeloIA.generateContent(conteudo);
        const resposta = resultado.response.text();

        console.log(resposta);

        return resposta;
    } catch (error) {
        throw error;
    }
}

// função para ler PDF e transformá-lo em texto
async function lerPDF(path) {
    try {
        let dataBuffer = fs.readFileSync(path); // método que lê o conteúdo de um arquivo de forma síncrona (bloqueia o código até finalizar a leitura do arquivo)
        const data = await pdf(dataBuffer);
        return data.text;
    }
    catch (error) {
        throw error;
    }
};
