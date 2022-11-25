// document.querySelector(".btn").firstChild.style.transform="translate(0%)"
// document.querySelector("#text").style.transform="translate(0%)"



document.querySelector(".btn").addEventListener("mouseover",()=>{
    // document.querySelector(".fa-icon").classList.toggle("i-tog");
    document.querySelector("#text").style.transform="translate(-20%)"
    document.querySelector(".fa-icon").style.transform="translate(100%)"
    document.querySelector(".fa-icon").style.opacity="1";
})
document.querySelector(".btn").addEventListener("mouseout",()=>{
    // document.querySelector(".fa-icon").classList.toggle("i-tog");
    document.querySelector("#text").style.transform="translate(0%)"
    document.querySelector(".fa-icon").style.transform="translate(0%)"

    document.querySelector(".fa-icon").style.opacity="0";
})