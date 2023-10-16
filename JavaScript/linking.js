


let menuListHome = () =>{
    document.getElementById("homePage").style.display = "flex";
    document.getElementById("marketPage").style.display = "none";
    document.getElementById("walletPage").style.display = "none";
    document.getElementById("profilePage").style.display = "none";
    document.getElementById("navMenuHome").style.backgroundColor = "rgba(6, 127, 132, 0.623)";
    document.getElementById("navMenuMarket").style.backgroundColor = "aqua";
    document.getElementById("navMenuWallet").style.backgroundColor = "aqua";
    document.getElementById("navMenuHelpCenter").style.backgroundColor = "aqua";
    document.getElementById("navMenuProfile").style.backgroundColor = "aqua";
}

let menuListMarket = () =>{
    document.getElementById("homePage").style.display = "none";
    document.getElementById("marketPage").style.display = "flex";
    document.getElementById("walletPage").style.display = "none";
    document.getElementById("profilePage").style.display = "none";
    document.getElementById("navMenuHome").style.backgroundColor = "aqua";
    document.getElementById("navMenuMarket").style.backgroundColor = "rgba(6, 127, 132, 0.623)";
    document.getElementById("navMenuWallet").style.backgroundColor = "aqua";
    document.getElementById("navMenuHelpCenter").style.backgroundColor = "aqua";
    document.getElementById("navMenuProfile").style.backgroundColor = "aqua";
}

let menuListWallet = () =>{
    document.getElementById("homePage").style.display = "none";
    document.getElementById("marketPage").style.display = "none";
    document.getElementById("walletPage").style.display = "flex";
    document.getElementById("profilePage").style.display = "none";
    document.getElementById("navMenuHome").style.backgroundColor = "aqua";
    document.getElementById("navMenuMarket").style.backgroundColor = "aqua";
    document.getElementById("navMenuWallet").style.backgroundColor = "rgba(6, 127, 132, 0.623)";
    document.getElementById("navMenuHelpCenter").style.backgroundColor = "aqua";
    document.getElementById("navMenuProfile").style.backgroundColor = "aqua";
}

let menuListPortfolio = () =>{
    document.getElementById("homePage").style.display = "none";
    document.getElementById("marketPage").style.display = "none";
    document.getElementById("walletPage").style.display = "none";
    document.getElementById("profilePage").style.display = "flex";
    document.getElementById("navMenuHome").style.backgroundColor = "aqua";
    document.getElementById("navMenuMarket").style.backgroundColor = "aqua";
    document.getElementById("navMenuWallet").style.backgroundColor = "aqua";
    document.getElementById("navMenuHelpCenter").style.backgroundColor = "aqua";
    document.getElementById("navMenuProfile").style.backgroundColor = "rgba(6, 127, 132, 0.623)";
}