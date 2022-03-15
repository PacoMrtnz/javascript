window.onload = function() {
  cargarTiempoParcial();
  mostrarUsuarioLogueado();   //La obtenemos del archivo 'util.js'
  

  //Botones/Enlaces footer
  document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
  document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
  document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
  document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
  document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'
}


//Variable global donde almacenamos la Lista de Ofertas obtenidas del JSON
var listaOfertas = [];

//Función para cargar las ofertas de trabajo Temporal
function cargarTiempoParcial(){
   $.get("./js/ofertas.json",{},(resultado)=> {
     listaOfertas = resultado;
        ordenarLista(resultado.tiempoParcial);
        pintarTiempoParcial(resultado.tiempoParcial);
       
   });
}

//Funcion para pintar las ofertas de trabajo a Tiempo Parcial mediante una lista que obtenemos del JSON 'ofertas.json'
   function pintarTiempoParcial(lista){
    lista.forEach( resultado =>{
      var texto =  
       `<div class="class col-md-4">
          <div class="card mt-3">
              <div class="product-1 align-items-center  text-center">
               <a href="${resultado.fotoEmpresa}"> <img src="${resultado.fotoEmpresa}" alt="fotoEmpresa_${resultado.id}" class="rounded"></a>
                <h3 class="red mt-3">${resultado.titulo}</h3>
                <!--CARD INFO-->
                <div class="mt-3 px-5 info">
                  <span class="descripcion d-block">${resultado.descripcion}</span>
                </div>
                <br>
                <div class="cost mt-3">
                  <h5 class="red"> <span>Duración: ${resultado.duracion}</span><br>
                  <span>Horas: ${resultado.horas}h/semana</span><br>
                  <span>Salario: ${resultado.salario}€/mes</span><br>
                  <span>ID: ${resultado.id}</span></h5>
                  <div class="star mt-4 mb-5 align-items-center">
                    <button class="btnInscribirse" type="button" onclick="inscribirse(event)">Inscribirse</button>
                  </div>
                </div>
              </div>
          </div>`;

      document.getElementById("contenidoTiempoParcial").innerHTML+= texto; 
      });
   }

  


//Funcion para ordenar los elementos de la lista de ofertas a Tiempo Parcial según el valor del select opt
   function ordenarLista(){
      document.getElementById("contenidoTiempoParcial").innerHTML = "";
      var valueSelectOrdenar = document.getElementById("ordenarOfertas").value;
      var listaTrabajosTiempoParcial=[];
      listaTrabajosTiempoParcial.push(listaOfertas["tiempoParcial"]);
      

      if(valueSelectOrdenar == "nombre") {
        var ordenadaNombre = listaTrabajosTiempoParcial[0].sort(function ordenar(a, b) { 
          return b.titulo < a.titulo ?  1 
              : b.titulo > a.titulo ? - 1 
              : 0;              
        });
        pintarTiempoParcial(ordenadaNombre);
      }

      if(valueSelectOrdenar == "masAlto"){
        var ordenadaPrecioAlto = listaTrabajosTiempoParcial[0].sort(function ordenar(a, b) { 
          return b.salario > a.salario ?  1 
              : b.salario < a.salario ? - 1 
              : 0;              
        });
        pintarTiempoParcial(ordenadaPrecioAlto);
      }

      if(valueSelectOrdenar == "masBajo"){
        var ordenadaPrecioBajo = listaTrabajosTiempoParcial[0].sort(function ordenar(a, b) { 
          return b.salario < a.salario ?  1 
              : b.salario > a.salario ? - 1 
              : 0;              
        });
        pintarTiempoParcial(ordenadaPrecioBajo);
      }
   }



   






   



  
  
  

















