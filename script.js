function contabilidade() {
    var invInicial = Number(prompt("Insira o valor do investimento inicial"))
    var rendMeses = Number(prompt("Insira o número de meses que o valor ficará rendendo"))
    var taxJuros = []
    var valorAtualizado = invInicial

    for (let i = 0; i < rendMeses; i++) {
        taxJuros.push(Number(prompt(`Insira a taxa de juros do mês ${i+1}`)))
    }
    
    for (let i = 0; i < rendMeses; i++) {
        valorAtualizado = valorAtualizado + (valorAtualizado*taxJuros[i])
    }
    document.getElementById("res").innerHTML = `<table border=1 align=center><tr><th>Meses rendendo</th><th>Valor Inicial</th><th>Última taxa de juros</th><th>Valor atualizado</th></tr><tr><td>${rendMeses}</td></td><td>${invInicial}</td><td>${taxJuros.slice(-1)[0]}</td><td>${valorAtualizado}</td></table>`
}