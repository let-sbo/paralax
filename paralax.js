const fondo=document.getElementById('fondo');
const titulo=document.getElementById('titulo');
const luna= document.getElementById('luna');
const ciudad=document.getElementById('ciudad');

window.addEventListener('scroll',()=>{
    // console.log('hola')
    let scroll=window.pageYOffset;

    fondo.style.transform = `translateY(${scroll*-.1}px)`;
    titulo.style.transform =`translateY(${scroll*-.3}px)`;
    ciudad.style.transform=`traslateY(${scroll*.2}px)`;
    luna.style.transform = `translateY(${scroll*.2}px)`;
})