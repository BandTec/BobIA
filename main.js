const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");

require("dotenv").config();

const chatIA = new GoogleGenerativeAI(process.env.MINHA_CHAVE);

const PORTA_SERVIDOR = process.env.PORTA;

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