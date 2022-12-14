
$(document).ready(function() {
    var ingredients_preSelect = [];
    var prixTotalM;
    var prixTotalXL;

    $('.bouton_ingredients').on('click', function() {
        elt = "<div class='div_ingredient_choisi'>";
        elt += '<span class="ingredient_choisi">';
        elt += this.id;
        elt += '</span>';
        elt += '<button class="close bouton_ingredient_close" aria-label="Close">';
        elt += '<span aria-hidden="true">&times;</span>';
        elt += '</button>';
        elt += '</div>';
        res = $(elt);
        $(this).parent().prev().append(res);
        addEventCloseIngre();
        addPrixTotal($(this));
        refreshPrixIngredients($(this).parent().parent());
    });


    $('.modal_ingredients').on("shown.bs.modal", function() {
        ingredients_preSelect = $(this).find(".div_ingredients_selected").children();
        prixTotalM = $(this).find(".prix_personnalisable_m").text();
        prixTotalXL = $(this).find(".prix_personnalisable_xl").text();
        refreshPrixIngredients($(this));
    });

    // des qu'on quitte un modal de choix d'ingredients, on refresh pour ne garder que ceux qui etaient pre-selectionnes
    $('.modal_ingredients').on("hidden.bs.modal", function() {
        var div_ingr = $(this);
        div_ingr.find(".div_ingredients_selected").children().each(function () {
            $(this).remove();
        });
        div_ingr.find(".div_ingredients_selected").append(ingredients_preSelect);
        $(this).find(".bouton_ingredients").removeAttr("disabled");
        refreshPrixTotal($(this));
    });

    function refreshPrixIngredients(elt) {
        // alert("badoum");
        //alert(elt.find(".div_ingredient_choisi").length);
        console.log(elt.find(".div_ingredient_choisi"));
        let nb_ingr = elt.find(".div_ingredient_choisi").length;
        if (nb_ingr >= 6) {
            elt.find(".bouton_ingredients").attr("disabled", true);
            return;
        }
        else if (nb_ingr >= 3) {
            elt.find(".prix_ingredient_gratuit").attr("hidden", true);
            elt.find(".prix_ingredient").removeAttr("hidden");
            //alert("badoum");            
        }
        else {
            //alert("test");
            elt.find(".prix_ingredient").attr("hidden", true);
            elt.find(".prix_ingredient_gratuit").removeAttr("hidden");
            // alert("bibidou");
        }
        elt.find(".bouton_ingredients").removeAttr("disabled");
    }

    function addPrixTotal(elt)  {
        var prix = elt.next();
        if (prix.is(":visible")) {
            var prixM = parseFloat(prix.parent().parent().next().find(".prix_personnalisable_m").text());
            var prixXL = parseFloat(prix.parent().parent().next().find(".prix_personnalisable_xl").text());
            prixM += parseFloat(prix.text());
            prixXL += parseFloat(prix.text());
            prix.parent().parent().next().find(".prix_personnalisable_m").html(prixM + "???");
            prix.parent().parent().next().find(".prix_personnalisable_xl").html(prixXL + "???");
        }
    }

    function subPrixTotal(elt) {
        var prix = elt.parent().parent().next().find(".prix_ingredient");
        if (prix.is(":visible")) {
            var prixM = parseFloat(prix.parent().parent().next().find(".prix_personnalisable_m").text());
            var prixXL = parseFloat(prix.parent().parent().next().find(".prix_personnalisable_xl").text());
            console.log(prixM);
            prixM -= parseFloat(prix.text());
            prixXL -= parseFloat(prix.text());
            if (prixM < prixTotalM && prixXL < prixTotalXL) { return; }
            prix.parent().parent().next().find(".prix_personnalisable_m").html(prixM + "???");
            prix.parent().parent().next().find(".prix_personnalisable_xl").html(prixXL + "???");
        }
    }

    function refreshPrixTotal(elt) {
        elt.find(".prix_personnalisable_m").html(prixTotalM);
        elt.find(".prix_personnalisable_xl").html(prixTotalXL);
    }

    function addEventCloseIngre() {
        $('.bouton_ingredient_close').on("click", function() {
            var par = $(this).parent().parent().parent();
            subPrixTotal($(this));
            $(this).parent().remove();
            refreshPrixIngredients(par);
        });
    }

});