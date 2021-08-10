//create element
let divP = document.createElement("div");
divP.setAttribute("class", "containerP");

let h1 = document.createElement("h1");

divP.appendChild(h1);

let h1text = document.createTextNode("Welcome to Magic show");
h1.appendChild(h1text);

let divC = document.createElement("div");
divC.setAttribute("class", "containerC");
divC.style.border = "2px solid black";
divC.style.borderRadius = "5px";

divP.appendChild(divC);

let h4 = document.createElement("h4");
let h4txt = document.createTextNode("Add a Note");
h4.appendChild(h4txt);

divC.appendChild(h4);



let txtarea = document.createElement("textarea");
txtarea.setAttribute("id", "area");

divC.appendChild(txtarea);

let btn = document.createElement("input");
btn.type = "button";
btn.setAttribute("id", "btn");
btn.value = "Add Note";
divC.appendChild(btn);

let h2 = document.createElement("h2");
h2.innerHTML = "Your Note:<span id='h2show'></span>";

//all element append in the body
document.body.append(divP);

let body = document.body;
body.append(h2);

var click = 0;
var areaval;

let getbtn = document.querySelector("#btn");
getbtn.addEventListener("click", counter);
getbtn.addEventListener("mousedown", getval);
getbtn.addEventListener("mouseup", clrval);

function getval() {
  let areaget = document.querySelector("#area");
  areaval = areaget.value;
  console.log(areaval);
}
function clrval() {
  let areageto = document.querySelector("#area");
  areageto.value = "";
  // console.log(areaval)
}
//ye function notes ki div create karta hai jo value hmne di hai

function counter() {
  //create div added note
  let divp1 = document.createElement("div");
  divp1.setAttribute("class", "containernote");
  divp1.style.border = "2px solid black";
  divp1.style.borderRadius = "5px";
  let h4n = document.createElement("h4");
  divp1.appendChild(h4n);
  let par = document.createElement("p");
  par.setAttribute("id", "paranote");

  let delbtn = document.createElement("input");
  delbtn.setAttribute("onclick", "delfun(this)");
  delbtn.type = "button";
  delbtn.value = "Delete Note";

  if (areaval !== "") {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesoobj = [];
    } else {
      notesoobj = JSON.parse(notes);
    }
    notesoobj.push(areaval);
    localStorage.setItem("notes", JSON.stringify(notesoobj));

    let len = notesObj.length;
    if (len === 0) {
      click += 1;
    } else {
      if (click === 0) {
        click += len + 1;
      } else {
        click += 1;
      }
    }

    divp1.setAttribute("id", `note${click}`);
    let h4ntxt = document.createTextNode(`Note ${click}`);
    h4n.appendChild(h4ntxt);
    par.innerText = areaval;
    divp1.appendChild(par);
    divp1.appendChild(delbtn);
    let body = document.body;
    body.append(divp1);

    // let notes=localStorage.getItem('notes');

    console.log(divp1);
  }
}

let notes = localStorage.getItem("notes");
if (notes == null) {
  notesObj = [];
} else {
  notesObj = JSON.parse(notes);
}
var len = notesObj.length;
console.log("len:", len);
if (len !== 0) {
  notesObj.forEach(function (element, index) {
    let divp1 = document.createElement("div");
    divp1.setAttribute("class", "containernote");
    divp1.style.border = "2px solid black";
    divp1.style.borderRadius = "5px";
    let h4n = document.createElement("h4");
    divp1.appendChild(h4n);
    let par = document.createElement("p");
    par.setAttribute("id", "paranote");

    let delbtn = document.createElement("input");
    delbtn.setAttribute("onclick", "delfun(this)");
    delbtn.type = "button";
    delbtn.value = "Delete Note";
    divp1.setAttribute("id", `note${index + 1}`);
    let h4ntxt = document.createTextNode(`Note ${index + 1}`);
    h4n.appendChild(h4ntxt);
    par.innerText = element;
    divp1.appendChild(par);
    divp1.appendChild(delbtn);
    let budy = document.body;
    budy.append(divp1);

   


  });
}
else{
    let show=document.querySelector('#h2show')
    let texo=document.createTextNode('No Notes')
    show.appendChild(texo)
}


function delfun(obj) {
  // let del = document.querySelector('#paranote').parentNode
  let getid = obj.parentElement.getAttribute("id");
  // console.log(getid)
  // console.log(typeof getid)
  let del = document.querySelector(`#${getid}`);
  //div ko remove karta hai
  del.remove();
  //div ka childer acess kiya hai
  let tex = del.children[1].innerText;
  // console.log('tex',tex)
  let notes = localStorage.getItem("notes");
  // console.log(notes)
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  //itrate locastorage kiya hai
  notesObj.forEach(function (element, index) {
    element = element.replace(/(\r\n|\n|\r)/gm, "");
    //   console.log('ele:',element)
    if (tex == element) {
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
    }
  });
}

console.log(divP);
 //search fuction
 let search = document.querySelector('#searchTxt')
 search.addEventListener('input',searcht)

 function searcht() {
     let val=search.value
     let parent = document.getElementsByClassName('containernote')
     Array.from(parent).forEach(function(element){
         let cardTxt= element.getElementsByTagName("p")[0].innerText;
         console.log(cardTxt)
         if(cardTxt.includes(val)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
     })
     
     
 }


