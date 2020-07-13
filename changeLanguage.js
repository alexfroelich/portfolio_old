var languages = {
    ENGLISH: 1,
    PORTUGUESE: 2

}
var language = languages.ENGLISH


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
    en : 'Game programmer (Unity). Also knows Python, Javascript, HTML, CSS, C++ and Swift.', 
    pt : 'Desenvolvedor de Jogos Digitais (Unity). Também tem conhecimentos de Swift, JavaScript, HTML, CSS, C++ e Python.'
     
}
const aboutText2 = {
    id:'about-text-2', 
    en : 'Languages: Portuguese (native), English, Spanish(intermediate) and French (intermediate).', 
    pt : 'Idiomas: Português, Inglês, Espanhol(intermediário) e Francês (intermediário).' 
     
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
    en : 'Final Project (Specialization Course)', 
    pt : 'Projeto Final Do Curso de Especialização em Desenvolvimentos de Jogos Digitais' 
   }
const  terraform5= {
    id:'terraform-5', 
    en : 'Available at ', 
    pt : 'Disponível para Jogar na ' 
   }  
//#endregion Terraform
//#region Education
const educationTitle = {
    id:'education-title', 
    en : 'EDUCATION', 
    pt : 'FORMAÇÃO' 
   }
const specializationTitle = {
    id:'specialization-title', 
    en : 'Specialization: Game Development', 
    pt : 'Especialização: Desenvolvimento de Jogos Digitais' 
}
const specializationDescription = {
    id:'specialization-description', 
    en : 'Projects developed during the course: ', 
    pt : 'Projetos desenvolvidos durante o curso: ' 
}
const specializationItem1 = {
    id:'specialization-item1', 
    en : '<p><a href="https://youtu.be/vCL4F_Z0S9I">Terraform</a> - Final Project, made with Unity</p>', 
    pt : '<p><a href="https://youtu.be/vCL4F_Z0S9I">Terraform</a> - Projeto Final, desenvolvido na Unity</p>' 
}
const specializationItem2 = {
    id:'specialization-item2',  
    en : '<p><a href="https://www.youtube.com/watch?v=pyEFtJ7MH80"> Play the Shapes </a> - Rhythm Game, developed for iOS (Swift)</p>', 
    pt : '<p><a href="https://www.youtube.com/watch?v=pyEFtJ7MH80"> Play the Shapes </a> - Jogo rítmico, desenvolvido em Swift</p>'
}
const specializationItem3 = {
    id:'specialization-item3', 
    en : '<p><a href="https://www.youtube.com/watch?v=q0ay0OURFAk">SqShooter</a> - Top-Down shooter developed using only JavaScript </p>',
    pt : '<p><a href="https://www.youtube.com/watch?v=q0ay0OURFAk">SqShooter</a> - Top-Down shooter desenvolvido utilizando apenas JavaScript</p> ',  
}
const adaDescription = {
    id:'ada-description', 
    en : 'Program, in collaboration with Apple, for capacitation of students for development of iOS applications', 
    pt : 'Programa, em colaboração com a Apple, para capacitação de estudantes para desenvolvimento de aplicativos para iOS' 
}
const engineeringTitle = {
    id:'engineering-title', 
    en : 'Electrical Engineering - Telecommunications', 
    pt : 'Engenharia Elétrica - Telecomunicações' 
   }
   const engineeringDescription = {
    id:'engineering-description', 
    en : 'Wireless communication system for automobile system warning', 
    pt : 'Projeto Final: Sistema de comunicação sem fio para aviso de acidentes automobilísticos' 
   }  
