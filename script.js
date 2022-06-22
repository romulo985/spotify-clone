document.querySelector('.botao-pause').style.display = 'none'

let musicas = [
    {titulo:'GTwin Engines', artista:'Jeremy korpas', src:'musicas/Twin Engines - ROCK -Jeremy Korpas.mp3', img:'imagens/electric-guitar-rock.jpg'},
    {titulo:'Intellect', artista:'Yung Logos', src:'musicas/Intellect - HIP-HIP - Yung Logos.mp3', img:'imagens/man-hip-hop.jpg'},
    {titulo:'Better Days', artista:'Neffex', src:'musicas/Better Days - POP - NEFFEX.mp3', img:'imagens/old-pop.png'}
];


let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica =  document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


//EVENTOS
document.querySelector('.botao-play').addEventListener('click',tocarMusica);

document.querySelector('.botao-pause').addEventListener('click',pausarMusica);

musica.addEventListener('timeupdate',atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

renderizarMusica(indexMusica);

//duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//FUNCOES

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });  
}


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}


function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');

    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let tempodecorrido = document.querySelector('.inicio');
    tempodecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}


