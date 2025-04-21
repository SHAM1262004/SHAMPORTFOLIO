// nav bar codes

let navbaricon=(id)=> document.getElementById(id);

let baricon=navbaricon("baricon"),
    xicon=navbaricon("xicon"),
    subnav2=document.getElementById("sub-nav2")


function nav(id){
    if(id=="baricon"){
        subnav2.style.top="70px"; 
        baricon.style.display="none"
        xicon.style.display="block";
    }
    else{
        subnav2.style.top="-300px"; 
        baricon.style.display="block";
        xicon.style.display="none";
    }
}

function subnav(){
    subnav2.style.top="-300px"; 
    xicon.style.display="none";
    baricon.style.display="block";
}

//navbar click code

let navbar1 = document.querySelectorAll('.nav-item')


function navclick(clickitem){

    for(i=0;i<navbar1.length;i++){
        if(clickitem === navbar1[i].id){
            navbar1[i].classList.add('nav-back')
        }else{
            navbar1[i].classList.remove('nav-back')
        }
    }

}

//navbar scroll animation code

let navbar3 = document.querySelector('#nav')

let boxscroll = window.scrollY

window.addEventListener('scroll',()=>{

    if(window.scrollY > boxscroll){
        navbar3.style.top="-80px"
    }else{
        navbar3.style.top="0px"
    }
    boxscroll = window.scrollY
})


//end of nav bar codes
