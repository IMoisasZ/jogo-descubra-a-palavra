
let listaPalavras = [
    "ABSOLUTA",
    "ABSOLUTAMENTE",
    "ABSOLUTISMO",
    "ABSOLUTISTA",
    "ABSOLUTO",
    "ABSOLVER",
    "ABSOLVICAO",
    "ABSORCAO",
    "ABSORTO",
    "ABSORVE",
    "ABSORVENTE",
    "ABSORVER",
    "ABSTEMIO",
    "ABSTENCAO",
    "COSER",
    "COSMETICO",
    "COSMICA",
    "COSMICO",
    "COSMICOS",
    "COSMO",
    "COSMOGONIA",
    "COSMOGONICO",
    "COSMOLOGIA",
    "COSMOLOGICO",
    "COSMOLOGO",
    "COSMONAUTA",
    "LACAR",
    "LACO",
    "LACONICO",
    "LACONISMO",
    "LACRAIA",
    "LACRAR",
    "LACRE",
    "LACRIMACAO",
    "LACRIMAL",
    "LACRIMEJAR",
    "LACRIMEJO",
    "LACRIMOGENEO",
    "LACRIMOSO",
    "LACTACAO",
    "LACTANTE",
    "LACTAR",
    "LACTASE",
    "LACTEA",
    "LACTEO", 
    "ZORRA",
    "ZULU",
    "ZUM",
    "ZUMBI",
    "ZUMBIDO",
    "ZUMBIR",
    "ZUNIDO",
    "ZUNIR",
    "ZUNZUM"
]

// palavra a pesquisar
let palavra = document.getElementById('word')

// tentativas
let tentativa = 5

function reiniciarJogo(){
    location.reload()
    palavra.focus()
}

function verificarPalavra(palavra){
    const regex = /[A-Za-z]/;
    if(palavra.length < 3){
        alert("A palavra deve ter no minimo 3 caracteres!")
        reiniciarJogo()
    }
    let contadorFalse = 0
    for(let i in palavra){
        if(regex.test(palavra[i])){
            console.log(true, palavra[i]);
        }else{
            console.log(false, palavra[i])
            contadorFalse ++
        }
    }
    console.log(contadorFalse);
    if(contadorFalse > 0){
        alert(`A palavra ${palavra.toUpperCase()} não é permitida!`)
        reiniciarJogo()
    }

}

function gameOver(tentativa){
    if(tentativa === 0){
        alert('Você perdeu!')
        reiniciarJogo()
    }
    return tentativa
}

function won(espacos, palavra){
    let novaPalavra = ""
    for(let i in espacos){
        novaPalavra += espacos[i]
    }
    if(novaPalavra === palavra.toUpperCase()){
        setTimeout(() => {
            alert(`Parabens você descobriu a palavra!\nPalavra correta ${palavra.toUpperCase()}`)
            reiniciarJogo()
        },300);
    }
}

// espaços das letras
let espacos = []
function espacosPalavra(palavra){
    for(let i in palavra){
        espacos[i] = '_'
    }
    return espacos
}

// pesquisar letra na palavra
function pesquisarLetra(letra, palavra){
    let contador = 0
    for(let i in palavra.toUpperCase()){
        if(letra === palavra[i].toUpperCase()){
            espacos[i] = letra
            contador ++
            
        }
        console.log(palavra[i]);
    }
    if(contador === 0){
        tentativa --
    }
    return espacos
}


function desabilitarBotoesLetras(){
    a.disabled = true
    b.disabled = true
    c.disabled = true
    d.disabled = true
    e.disabled = true
    f.disabled = true
    g.disabled = true
    h.disabled = true
    i.disabled = true
    j.disabled = true
    k.disabled = true
    l.disabled = true
    m.disabled = true
    n.disabled = true
    o.disabled = true
    p.disabled = true
    q.disabled = true
    r.disabled = true
    s.disabled = true
    t.disabled = true
    u.disabled = true
    v.disabled = true
    w.disabled = true
    x.disabled = true
    y.disabled = true
    z.disabled = true
}

function habilitarBotoesLetras(){
    a.disabled = false
    b.disabled = false
    c.disabled = false
    d.disabled = false
    e.disabled = false
    f.disabled = false
    g.disabled = false
    h.disabled = false
    i.disabled = false
    j.disabled = false
    k.disabled = false
    l.disabled = false
    m.disabled = false
    n.disabled = false
    o.disabled = false
    p.disabled = false
    q.disabled = false
    r.disabled = false
    s.disabled = false
    t.disabled = false
    u.disabled = false
    v.disabled = false
    w.disabled = false
    x.disabled = false
    y.disabled = false
    z.disabled = false
}

