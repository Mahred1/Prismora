let generate = document.querySelector("button");
let wallpaper =document.querySelector(".wallpaper");
let url= 'https://api.pexels.com/v1/curated?per_page=1';
let auth ='G6o9Djxnm0GKrcFIPVbhdy7RgBzSr37ToxNpZ74mZhLbWLW94AC4i4Zd';
async function fetchApi(){
  let data = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth
    }})
    let bb =await data.json();
  return bb;
}

function generatePhoto(){
    fetchApi()
    .then(data=>{
        console.log(data.photos);
        wallpaper.innerHTML =`<img src=${data.photos[0].src.medium}></img>`
    })

}

generatePhoto();

generate.addEventListener("click",()=>{
    clear();
    generatePhoto();

})

function clear(){
    wallpaper.innerHTML='';
}