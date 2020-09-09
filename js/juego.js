let boton=document.getElementById('btn');
let contador=0;
let mensajeError="Usted ha fallado.";
let respuesta=document.getElementById('respuesta');


function Validacion()
{
     if(respuesta == '70% proteina 30% lipidos' && contador < 4)
     {
          alert('Usted ha ganado');
     }
     else if(respuesta != '70% proteina 30% lipidos')
     {
          contador++;
          alert('Respuesta incorrecta, vuelva a intentarlo.');
     }
     else if(respuesta != '70% proteina 30% lipidos' && contador==2)
     {
          contador++;
          alert('Una de sus dos composiciones se encuentra en las carnes');
     }
     else if(respuesta != '70% proteina 30% lipidos' && contador==3)
     {
          contador++;
          alert('La respuesta es como la preparacion del fernet');
     }
     else if(respuesta != '70% proteina 30% lipidos' && contador==4)
     {
          contador++;
          alert('Usted ha perdido.');
     }
}

boton.addEventListener('click', Validacion,true);