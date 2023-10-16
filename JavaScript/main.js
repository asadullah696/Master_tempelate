


const tradeList1 = document.getElementById("tradelist1");

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const random = Math.random()*20573452;
    const change = random.toFixed(3) ;
    document.getElementById("tradelist1").innerHTML = change ;

}

updateTime();
setInterval(updateTime, 1000);