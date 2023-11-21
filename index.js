document.getElementById("heading").style.color = "red"
let upcase = document.getElementById("heading")
let result = upcase.textContent.toUpperCase()
upcase.innerHTML = result

let p = document.getElementsByClassName("para")
for (i=0;i<p.length;i++){
    p[i].style.color = 'blue'
    p[i].style.fontSize = '20px'
}
let face = document.createElement("p")
let face_a = document.createElement("a")
face_a.href='https://facebook.com'
face_a.innerHTML = 'facebook.com'
face.appendChild(face_a)

document.querySelector('.para-3').appendChild(face)   

document.getElementById("title").innerHTML = 'Đây là thẻ tiêu đề'

document.querySelector('.description').setAttribute('class','text_bold')

let btn = document.createElement('button')
let para_3 = document.querySelector('.para-3')
btn.textContent = 'Click me'
btn.setAttribute('onclick','clpara_2()')
para_3.parentNode.replaceChild(btn,para_3)

document.querySelector('span').style.color = 'red'

let para_2 = document.querySelector('.para-2')
let copyPara = para_2.cloneNode(true)
let PcopyPara = document.createElement('p')
PcopyPara.appendChild(copyPara)

function clpara_2(){
    para_2.appendChild(PcopyPara)
}

const rmpara_1 = document.querySelector('.para-1')
function removepara() {
    rmpara_1.remove()
}
