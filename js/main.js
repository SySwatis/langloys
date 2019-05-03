var context = {
  "1_" : {
    "label": "Dossier"
  },
  "2_" : {
    "label": "Numéro de dossier"
  },
  "3_" : {
    "label": "Date de la simulation"
  },
  "4_" : {
    "label": "Date de réalisation de l'opération (à titre prévisionnel)"
  },
  "5_" : {
    "label": "Nom du ou des acquéreur(s)"
  },
  "6_" : {
    "label": "Numéro des comptes acquéreur(s) (comptabilité)"
  },
  "7_" : {
    "label": "Nom du ou des vendeur(s)"
  },
  "8_" : {
    "label": "Numéro des comptes vendeur(s) (comptabilité)"
  },
  "9_" : {
    "label": "Dans quel cadre l'opération s'effectue-t-elle ?",
    "values": ["Choisir","Le vendeur est un Particulier","L’acquéreur est un Particulier"]
  },
  "10_" : {
    "label": "Vente en milieu rural"
  },
  "11_" : {
    "label": "Nature de la vente",
     "values": ["Choisir...",
  "Vente d'immeuble (régime de la copropriété)",
  "Vente de terrain à bâtir affectés à tous usages",
  "Vente de garage",
  "Vente de terrain à bâtir (pour promoteurs et marchands de biens)",
  "Acquisition de biens et droits immobiliers (professionnels assujettis à la TVA)",
  "Vente de propriété rurale au profit de titulaires de baux",
  "Acquisition ou rétrocession par la SAFER",
  "VEFA et ventes de locaux d'habitation dans le neuf",
  "VEFA et ventes de locaux d'habitation dans le neuf de 1 à 10 lots",
  "VEFA et ventes de locaux d'habitation dans le neuf de 11 à 24 lots",
  "VEFA et ventes de locaux d'habitation dans le neuf de 25 à 99 lots",
  "VEFA et ventes de locaux d'habitation dans le neuf de 100 à 249 lots",
  "VEFA et ventes de locaux d'habitation dans le neuf de 250 à 499 lots",
  "VEFA et ventes de locaux d'habitation dans le neuf de plus de 500 lots"]
  },
  "12_" : {
    "label": "?"
  },
  "13_" : {
    "label": "Département",
    "values": ["Choisir...","01","02","..."]
  },
  "14_" : {
    "label": "Habitation située dans une zone de revitalisation rurale ?",
    "tooltip":"Abattement sur les droits Art. 1954 F Ter 5ème alinéa du C.G.I."
  },
  "15_" : {
    "label": "La vente est-elle réalisée acte en mains ?",
    "toggle_true_ids":["18","40","67"]
  },
  "16_" : {
    "label": "Promesse de vente reçue sous forme authentique ?",
    "toggle_true_ids":["25"]
  },
  "17_" : {
    "label": "Montant des honoraires de rédaction (HT)",
  },
  "18_" : {
    "label": "Demande d’urbanisme auprès d’un tiers ?",
    "label_3":"Indéterminé",
    "checked_none":true,
    "toggle_true_ids":["17"]
  },
  "19_" : {
    "label": "Frais de la demande d’urbanisme"
  },
  "20_" : {
    "label": "Quel est le taux de TVA qui concerne l'opération",
    "disabled":true,
  },
  "21_" : {
    "label": "Montant de la vente"
  },
  "22_" : {
    "label": "Montant de la partie exigible du prix"
  },
  "23_" : {
    "label": "Charges augmentatives du prix"
  },
  "24_" : {
    "label": "Charges diminutives du prix"
  },
  "25_" : {
    "label": "La vente comporte-t-elle des meubles ?",
    "checked_no":true,
    "toggle_true_ids":["26"]
  },
  "26_" : {
    "label": "Montant",
    "disabled":true
  },
  "27_" : {
    "label": "La vente a-t-elle été négociée ?",
    "label_1":"Par une agence",
    "label_2":"Par l'étude",
  },
  "28_" : {
    "label": "Commission à la charge de ?",
    "label_1":"Du vendeur",
    "label_2":"De l'acquéreur"
  },
  "29_" : {
    "label": "Montant (TTC)"
  },
  "30_" : {
    "label": "Y a-t-il des conditions de servitudes à prévoir ?",
    "checked_no":true,
    "toggle_true_ids":["29","30","38"]
  },
  "31_" : {
    "label": "Sont-elles dans ?",
    "label_1":"Le même acte",
    "label_2":"Un acte séparé"
  },
  "32_" : {
    "label": "Montant pour le calcul des droits"
  },
  "33_" : {
    "label": "La vente comporte-t-elle un dépôt de garantie ?",
    "toggle_true_ids":["32","33"]
  },
  "34_" : {
    "label": "Montant"
  },
  "35_" : {
    "label": "Y a-t-il substitution prévue ?"
  },
  "36_" : {
    "label": "La vente comporte-t-elle une provision sur frais ?",
    "toggle_true_ids":["35"]
  },
  "37_" : {
    "label": "Montant"
  },
  "38_" : {
    "label": "Rappel de la nature de la vente"
  },
  "39_" : {
    "label": "Rappel du montant de la vente"
  },
  "40_" : {
    "label": "Rappel du montant de la commission d'agence"
  },
  "41_" : {
    "label": "La vente comporte-t-elle un ou plusieurs prêts ?",
    "checked_no":true,
    "toggle_true_ids":["86"]
  },
  "42_" : {
    "label": "Prêt n°1"
  },
  "43_" : {
    "label": "Type de prêt",
    "label_1":"Sous seing privée (SSP)",
    "label_2":"Notarié"
  },
  "44_" : {
    "label": "Montant du prêt"
  },
  "45_" : {
    "label": "Déblocage des fonds par le notaire"
  },
  "46_" : {
    "label": "Le prêt hypothécaire est réalisé ?",
    "label_1":"Dans le même acte",
    "label_2":"Dans un acte séparé"
  },
  "47_" : {
    "label": "Indiquer le montant du prêt ou des capitaux empruntés"
  },
  "48_" : {
    "label": "Indiquer le montant du prêt soumis au PPD"
  },
  "49_" : {
    "label": "Indiquer le montant du prêt faisant l’objet d’une hypothèque"
  },
  "50_" : {
    "label": "La vente comporte-t-elle un cautionnement sans garantie hypothécaire ?",
    "toggle_true_ids":["51","52"]
  },
  "51_" : {
    "label": "La caution est prise :",
    "label_1":"Dans le même acte",
    "label_2":"Dans un acte séparé"
  },
  "52_" : {
    "label": "Indiquer le montant du cautionnement"
  },
  "53_" : {
    "label": "La vente comporte-t-elle un cautionnement avec garantie hypothécaire ?",
    "toggle_true_ids":["54","55"]
  },
  "54_" : {
    "label": "La caution est prise :",
    "label_1":"Dans le même acte",
    "label_2":"Dans un acte séparé"
  },
  "55_" : {
    "label": "Indiquer le montant du cautionnement"
  },
  "56_" : {
    "label": "Rappel du montant du dépôt de garantie"
  },
  "57_" : {
    "label": "Le dépôt de garantie est-il restituable ?"
  },
  "58_" : {
    "label": "Montant de la provision sur frais"
  },
  "59_" : {
    "label": "Charges annexes à prévoir dans le décompte ?",
    "toggle_true_ids":["60"]
  },
  "60_" : {
    "label": "Montant"
  },
  "61_" : {
    "label": "Souhaitez-vous faire le calcul de prorata de charges ?",
    "toggle_true_ids":["62","63","64","65"]
  },
  "62_" : {
    "label": "Rappel de la date de réalisation de l’opération"
  },
  "63_" : {
    "label": "Montant de la taxe foncière"
  },
  "64_" : {
    "label": "Montant des charges de copro. (trim)"
  },
  "65_" : {
    "label": "Montant du fond de roulement"
  },
  "66_" : {
    "label": "Rappel de la nature de la vente"
  },
  "67_" : {
    "label": "Rappel du montant de la vente"
  },
  "68_" : {
    "label": "Régime de propriété",
    "values":["Vendeur seul","Indivision","Démembrement"]
  },
  "69_" : {
    "label": "Age de l'usufruitier",
    "values":["Choix","18","19","20","..."]
  },
  "70_" : {
    "label": "Nombre de vendeur"
  },
  "71_" : {
    "label": "Nom des vendeurs"
  },
  "72_" : {
    "label": "Repartition entre les vendeurs"
  },
  "73_" : {
    "label": "Montant de la commission d’agence TTC"
  },
  "74_" : {
    "label": "Montant autres frais"
  },
  "75_" : {
    "label": "Y a-t-il des prêts à solder ?",
    "checked_no":true,
    "toggle_true_ids":["77","78","79"]
  },
  "76_" : {
    "label": "Prêt n°1"
  },
  "77_" : {
    "label": "Prêt n°2"
  },
  "78_" : {
    "label": "Mainlevée hypothécaire à effectuer"
  },
  "79_" : {
    "label": "Indiquer le montant de la créance"
  },
  "80_" : {
    "label": "Indiquer les frais de pouvoirs"
  },
  "81_" : {
    "label": "Y a-t-il une plus-value ?",
    "toggle_true_ids":["82"]
  },
  "82_" : {
    "label": "Connaissez-vous le montant ?",
    "toggle_true_ids":["83","92"],
    "toggle_false_ids":["82","83","92"],
  },
  "83_" : {
    "label": "Calculer"
  },
  "84_" : {
    "label": "Montant de la plus-value"
  }
}

