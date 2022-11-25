//navbar1 menu hover-onmouseover
function mouseon1(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[0].style.color="#000";
}
function mouseon2(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[1].style.color="#000";
}
function mouseon3(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[2].style.color="#000";
}
function mouseon4(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[3].style.color="#000";
}
function mouseon5(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[4].style.color="#000";
}
function mouseon6(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[5].style.color="#000";
}
function mouseon7(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[6].style.color="#000";
}
//navbar1 menu hover-onmouseout
function mouseout1(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[0].style.color="#888";
}
function mouseout2(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[1].style.color="#888";
}
function mouseout3(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[2].style.color="#888";
}
function mouseout4(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[3].style.color="#888";
}
function mouseout5(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[4].style.color="#888";
}
function mouseout6(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[5].style.color="#888";
}
function mouseout7(){
    let onmouse=document.getElementsByClassName("menu1");
    onmouse[6].style.color="#888";
}
//navbar1 auth underline-mouseover

function ain1(){
    let ainmouse=document.getElementById("pa1")
    ainmouse.style.textDecoration="underline";
}
function ain2(){
    let ainmouse=document.getElementById("pa2")
    ainmouse.style.textDecoration="underline";
}
function aout1(){
    let aoutmouse=document.getElementById("pa1")
    aoutmouse.style.textDecoration="none";
}
function aout2(){
    let aoutmouse=document.getElementById("pa2")
    aoutmouse.style.textDecoration="none";
}
function drop1(){
    let dropdown1=document.getElementById("auth1")
    dropdown1.style.display="flex";
}
function dropclose1(){
    let dropup1=document.getElementById("auth1")
    dropup1.style.display="none";
}
//navbar2 starts
//navbar1 signin hover-onmouseover & onmouseout
function signin1(){
    let sign1=document.getElementById("signin")
    sign1.style.textDecoration="underline"
}
function signin2(){
    let sign2=document.getElementById("signin")
    sign2.style.textDecoration="none"
}

function create1(){
    let cr1=document.getElementById("create")
    cr1.style.textDecoration="underline"
}
function create2(){
    let cr2=document.getElementById("create")
    cr2.style.textDecoration="none"
}

function signlion1(){
    let sli1=document.getElementById("signli1")
    sli1.style.textDecoration="underline"
}
function signliout1(){
    let slo1=document.getElementById("signli1")
    slo1.style.textDecoration="none"
}

function signlion2(){
    let slo2=document.getElementById("signli2")
    slo2.style.textDecoration="underline"
}
function signliout2(){
    let slo2=document.getElementById("signli2")
    slo2.style.textDecoration="none"
}

function signlion3(){
    let sli3=document.getElementById("signli3")
    sli3.style.textDecoration="underline"
}
function signliout3(){
    let slo3=document.getElementById("signli3")
    slo3.style.textDecoration="none"
}

function signlion4(){
    let sli4=document.getElementById("signli4")
    sli4.style.textDecoration="underline"
}
function signliout4(){
    let slo4=document.getElementById("signli4")
    slo4.style.textDecoration="none"
}

function signlion5(){
    let sli5=document.getElementById("signli5")
    sli5.style.textDecoration="underline"
}
function signliout5(){
    let slo5=document.getElementById("signli5")
    slo5.style.textDecoration="none"
}

function signlion6(){
    let sli6=document.getElementById("signli6")
    sli6.style.textDecoration="underline"
}
function signliout6(){
    let slo6=document.getElementById("signli6")
    slo6.style.textDecoration="none"
}

function signlion7(){
    let sli7=document.getElementById("signli7")
    sli7.style.textDecoration="underline"
}
function signliout7(){
    let slo7=document.getElementById("signli7")
    slo7.style.textDecoration="none"
}
    // onclick
var count=0;
function signnavclick(x)
{
    let signclick=document.getElementById("signnav")
    var x;
    if(x==1)
    {
        count=count+1;
    }
    if(count==1)
    {
        signclick.style.visibility="visible"
    }
    else if(count==2)
    {
        signclick.style.visibility="hidden"
        count=0
    }
}

//nav sec button-hover
function navsecbtn1(){
    let navbtn1=document.getElementById("navsecbtn")
    navbtn1.style.height="63px"
    navbtn1.style.width="20.5%"
}
function navsecbtn2(){
    let navbtn2=document.getElementById("navsecbtn")
    navbtn2.style.height="60px"
    navbtn2.style.width="20%"
}

