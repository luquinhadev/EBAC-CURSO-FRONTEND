const alunos = [
    {
        nome: 'João', nota: 7
    },
    {
        nome: 'Lucas', nota: 8
    },
    {
        nome: 'Miguel', nota: 5
    },
    {
        nome: 'Erderson', nota: 6
    },
    {
        nome: 'Giann', nota: 4
    },
];

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6)

};

const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);