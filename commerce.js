const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if("bar") {
    bar.addEventListener("click",function(){
        nav.classList.add("active");
        console.log('clicked')
    })
}
if("close") {
    close.addEventListener("click", function(){
        nav.classList.remove("active");
        console.log('clicked')
    })
}