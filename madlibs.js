// ===================Dilara's Codes Start===================
// FUNCTIONS FOR BUTTONS AND ANIMATIONS
const clickBtn1 = document.querySelector('#BTN');
const clickBtn2 = document.querySelector('#start');
const disclaimer = document.querySelector('.disclaimer')
const topPart= document.querySelector('.disTop');
const middle = document.querySelector('.disMid');
const story1 = document.querySelector('.madLibs');
middle.style.display ="none";

clickBtn1.addEventListener('click', () => {
  clickBtn1.style.display ="none"
  if (middle.style.display == "none"){
    middle.style.display = "block"
    topPart.style.display = "none"
  } else {
          middle.style.display = "none"
        }
  });

clickBtn2.addEventListener('click', () =>{
  clickBtn2.style.display = "none";
  if(story1.style.display = "none") {
    story1.style.display ="block"
    disclaimer.style.display ="none"
  }   
});


// ===================Dilara's Codes End ===================







// ==================||getting the story from local file (story.txt) and conveting it to txt||===================
(function parseStory(rawStory) {
  return fetch("story.txt")
    .then((response) => response.text())
    .then((data) =>story_to_obj(data.split('$$')));
})()

// ==================|| modifiyng the story array, ?? ||===================
function story_to_obj(story) {
  for(let j=0;j<story.length;j++){
    result = story[j].split(/(\.|, | )/g); // putting dots and commas and spaces as array's elements
    console.log(result);
    const noun = /\[n\]/;
    const verb = /\[v\]/;
    const adj = /\[a\]/;
    for (let i = 0; i < result.length; i++) {
      if (noun.test(result[i])) {
        id_index++;
        add_to_obj(i,'Noun',j);
      } else if (verb.test(result[i])) {
        id_index++;
        add_to_obj(i,'Verb',j);
      } else if (adj.test(result[i])) {
        id_index++;
        add_to_obj(i,'Adjective',j);
      } else {
        add_to_obj_word(i,j);
      }
    }
  }
}

// ==================|| modifiyng the story array, ?? ||===================
function add_to_obj(index,pos,paragraph_index) {
  ar[index] = {
    word: ` <input type="text" id="input${id_index}" placeholder="${pos}" maxlength="20">`,
    word2: ` <input type="text" id="output${id_index}">`,
  };
eval('paragraph'+paragraph_index).innerHTML += " " + ar[index].word;
eval('previwe'+paragraph_index).innerHTML += " " + ar[index].word2;
}

function add_to_obj_word(index,paragraph_index) {
  ar[index] = { word: `${result[index]}` };
  eval('paragraph'+paragraph_index).innerHTML += " " + ar[index].word;
  eval('previwe'+paragraph_index).innerHTML += " " + ar[index].word;
}

// ==================|| this part will be modified later ...  ||===================
const madlibs0 = document.querySelector(".madLibsEdit0");
const madlibs_pre0 = document.querySelector(".madLibsPreview0");
const paragraph0 = document.createElement("p");
const previwe0 = document.createElement("p");
madlibs_pre0.append(previwe0);
madlibs0.append(paragraph0);
const madlibs1 = document.querySelector(".madLibsEdit1");
const madlibs_pre1 = document.querySelector(".madLibsPreview1");
const paragraph1 = document.createElement("p");
const previwe1 = document.createElement("p");
madlibs_pre1.append(previwe1);
madlibs1.append(paragraph1);
const madlibs2 = document.querySelector(".madLibsEdit2");
const madlibs_pre2 = document.querySelector(".madLibsPreview2");
const paragraph2 = document.createElement("p");
const previwe2 = document.createElement("p");
madlibs_pre2.append(previwe2);
madlibs2.append(paragraph2);
let result = [];
let id_index = 0;
let my_story1 = " ";
const ar = [];

// ==================|| adding addEventListener to the created inputs ||===================
document.addEventListener("input", (e) => {
  if (e.target.matches("input")) {
    const Id_number = e.target.id.slice(e.target.id.length - 1,e.target.id.length);
    eval("const " +"input" +Id_number +"= " +'document.querySelector("#input' +Id_number +'" ) ');
    eval("const " +"output" +Id_number +"= " +'document.querySelector("#output' +Id_number +'" ) ');
    eval("output" + Id_number).value = eval("input" + Id_number).value;
    eval("input" + Id_number).style.width = eval("input" + Id_number).value.length +'1'+'px';
    eval("output" + Id_number).style.width =eval("input" + Id_number).value.length +'1'+'px';
   
    // onkeypress="this = (this.value.length + 1) + 'em';">
  }
});


document.addEventListener('keydown',(e)=>{
  if(e.key==='Enter'){
    console.log(e.key)
    $(this).next().focus();
  }
})

// keypress(function(e) {
//   if(e.which == 13) {
//      $(this);
//   }
// }); 

/*
from story.txt get the paragraph >>
note fetch retun a promis >> pending , fullifed , rejected

*/



