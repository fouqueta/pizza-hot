

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

    init_produits(div_menus);
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
    }

    function init_produits(s) {
        // let div_i = '<img src="/images/coincoin.jpg" alt="coincoin" class="img-fluid" alt="Responsive image"/>';
        // let x = $(div_i);
        // div_menus.append(x);
        for (let i = 0; i < 15; i++) {
            let div_item = '<div';
            div_item += ' id="item_' + s + '_' + i + '"';
            div_item += ' class="div_produit col-12 col-sm-6 col-md-6 col-lg-4 text-center">';
            div_item += '<div class="inside_div_produit"><img src="/images/coincoin.jpg" alt="coincoin" class="img-fluid" alt="Responsive image"/>';
            div_item += '<p>Test</p></div></div>';
            //div_item += '<img src=images/' + + i + '.jpg /></div>';
            let el = $(div_item);
            s.append(el);
        }
    }

});


