

$(document).ready(function() {
    var div_menus = $('#div_produits_menus');
    var div_entrees = $('#div_produits_entrees');
    var div_pizzas = $('#div_produits_pizzas');
    var div_boissons = $('#div_produits_boissons');
    var div_desserts = $('#div_produits_desserts');
    var div_sauces = $('#div_produits_sauces');

    
    div_entrees.hide();
    div_pizzas.hide();
    div_boissons.hide();
    div_desserts.hide();
    div_sauces.hide();
    // init_produits();

    document.getElementById('carte_menus').onclick = function() {
        replace(div_menus);
    }

    document.getElementById('carte_entrees').onclick = function() {
        replace(div_entrees);
    }

    document.getElementById('carte_pizzas').onclick = function() {
        replace(div_pizzas);
    }

    document.getElementById('carte_boissons').onclick = function() {
        replace(div_boissons);
    }

    document.getElementById('carte_desserts').onclick = function() {
        replace(div_desserts);
    }

    document.getElementById('carte_sauces').onclick = function() {
        replace(div_sauces);
    }


    function replace(s) {
        $('#div_produits>div').hide();
        s.show();
        // let newDivContent = document.createElement('div');
        // newDivContent.innerHTML = "cc je suis le nouveau div " + s;
        // document.getElementById('div_produits').appendChild(newDivContent);
    }

    function init_produits() {

    }
});


