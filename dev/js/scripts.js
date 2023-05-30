
let burgerBtn= document.querySelector("#burger-btn");
let mainmenu= document.querySelector("#main-menu");

let canSeeMenu = false;

burgerBtn.addEventListener("click", () => {
    console.log(canSeeMenu);

    if (!canSeeMenu){
        mainmenu.classList.add("show-menu");
        canSeeMenu = true;
        }else{
            mainmenu.classList.add("show-menu");
            canSeeMenu= false;
            
        }
    
})

let closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
    mainmenu.classList.remove("show-menu");
    canSeeMenu = false;
})
