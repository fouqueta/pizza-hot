 
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

    var but_nav_cur = $('#carte_menus');
    but_nav_cur.css("background-color", "gold");
    var div_item_cur = $("#div_produits_menus");

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


    // function init_actions_nav {
    //     let modal = '
    //     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    //     Launch demo modal
    //     </button>

    //     <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    //     <div class="modal-dialog modal-dialog-centered" role="document">
    //         <div class="modal-content">
    //         <div class="modal-header">
    //             <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
    //             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //             </button>
    //         </div>
    //         <div class="modal-body">
    //             ...
    //         </div>
    //         <div class="modal-footer">
    //             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    //             <button type="button" class="btn btn-primary">Save changes</button>
    //         </div>
    //         </div>
    //     </div>
    //     </div>';

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


