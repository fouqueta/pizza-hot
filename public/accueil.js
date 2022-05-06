

function replace(){

  //  $("#carte_pizzas").click(function () {
        console.log("oui");

        document.getElementById('div_produits').innerHTML = '';
        let newDivContent = document.createElement('div');
        newDivContent.innerHTML = "cc je suis le nouveau div pizza";
        document.getElementById('div_produits').appendChild(newDivContent);
    }

  /*  $("#carte_boissons").mousedown(function(){
        console.log("oui");
        document.getElementById('div_produits').innerHTML = '';
        let newDivContent = document.createElement('div');
        newDivContent.innerHTML = "cc je suis le nouveau div boisson";
        document.getElementById('div_produits').appendChild(newDivContent);
    });*/


$(document).ready(function(){
   // replace();
    document.getElementById('carte_pizzas').addEventListener('onclick', replace);



});





   /* $("#carte_pizzas").click(function(){
                 function myFunction() {
                      x=document.getElementsByClassName("div_produits");  // Find the elements
                      for(var i = 0; i < x.length; i++){
                          x[i].innerText="Hello JavaScript!";    // Change the content
                      }

                  }


                  var data = ""
                  (data)=>{
                      let doc = document.open('text/html','replace');
                      doc.write(data)
                      doc.close();
                  }
              });


    }*/
