window.addEventListener('DOMContentLoaded', () => {
    const ho  = document.querySelector('.ho');
    const serv  = document.querySelector('.serv');
    const cont  = document.querySelector('.cont');
    // Toggle nav
    ho.onclick = function(){
        ho.classList.add('active');
        serv.classList.remove('active');
        cont.classList.remove('active');
    }

    serv.onclick = function(){
        serv.classList.add('active');
        ho.classList.remove('active');
        cont.classList.remove('active');
    }

    cont.onclick = function(){
        cont.classList.add('active');
        ho.classList.remove('active');
        serv.classList.remove('active');
    }

    const menu = document.getElementById('menu');
    const down_navigation = document.getElementById('down_navigation');
    menu.onclick = () => {
        down_navigation.classList.toggle("activated");
        if(down_navigation.classList.contains('activated')){
            down_navigation.style.display="flex";
        }else{
            down_navigation.style.display="none";
        }
    }
});