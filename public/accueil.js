$(document).ready(function(){
    document.getElementById('carte_menus').onclick = function() {
        console.log("oui");
        replace('carte_menus');
    }
    document.getElementById('carte_entrees').onclick = function() {
        console.log("oui");
        replace('carte_entrees');
    }
    document.getElementById('carte_pizzas').onclick = function() {
   // $("#carte_pizzas").click(function(){
        console.log("oui");
        replace('carte_pizzas');
    }
    document.getElementById('carte_boissons').onclick = function() {
        console.log("oui");
        replace('carte_boissons');
    }
    document.getElementById('carte_desserts').onclick = function() {
        console.log("oui");
        replace('carte_desserts');
    }
    document.getElementById('carte_sauces').onclick = function() {
        console.log("oui");
        replace('carte_sauces');
    }

    function replace(s){
        document.getElementById('div_produits').innerHTML = '';
        let newDivContent = document.createElement('div');
        newDivContent.innerHTML = "cc je suis le nouveau div " + s;
        document.getElementById('div_produits').appendChild(newDivContent);
    }
});





 /*
(data)=>{
    let doc = document.open('text/html','replace');
    doc.write(data)
    doc.close();
}
*/