let btnOk = document.getElementById('add-word')
btnOk.onclick = () => {
    if(palavra.value){
        verificarPalavra(palavra.value)
        btnOk.disabled = true
        palavra.disabled = true
        palavra.hidden = true
        habilitarBotoesLetras()
        document.getElementById('p-try').hidden = false
        document.getElementById('try').innerText = tentativa
        espacosPalavra(palavra.value)
        document.getElementById('word-search').innerText = espacos
    }
}

onload =() =>{
    desabilitarBotoesLetras()
}

let random = document.getElementById('random')
random.onclick = () => {
    random.disabled = true
    palavra.hidden = true
    palavra.value = listaPalavras[(Math.random() * listaPalavras.length).toFixed(0)]
    btnOk.disabled = true
    palavra.disabled = true
    habilitarBotoesLetras()
    document.getElementById('p-try').hidden = false
    document.getElementById('try').innerText = tentativa
    espacosPalavra(palavra.value)
    document.getElementById('word-search').innerText = espacos
}


let btnReiniciarJogo = document.getElementById('reiniciar-jogo')
btnReiniciarJogo.onclick = () =>{
    reiniciarJogo()
}

let letras = document.getElementsByClassName('l')
let a = document.getElementById('letra-a')
let b = document.getElementById('letra-b')
let c = document.getElementById('letra-c')
let d = document.getElementById('letra-d')
let e = document.getElementById('letra-e')
let f = document.getElementById('letra-f')
let g = document.getElementById('letra-g')
let h = document.getElementById('letra-h')
let i = document.getElementById('letra-i')
let j = document.getElementById('letra-j')
let k = document.getElementById('letra-k')
let l = document.getElementById('letra-l')
let m = document.getElementById('letra-m')
let n = document.getElementById('letra-n')
let o = document.getElementById('letra-o')
let p = document.getElementById('letra-p')
let q = document.getElementById('letra-q')
let r = document.getElementById('letra-r')
let s = document.getElementById('letra-s')
let t = document.getElementById('letra-t')
let u = document.getElementById('letra-u')
let v = document.getElementById('letra-v')
let w = document.getElementById('letra-w')
let x = document.getElementById('letra-x')
let y = document.getElementById('letra-y')
let z = document.getElementById('letra-z')

a.onclick = () => {
    a.disabled = true
    pesquisarLetra(letras[0].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

b.onclick = () => {
    b.disabled = true
    pesquisarLetra(letras[1].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

c.onclick = () => {
    c.disabled = true
    pesquisarLetra(letras[2].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

d.onclick = () => {
    d.disabled = true
    pesquisarLetra(letras[3].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

e.onclick = () => {
    e.disabled = true
    pesquisarLetra(letras[4].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

f.onclick = () => {
    f.disabled = true
    pesquisarLetra(letras[5].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

g.onclick = () => {
    g.disabled = true
    pesquisarLetra(letras[6].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

h.onclick = () => {
    h.disabled = true
    pesquisarLetra(letras[7].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

i.onclick = () => {
    i.disabled = true
    pesquisarLetra(letras[8].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

j.onclick = () => {
    j.disabled = true
    pesquisarLetra(letras[9].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

k.onclick = () => {
    k.disabled = true
    pesquisarLetra(letras[10].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

l.onclick = () => {
    l.disabled = true
    pesquisarLetra(letras[11].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

m.onclick = () => {
    m.disabled = true
    pesquisarLetra(letras[12].value, palavra.value)
    console.log(espacos);
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

n.onclick = () => {
    n.disabled = true
    pesquisarLetra(letras[13].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

o.onclick = () => {
    o.disabled = true
    pesquisarLetra(letras[14].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

p.onclick = () => {
    p.disabled = true
    pesquisarLetra(letras[15].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

q.onclick = () => {
    q.disabled = true
    pesquisarLetra(letras[16].value, palavra.value)
    console.log(espacos);
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

r.onclick = () => {
    r.disabled = true
    pesquisarLetra(letras[17].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

s.onclick = () => {
    s.disabled = true
    pesquisarLetra(letras[18].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

t.onclick = () => {
    t.disabled = true
    pesquisarLetra(letras[19].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

u.onclick = () => {
    u.disabled = true
    pesquisarLetra(letras[20].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

v.onclick = () => {
    v.disabled = true
    pesquisarLetra(letras[21].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

w.onclick = () => {
    w.disabled = true
    pesquisarLetra(letras[22].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

x.onclick = () => {
    x.disabled = true
    pesquisarLetra(letras[23].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

y.onclick = () => {
    y.disabled = true
    pesquisarLetra(letras[24].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}

z.onclick = () => {
    z.disabled = true
    pesquisarLetra(letras[25].value, palavra.value)
    document.getElementById('word-search').innerText = espacos
    won(espacos, palavra.value)
    gameOver(tentativa)
    document.getElementById('try').innerText = tentativa
}


