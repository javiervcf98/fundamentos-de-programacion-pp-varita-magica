// EJERCICIO 4
const getRandom = (array) => {
  const posicion = Math.floor(Math.random() * array.length)
  return array[posicion]
}

// EJERCICIO 5 
const colors = ['#c1121f', '#a2d2ff', '#212529']

console.log (getRandom(colors));
// EJERCICIO 6 
const gifs = ['assets/magic-3.gif', 'assets/magic-4.gif', 'assets/magic-5.gif']

console.log (getRandom(gifs));

// EJERCICIO 1 y 2
document.addEventListener('click', (event) => {
  event.preventDefault()
  const elemento = event.target

  // EJERCICIO 2.1
  if (elemento.tagName === 'IMG') {
    elemento.removeAttribute('srcset')
    elemento.src = getRandom(gifs)              
    elemento.dataset.original = elemento.src    
  }

  // EJERCICIO 2.2
  if (elemento.tagName === 'P') {
    elemento.style.color = getRandom(colors)           
    elemento.style.backgroundColor = getRandom(colors)  
  }

  // EJERCICIO 2.3
  if (elemento.tagName === 'ARTICLE' || elemento.tagName === 'SECTION') {
    elemento.style.backgroundColor = getRandom(colors) 
  }
})

// EJERCICIO 3:
document.addEventListener('mouseover', (event) => {
  const elemento = event.target

  // EJERCICIO 3.1
  if (elemento.tagName === 'IMG') {
    elemento.dataset.original = elemento.src
    elemento.removeAttribute('srcset')
    elemento.src = 'assets/abracadabra.gif'
  }

  // EJERCICIO 3.2
  if (elemento.tagName === 'P') {
    elemento.dataset.color = elemento.style.color
    elemento.dataset.fondo = elemento.style.backgroundColor
    elemento.style.color = getRandom(colors)           
    elemento.style.backgroundColor = getRandom(colors) 
  }

  // EJERCICIO 3.3
  if (elemento.tagName === 'ARTICLE' || elemento.tagName === 'SECTION') {
    elemento.dataset.fondo = elemento.style.backgroundColor
    elemento.style.backgroundColor = getRandom(colors) 
  }
})

// EJERCICIO 3
document.addEventListener('mouseout', (event) => {
  const elemento = event.target

  // EJERCICIO 3.1
  if (elemento.tagName === 'IMG') {
    elemento.src = elemento.dataset.original
  }

  // EJERCICIO 3.2
  if (elemento.tagName === 'P') {
    elemento.style.color = elemento.dataset.color
    elemento.style.backgroundColor = elemento.dataset.fondo
  }

  // EJERCICIO 3.3
  if (elemento.tagName === 'ARTICLE' || elemento.tagName === 'SECTION') {
    elemento.style.backgroundColor = elemento.dataset.fondo
  }
}) 