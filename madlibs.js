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
    .then((response) => response.text()) // A Promise that resolves with a String.
    .then((data) =>story_to_obj(data.split('$$'))); // 3 story parts. split('$$') will separate text after $$ signs. Will create array with 3 elements. 
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
      if (noun.test(result[i])) {  // searching if noun exists in the iteration. If it exist it will return true.
        id_index++; 
        add_to_obj(i,'Noun',j);  // passing index into add_to_obj function as a parameter. j parameter is about paragraph number.
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
    word: ` <input type="text" id="input${id_index}" placeholder="${pos}" maxlength="20">`, //for the madlibsEdit part
    word2: ` <input type="text" id="output${id_index}">`, //for the madlibsPreview part
  };
eval('paragraph'+paragraph_index).innerHTML += " " + ar[index].word;
eval('previwe'+paragraph_index).innerHTML += " " + ar[index].word2;
}

function add_to_obj_word(index,paragraph_index) {
  ar[index] = { word: `${result[index]}` }; // We are creating an object for each array index. ${result[index]} equals to the word of the paragraph, or elements of the array.
  eval('paragraph'+paragraph_index).innerHTML += " " + ar[index].word; //  we are adding the word to the story dynamically through innerHTML. Variables created below.
  eval('previwe'+paragraph_index).innerHTML += " " + ar[index].word; // the same for the preview part.
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
document.addEventListener("input", (e) => {  //did we put an input anything with an element of an input
  if (e.target.matches("input")) { 
    const Id_number = e.target.id.slice(e.target.id.length - 1,e.target.id.length); //getting only the number from id
    eval("const " +"input" +Id_number +"= " +'document.querySelector("#input' +Id_number +'" ) '); // the same thing as, const input1= document.querySelector('#input1')
    eval("const " +"output" +Id_number +"= " +'document.querySelector("#output' +Id_number +'" ) '); // const output1= document.querySelector('#output1')
    eval("output" + Id_number).value = eval("input" + Id_number).value; // the value of output1 equals to input1
    eval("input" + Id_number).style.width = eval("input" + Id_number).value.length +'1'+'px'; //as the user types, the width of input box increases
    eval("output" + Id_number).style.width =eval("input" + Id_number).value.length +'1'+'px'; // the same will be shown for the output
   
    // onkeypress="this = (this.value.length + 1) + 'em';">
  }
});




