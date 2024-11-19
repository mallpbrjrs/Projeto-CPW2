
const key = "4ad832de5ada57bd59262ec8d171e2d3"; 

function dadosNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade relativa do ar: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`; 
}


async function buscarCidade(cidade) { 
    try { 
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${key}&units=metric`); 
        const dados = await resposta.json(); 
        dadosNaTela(dados); 
}     catch (error) { 
        console.error("Erro ao buscar os dados:", error); 
    } 
} 
function cliqueiNoBotao() { 
    const cidade = document.querySelector(".input-city").value; 
    buscarCidade(cidade); 
}