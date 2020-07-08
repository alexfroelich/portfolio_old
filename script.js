//Nightmode
var nightMode = document.querySelector(".change-theme");
nightMode.addEventListener("click", function(){
   
    document.body.classList.toggle("dark-mode")
})

//Castora Gallery
var castoraImages = ['assets/castora.jpg','assets/castora_1.png', 'assets/castora_2.png', 'assets/castoraGameOver.jpg']
var gameImageCastora = document.getElementById("castora-main-image");
var castoraGallery = document.getElementsByClassName("castora-img");


for (let index = 0; index < castoraGallery.length; index++) {
    castoraGallery[index].addEventListener("click", function(){
        gameImageCastora.src = castoraImages[index];
    })
    
}  

//Ermitao Gallery
var ermitaoImages = ['assets/ermitaoLogo.png','assets/ermitaoGameplay.png', 'assets/ErmitaoPOW.png', 'assets/ErmitaoLatilson.png']
var gameImageErmitao = document.getElementById("ermitao-main-image");
var ermitaoGallery = document.getElementsByClassName("ermitao-img");


for (let index = 0; index < ermitaoGallery.length; index++) {
    ermitaoGallery[index].addEventListener("click", function(){
        gameImageErmitao.src = ermitaoImages[index];
    })
    
}  

//Satellight Gallery
var satellightImages = ['assets/satellight_splash_mini.png','assets/satellight_1.png',
 'assets/satellight_2.png', 'assets/satellight_3.png'];
var gameImageSatellight = document.getElementById("satellight-main-image");
var satellightGallery = document.getElementsByClassName("satellight-img");


for (let index = 0; index < satellightGallery.length; index++) {
    satellightGallery[index].addEventListener("click", function(){
        gameImageSatellight.src = satellightImages[index];
    })
    
}

//Terraform Gallery
var terraformImages = ['assets/terraform_gameplay2.png',  'assets/terraform_npc.png', 'assets/bossataque1.gif', 
  'assets/purificaçao.gif'];
var gameImageTerraform = document.getElementById("terraform-main-image");
var terraformGallery = document.getElementsByClassName("terraform-img");


for (let index = 0; index < terraformGallery.length; index++) {
    terraformGallery[index].addEventListener("click", function(){
        gameImageTerraform.src = terraformImages[index];
    })
    
}
//Satellight video
//https://www.youtube.com/watch?v=DtrJE5TOvbY
//Ermitao
//https://www.youtube.com/watch?v=tRY0YC6RWUw
