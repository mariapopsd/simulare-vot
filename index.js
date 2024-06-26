const body = document.getElementById("body");
const container = document.getElementById('container')
const pageOne = document.getElementById('page-1');
const pageTwo = document.getElementById('page-2');
const stamp = document.getElementById('stamp');
const modal = document.getElementById('modal')
const h1 = document.getElementsByTagName('h1');
const h2 = document.getElementsByTagName('h2');
const videoSrc = document.getElementById('video-src');
const externalLink = document.getElementById('externalLink');

let stampPosition = {};

container.addEventListener('click',  (event)=>{
    stampPosition.x = event.pageY;
    stampPosition.y = event.pageX;
    stamp.style.display = "block";
    if(window.innerWidth > 600){
        stamp.style.top = `${stampPosition.x-40}px`;
        stamp.style.left = `${stampPosition.y-40}px`;
    }
    if(window.innerWidth < 600){
        stamp.style.top = `${stampPosition.x-20}px`;
        stamp.style.left = `${stampPosition.y-20}px`;
    }
    stamp.style.backgroundPosition = 'center';
    stamp.style.backgroundRepeat = 'no-repeat';

    if(event.target.classList[2] !== 'valid'){
        h1[0].textContent = `Ai votat în afara căsutei de vot`;
        h2[0].textContent = 'Votul tău este anulat';
        h2[1].textContent = 'Vrei sa incerci din nou?';
        videoSrc.style.display= "none";
    }
    setTimeout(() => {
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
      }, 500);
})

pageOne.addEventListener('click',  (event)=>{

    let candidat = '';

    if(event.target.classList[1] === 'pnl'){
        candidat = 'Ionel Bogdan';
        setVideo(candidat, 'resources/pnl.mp4', false);
    }
    if(event.target.classList[1] === 'udmr'){
        candidat = 'Zsolt-Istvan Pap';
        setVideo(candidat, "_", false);
    }
    if(event.target.classList[1] === 'aur'){
        candidat = 'Costel Pîrvănoiu';
        setVideo(candidat, 'resources/aur.mp4', false);
    }
    if(event.target.classList[1] === 'psd'){
        candidat = 'Doru Dăncuș';
        setVideo(candidat, 'resources/psd.mp4', false);
    }
    if(event.target.classList[1] === 'v9'){
        candidat = 'Mircea Cirț';
        setVideo(candidat, 'resources/v9.mp4', true);
    }
    if(event.target.classList[1] === 'ad'){
        candidat = 'Călin Herțeg';
        setVideo(candidat, "_", true);
    }
    if(event.target.classList[1] === 'sos'){
        candidat = 'Bogdan Hodorogea';
        setVideo(candidat, "_", false);
    }
    if(event.target.classList[1] === 'pe'){
        candidat = 'Sever-Iulian Ciucă';
        setVideo(candidat, "_", true);
    }
})

pageTwo.addEventListener('click',  (event)=>{

    let candidat = '';

    if(event.target.classList[1] === 'usr'){
        candidat = 'Brian Cristian';
        setVideo(candidat, "_",true);
    }
    if(event.target.classList[1] === 'reper'){
        candidat = 'Florin Barbur';
        setVideo(candidat, "_", true);
    }
    if(event.target.classList[1] === 'pv'){
        candidat = 'Claudiu Filip';
        setVideo(candidat, "_", false);
    }
    if(event.target.classList[1] === 'pusl'){
        candidat = 'Liviu Pop';
        setVideo(candidat, 'resources/pusl.mp4', false);
    }
    if(event.target.classList[1] === 'fd'){
        candidat = 'Cristian Anghel';
        setVideo(candidat, "_", false);
    }
    if(event.target.classList[1] === 'pot'){
        candidat = 'Cătălin Groza';
        setVideo(candidat, "_", false);
    }
    if(event.target.classList[1] === 'pncr'){
        candidat = 'Dolha Mircea';
        setVideo(candidat, "_", false);
    }
    if(event.target.classList[1] === 'independent'){
        candidat = 'Sergiu Zainea';
        setVideo(candidat, "_", true);
    }
})


pageOne.addEventListener('mouseover', (event)=>{
    let pageOneCols = [];
    if(window.innerWidth > 600){
        let y = 16;
        let lx = 28;
        let rx = 330;
        let increment = 230;
        generateList(pageOneCols, document.getElementsByClassName('box-1'), y, lx, rx, increment );
    }
    if(window.innerWidth < 600){
        let y = 22;
        let lx = 9;
        let rx = 160;
        let increment = 120;
        generateList(pageOneCols, document.getElementsByClassName('box-1'), y, lx, rx, increment );
    }
})

pageTwo.addEventListener('mouseover', (event)=>{
    let pageTwoCols = [];
    if(window.innerWidth > 600){
        let y = 16;
        let lx = 28;
        let rx = 330;
        let increment = 230;
        generateList(pageTwoCols, document.getElementsByClassName('box-2'), y, lx, rx, increment );
    }
    if(window.innerWidth < 600){
        let y = 22;
        let lx = 9;
        let rx = 160;
        let increment = 120;
        generateList(pageTwoCols, document.getElementsByClassName('box-2'), y, lx, rx, increment );
    }
})

function generateList(cols, src, y, lx, rx, increment){
    for(let i = 0; i < src.length; i++){
        let element = src[i];
        if(!cols.find(el => el === element)){
            cols.push(element);
        }
    }
    cols.forEach((element, index) => {
        if(index % 2 === 0){
            element.style.left = `${lx}px`;
            element.style.top = `${y}px`;
        } else {
            element.style.left = `${rx}px`;
            element.style.top = `${y}px`;
        }
        if(index % 2 !== 0){
            y += increment;
        }
    })
}

function setVideo(candidat, attribute, isGood){
    videoSrc.style.display= "none";

    h1[0].textContent = `L-ai votat pe ${candidat}.`;
   if(isGood){
       h2[1].textContent = '';
   } else {
        h2[1].textContent = 'Vrei sa incerci din nou?';
   }
    if(attribute !== "_"){
        h2[0].textContent = 'Uite ce ai votat defapt!';
        videoSrc.style.display= "block";
        videoSrc.setAttribute('src', attribute);
    }
    
}
