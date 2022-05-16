/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
// function parseStory(rawStory) {
//   // Your code here.
//   return {}; // This line is currently wrong :)
// }

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
// getRawStory().then(parseStory).then((processedStory) => {
//   console.log(processedStory);
// });






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
  })


clickBtn2.addEventListener('click', () =>{
  clickBtn2.style.display = "none"
  
  if(story1.style.display = "none") {
    story1.style.display ="block"
    disclaimer.style.display ="none"
  } 
    
})

const inputFilled= document.getElementsByTagName("input")

inputFilled.addEventListener('input', () => {
  inputFilled.style.backgroundColor ="gray"
})










