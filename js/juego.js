
let boton=document.getElementById('btn');
let contador=0;
let respuesta=document.getElementById('respuesta');

function Validacion()
{

     

     if(respuesta == '70% proteina 30% lipidos' && contador < 4)
     {
          alert('Usted ha ganado');
     }
     else if(respuesta != '70% proteina 30% lipidos' && contador==2)
     {
          contador++;
          alert('Una de sus dos composiciones se encuentra en las carnes');
          document.getElementById('intentos').value= contador;
     }
     else if(respuesta != '70% proteina 30% lipidos' && contador==3)
     {
          contador++;
          alert('La respuesta es como la preparacion del fernet');
          document.getElementById('intentos').value= contador;
     }
     else if(respuesta != '70% proteina 30% lipidos' && contador==4)
     {
          alert('Usted ha perdido.');
          contador=0;
          document.getElementById('intentos').value= contador;
     }
     else if(respuesta != '70% proteina 30% lipidos')
     {
          contador++;
          alert('Respuesta incorrecta, vuelva a intentarlo.');
          document.getElementById('intentos').value= contador;
     }
}

boton.addEventListener('click', Validacion,true);