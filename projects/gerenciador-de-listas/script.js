// variaveis globais
let lista = []
let res = document.getElementById('res')
let tab = document.getElementById('seltab')
let num = document.getElementById('txtn')

// verifica se valor é um número
function isNumero(m) {
    if (Number(m) >= 1 && Number(m) <= 1000) {
        return true
    } else {
        return false
    }
}

// verifica se valor já está na lista
function inLista(m, lista) {
    if (lista.indexOf(Number(m)) != -1) {
        return true
    } else {
        return false
    }
}

// funcao que adiciona o numero à lista
function adicionar() {
    // verificacao de entrada
    if (num.value.length == 0) {
        alert('Por favor, digite o número a ser adicionado!')
    } else if (isNumero(num.value) && !inLista(num.value, lista)) {
        let n = Number(num.value)
    
        // adicionando valor a lista visual
        let item = document.createElement('option')
        item.text = (`O número ${n} foi adicionado à lista!`)
        tab.appendChild(item)
        
        // armazenando valor na memoria
        lista.push(n)
        
        // reset da analise
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus()
} 

// funcao que analisa lista e retorna analise
function analisar() {
    // verificao de entrada
    if (lista.length == 0) {
        alert('Por favor, adicione números à lista para analise!')
    } else {
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        for (let pos in lista) {
            soma += lista[pos]
            if (lista[pos] > maior) {
                maior = lista[pos]
            }
            if (lista[pos] < menor) {
                menor = lista[pos]
            }
        }
        let media = soma / lista.length
    
        res.innerHTML  = (`<p>Ao todo temos ${lista.length} números cadastrados.</p>`)
        res.innerHTML  += (`<p>O maior valor informado foi ${maior}.</p>`)
        res.innerHTML  += (`<p>O menor valor informado foi ${menor}.</p>`)
        res.innerHTML  += (`<p>Somando todos os valores, temos ${soma}.</p>`)
        res.innerHTML  += (`<p>A media dos valores digitados é ${media.toFixed(2).replace('.', ',')}.</p>`)
    }
    num.focus()
}

// funcao que zera a lista
function limpar() {
    lista = []
    res.innerHTML = ''
    tab.innerHTML = '<option>Preencha essa lista adicionando números acima!</option>'
    num.focus()
}