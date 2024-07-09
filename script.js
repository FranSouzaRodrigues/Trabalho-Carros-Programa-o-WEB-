localStorage.informacoesSobreCarro = "";

function informacoesSobreCarro(){
    let Inmodelo = document.getElementById("modelo");
    let modelo = Inmodelo.value;
    
    let Infabricante = document.getElementById("fabricante");
    let fabricante = Infabricante.value;
    
    let Inano = document.getElementById("ano");
    let ano = Inano.value;

    let Inplaca = document.getElementById("placa");
    let placa = Inplaca.value;

    let InvalorAtual = document.getElementById("valorAtual");
    let valorAtual = InvalorAtual.value;

    if(modelo == "" || fabricante == "" || ano == "" || placa == "" || valorAtual == ""){
        alert("Preencha todos os campos!");
        return
    }

    let informacoesTabela = document.getElementById("infromacoesTabela");

    let table = document.createElement("table");

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    var elemento1 = document.createTextNode(modelo);
    var elemento2 = document.createTextNode(fabricante);
    var elemento3 = document.createTextNode(ano);
    var elemento4 = document.createTextNode(placa);
    var elemento5 = document.createTextNode(valorAtual);

    informacoesTabela.appendChild(table);

    table.appendChild(tr);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    td1.appendChild(elemento1);
    td2.appendChild(elemento2);
    td3.appendChild(elemento3);
    td4.appendChild(elemento4);
    td5.appendChild(elemento5);

    Inmodelo.value = "";
    Infabricante.value = "";
    Inano.value = "";
    Inplaca.value = "";
    InvalorAtual.value = "";

    localStorage.informacoesSobreCarro = informacoesTabela;
}

let adicionarVeiculo = document.getElementById("botaoAdicionar");
adicionarVeiculo.addEventListener("click", informacoesSobreCarro);