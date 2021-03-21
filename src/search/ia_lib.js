
const { PQ } = require('./ia_pq.js')
function Coord (x, y, s = null, code = null) {
  this.x = x 
  this.y = y 
  this.simbol = s 
  this.digit = null 
  this.code = code 
}

function whereiszero (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) return new Coord(i, j)
    }
  }
  return null
}

const MOVES = [
  new Coord(-1, 0, '^', 0),
  new Coord(0, -1, '<', 1),
  new Coord(1, 0, 'v', 2),
  new Coord(0, 1, '>', 3)
]

function State (arr, custo = 0, altura = 0) {
  this.arr = arr
  this.str = toStr(arr)
  this.moves = []
  this.zero = whereiszero(arr)
  this.custo = custo
  this.altura = altura
}

function isNumberFinal (state) {
  // console.log(st.number)
  return state.str === '012345678'
}

function sum (a, b) {
  return { x: a.x + b.x, y: a.y + b.y }
}

function toStr (Matrix) {
  var sum = ''
  for (var i = 0; i < 9; i++) {
    sum += Matrix[Math.floor(i / 3)][i % 3]
  }
  return sum
}

const LIM = [0, 2]

function testCmp (x) {
  const test = function (x0, i) {
    return x[i] >= LIM[0] && x[i] <= LIM[1]
  }
  if (test(x, 'x') && test(x, 'y') === true) return true
  return false
}

function swap (st, a, b) {
  var x = st.arr[a.x][a.y]
  st.arr[a.x][a.y] = st.arr[b.x][b.y]
  st.arr[b.x][b.y] = x
}

var POS = []
POS.push([2, 2])
for (var i = 0; i < 8; i++) {
  POS.push([Math.floor(i / 3), i % 3])
}
// console.log("POS", POS)
function distanceSum (estadoInicial) {
  var sum = 0

  var n
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (j === 2 && i === 2) continue
      n = estadoInicial.arr[i][j]
      const m = POS[n]
      sum += Math.abs(m[0] - i) + Math.abs(m[1] - j)
    }
  }
  return sum
}

function Ed (ed) {
  this.ed = ed
  this.extract = null
  this.add = null
  this.calc_custo = null
  this.set = function (e) {
    this.ed = e
  }
  this.length = function () {
    return this.ed.length
  }
  this.name = 'BUSCA'
}
function DfsEd () {
  Ed.call(this, [])
  this.extract = function () {
    return this.ed.pop()
  }
  this.add = function (item) {
    this.ed.push(item)
  }
  this.calc_custo = function (st) {
    return st.custo + 1
  }
  this.name = 'DFS'
}
function BfsEd () {
  DfsEd.call(this)
  this.extract = function () {
    var item = this.ed[0]
    this.ed = this.ed.splice(1, this.ed.length)
    return item
  }
  this.name = 'BFS'
}
function GreedyEd () {
  Ed.call(this, new PQ())
  this.extract = function () {
    var a = this.ed.extract()
    // console.log(a)
    return a
  }
  this.add = function (item) {
    // console.log("ITEM: " + item);
    this.ed.add(item)
  }
  this.calc_custo = function (st) {
    return distanceSum(st)
  }
  this.length = function () {
    return this.ed.size()
  }
  this.name = 'GREEDY'
}
function AestrelaEd () {
  GreedyEd.call(this)
  this.calc_custo = function (st) {
    return distanceSum(st) + st.altura
  }
  this.name = 'AESTRELA'
}

function genericSearch (estadoInicial, ED) {
  ED.add(estadoInicial)
  var nosFronteira = 1
  var nosVisitados = 0
  var nosJaVisitados = 0
  var maxFronteira = 0
  // console.log(ED);
  var atual, neo
  var visitados = new Map()
  var strResult = []
  var str = []
  var maxProfundidade = 0

  while (ED.length() > 0) {   
    atual = ED.extract()
    nosVisitados++
    maxProfundidade = Math.max(atual.altura, maxProfundidade)
    maxFronteira = Math.max(ED.length(), maxFronteira)
    str = []
    str.push('ESTOU EM:<br>' + atual.arr.join('<br>') + '<br>')
    if (isNumberFinal(atual) === true) {
      str.push('EH A SOLUCAO<br>')
      strResult.push(str.join(' '))
      return {
        estado_resultado: atual,
        logs: strResult,
        nosVisitados: nosVisitados,
        nosFronteira: nosFronteira,
        maxProfundidade: maxProfundidade,
        name: ED.name,
        jaVisitados: nosJaVisitados,
        maxFronteira: maxFronteira
      }
    }

    if (visitados.has(atual.str) === true) {
      nosJaVisitados++
      str.push('JA VISITADO!<br>')
      strResult.push(str.join(' '))
      continue
    } else visitados.set(atual.str, true)
    str.push('Adicionado: <br>')
    MOVES.map(function (move) {
      neo = sum(atual.zero, move)
      if (testCmp(neo) === true) {
        var copy = JSON.parse(JSON.stringify(atual))
        move.digit = copy.arr[neo.x][neo.y]
        swap(copy, copy.zero, neo)
        copy.zero = neo
        copy.str = toStr(copy.arr)
        copy.moves.push(JSON.parse(JSON.stringify(move)))
        copy.altura = atual.altura + 1
        copy.custo = ED.calc_custo(copy)
        ED.add(copy)
        str.push(
          copy.arr.join('<br>') + '<br>--custo: ' + copy.custo + '--<br><br>'
        )

        nosFronteira++
      }
    })
    strResult.push(str.join(' '))
  }
  return null
}

function DFS (estadoInicial) {
  return perf(estadoInicial, new DfsEd())
}
function BFS (estadoInicial) {
  return perf(estadoInicial, new BfsEd())
}
function GREEDY (estadoInicial) {
  return perf(estadoInicial, new GreedyEd())
}
function AESTRELA (estadoInicial) {
  return perf(estadoInicial, new AestrelaEd())
}

function perf (estadoInicial, ED) {
  var t0 = window.performance.now()
  var result = genericSearch(estadoInicial, ED)
  var t1 = window.performance.now()
  return { time: t1 - t0, resultado_busca: result }
}

module.exports = {
  DFS,
  BFS,
  GREEDY,
  AESTRELA,
  State
}