//dhoni sec button-hover
// function dhonibtnon1(){
//     let dbtn11=document.getElementById("dhonibtn1")
//     dbtn11.style.height="52px"
//     dbtn11.style.width="155px"
//     let darr11=document.getElementById("btnarrow1")
//     darr11.style.visibility="visible";
// }
// function dhonibtnout1(){
//     let dbtn12=document.getElementById("dhonibtn1")
//     dbtn12.style.height="50px"
//     dbtn12.style.width="150px"
//     let darr12=document.getElementById("btnarrow1")
//     darr12.style.visibility="hidden";
// }

document.querySelector("#dhonibtn1").addEventListener("mouseover",()=>{
    document.querySelector("#text").style.transform="translate(-20%)"
    document.querySelector(".fa-icon").style.transform="translate(100%)"
    document.querySelector(".fa-icon").style.opacity="1";
    document.querySelector("#dhonibtn1").style.height="52px"
    document.querySelector("#dhonibtn1").style.width="155px"
})
document.querySelector("#dhonibtn1").addEventListener("mouseout",()=>{
    document.querySelector("#text").style.transform="translate(0%)"
    document.querySelector(".fa-icon").style.transform="translate(0%)"
    document.querySelector(".fa-icon").style.opacity="0";
})

document.querySelector("#dhonibtn2").addEventListener("mouseover",()=>{
    document.querySelector("#text1").style.transform="translate(-20%)"
    document.querySelector(".fa-icon1").style.transform="translate(100%)"
    document.querySelector(".fa-icon1").style.opacity="1";
    document.querySelector("#dhonibtn2").style.height="52px"
    document.querySelector("#dhonibtn2").style.width="155px"
})
document.querySelector("#dhonibtn2").addEventListener("mouseout",()=>{
    document.querySelector("#text1").style.transform="translate(0%)"
    document.querySelector(".fa-icon1").style.transform="translate(0%)"
    document.querySelector(".fa-icon1").style.opacity="0";
})


//small table-hover
document.querySelector("#tabli1").addEventListener("mouseover",()=>{
    document.querySelector("#tab1").style.color="white"
    document.querySelector("#tab1").style.transform="translate(-20%)"
    document.querySelector(".fa-icon11").style.transform="translate(100%)"
    document.querySelector(".fa-icon11").style.opacity="1";
    document.querySelector("#tabli1").style.backgroundColor="#000" 
})
document.querySelector("#tabli1").addEventListener("mouseout",()=>{
    document.querySelector("#tab1").style.color="#888"
    document.querySelector("#tab1").style.transform="translate(0%)"
    document.querySelector(".fa-icon11").style.transform="translate(0%)"
    document.querySelector(".fa-icon11").style.opacity="0";
    document.querySelector("#tabli1").style.backgroundColor="white" 
})

document.querySelector("#tabli2").addEventListener("mouseover",()=>{
    document.querySelector("#tab2").style.color="white"
    document.querySelector("#tab2").style.transform="translate(-20%)"
    document.querySelector(".fa-icon12").style.transform="translate(100%)"
    document.querySelector(".fa-icon12").style.opacity="1";
    document.querySelector("#tabli2").style.backgroundColor="#000" 

})
document.querySelector("#tabli2").addEventListener("mouseout",()=>{
    document.querySelector("#tab2").style.color="#888"
    document.querySelector("#tab2").style.transform="translate(0%)"
    document.querySelector(".fa-icon12").style.transform="translate(0%)"
    document.querySelector(".fa-icon12").style.opacity="0";
    document.querySelector("#tabli2").style.backgroundColor="white" 
})

document.querySelector("#tabli3").addEventListener("mouseover",()=>{
    document.querySelector("#tab3").style.color="white"
    document.querySelector("#tab3").style.transform="translate(-20%)"
    document.querySelector(".fa-icon13").style.transform="translate(100%)"
    document.querySelector(".fa-icon13").style.opacity="1";
    document.querySelector("#tabli3").style.backgroundColor="#000" 
})
document.querySelector("#tabli3").addEventListener("mouseout",()=>{
    document.querySelector("#tab3").style.color="#888"
    document.querySelector("#tab3").style.transform="translate(0%)"
    document.querySelector(".fa-icon13").style.transform="translate(0%)"
    document.querySelector(".fa-icon13").style.opacity="0";
    document.querySelector("#tabli3").style.backgroundColor="white" 
})

