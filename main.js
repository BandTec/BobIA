const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");

require("dotenv").config();

const chatIA = new GoogleGenerativeAI(process.env.MINHA_CHAVE);

const PORTA_SERVIDOR = process.env.PORTA;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

app.listen(PORTA_SERVIDOR, () => {
    console.info(`A API Gemini With HelpDesk está rodando na porta ${PORTA_SERVIDOR}`);
});

app.post("/perguntar", async (req, res) => {
    const pergunta = req.body.pergunta;

    try {
        const resultado = await gerarMensagem(pergunta);
        res.json( { resultado } );
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

});

async function gerarMensagem(mensagem) {
    const modeloIA = chatIA.getGenerativeModel({ model: "gemini-pro" });

    try {
        const resultado = await modeloIA.generateContent(`Em um paragráfo responda: ${mensagem}`);
        const resposta = await resultado.response.text();
        
        console.log(resposta);

        return resposta;
    } catch (error) {
        console.error(error);
        throw error;
    }
}