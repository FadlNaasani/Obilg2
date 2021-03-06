
let BilettArray  =[];

function kjop() {

    let filmvalg = document.getElementById("filmliste");
    let antallBil = document.getElementById("antall");
    let fornavn = document.getElementById("forNavn");
    let etterNv = document.getElementById("etterNavn");
    let telefon = document.getElementById("telefon");
    let epost = document.getElementById("epost");

    let OptionFeil= document.getElementById("feilOption")
    let antallfeil = document.getElementById("feilAntall");
    let forfeil = document.getElementById("feilfor");
    let etterNfeil = document.getElementById("feilEtter");
    let telNrfeil = document.getElementById("feilTelf");
    let epostfeil = document.getElementById("feilEpost");


    let bilettinfo = {

        film: filmvalg.value,
        antall1: antallBil.value,
        fornavn1: fornavn.value,
        etternavn1: etterNv.value,
        telefon1: telefon.value,
        epost1: epost.value
    }
    const bilettArrayliste = [filmvalg, antallBil, fornavn, etterNv, telefon, epost];

    if (filmvalg.value ===""){
        OptionFeil.innerHTML = "Må velge en film fra lista!".fontcolor("red");
    }else{
        OptionFeil.innerHTML="";
    }

    if ((antallBil.value < 0) || (antallBil.value === "")) {
        antallfeil.innerHTML = "Må skrive ett tall og større enn null".fontcolor("red");
    } else {
        antallfeil.innerHTML = '';

        bilettArrayliste.antall1 = antallBil;
    }
    if (fornavn.value === "") {
        forfeil.innerHTML = "Må skrive noe inn i fornavn".fontcolor("red");
    } else {
        forfeil.innerHTML = '';

        bilettArrayliste.fornavn1 = fornavn;
    }
    if (etterNv.value === "") {
        etterNfeil.innerHTML = "Må skrive noe inn i etternavn".fontcolor("red");
    } else {
        etterNfeil.innerHTML = '';

        etterNfeil.innerHTML = '';

        bilettArrayliste.etternavn1 = etterNv;
    }
    if (telefon.value === "") {
        telNrfeil.innerHTML = "Må skrive noe inn i telefonnr".fontcolor("red");
    } else {
        telNrfeil.innerHTML = '';
        bilettArrayliste.telefon1 = telefon;
    }
    if (epost.value === "") {
        epostfeil.innerHTML = "Må skrive noe inn i Epost".fontcolor("red");
    } else {
        epostfeil.innerHTML = '';
        bilettArrayliste.epost1 = epost;
    }


    if (antallBil.value !== '' && antallBil.value > 0 && fornavn.value !== '' && etterNv.value !== '' && telefon.value !== '' && epost.value !== '' &filmvalg.value!=='') {

        forfeil.innerHTML = " ";
        etterNfeil.innerHTML = "";
        telNrfeil.innerHTML = " ";
        epostfeil.innerHTML = " ";
        antallfeil.innerHTML = '';

        BilettArray.push(bilettinfo)
    }


    let res ="<table class='table table-dark'><tr>"+
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>EtterNavn</th>" +
        "<th>Telefon Nr</th>" +
        "<th>Epost</th>" +
        "</tr></table>"

    for (let i of BilettArray) {
      res+="<table class='table table-sm'><tr>"+
            "<td scope=row>"+ i.film + "</td>" +
            "<td scope=row>"+ i.antall1 + "</td>"+
            "<td scope=row>"+ i.fornavn1 + "</td>"+
            "<td scope=row> "+i.etternavn1 + "</td>"+
            "<td scope=row>"+i.telefon1 + "</td>"+
            "<td scope='row'>"+i.epost1 + "</td>"+ "</tr></table>"

        for (let i in bilettArrayliste) {
            if(i!==" "){
         document.getElementById("visBilett").innerHTML = res;
            }
        }
    }
}

function deletes(){

    BilettArray=[];
    document.getElementById("visBilett").innerHTML= "";

    document.getElementById("feilAntall").innerHTML= " ";
    document.getElementById("feilfor").innerHTML= " ";
    document.getElementById("feilEtter").innerHTML= "";
    document.getElementById("feilTelf").innerHTML= " ";
    document.getElementById("feilEpost").innerHTML= " ";

    document.getElementById("antall").value= '';
    document.getElementById("forNavn").value= '';
    document.getElementById("etterNavn").value= '';
    document.getElementById("telefon").value='';
    document.getElementById("epost").value='';
}