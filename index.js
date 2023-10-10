function main(){
    const confirm = document.querySelector("#confirm-button");
    confirmButton(confirm);
}main();

function confirmButton(target){
    target.addEventListener("click",(e)=>{
        e.preventDefault();
        const report = document.querySelector("#report");
        const country = document.querySelector("#location");
        const wait = document.querySelector("#wait");
        wait.classList = "show";
        showWeather(report,country.value).catch(err=>{
        console.log(err);
    });
    })
}


async function showWeather(target,country){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=15e1db0de7ba4237a8871307230810&q=${country}`,{mode:'cors'});
    const img = target.querySelector("img");
    let temp = target.querySelectorAll("div");
    const wait = document.querySelector("#wait");
    wait.classList = "hide";
    target.classList = "show";
    response.json().then(response =>{
        img.src = response.current.condition.icon;
        [condition,tempC] = Array.from(temp);
        condition.textContent = "temperature(C): "+ response.current.temp_c;
        tempC.textContent = "Condition: "+response.current.condition.text;
        console.log
    });
}