
$(document).ready(function() {
    var ingredients_preSelect = [];


    $('.bouton_ingredients').on('click', function() {
        elt = "<div class='div_ingredient_choisi'>";
        elt += '<span class="ingredient_choisi">'
        elt += this.id;
        elt += '</span>';
        elt += '<button class="close" aria-label="Close" onclick="this.parentNode.remove();">';
        elt += '<span aria-hidden="true">&times;</span>';
        elt += '</button>';
        elt += '</div';
        res = $(elt);
        $(this).parent().prev().append(res);
    });


    $('.modal_ingredients').on("shown.bs.modal", function() {
        ingredients_preSelect = $(this).find(".div_ingredients_selected").children();
    })

    // des qu'on quitte un modal de choix d'ingredients, on refresh pour ne garder que ceux qui etaient pre-selectionnes
    $('.modal_ingredients').on("hidden.bs.modal", function() {
        var div_ingr = $(this);
        div_ingr.find(".div_ingredients_selected").children().each(function () {
            $(this).remove();
        });
        for (const ingr of ingredients_preSelect) {
            div_ingr.find(".div_ingredients_selected").append(ingredients_preSelect);
        }
    });

});