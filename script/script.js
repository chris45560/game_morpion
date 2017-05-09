'use strict';

var tableau_morpion = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function regles_du_jeu()
{
  alert("Voici les règles du morpion : \n Le but du jeu est d'aligner trois croix ou trois ronds. Le premier qui réussit à aligner trois de ses signes remporte la manche.\n Il y a autant de manches que vous désirez. Il suffit de réinitialiser la grille à la fin de la manche en cliquant sur le lien ou d'attendre qu'elle se réinitialise toute seule (15 sec)");
}

function tirage_au_sort()
{
  var des = Math.floor((Math.random() * 2) + 1); // Retourne soit 1 soit 2
  if(des == 1)
  { alert("Vous commencez !"); }
  else
  { alert("Chimix commence !");
    playordi();
  }
}

function game()
{
    /* COMMENCEMENT DE LA PARTIE */

  $('.empty_case').mouseover(function(){
    if($(this).hasClass('empty_case'))
    { $(this).html("X"); }
  });

  $('.empty_case').mouseout(function(){
    if($(this).hasClass('empty_case'))
    { $(this).html(""); }
  });

  regles_du_jeu();
  tirage_au_sort();
}

function play(nombre)
{
  if(nombre >= 1 && nombre <= 9)
  {
    nombre = parseInt(nombre);
    var elements = nombre - 1;
    if(tableau_morpion.indexOf(nombre) != -1)
    {
      $('.case_a').eq(elements).html("X");
      $('.case_a').eq(elements).removeClass("empty_case").addClass("click_case");
      tableau_morpion[elements] = "";
      if($('.empty_case').length != 0)
      {
        playordi();
      }
      else{ alert("Partie terminée !"); }
    }
    else { alert("Case occupée"); }
  }
  else { alert("Le nombre doit être entier et compris entre 1 et 9"); }
}

function playordi()
{
  do
  {
    var case_ordi = Math.floor((Math.random() * 9) + 1); // Retourne un chiffre entier entre 1 et 9
    var elements_ordi = case_ordi - 1;
  }
  while($('.case_a').eq(elements_ordi).html() == "X" || $('.case_a').eq(elements_ordi).html() == "0");

  $('.case_a').eq(elements_ordi).html("0");
  $('.case_a').eq(elements_ordi).removeClass("empty_case").addClass("click_case");
  tableau_morpion[elements_ordi] = "";
}
