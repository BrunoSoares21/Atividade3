//Crie um código com Node.js que recebe o ano de nascimento do usuário e em seguida calcule e exiba a idade do usuário.

import PromptSync from "prompt-sync"

const prompt = PromptSync()

const nascimento = Number(prompt("Digite o ano do seu nascimento: "))
const Hoje = new Date()
const ano = Hoje.getFullYear()

const Idade = ano-nascimento

console.log(`Sua idade é: ${Idade.toFixed(0)}`)
