
let primeraTarjeta = document.querySelector("#primeraTarjeta").value
let segundaTarjeta = document.querySelector("#segundaTarjeta").value

fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(res=>res.json())
            .then(json=>{
              
               titulo = JSON.stringify(json[0].title);
        document.getElementById('tarjeta1').innerHTML = titulo;
         contenido = JSON.stringify(json[0].body)
        document.getElementById('tarjeta3').innerHTML = contenido;
         titulo = JSON.stringify(json[0].title)
        document.getElementById('tarjeta2').innerHTML = titulo;
        contenido = JSON.stringify(json[0].body)
        document.getElementById('tarjeta4').innerHTML = contenido;
            })


             
            