//#endregion Education
//#region professional
const professionalExperience = {
    id:'professional', 
    en : 'PROFESSIONAL EXPERIENCE', 
    pt : 'EXPERIÊNCIA PROFISSIONAL' 
}
const freelanceInfo = {
    id:'freelance-info', 
    en : '2019 - Now', 
    pt : '2019 - ATUALMENTE' 
}
const freelanceDescription = {
    id:'freelance-description', 
    en : 'Unity Developer - Game Developer', 
    pt : 'Desenvolvedor Unity: Desenvolvimento de jogos' 
}
const freelanceJelly = {
    id:'freelance-jelly', 
    en : '<p>Jelly Crusher - 2D game where the player needs to destroy a jelly before insects eat it (not released yet)</p>', 
    pt : '<p>Jelly Crusher - Jogo 2D onde o jogador precisa destruir a geléia antes que os insetos comam (ainda não lançado)</p>' 
}
const freelancePsyckd = {
    id:'freelance-psyckd', 
    en : '<p>PSYCKD - 2D Platform available at <a href="https://play.google.com/store/apps/details?id=com.Insightful.Psychka">GooglePlay</a></p>', 
    pt : '<p>PSYCKD - Jogo plataforma 2D disponível na    <a href="https://play.google.com/store/apps/details?id=com.Insightful.Psychka">GooglePlay</a></p>' 
}
const corgonautaInfo = {
    id:'corgonauta-info', 
    en : '2017 - NOW', 
    pt : '2017 - ATUALMENTE' 
}
const corgonautaDescription = {
    id:'corgonauta-description', 
    en : 'Corgonauta Studio is a small group that started to make games at the university, developed a game for Android and now participates of game jams. It is composed by three people: Alexander Froelich (developer), Heloá Michelin(designer) and Gabriel Oliveira(musician)', 
    pt : 'Corgonauta Studio é um grupo que começou a fazer jogos na Universidade, \
    desenvolveu um jogo de estilo puzzle disponibilizado para dispositivos Android, \
    e também participa de Game Jams. \
    É um grupo composto por três pessoas: \
    Alexander Froelich (programador), Heloá Michelin (designer) \
    e Gabriel Oliveira (músico).' 
}
const corgonautaItem1 = {
    id:'corgonauta-item1', 
    en : '<p>Awarded as “Jammer\'s Choice” at Global Game Jam 2019 (Curitiba) with the game "Briga de Ermitão" </p>', 
    pt : '<p>Global Game Jam: Contemplado com o prêmio “Escolha dos Jammers” na Global Game Jam 2019 (Curitiba), com o jogo “Briga de Ermitão”</p>' 
}
const corgonautaItem2 = {
    id:'corgonauta-item2', 
    en : '<p>Satellight: Puzzle game  for Android devices</p>', 
    pt : '<p>Satellight: Jogo de estilo puzzle para dispositivos Android</p>' 
}
const corgonautaItem3 = {
    id:'corgonauta-item3', 
    en : '<p>Terraform (demo): This demo was developed as the final project for the Game Development Specialization course. This demo was shown at SBGames 2017</p>', 
    pt : '<p>Terraform (demo): Esta demo de jogo foi desenvolvida como projeto final da especialização em Desenvolvimento de Jogos Digitais. Foi também exposta na SBGames 2017.</p>' 
}
const pacerInfo = {
    id:'pacer-info', 
    en : 'DEC 2018 - JUN 2019', 
    pt : 'DEZ 2018 - JUN 2019' 
}
const pacerItem1 = {
    id:'pacer-item1', 
    en : 'Unity Developer - Development and improvement of functionalities of a boarding system for airports', 
    pt : 'Desenvolvedor Unity - Desenvolvimento e aprimoramento de funcionalidades de sistema de embarque ' 
}
const pacerItem2 = {
    id:'pacer-item2', 
    en : 'Development of the interface of auxiliary screens, and communication between them and the main system', 
    pt : 'Desenvolvimento de interface de telas auxiliares e comunicação do sistema principal com as telas' 
}
const copelInfo = {
    id:'copel-info', 
    en : 'AUG 2013 - OCT 2013', 
    pt : 'AGO 2013 - OUT 2013' 
}
const copelDescription = {
    id:'copel-description', 
    en : 'Configuration and tests on telecommunication equipment.', 
    pt : 'Configuração e testes de equipamentos de telecomunicações.' 
}
const pibitInfo = {
    id:'pibit-info', 
    en : 'SEP 2011 - SEP 2012', 
    pt : 'SET 2011 - SET 2012' 
}
const pibitDescription = {
    id:'pibit-description', 
    en : 'Undergraduate research scholar: \
    Treatment and rebuilding of 3D medical images, aiming to understand how they are made and used; starting the process of registration and fusion of these images, for further utilization in neuronavigation systems.', 
    pt : 'Programa de Iniciação Científica: \
    Tratamento e reconstrução de imagens médicas 3D, \
     com objetivo de entender como são feitas e utilizadas; início do processo de registro  e fusão das imagens, \
      para uso futuro em sistemas de neuronavegação.' 
}

const ccaaInfo = {
    id:'ccaa-info', 
    en : 'FEV 2009 - JUL 2011', 
    pt : 'FEV 2009 - JUL 2011' 
}

const ccaaDescription = {
    id:'ccaa-description', 
    en : 'English Teacher', 
    pt : 'Professor de Inglês' 
}

//#endregion professional
const contact = {
    id:'contact', 
    en : 'CONTACT', 
    pt : 'CONTATO' 
}
//#region Contact

//#endregion Contact
//
texts.push(headerAbout, headerShowcase, position,
    aboutTitle,aboutText,aboutText2, showcaseTitle,
    castora1, castora2, castora3, castora4, 
    ermitao1, ermitao2, ermitao3, ermitao4,
    satellight1, satellight2, satellight3, satellight4,
    terraform1, terraform2, terraform3, terraform4,
    educationTitle, specializationTitle, specializationItem1, specializationItem2, specializationItem3, specializationDescription,
    adaDescription, engineeringTitle, engineeringDescription,
    professionalExperience, freelanceInfo,freelanceDescription, freelanceJelly, freelancePsyckd,
    corgonautaInfo, corgonautaDescription, corgonautaItem1, corgonautaItem2, corgonautaItem3,
    pacerInfo, pacerItem1, pacerItem2,
    copelInfo, copelDescription,
    pibitInfo, pibitDescription,
    ccaaInfo, ccaaDescription,
    contact

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

   
    
