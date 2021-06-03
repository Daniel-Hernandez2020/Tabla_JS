const table = document.getElementById("table_product")
const tbody = document.querySelector("tbody")
const add = document.getElementById("add")
const delet = document.getElementById("delete")
let num_rows = 0 



add.addEventListener('click', add_row)
delet.addEventListener('click',delete_row)


function add_row(){

    const delet_spec = document.createElement("BUTTON")
    contenedor = document.createElement("TD")
    contenedor.addEventListener('click',specific_delete_row)


    const fragment = document.createDocumentFragment()
    
    


    const row = document.createElement("TR")
    const code = document.createElement("TD")
    const name = document.createElement("TD")
    const price = document.createElement("TD")
      

    code.textContent = num_rows + 1
    name.textContent = "Tubular 2X2"
    price.textContent ="$25.00"
    delet_spec.textContent = "Delete"


    contenedor.append(delet_spec)
    
    fragment.append(code)
    fragment.append(name)
    fragment.append(price)
    fragment.append(contenedor)

    
    row.append(fragment)
    tbody.append(row)


    num_rows = tbody.rows.length
    
    
    console.log(tbody.rows.length)

    


    
}

function delete_row(){


   if (tbody.rows.length == 0) {
       alert("No hay filas que borrar")
   }else{ 
        
        
        
        
        /*table.children[1].removeChild(table.children[1].lastElementChild)*/
        tbody.removeChild(tbody.lastElementChild)

        num_rows-=1
    }
    
}


function specific_delete_row(){

    let row = contenedor.parentNode
    console.log(row)

    tbody.removeChild(row)
    
    num_rows-=1

                       
      console.log(`Esta es de la especifica ${num_rows}`)

      if(num_rows > 1)
      reorder_rows()

}


function reorder_rows(){//esta podria estar en un callback y despues en su correspondiente version en promesa para luego usar fetch como un perrazo(5/18/2021)

    console.log(tbody.children[1])
    for ( let i=0; i<tbody.rows.length; i++){

        
        tbody.children[i].children[0].textContent = i+1;

    }
    

}