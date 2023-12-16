window.addEventListener('DOMContentLoaded', () => {
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