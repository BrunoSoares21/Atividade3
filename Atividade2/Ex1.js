//Crie um código com Node.js que vai receber o salário da pessoa, a porcentagem de aumento e deve apresentar qual o novo salário.

// Salario
// % aumento
// Novo salario

import PromptSync from "prompt-sync"

const prompt = PromptSync()

const salario = Number(prompt("Salario: "))
const aumento = Number(prompt("Aumento: "))

const NewSalario = salario + (salario * (aumento/100))

console.log(`O novo salario: ${NewSalario.toFixed(2)}`)
