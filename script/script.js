'use strict';

var tableau_morpion = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tableau_win_player = [];
var tableau_win_ordi = [];
var des;
var regles=true;

function regles_du_jeu()
{
   if(!regles) return;

   regles=false;

   alert("Voici les règles du morpion : \n Le but du jeu est d'aligner trois croix ou trois ronds. Le premier qui réussit à aligner trois de ses signes remporte la manche.\n Il y a autant de manches que vous désirez. Il suffit de réinitialiser la grille à la fin de la manche en cliquant sur le lien ou d'attendre qu'elle se réinitialise toute seule (15 sec)");
}

function tirage_au_sort()
{
  des = Math.floor((Math.random() * 2) + 1); // Retourne soit 1 soit 2
  if(des == 1)
  { 
    alert("Vous commencez !"); 
  }
  else 
  { 
    alert("Chimix commence !");
    playordi();
  }
}

function game()
{
    reset();
  /* COMMENCEMENT DE LA PARTIE */

  $('.div_morpion').removeClass("hide");

  $('.empty_case').mouseover(function(){
    if($(this).hasClass('empty_case'))
    { 
      $(this).html("X").removeClass("empty_case").addClass("hover_case"); 
    }
  });

  $('.empty_case').mouseout(function(){
    if($(this).hasClass('hover_case'))
    { 
      $(this).html("").removeClass("hover_case").addClass("empty_case"); 
    }
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
      $('.case_a').eq(elements).removeClass("empty_case").removeClass("hover_case").addClass("click_case");
      tableau_morpion[elements] = "";
      tableau_win_player.push(nombre);
      win();

      if($('.empty_case').length == 0 && des == 1)
      {
        setTimeout(try_again, 100); 
      }
      else if(($('.empty_case').length == 1 && des == 2))
      {
        playordi();
        win();
        setTimeout(try_again, 1000); 
      }
      else
      {
        playordi();
      }
    }
    else 
    { 
      alert("Case occupée"); 
    }
  }
  else 
  { 
    alert("Le nombre doit être entier et compris entre 1 et 9"); 
  }
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
  $('.case_a').eq(elements_ordi).removeClass("empty_case").removeClass("hover_case").addClass("click_case");
  tableau_morpion[elements_ordi] = "";
  tableau_win_ordi.push(case_ordi);
}

function reset()
{
  $('.click_case').html("").removeClass("click_case").addClass("empty_case");
  tableau_morpion = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

function try_again()
{
  alert("Partie terminée !");
  if(confirm("Une autre partie ?"))
  {
    game();
  }
}

function win()
{
  var twp = tableau_win_player;
  var two = tableau_win_ordi;
  var resultat;

  for(var i=0; i<twp.length-1; i++)
  {
    if(twp[i]!="")
    {
      twp[i] = twp[i].toString();
      resultat += twp[i];
    }
  }
  alert(twp);
  alert(two);
  alert(resultat);
}