 
$(document).ready(function() {
    var items = {
        menus: {
           div: $('#div_produits_menus'),
           nav: 'carte_menus'
        },
        entrees: {
            div: $('#div_produits_entrees'),
            nav: 'carte_entrees'
        }, 
        pizzas: {
           div: $('#div_produits_pizzas'),
           nav: 'carte_pizzas'
        }, 
        boissons: {
            div: $('#div_produits_boissons'),
            nav: 'carte_boissons'
        }, 
        desserts: {
            div: $('#div_produits_desserts'),
            nav: 'carte_desserts'
        },
        sauces: {
            div: $('#div_produits_sauces'),
            nav: 'carte_sauces'
        } 
    };

    var but_nav_cur = $('#carte_pizzas');
    but_nav_cur.css("background-color", "gold");
    var div_item_cur = items.pizzas.div;

    for (const t in items) {
        document.getElementById(items[t].nav).addEventListener('click', function() {
            div_item_cur.attr("hidden", true);
            div_item_cur = items[t].div;
            div_item_cur.removeAttr("hidden");
            but_nav_cur.css("background-color", "lightyellow");
            but_nav_cur = $("#"+items[t].nav);
            but_nav_cur.css("background-color", "gold");
        });
        document.getElementById(items[t].nav).addEventListener('mouseover', function() {
            $("#"+items[t].nav).css("background-color", "gold");
        });
        document.getElementById(items[t].nav).addEventListener('mouseleave', function() {
            if (!($("#"+items[t].nav).is(but_nav_cur))) {
                $("#"+items[t].nav).css("background-color", "lightyellow");
            }
        });
    }

    document.getElementById("logo").addEventListener('click', function() {
        redirectionMenus();
    });
    document.getElementById("lien_menu").addEventListener('click', function() {
        redirectionMenus();
    });


    function redirectionMenus() {
        div_item_cur.attr("hidden", true);
        div_item_cur = items.menus.div;
        div_item_cur.removeAttr("hidden");
        but_nav_cur.css("background-color", "lightyellow");
        but_nav_cur = $("#"+items.menus.nav);
        but_nav_cur.css("background-color", "gold");
    }

// Màj des prix quand on change de taille
    $(".select-taille").change(function() {
       if ($(this).find(":selected").text()==="Medium") {
            $(this).next().next().attr("hidden", true);
            $(this).next().removeAttr("hidden");
       }
       else {
            $(this).next().attr("hidden", true);
            $(this).next().next().removeAttr("hidden");
       }
    });

    // init_actions_nav();

    // function init_actions_nav() {
    //     let modal = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">'
    //     modal+= 'Launch demo modal'
    //     modal+= '</button>'
    //     modal+= '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'
    //     modal+= '<div class="modal-dialog modal-dialog-centered" role="document">'
    //     modal+= '<div class="modal-content">'
    //     modal+= '<div class="modal-header">'
    //     modal+= '<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>'
    //     modal+= '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
    //     modal+= '<span aria-hidden="true">&times;</span>'
    //     modal+= '</button>'
    //     modal+= '</div>'
    //     modal+= '<div class="modal-body">'
    //     modal+= '...'
    //     modal+= '</div>'
    //     modal+= '<div class="modal-footer">'
    //     modal+= '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
    //     modal+= '<button type="button" class="btn btn-primary">Save changes</button>'
    //     modal+= '</div></div></div></div>';
    //     elt = $(modal);
    //     document.append(elt);
    // }



    // function init_produits(s) {
    //     // let div_i = '<img src="/images/coincoin.jpg" alt="coincoin" class="img-fluid" alt="Responsive image"/>';
    //     // let x = $(div_i);
    //     // div_menus.append(x);
    //     for (let i = 0; i < 15; i++) {
    //         let div_item = '<div';
    //         div_item += ' id="item_' + s + '_' + i + '"';
    //         div_item += ' class="div_produit col-12 col-sm-6 col-md-6 col-lg-4 text-center">';
    //         div_item += '<div class="inside_div_produit"><img src="images/coincoin.jpg" alt="coincoin" class="img-fluid" alt="Responsive image"/>';
    //         div_item += '<p>Test</p></div></div>';
    //         //div_item += '<img src=images/' + + i + '.jpg /></div>';
    //         let el = $(div_item);
    //         s.append(el);
    //     }
    // }

});


