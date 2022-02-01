
window.addEventListener("load", function(){
 /*------------ page loader -------------------------*/
 document.querySelector(".page-loader").classList.add("fade-out");
 setTimeout(function(){
    document.querySelector(".page-loader").style.display="none";
 },600);
 /*------------ Animation on this scroll ------------*/
 AOS.init();
})

/*----------------------toggle navbar---------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open");
}

/*----------- close nav when clicking item------------------*/
document.addEventListener("click", function(e){
      if(e.target.closest(".nav-item")){
          toggleNav();
      }

});

/*----------------------sticky header------------------------*/
window.addEventListener("scroll", function(){
   if(this.pageYOffset < 60){
       document.querySelector(".header").classList.add("sticky");

   }
   else{
    document.querySelector(".header").classList.remove("sticky");
   }
});


/*---------------------- menu tabs ------------------------------*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
   if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
       const target = e.target.getAttribute("data-target");
       menuTabs.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
       const menuSection = document.querySelector(".menu-section");
       menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
       menuSection.querySelector(target).classList.add("active");
       // animation on scroll
       AOS.init();
   }
}) 

/*---------------------- buffe menu ------------------------------*/

/*const buffeMenuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
   if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
       const target = e.target.getAttribute("data-target");
       menuTabs.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
       const menuSection = document.querySelector(".menu-section");
       menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
       menuSection.querySelector(target).classList.add("active");

     
     
     
       /*<button type="button" class="menu-tab-item" data-target="#licor">standard</button>
      
       <div class="row menu-tab-content active" id="appetizer">
       <div class="menu-item" data-aos="fade-up-right">
         <div class="menu-item-title">
           <img src="img/logga.png" alt="">
           <h3>1. vårrule <br><span>a)Kicking b)Köttfars c)Vegetarisk d)Lax</span></h3>
           
         </div>
           <div class="menu-item-price">
             59.00
         </div>
       </div>-----*/