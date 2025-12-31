var h1 = document.querySelector("h1")

h1.addEventListener("click",function(){
    data();
})

const data = async()=>{
    const response = await fetch("https://picsum.photos/v2/list");
    const result = await response.json()
    console.log(result[10].author)
}