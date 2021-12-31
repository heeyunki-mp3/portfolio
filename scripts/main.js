function initialize(){
    document.title = GENERAL.fname + "'s";

    nameTitle = document.getElementById("name");
    menuContainer = document.getElementById("menu");
    pageTitle = document.getElementById("pageTitle");
    pageContent = document.getElementById("pageContent");
    nameTitle.innerHTML = GENERAL.fname +" "+ GENERAL.lname;
    pageIdx = 0;

    body= document.getElementsByTagName("body");
    bodyElement = body[0];
    
    aniContainer = document.getElementById("animations");
    displayMenu();
    displayContents();
    display();
    createFollower(menuContainer, THEME.follower);
    animateBackground();

    window.addEventListener('resize', placeBullets);
}
/**
 * Creates the sidebar menu. Reads what to put inside from the contents.js.
 * */
function displayMenu(){
    menus = [];
    menuContainer.innerHTML = "";
    menuContainer.style.display = "inline-block";

    menuContainer.addEventListener("scroll",placeBullets);

    for (var i =0; i<PORTFOLIO.length; i++){
        let menuLi = document.createElement("li");
        menuLi.menuIdx = i;
        menuLi.addEventListener("click", function(){
            pageIdx = this.menuIdx;
            display();
        });
        menuContainer.appendChild(menuLi);
        menuContainer.appendChild(document.createElement("br"));
        menus.push(menuLi);

        //create bullets (umbrella)
        let bullet = document.createElement("img");
        bullet.src = "images/"+THEME.bullet;
        bullet.className = "bullet";
        var rect = menuLi.getBoundingClientRect();

        bullet.style.left = "3vw";
        bullet.style.top = rect.top + "px";

        menus[i].appendChild(bullet);

        //create clicked effects (rainfall)
        let effect = document.createElement("img");
        effect.src = "images/"+THEME.menuClickedEffect;
        effect.className = "effect";
        effect.style.visibility = "hidden";
        
        menus[i].innerHTML += PORTFOLIO[i].menuTitle;
        menus[i].appendChild(effect);
        menus[i].effectElement = effect;
        menus[i].bulletElement = bullet;
    }
}
//this function is to place the bullets on the correct place when resizing the window and scrolling
function placeBullets(){
    for (var i =0; i<menus.length; i++){
        var rect = menus[i].getBoundingClientRect();
        document.getElementsByClassName("bullet")[i].style.top = rect.top -2+ "px";
    }
}

/**
 * @param where the element to add the follower
 * @param imgSrc the name of the image file of the follower
 * */
function createFollower(where, imgSrc){
    followingEl = document.createElement("img");
    followingEl.src = "images/" + imgSrc;
    followingEl.id = "followerImg";

    where.appendChild(followingEl);

    where.addEventListener("mousemove", function(){
        var e = event;

        followingEl.style.left = e.clientX +2+ "px";
        followingEl.style.top = e.clientY +2+ "px";
    });
    where.addEventListener("mouseleave", function(){
        followingEl.style.left = "8vw";
        followingEl.style.top = "10vh";
    })
}
/**
 * Creates the contents according to what menu is selected. 
 * It runs through contents.js and creats each sections (contentBox) inside of the contents
 * */
function displayContents(){
    boxContainer = [];
    pageContent.innerHTML = "";
    contentsImports = PORTFOLIO[pageIdx].contents;
    for (var i =0; i<contentsImports.length; i++){
        let box = document.createElement("div");

        let subBox = document.createElement("div");
        subBox.className = "columncontainer subbox";
        
        let boxTitleDiv = document.createElement("div");
        boxTitleDiv.innerHTML = contentsImports[i].boxTitle;
        boxTitleDiv.className = "boxTitle";
        
        let boxContentsDiv = document.createElement("div");
        boxContentsDiv.innerHTML = contentsImports[i].boxContents;
        boxContentsDiv.className = "boxContent";

        box.appendChild(boxTitleDiv);
        subBox.appendChild(boxContentsDiv);

        if (contentsImports[i].boxPicture != null){
            boxContentsDiv.className += " column";
            let boxImage = document.createElement("img");
            boxImage.src = "images/" + contentsImports[i].boxPicture;
            boxImage.className = "column boxImage";
            subBox.appendChild(boxImage);
        }
        box.appendChild(subBox);
        let hiddenDiv = document.createElement("div");
        hiddenDiv.className = "hiddenContainer";
        if(contentsImports[i].hidden_title != null){
            let hiddenTitle = document.createElement("span");
            hiddenTitle.className = "hiddenTitleSpan";
            hiddenTitle.innerHTML = contentsImports[i].hidden_title;
            hiddenDiv.appendChild(hiddenTitle);
            let hiddenContent = document.createElement("div");
            hiddenContent.innerHTML = contentsImports[i].hidden;
            hiddenContent.style.display = "none";
            hiddenContent.className = "hiddenStuff";
            hiddenDiv.appendChild(hiddenContent);
            hiddenTitle.addEventListener("click", function(){
                toggleHiddenContents(hiddenContent);
            });
            box.appendChild(hiddenDiv);
        }
        pageContent.appendChild(box);
        

        pageContent.appendChild(document.createElement("hr"));

        boxContainer.push(box);
    }
}
function toggleHiddenContents(content){
    if (content.style.display == "none"){
        content.style.display = "block";
    }
    else{
        content.style.display = "none";
    }
}
function display(){
    pageTitle.innerHTML = PORTFOLIO[pageIdx].subTitle;
    displayContents();
    for (let i = 0; i < menus.length; i++){
        if (pageIdx == i){
            menus[i].style.backgroundImage = "url(images/"+THEME.clickedMenuImg+")";
            menus[i].effectElement.style.visibility = "visible";
            menus[i].bulletElement.style.display = "inline";
            console.log(menus[i].bulletElement.style.display);
            menus[i].style.color = "#AE0E36FF";
        }
        else{
            menus[i].style.backgroundImage = "url(images/"+THEME.menuImg+")";
            menus[i].effectElement.style.visibility = "hidden";
            menus[i].bulletElement.style.display = "none";
            console.log(menus[i].bulletElement.style.display);
            menus[i].style.color = "rgb(0,0,0)";
        }
    }
}
function animateBackground(){
    animatingObjList =[];

    setInterval(addAnimation, 5000);
    setInterval(startAnimation, 200);
}
function addAnimation(){
    var tmpAni = {};
    tmpAni.phase = 0;
    tmpAni.element = document.createElement("img");
    tmpAni.verticalStep = getRandomInteger(0,3); 
    tmpAni.element.src = "images/" + THEME.aniImage;
    tmpAni.element.className = "animation";
    tmpAni.element.aniObject = tmpAni;
    aniContainer.appendChild(tmpAni.element);

    animatingObjList.push(tmpAni);
}
function startAnimation(){
    for (var i = 0; i< animatingObjList.length; i++){
        animatingObjList[i].phase ++;
        animatingObjList[i].element.style.left = animatingObjList[i].phase + "vw";
        animatingObjList[i].element.style.top = animatingObjList[i].verticalStep *25 + "vh";
        if (animatingObjList[i].element.style.left == "130vw"){
            deleteAnimation(animatingObjList[i]);
            i--;
        }
    }
}
function deleteAnimation(aniObject){
    aniObject.element.remove();
    delete aniObject;
}