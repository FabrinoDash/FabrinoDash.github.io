var loader = document.getElementById('loader');
window.addEventListener('DOMContentLoaded',()=>{
    //time config and Display
    loader.style.display="none";
    var time = document.getElementById('time');
    setInterval(()=>{
        var message = document.getElementById('message');
        var h = new Date().getHours()
        var m = new Date().getMinutes()
        var s = new Date().getSeconds()
        if(s<10){
            s = "0"+s;
        }
        
        if(h < 10){
            h = "0"+h;
        }
        if(m < 10){
            m = "0"+m;
        }
        if(h>=4 && h < 8){
            message.innerHTML = "Early Morning";
        }
        else if(h>=5 && h <12){
            message.innerHTML = "Good Morning";
        }
        else if(h >= 12 && h  < 15){
            message.innerHTML = "Good Afternoon";
        }
        else if(h>=16 && h < 21){
            message.innerHTML = "Good Evening";
        }
        else if(h >= 21 || h < 4){
            message.innerHTML = "Good Night";
        }
        time.innerHTML=`${h}:${m}:${s}`;
    },1000);

    // OTHER CONFIG
    const menuBar = document.getElementById('menu');
    const nav_replace = document.getElementById('nav-replace');
    const main = document.querySelector('main');
    const closer = document.querySelector('.close-menu');

    menuBar.onclick = function(){
        nav_replace.style.right='0';
        console.log(nav_replace);
    }
    main.onclick = ()=>close();
    closer.onclick = ()=>close();

    function close(){
        nav_replace.style.right='-100%';
    }
});