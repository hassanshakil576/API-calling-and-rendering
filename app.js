console.log("Hello world!");

const div = document.querySelector(".parent");
const input = document.querySelector("#username")
const btn = document.querySelector(".btn")


btn.addEventListener("click" , (getData))


function getData(){
    div.innerHTML = ""
    fetch(`https://api.github.com/users/${input.value}`)
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res); // console checking
        // render on screen 
        div.innerHTML += `<div class = "container">
        <div class="img">
            <img id= "img" src="${res.avatar_url}" alt="">
        </div>
        <div class="content">
            Name: ${res.name} <br>
            Login: ${res.login}<br>
            Bio: ${res.bio} <br>
            Repositories: ${res.public_repos} <br>
            Followers: ${res.followers}
        </div>
        </div>
        `
        })
        
    .catch((err)=>{
        div.innerHTML += `Error 404, User not Found!`
    })
}






// btn.addEventListener("click" , (getData))


// const getData = async ()=> {
//     try {
//         const Base_Url = await fetch(`https://api.github.com/users/${input.value}`);
//         const res = await Base_Url.json()
//         console.log(Base_Url);
//         div.innerHTML += `Name: ${res.name}`
//     } catch (error) {
//         console.error(error);
        
//     }
    

// }

// // getData()