document.querySelector("#tabli4").addEventListener("mouseover",()=>{
    document.querySelector("#tab4").style.color="white"
    document.querySelector("#tab4").style.transform="translate(-20%)"
    document.querySelector(".fa-icon14").style.transform="translate(100%)"
    document.querySelector(".fa-icon14").style.opacity="1";
    document.querySelector("#tabli4").style.backgroundColor="#000" 
})
document.querySelector("#tabli4").addEventListener("mouseout",()=>{
    document.querySelector("#tab4").style.color="#888"
    document.querySelector("#tab4").style.transform="translate(0%)"
    document.querySelector(".fa-icon14").style.transform="translate(0%)"
    document.querySelector(".fa-icon14").style.opacity="0";
    document.querySelector("#tabli4").style.backgroundColor="white" 
})

document.querySelector("#tabli5").addEventListener("mouseover",()=>{
    document.querySelector("#tab5").style.color="white"
    document.querySelector("#tab5").style.transform="translate(-20%)"
    document.querySelector(".fa-icon15").style.transform="translate(100%)"
    document.querySelector(".fa-icon15").style.opacity="1";
    document.querySelector("#tabli5").style.backgroundColor="#000" 
})
document.querySelector("#tabli5").addEventListener("mouseout",()=>{
    document.querySelector("#tab5").style.color="#888"
    document.querySelector("#tab5").style.transform="translate(0%)"
    document.querySelector(".fa-icon15").style.transform="translate(0%)"
    document.querySelector(".fa-icon15").style.opacity="0";
    document.querySelector("#tabli5").style.backgroundColor="white" 
})

document.querySelector("#tabli6").addEventListener("mouseover",()=>{
    document.querySelector("#tab6").style.color="white"
    document.querySelector("#tab6").style.transform="translate(-20%)"
    document.querySelector(".fa-icon16").style.transform="translate(100%)"
    document.querySelector(".fa-icon16").style.opacity="1";
    document.querySelector("#tabli6").style.backgroundColor="#000" 
})
document.querySelector("#tabli6").addEventListener("mouseout",()=>{
    document.querySelector("#tab6").style.color="#888"
    document.querySelector("#tab6").style.transform="translate(0%)"
    document.querySelector(".fa-icon16").style.transform="translate(0%)"
    document.querySelector(".fa-icon16").style.opacity="0";
    document.querySelector("#tabli6").style.backgroundColor="white" 
})
document.querySelector("#tabli7").addEventListener("mouseover",()=>{
    document.querySelector("#tab7").style.color="white"
    document.querySelector("#tab7").style.transform="translate(-20%)"
    document.querySelector(".fa-icon17").style.transform="translate(100%)"
    document.querySelector(".fa-icon17").style.opacity="1";
    document.querySelector("#tabli7").style.backgroundColor="#000" 
})
document.querySelector("#tabli7").addEventListener("mouseout",()=>{
    document.querySelector("#tab7").style.color="#888"
    document.querySelector("#tab7").style.transform="translate(0%)"
    document.querySelector(".fa-icon17").style.transform="translate(0%)"
    document.querySelector(".fa-icon17").style.opacity="0";
    document.querySelector("#tabli7").style.backgroundColor="white" 
})

document.querySelector("#tabli8").addEventListener("mouseover",()=>{
    document.querySelector("#tab8").style.color="white"
    document.querySelector("#tab8").style.transform="translate(-20%)"
    document.querySelector(".fa-icon18").style.transform="translate(100%)"
    document.querySelector(".fa-icon18").style.opacity="1";
    document.querySelector("#tabli8").style.backgroundColor="#000" 
})
document.querySelector("#tabli8").addEventListener("mouseout",()=>{
    document.querySelector("#tab8").style.color="#888"
    document.querySelector("#tab8").style.transform="translate(0%)"
    document.querySelector(".fa-icon18").style.transform="translate(0%)"
    document.querySelector(".fa-icon18").style.opacity="0";
    document.querySelector("#tabli8").style.backgroundColor="white" 
})

function tabon9(){
    let tablist9=document.getElementById("tabli9")
    tablist9.style.backgroundColor="#000"
    
    let smalldivpara11=document.getElementById("smalldivpara1")
    smalldivpara11.style.color="white"

    let smalldivimg11=document.getElementById("smalldivimg11")
    smalldivimg11.style.fill="white"

}
function tabout9(){
     let tablist9=document.getElementById("tabli9")
    tablist9.style.backgroundColor="white"

    let smalldivpara12=document.getElementById("smalldivpara1")
    smalldivpara12.style.color="#000"

    let smalldivimg12=document.getElementById("smalldivimg11")
    smalldivimg12.style.color="#000"
    
}
// image sec starts
document.querySelector("#imgbtn1").addEventListener("mouseover",()=>{
    document.querySelector("#imgtab1").style.transform="translate(-20%)"
    document.querySelector(".fa-icon21").style.transform="translate(100%)"
    document.querySelector(".fa-icon21").style.opacity="1";
    document.querySelector("#imgbtn1").style.height="52px"
    document.querySelector("#imgbtn1").style.width="155px"
})
document.querySelector("#imgbtn1").addEventListener("mouseout",()=>{
    document.querySelector("#imgtab1").style.transform="translate(0%)"
    document.querySelector(".fa-icon21").style.transform="translate(0%)"
    document.querySelector(".fa-icon21").style.opacity="0";
    document.querySelector("#imgbtn1").style.height="50px"
    document.querySelector("#imgbtn1").style.width="150px"
})

