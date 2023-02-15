

const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".img");
const amineNameEl = document.querySelector(".anime-heading");



btnEl.addEventListener("click",async function(){
    try {


        btnEl.disabled=true;
        btnEl.innerText="waiting..";
        amineNameEl.innerText="updating.."
        animeImgEl.src="loading.svg";

        const response = await fetch(" https://api.catboys.com/img");
        const data = await response.json();
        // console.log(data)
        
        animeContainerEl.style.display = "block";
        animeImgEl.src=data.url;
        
       
        amineNameEl.innerText=data.artist;

        btnEl.disabled=false;
        btnEl.innerText="Get Anime"

        


    } catch (error) {
        btnEl.disabled=false;
        btnEl.innerText="Get Anime"
        amineNameEl.innerText="Error! pls try again";
    }
});

