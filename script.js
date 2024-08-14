const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de filmes?",
            },
            {
                texto: "gosta de séries?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "algum gênero específico?",
            },
            {
                texto: "qualquer gênero.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Prefiro comédia.",
            },
            {
                texto: "prefiro ação.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "entre no grupo do telegram FILMES DE COMÉDIA",
            },
            {
                texto: "entre no grupo do telegram FILMES DE AÇÃO",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "filmes com -2h?.",
            },
            {
                texto: "filmes com +2h?.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "encontre filmes mais curtos, .",
            },
            {
                texto: "encontre filmes mais logos.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();