'use strict';

function regles_du_jeu()
{
  alert("Voici les règles du morpion : \n Le but du jeu est d'aligner trois croix ou trois ronds. Le premier qui réussit à aligner trois de ses signes remporte la manche.\n Il y a autant de manches que vous désirez. Il suffit de réinitialiser la grille à la fin de la manche en cliquant sur le lien ou d'attendre qu'elle se réinitialise toute seule (15 sec)");
}

$('.empty_case').click(function(){
  if($(this).hasClass('empty_case'))
  {
    $(this).removeClass("empty_case");
    $(this).addClass("click_case");
    $(this).html("X");
  }
  else
  {
    alert('Case occupée');
  }
});

$('.empty_case').mouseover(function(){
  if($(this).hasClass('empty_case'))
  { $(this).html("X"); }
});

$('.empty_case').mouseout(function(){
  if($(this).hasClass('empty_case'))
  { $(this).html(""); }
});
