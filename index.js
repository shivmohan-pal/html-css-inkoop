let header = document.querySelector(".header");
let nav = document.querySelector("nav");
let menuButton = document.querySelector("#menu-button");

menu();

function menu(){
let i=0;
menuButton.addEventListener("click",function(){ 
                                              if(i%2==0){
                                                         nav.style.display="block";
                                                         header.style.display="block";
                                                            }else{
                                                                   nav.style.display="";
                                                                  header.style.display="";
                                                                  }
                                               i++;                
                                               }); 
                }
              