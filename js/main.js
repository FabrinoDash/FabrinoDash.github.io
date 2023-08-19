window.addEventListener('DOMContentLoaded',()=>{
    const homePage = document.getElementById('home');
    const aboutPage = document.getElementById('about');
    const contactsPage = document.getElementById('contacts');
    const storePage = document.getElementById('store');

    const homeBtn = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactsBtn = document.getElementById('contactBtn');
    const storeBtn = document.getElementById('storeBtn');
    
    homeBtn.onclick = function(){
        const showHide = new ShowHidePage("block","none","none","none");
        showHide.showHide();
        // const togg = new ClassToggler('active','','','');
        // togg.togler();
    }
    aboutBtn.onclick = function(){
        const showHide = new ShowHidePage("none","block","none","none");
        showHide.showHide();
        // const togg = new ClassToggler('','active','','');
        // togg.togler();
    }
    contactsBtn.onclick = function(){
        const showHide = new ShowHidePage("none","none","block","none");
        showHide.showHide();
        // const togg = new ClassToggler('','','active','');
        // togg.togler();
    }
    storeBtn.onclick = function(){
        const showHide = new ShowHidePage("none","none","none","grid");
        showHide.showHide();
        // const togg = new ClassToggler('','','','active');
        // togg.togler();
    }
    //time config and Display
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

    // ALL CLASSES
    class ShowHidePage{
        constructor(homeDisplay,aboutDisplay,contactDisplay,storeDisplay){
            this.homeDisplay=homeDisplay;
            this.aboutDisplay=aboutDisplay;
            this.contactDisplay=contactDisplay;
            this.storeDisplay=storeDisplay;
        }
        showHide(){
            homePage.style.display=this.homeDisplay;
            aboutPage.style.display=this.aboutDisplay;
            contactsPage.style.display=this.contactDisplay;
            storePage.style.display=this.storeDisplay;
        }
    }
    // class ClassToggler{
    //     constructor(homeToglle,aboutToglle,contactToglle,storeToglle){
    //         this.homeToglle=homeToglle;
    //         this.aboutToglle=aboutToglle;
    //         this.contactToglle=contactToglle;
    //         this.storeToglle=storeToglle;
    //     }
    //     togler(){
    //         homeBtn.classList.toggle(this.homeToglle);
    //         aboutBtn.classList.toggle(this.aboutToglle);
    //         contactsBtn.classList.toggle(this.contactToglle);
    //         storeBtn.classList.toggle(this.storeToglle);
    //     }
    // }
});