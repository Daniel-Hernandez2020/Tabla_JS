//Intentare hacer lo que hizo el amigo del canal codigos de programacion :
//Lo de especificar en que elemento se va a insertar codigo html
//en este video se hace uso de document.getElementsByTagName que devuelve un NodeList
//y haciendo uso de la nomenclatura para acceder a los valores de un array lo hacemos con 
//el nodelist que tenemos con esto conseguimos acceder al elemento que queriamos que era 
//la primera fila dentro del tbody
//

const table = document.getElementById("table_product")
const tbody = document.querySelector("tbody")
const add = document.getElementById("add")
const delet = document.getElementById("delete") //No me deja usar "delete"
let num_rows = 0
//let code = 0



add.addEventListener('click', add_row)//Aqui iria primero con callback despues con promesa hacer 2 archivos uno que se llame table_callback y el otro table_promesa
                                            //Para inmediatamente terminar esto meterle el api de fetch para usar una base de datos con mysql y php con PDO y despues arreglar un poco 
                                            //la tabla con flexbox para que no se desmadre y empezar a usar mas flexbox para diseñar layouts para que igual ya empiece a diseñar el
                                            //layout responsive de MiHaBilidad con media querys, esta tabla la tengo pensada para que sea el control de usuarios para bloquear cuentas
                                            //eliminar usuarios y todo eso
delet.addEventListener('click',delete_row)

function add_row(){

    let delet_spec = document.createElement("BUTTON")
    //I create a BUTTON and a TD
    //const button = document.createElement("BUTTON")
    const container = document.createElement("TD")

    //!!Probando sin hacer un rollo de callback (Mirar el codifo de abajo de este)
    //Give event to button delet // Hay usar las promesas aqui es una buena forma
    delet_spec.addEventListener('click',()=>{//Estoy batallando por esta funcion siento esto se podria hacer con un callback o con una promesa de forma mas profesional
                                             //o puede ser que estoy batallando porque no se bien el ambito de las variables (05/13/21)

        specific_delete_row(container)  //Que que pedo porque estoy haciendo me estoy confundiendo, esto, no es un callback?
    
        })

    //no funcion delet_spec.addEventListener('click',specific_delete_row)//Se podria hacer esto lo de arriba creo que es redundante o no tiene tanto caso hacer uso del potencia de un callback


    /*Mayor consumo de recursos de forma innecesaria!!!!!!!!!
    const num_row = table.rows.length;
    table.insertRow(num_row).innerHTML = "<td>" + num_row +  "</td><td>Snack</td><td>25.00</td><td><button onclick='delete_row(this)'>Delete</button></td>"

    const fragment = document.createDocumentFragment();*/

    //First I create the fragment that contain all code HTML  to injection 
    const fragment = document.createDocumentFragment()

    //Veamos si podemos poner un fragment dentro de otro fragment
    const subfragment = document.createDocumentFragment()

    //para los td
    const subfragment2 = document.createDocumentFragment()

    //Forma optimizada


    //I create elements
    const row = document.createElement("TR")
    let code = document.createElement("TD")
    const name = document.createElement("TD")
    const price = document.createElement("TD")
    
    //console.log(tbody.rows.length)
    

    //I give content to elements
    code.textContent = num_rows + 1//Este metodo hace su trabajo de la forma en como dije mas abajo, pero lo que pasa es que aqui
                                         //no se añadido todavia el elemento, por eso le pongo un +1 
    name.textContent = "Tubular 2X2"
    price.textContent ="$25.00"
    delet_spec.textContent = "Delete"

    //I give content to TD with a BUTTON
    /*delet.append(button)*/ //Creo que aqui estoy cometiendo un error pues esto produciria que el DOM se redibujara
    subfragment.append(delet_spec)
    container.append(subfragment)
    
    //I add elements to container in this case it's the row 
    subfragment2.append(code)
    subfragment2.append(name)
    subfragment2.append(price)
    subfragment2.append(delet)

    //Con una sola inyeccion meto todos los td's en la fila de la tabla evitando asi que el dom se recarge por cada td al meter cada uno a la fila
    row.append(subfragment2)

    //I add row to the fragment
    fragment.append(row)
   
    //I add the only fragment to the table finally
    /*table.children[1].append(fragment)*/
    tbody.append(fragment)
    num_rows = tbody.rows.length
    

    /*if (tbody.rows.length > 1) {

        for ( i=1; i<=tbody.rows.length; i++){

             

                tbody.rows.children[1].textContent = i

             
    
        }
        
    }*/

    
    //Partial Testing
    //console.log(code.textContent)

    
    console.log(tbody.rows.length)

    


    
}

function delete_row(){


   if (tbody.rows.length == 0) {
       alert("No hay filas que borrar")
   }else{ 
        
        //la ultima fila que tiene mi tabla
        /*const num_row = table.rows.length - 1*/; //Para saber cual es el numero de filas que tiene mi tabla

        //table.deleteRow(num_row) //Nota con la propiedad length optienes el numero de elementos que tiene dentro
                                //un elemento en este caso al tratarse de una tabla cuenta la cabecera(!atualizacion no cuenta desde la cabecera
                                // porque ya hago uso del tbody solamente en lugar de a la tabla en general, si no me equivoco 5/13/2021!) como parte de esos elementos a contar
                                //es importante no confundir el indice con el tamaño de la tabla que se optienes con lenght, pues los indices de las
                                //posiciones de los elementos comienza a contar a partir de cero
        
        //Que pasa si en ves de hacer lo de arriba lo hago de esta forma
        table.children[1].removeChild(table.children[1].lastElementChild) //Carajo no me habia dado cuenta como es que puedo acceder a las filas creadas dinamicamente con js
                                                                          //fuera del ambito de definicion de ellas, creo que es porque table es global y de cierta forma eso me lo permite
    }
    
}


//I create a special function that delete a specific row
function specific_delete_row( ){

    const row = this.parentNode
    console.log(row)

    tbody.removeChild(row)
    //num_rows = tbody.rows.length-1
    num_rows = num_rows -1 //Esta variable es global la declare e inicialice con cero despues cuando la ocupo modifico su valor desde otra funcion


    
    
                           
   // console.log(`Esta es de la especifica ${tbody.rows.length}`) 
      console.log(`Esta es de la especifica ${num_rows}`)

      if(num_rows > 1)
      reorder_rows()
}


function reorder_rows(){

    for ( i=1; i<=tbody.rows.length; i++){

        tbody.children[i].children[i].textContent = i;

    }


}