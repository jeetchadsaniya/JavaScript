const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

index=0
function type(index) {
    setTimeout(()=> {
        typedTextSpan.innerHTML=words[index];
        i++;
    },1000)
}

function erase() {
    typedTextSpan.innerHTML="";
}
type(index);
erase()
