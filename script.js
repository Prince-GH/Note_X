const canvas = document.getElementById('canvas');
const editor = document.getElementById('editor');
const count = document.getElementById('words');
const data = document.getElementById('data');
const mode = document.getElementById('mode');

editor.addEventListener("keyup", () => {
    const text = editor.value;
    const wordCount = countWords(text);
    console.log("Word count:", wordCount);
    count.innerHTML=wordCount;
});

function countWords(text) {
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