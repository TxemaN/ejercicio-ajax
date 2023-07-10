
let primeraTarjeta = document.querySelector("#primeraTarjeta").value
let segundaTarjeta = document.querySelector("#segundaTarjeta").value
const form = document.querySelector("#formulario")
form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  primeraTarjeta = document.querySelector("#primeraTarjeta").value -= 1
  segundaTarjeta = document.querySelector("#segundaTarjeta").value -= 1
  console.log(primeraTarjeta, segundaTarjeta)

  fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(res => res.json())
    .then(json => {

      titulo = JSON.stringify(json[primeraTarjeta].title);
      document.getElementById('tarjeta1').innerHTML = titulo;
      contenido = JSON.stringify(json[primeraTarjeta].body)
      document.getElementById('tarjeta3').innerHTML = contenido;
      titulo = JSON.stringify(json[segundaTarjeta].title)
      document.getElementById('tarjeta2').innerHTML = titulo;
      contenido = JSON.stringify(json[segundaTarjeta].body)
      document.getElementById('tarjeta4').innerHTML = contenido;
    })


  form.reset()

}
);








