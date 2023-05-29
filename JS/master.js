// Check if there is local storage color option 
let mainColors = localStorage.getItem("color-option");
if(mainColors !==null){
    document.documentElement.style.setProperty('--main-color' ,mainColors);
//Remove ative class from colors list items
   document.querySelectorAll(".colors-list li").forEach(element =>{
    element.classList.remove("active");
    //Add active calss to element with data-color ==local storage item
    if(element.dataset.color === mainColors)
    element.classList.add(".active");
});   
}


//Toggle spin class on icon
document.querySelector(".toggle-settings i").onclick = function (){  
//Toggle class fa-cog for rotation on self 
    this.classList.toggle("fa-spin");
//Toggle class open no main setting box
document.querySelector(".setting-box").classList.toggle("open");
};
    // Handle active states 
    function handleActive(e){
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            //Remove active class from all childrens
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    }

//swith colors
const colorsLi = document.querySelectorAll(".colors-list li");
//Loop on All List items 
colorsLi.forEach(li => {
//click on every list-items
li.addEventListener("click", (e) => {
    //Set color on root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
    //set color on local storage 
    localStorage.setItem("color-option",e.target.dataset.color);
    handleActive(e);
});
});


//Select all bullets 
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
//Select all links    
const allLinks = document.querySelectorAll(".Header-bullets a");
function scroolToSomeWhere (elements){
elements.forEach(ele => {
    ele.addEventListener("click" , (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    }) ;
});
}
scroolToSomeWhere (allBullets);
scroolToSomeWhere (allLinks);

//Bullets as a option 
let bulletsSpan =  document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");

let bulleLocalItem = localStorage.getItem("bullets-option");
if (bulleLocalItem !== null){
    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if(bulleLocalItem === 'block' ){
        bulletsContainer.style.display = 'block'
        document.querySelector(".bullets-option .yes").classList.add("active");
    }else{
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }

}


bulletsSpan.forEach(span =>{
    
    span.addEventListener("click",(e) => {

        if(span.dataset.display === 'show'){
            bulletsContainer.style.display = 'block'
            localStorage.setItem("bullets-option" ,'block' )
        }else{
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets-option" ,'none' )
        }
       handleActive(e);


    });

    
});







/*change background image automaticly
// select landing page element 

let landingPage = document.querySelector(".landing");

// Get Array Of Images 

let imgsArray = [ "01.jbg" , "02.jbg" , "03.jbg", "landing.jpg" ];


setInterval(()=> {
    //Get random Num
    let randomNumber = Math.floor(Math.random()*imgsArray.length);
     // Change background image url 
    landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
 }, 2000);
*/

