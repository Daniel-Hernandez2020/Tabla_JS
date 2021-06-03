
//form.children[1].placeholder = "tiene que llenar el cuadro no sea pendejo"
const activar = document.getElementById('activar')
activar.addEventListener('click',a_procesar)

/*let title = document.getElementById('title')//No me dejaba modificar el textContent despues de traerlo mediante document.querySelector asi que tuve que cambiar a getElementBy
title.textContent = "La concha de su madre"*/

//No pude modificar un form si tener que hacerlo desde el padre el form
/*const form = document.querySelector('form')
/*const label1 = document.getElementById('label1')
label1.textContent = "Modificacion exitosa" // Marca null ya sea con querySelector o con getElementBy
form.children[0].textContent = "Modificacion exitosa"*/
 

function a_procesar(){
    
    var form = document.querySelector('form')
    const button = document.getElementById('button')
    const extra_label = document.getElementById('extra_label')
    var label1 = document.getElementById("label1")
    title = document.getElementById('title')//Quiero salir de duda si es porque el label esta dentro de el form o definitivamente un valor en una funcion sin importar si es 
    //variable global al llamar a una funcion solo se modificara temporalmente ahi pero al salir de la variable vuelve al valor por defecto o que hemos establecido en el HTML
   

    extra_label.textContent = "Habe haber que esta pasando aqui"

    /*label1.textContent = "Haber haber hijos de puta" marca null*/
    console.log(form.children[0])

    //button.addEventListener('click',procesar(form.children[0]))

    /*procesar(form.children[0])*/ //Si lo modifica pero cuando se sale de esta funcion vuelve al valor por defecto

    procesar(title)
    






}

function procesar(title){


    /*elemento.textContent = "Modificado solo funcion aqui"*/ //Si lo modifica pero solo mientras esta dentro de esta funcion

    title.textContent = "Modificado sin pasar por parametro" //No pude ni pasandolo solo se modifica cuando esta dentro de la funcion pero no se afecta el 
                                                              //valor de la propiedad texContent de la variable





}