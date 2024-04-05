const btn2 = document.querySelector(".btn2")
const btn1 = document.querySelector(".btn1")
const sz1 = document.querySelector(".sz1")
const sz2 = document.querySelector(".sz2")
const d = document.querySelector(".rsm1")
const b = document.querySelector(".rsm")
const sz3 =document.querySelector(".sz3")
const s1t=document.querySelector("#s1t")
const s2t=document.querySelector("#s2t")
const s4t=document.querySelector("#s4t")
let active =true
console.log(txt);
btn2.onclick =() =>{
btn2.style.background=color ="#0071E3"
btn2.style.color = "white"
sz2.innerHTML= "Space Grey"
b.style.display="none"
b.style.postion="relative"
if (active) {
    btn2.style.background=color ="#0071E3"
btn2.style.color = "white"
sz2.innerHTML= "Space Grey"
b.style.display="none"
d.style.display="block"
b.style.postion="relative"

} else {
    btn2.style.background=color ="#CFE7FF"
    btn2.style.color = "#000"
    
    
}
active =!active
}
btn1.onclick =()=>{
    btn1.style.backgroundColor="#0071E3"
    btn1.style.color ="white"
    d.style.display ="none"
    if (active) {
        btn1.style.backgroundColor="#0071E3"
        btn1.style.color ="white"
        d.style.display ="none"
        b.style.display="block"
        sz2.innerHTML= "White"
    } else {
        btn1.style.backgroundColor="#CFE7FF"
        btn1.style.color ="#000"
        d.style.postion="relative"
    }
    active =!active
}
s1t.onclick =()=>{
sz3.innerHTML="$2,199"
if (active) {
    sz3.innerHTML="$2,199"
    s1t.style.border="2px solid #0071E3"
} else {
    sz3.innerHTML="$1,999" 
    s1t.style.border="2px solid #CFE7FF"
}
active =!active
}
s2t.onclick =()=>{
    sz3.innerHTML="$2,199"
    if (active) {
        sz3.innerHTML="$2,599"
        s2t.style.border="2px solid #0071E3"
    } else {
        sz3.innerHTML="$1,999" 
        s2t.style.border="2px solid #CFE7FF"
    }
    active =!active
    }
    s4t.onclick =()=>{
        sz3.innerHTML="$2,199"
        if (active) {
            sz3.innerHTML="$3,199"
            s4t.style.border="2px solid #0071E3"
        } else {
            sz3.innerHTML="$1,999" 
            s4t.style.border="2px solid #CFE7FF"
        }
        active =!active
        }

