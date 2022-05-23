
$(document).ready(function() {
    var ingredients_ajoutes = [];


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
        ingredients_ajoutes.push(res);
    });


    // des qu'on quitte un modal de choix d'ingredients, on refresh pour ne garder que ceux qui etaient pre-selectionnes
    $('.modal_ingredients').on("hidden.bs.modal", function() {
        for (const ingredient in ingredients_ajoutes) {
            ingredients_ajoutes[ingredient].remove();
        };
    });

});