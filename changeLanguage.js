var languages = {
    ENGLISH: 1,
    PORTUGUESE: 2

}
var language = languages.PORTUGUESE


//Array to Store Elements to Translate
var texts = []
//Header Items
const headerAbout = {id:'header-about', en : 'About', pt : 'Sobre'}
const headerShowcase = {id:'header-showcase', en : 'Games Developed', pt : 'Jogos Desenvolvidos' }

/*const  = {
    id:'', 
    en : '', 
    pt : '' 
   }
   */
//Name Section
const position = {id:'position', en : 'Developer', pt : 'Desenvolvedor' }

//About Section
const aboutTitle = {id:'about-title', en : 'ABOUT', pt : 'SOBRE' }
const aboutText = {
    id:'about-text', 
    en : 'Game programmer (Unity and Godot Engine). Also knows Python, Javascript, HTML, CSS, C++ and Swift.', 
    pt : 'Desenvolvedor de Jogos Digitais (Unity). Também tem conhecimentos de Swift, JavaScript, HTML, CSS, C++ e Python' 
}

//Showcase Section
const showcaseTitle = {
    id:'showcase-title',
    en : 'GAMES DEVELOPED',
    pt : 'JOGOS DESENVOLVIDOS'
 }
 //#region Castora
 //CASTORA
 const  castora1= {
     id:'castora-1', 
     en : 'Second Most Voted Game at Global Game Jam 2020 - Curitiba', 
     pt : 'Segundo Jogo Mais Votado na Global Game Jam 2020 - Curitiba' 
    }
const  castora2= {
     id:'castora-2', 
     en : 'Local Multiplayer  (Cooperative)', 
     pt : 'Multijogador Local (Cooperativo)' 
    }
const  castora3= {
     id:'castora-3', 
     en : 'Made with Unity', 
     pt : 'Desenvolvido na Unity' 
    }
const  castora4= {
     id:'castora-4', 
     en : 'Joysticks Supported', 
     pt : 'Suporte Para Joysticks' 
    }
 
//#endregion Castora
//#region Ermitao 
//Ermitao
const ermitao1 = {
    id:'ermitao-1', 
    en : 'Most Voted Game at Global Game Jam 2019 - Curitiba', 
    pt : 'Jogo Mais Votado na Global Game Jam 2019 - Curitiba' 
   }
const ermitao2 = {
    id:'ermitao-2', 
    en : 'Local Multiplayer (Versus)', 
    pt : 'Multijogador Local (Versus)' 
   }
const ermitao3 = {
    id:'ermitao-3', 
    en : 'Made With Unity', 
    pt : 'Desenvolvido na Unity' 
   }
const ermitao4 = {
    id:'ermitao-4', 
    en : "Uses 'Makey Makey' as Input System", 
    pt : 'Utiliza \'Makey Makey\' como Sistema de Input' 
   }
//#endregion Ermitao
//#region Satellight
const  satellight1= {
    id:'satellight-1', 
    en : 'Puzzle Game for Android Devices', 
    pt : 'Jogo estilo \'Quebra-Cabeça\' para Dispositivos Android' 
   }
const  satellight2= {
    id:'satellight-2', 
    en : 'More Than 40 Levels', 
    pt : 'Mais de 40 Níveis' 
   }
const  satellight3= {
    id:'satellight-3', 
    en : 'Made with Unity', 
    pt : 'Desenvolvido na Unity' 
   }
const  satellight4= {
    id:'satellight-4', 
    en : 'Available in Both English and Portuguese', 
    pt : 'Disponível em Inglês e Português' 
   }
const  satellight5= {
    id:'satellight-5', 
    en : 'Available at ', 
    pt : 'Disponível para Jogar na ' 
   }  
//#endregion Satellight

//#region Terraform
const  terraform1= {
    id:'terraform-1', 
    en : 'Shown at SBGames 2017', 
    pt : 'Exibido na SBGames 2017' 
   }
const  terraform2= {
    id:'terraform-2', 
    en : 'Single Player', 
    pt : 'Single Player' 
   }
const  terraform3= {
    id:'terraform-3', 
    en : 'Made with Unity', 
    pt : 'Desenvolvido na Unity' 
   }
const  terraform4= {
    id:'terraform-4', 
    en : 'Final Project of Specialization Course', 
    pt : 'Projeto Final Do Curso de Especialização em Desenvolvimentos de Jogos Digitais' 
   }
const  terraform5= {
    id:'terraform-5', 
    en : 'Available at ', 
    pt : 'Disponível para Jogar na ' 
   }  
//#endregion Terraform
//
texts.push(headerAbout, headerShowcase, position,
    aboutTitle,aboutText, showcaseTitle,
    castora1, castora2, castora3, castora4, 
    ermitao1, ermitao2, ermitao3, ermitao4,
    satellight1, satellight2, satellight3, satellight4,
    terraform1, terraform2, terraform3, terraform4
    )


//Get all items to translate
var itemsToTranslate = document.getElementsByClassName("translate")


//console.log(itemsToTranslate);
var idToTranslate = itemsToTranslate[1].id



//Multi-Language Texts


//console.log(texts)
//Change Language
//headerAbout.innerHTML = headerAboutTexts.pt;
var pt = document.getElementById("lang-pt")
var en = document.getElementById("lang-en")
var fadeOutTimer
var fadeInTimer
pt.addEventListener("click", function(){
    if(language == languages.PORTUGUESE)
         return;
    
    language = languages.PORTUGUESE
    fadeOutTimer = setInterval(fade, 1)
    
})

en.addEventListener("click", function(){
    if(language == languages.ENGLISH)
        return;

    language = languages.ENGLISH
    fadeOutTimer = setInterval(fade, 1)
   
})

var opacity = 1
//Get the reference to the wrapper
wr = document.getElementById("wrapper")
translate()
//function to fade out

function fade() {
    
    opacity -= 0.01
   
    
    wr.style.opacity = opacity
    if(wr.style.opacity <= 0){
        wr.style.opacity = 0;
       clearInterval(fadeOutTimer)
       translate()
    }

}

function fadeIn() {
    opacity += 0.01
    wr.style.opacity = opacity
    if(wr.style.opacity >= 1){
        wr.style.opacity = 1;
       clearInterval(fadeInTimer)
      
    }
}

function translate() {
    
    for(var itemKey in itemsToTranslate){
       
        for(var key in texts){
            if(texts[key].id == itemsToTranslate[itemKey].id){
               
                switch (language) {
                    case languages.ENGLISH:
                        
                        itemsToTranslate[itemKey].innerHTML = texts[key].en;
                        break;
                    case languages.PORTUGUESE:
                       
                        itemsToTranslate[itemKey].innerHTML = texts[key].pt;
                        break;
                    default:
                        break;
                }
               
                break
            }
        }
    }

   fadeInTimer = setInterval(fadeIn, 10 )
}
//function to fade in

   
    
