// Criar um programa que calcula a média 
// das turmas de alunos e envia 
// mensgem do cálculo da média.

const alunosTurmaA = [
    {
        nome: 'Mayk',
        nota: 9.8
    },
    {
        nome: 'Diego',
        nota: 4
    },
    {
        nome: 'Bruno',
        nota: 7
    }
]

const alunosTurmaB = [
    {
        nome: 'Maria',
        nota: 9.8
    },
    {
        nome: 'João',
        nota: 0
    },
    {
        nome: 'Alex',
        nota: 5
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function enviaMenssagem(media, turma) {
    // Se a média for maior que 5, parabenizar a turma
    if (media >= 5) {
        console.log(`A média da turma ${turma} foi de ${media}.Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} foi menor que 5 estudem mais.`)
    }
}

enviaMenssagem(media1, 'Turma A')
enviaMenssagem(media2, 'Turma B')
    // Marcar um aluno como reprovado se a nota for menor que 5, e tambem enviar uma mensagem


function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
    

}


function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosTurmaA)
alunoReprovado(alunosTurmaB)