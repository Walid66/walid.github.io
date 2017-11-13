let monTitre = document.querySelector("h1");
monTitre.textContent = "Hello Messi!";

monTitre.onmouseleave = function()
{
    if(monTitre.textContent == "Hello Messi!")
    {
        monTitre.textContent = "Messi Hello!";
    }
    else
    {
        monTitre.textContent = "Hello Messi!";
    }
}

let maVariable = 1, mavariable = 2 , condition1 = true;
document.write("<br>")
document.write(maVariable+mavariable);
document.write("<br>"+!condition1);

let var1 = "1";
let var2 = "2";
document.write("<br>"+var1+var2);

let parfumGlace = "chocola";
if (parfumGlace == "chocolat")
{
    document.write("<br>Merci pour le chocolat");
}
else
{
    document.write("<br>Non j'aime plutôt le chocolat<br>");
}

function Somme (v1, v2)
{
    return v1+v2;
}

document.write(Somme(5,6));

let monImage = document.querySelector("img");
monImage.onmouseover = function()
{
    let maSrc = monImage.getAttribute("src");
    if(maSrc == "images/messi.jpg")
    {
        monImage.setAttribute("src","images/trico.jpg");
    }
    else
    {
        monImage.setAttribute("src","images/messi.jpg");        
    }
}

let monBouton = document.querySelector("button");

function definirUtilisateur ()
{
    let monNom = prompt("Veuillez saisir votre nom");
    localStorage.setItem("nom", monNom);
    monTitre.textContent = monNom + " est un grand fan de Messi! (1)";
}

//if(!localStorage.getItem("nom"))
if( (monTitre.textContent == null) || (!localStorage.getItem("nom")) || (monTitre.textContent == "") ) 
{
    definirUtilisateur();
}
else
{
    let monNomEnregistre = localStorage.getItem("nom");
    monTitre.textContent = monNomEnregistre + " est un grand fan de Messi (2)!";
}

monBouton.onclick = function()
{
    definirUtilisateur();
}

//localStorage.clear();