document.querySelector("#imgbtn2").addEventListener("mouseover",()=>{
    document.querySelector("#imgtab2").style.transform="translate(-20%)"
    document.querySelector(".fa-icon22").style.transform="translate(100%)"
    document.querySelector(".fa-icon22").style.opacity="1";
    document.querySelector("#imgbtn2").style.height="52px"
    document.querySelector("#imgbtn2").style.width="155px"
})
document.querySelector("#imgbtn2").addEventListener("mouseout",()=>{
    document.querySelector("#imgtab2").style.transform="translate(0%)"
    document.querySelector(".fa-icon22").style.transform="translate(0%)"
    document.querySelector(".fa-icon22").style.opacity="0";
    document.querySelector("#imgbtn2").style.height="50px"
    document.querySelector("#imgbtn2").style.width="150px"
})

document.querySelector("#imgbtn3").addEventListener("mouseover",()=>{
    document.querySelector("#imgtab3").style.transform="translate(-20%)"
    document.querySelector(".fa-icon23").style.transform="translate(100%)"
    document.querySelector(".fa-icon23").style.opacity="1";
    document.querySelector("#imgbtn3").style.height="52px"
    document.querySelector("#imgbtn3").style.width="195px"
})
document.querySelector("#imgbtn3").addEventListener("mouseout",()=>{
    document.querySelector("#imgtab3").style.transform="translate(0%)"
    document.querySelector(".fa-icon23").style.transform="translate(0%)"
    document.querySelector(".fa-icon23").style.opacity="0";
    document.querySelector("#imgbtn3").style.height="50px"
    document.querySelector("#imgbtn3").style.width="190px"
})

//multi video sec starts
function multion1(){
    let multi1=document.getElementById("multivideo1")
    multi1.style.border="2px solid black"
    multi1.style.borderRadius="45px"
}
function multiout1(){
    let multi1=document.getElementById("multivideo1")
    multi1.style.border="none"
    multi1.style.borderRadius="40px"
}

function multion2(){
    let multi2=document.getElementById("multivideo2")
    multi2.style.border="2px solid black"
    multi2.style.borderRadius="45px"
}
function multiout2(){
    let multi2=document.getElementById("multivideo2")
    multi2.style.border="none"
    multi2.style.borderRadius="40px"
}

function multion3(){
    let multi3=document.getElementById("multivideo3")
    multi3.style.border="2px solid black"
    multi3.style.borderRadius="45px"
}
function multiout3(){
    let multi3=document.getElementById("multivideo3")
    multi3.style.border="none"
    multi3.style.borderRadius="40px"
}

     //video


// domain sec starts
function domainon(){
    let domain=document.getElementById("domainbtn1")
    domain.style.height="60px"
    domain.style.width="113px"
    domain.style.backgroundColor="#00838C"
    domain.style.border="#00838C"
}
function domainout(){
    let domain=document.getElementById("domainbtn1")
    domain.style.height="58px"
    domain.style.width="110px"
    domain.style.backgroundColor="#000"
    domain.style.border="#000"
}

//guide sec starts
function guidebtnon(){
    let guide=document.getElementById("guidebtn")
    guide.style.height="49px"
    guide.style.width="20.5%"
    guidebtn.style.opacity="0.7"
}
function guidebtnout(){
    let guide=document.getElementById("guidebtn")
    guide.style.height="47px"
    guide.style.width="20%"
    guidebtn.style.opacity="1"
}

//legal sec starts
function legalon(){
    let legal1=document.getElementById("legal")
    legal1.style.textDecoration="underline"
    legal1.style.fontSize="14.5px"
}
function legalout(){
    let legal1=document.getElementById("legal")
    legal1.style.textDecoration="none"
    legal1.style.fontSize="14px"
}

//details and summary sec starts
// document.querySelector(".question1").addEventListener("click",(e)=>{
//     // e.stoppropagation();
//     document.querySelector(".answer1").style.display="block";
// })
// function dsquesclick(){
//     document.querySelector(".answer1").style.display="none";
// }
// function sumfont(){
//     document.querySelector(".")
// }