var handlefunc = function (elmnt,file,i) {
    // Grab the template script
  if( $("#"+file).length ) {

    var theTemplateScript = $("#"+file).html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // Define our data object
    /*    var context={
      "_1" : {
        "label": "label text",
        "value": "Value"
      }
    };*/

    id = $(elmnt).attr('id') ? $(elmnt).attr('id') : "_0";



    if( typeof context[id]!=='undefined' ) {
  
      context[id]['id'] = id+'_'+i;
      // Pass our data to the template
      var theCompiledHtml = theTemplate(context[id]);

      

    } else {
      console.log('context id undefined in : '+ file);
    }
    // Add the compiled html to the page
    $(elmnt).html(theCompiledHtml);

  }
}

beforeDomActions = function() {

    $('#pageLoading').remove();
    $('[data-toggle="tooltip"]').tooltip();

    $( '#11_' ).find('select').on('change', function() {
      $('#38_,#66_').find('input').val($(this).val()).attr('disabled','disabled');
    });

    $( '#29_' ).find('input').on('change', function() {
      $('#39_,#67_').find('input').val($(this).val()).attr('disabled','disabled');
    });


    $('.goto').on('click touch', function(e) {
        gotoId = $(this).data('goto');
         e.preventDefault();
        $('a[href="'+gotoId+'"]').trigger('click');
          $('html, body').animate({
            scrollTop: parseInt($(gotoId).offset().top - 118)
          }, 0, 'linear',function(){
            $(gotoId).closest('.disabled').removeAttr('disabled').removeClass('disabled');
          });

    });

    $('select').on('change', function(){
    
        if( $(this).val().indexOf('Vefa') >= 0 ) {
            $('.vefa').removeClass('disabled').find('input').removeAttr('disabled');
            //$('.no_vefa').addClass('enabled');
        } else {
            $('.vefa').addClass('disabled').find('input').attr('disabled','disabled');
            //$('.no_vefa').removeClass('enabled');
        }
        if( $(this).val()==='Indivision' ) {
            $('.vendeur.cloned').remove();
            $('button.indivision').find('.count').text('');
            $('.indivision').removeAttr('disabled').removeClass('disabled');
        } else {
            $('.indivision').attr('disabled','disabled').addClass('disabled');
           
        }
        if( $(this).val()==='Démembrement' ) {
            $('.vendeur.cloned').remove();
            $('#69_').removeClass('disabled');
            $("#vendeur_0").clone().appendTo(el.data('clone-to')).addClass('cloned').find('.index').text(2);
            $('.vendeur').removeClass('col-sm-4').removeClass('col-sm-12').addClass('col-sm-6');
            $('button.indivision').find('.count').text('');
        } else {
            $('#69_').addClass('enabled');
        }
        if( $(this).val()==='Vendeur seul' ) {
            $('.vendeur.cloned').remove();
            $('.vendeur').removeClass('col-sm-4').removeClass('col-sm-6').addClass('col-sm-12');
            $('button.indivision').find('.count').text('');
        } else {
            
        }
    });

    $('.toggle_yes_no input[type="radio"]').on('click',function(){
      var el = $(this).closest('.toggle_yes_no');
      if( $(this).val()==='yes' ) {
        if(el.next('fieldset').length) {
          el.next('fieldset').removeClass('disabled').removeAttr('disabled');
        } else {
          el.next('div').find('input').removeClass('disabled').removeAttr('disabled');
        }
      } else {
        if(el.next('fieldset').length) {
          el.next('fieldset').addClass('disabled').attr('disabled','disabled');
        } else {
          el.next('div').find('input').addClass('disabled').attr('disabled','disabled');
        }
      }
    });

    $('.card-body .card').focusin(function() {
        $(this).addClass('focusincard');
    });

    $('.card-body .card').focusout(function() {
        $('.card-body .card').removeClass('focusincard');
    });

    var updateCol = function(countBlock) {
      switch(countBlock) {
                case 2:
                col = "6";
                break;
                case 3:
                col = "4";
                break;
                case 4:
                col = "3";
                break;
                case 5:
                  col = "2";
                break;
                default:
                col = "12";
            } 

            $(el.data('class')).removeClass('col-sm-12');
            $(el.data('class')).removeClass('col-sm-6');
            $(el.data('class')).removeClass('col-sm-3');
            $(el.data('class')).addClass('col-sm-'+col);
    }
    $( document ).ready(function() {
        $('.clone').on('click',function(){
            el = $(this);
            var block =  el.data('clone');
            var container = el.data('clone-to');
            $(block).clone().appendTo(el.data('clone-to')).addClass('cloned');
            $('.btn-remove').on('click', function(){
                $(this).closest('.cloned').remove();
                var countBlock = parseInt($(container).find(el.data('class')).length);
                el.find('.count').text(countBlock);
                updateCol(countBlock)
            });
            $(container).find(el.data('class')).each(function(i){
                $(this).find('.index').text(i+1);
            });
            var countBlock = parseInt($(container).find(el.data('class')).length);
            el.find('.count').text(countBlock);
            updateCol(countBlock);
        });
    });

    $(document).ready(function() {
    function scroll_to_top(div) {
        $(div).click(function() {
            $('html,body').animate({scrollTop: 0}, 'slow');
        });
        $(window).scroll(function(){
            if($(window).scrollTop()<500){
                $(div).fadeOut();
            } else{
                $(div).fadeIn();
            }
        });
    }
    scroll_to_top("#scroll_to_top");
});
  
}

includeHTML = function () {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("w3-include-html");
                includeHTML();
                //tplfunc(elmnt);
                handlefunc(elmnt,file,i);
            }
        }

        xhttp.open("GET", 'html/'+file+'.html', true);
        xhttp.send();
        /* Exit the function: */
        return;
        }
    }
    beforeDomActions();
}

includeHTML();
