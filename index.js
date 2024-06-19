// criar um cronometro que comece a contar a partir de uma data inicial e vai até agora (data atual)

var dataInicial = new Date("2023-10-01T00:00:00");

function atualizarCronometro() {
    var dataAtual = new Date();
    var diferenca = dataAtual - dataInicial;
    console.log(diferenca)
    var segundos = Math.floor(diferenca / 1000);
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
    var dias = Math.floor(horas / 24);

    segundos = segundos % 60;
    minutos = minutos % 60;
    horas = horas % 24;

    document.querySelector(".dias").textContent = parseInt(dias) + " dias";
    document.querySelector(".horas").textContent = parseInt(horas) + " horas";
    document.querySelector(".minutos").textContent = parseInt(minutos) + " minutos";
    document.querySelector(".segundos").textContent = parseInt(segundos) + " segundos";
}

setInterval(atualizarCronometro, 1000);