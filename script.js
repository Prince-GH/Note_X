const canvas = document.getElementById('canvas');
const editor = document.getElementById('editor');
const count = document.getElementById('words');
const data = document.getElementById('data');
const mode = document.getElementById('mode');
const done = document.getElementById('done');
let text;
window.onload = function(){
    editor.value=localStorage.getItem("data");
    count.innerHTML=localStorage.getItem("words");
}
editor.addEventListener("keyup", () => {
    text=editor.value;
    localStorage.setItem("data",text);
    const wordCount = countWords(text);
    localStorage.setItem("words",wordCount);
    console.log("Word count:", wordCount);
    count.innerHTML=wordCount;
});

function countWords(text){
    const words = text.trim().split(/\s+/);
    return words.length;
  }

let click=1;
mode.addEventListener('click',()=>{
    click++;
    if(click%2==0){
        document.body.style.background='#414141';
        canvas.style.borderColor='white';
        editor.style.background='#414141';
        data.style.color='#74cff3';
        editor.style.color='#74cff3';
        mode.style.color='white';
    }
    else{
        document.body.style.background='#74cff3';
        canvas.style.borderColor='black';
        editor.style.background='#74cff3';
        data.style.color='black';
        editor.style.color='black';
        mode.style.color='black';
    }
});

done.addEventListener('click',function (){
navigator.clipboard.writeText(text);
localStorage.removeItem("data");
localStorage.removeItem("words");
editor.value='';
count.innerHTML='';
});
