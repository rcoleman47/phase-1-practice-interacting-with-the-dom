//h1 counter
const startCounter = () => {
    setInterval(()=>{
    let h1 = document.getElementById('counter')
    let h1Count = parseInt(h1.innerText)
    h1.innerText = h1Count+1
    
  },1000)
}

const plusButton = () => {
  const plus = document.getElementById('plus');
  plus.addEventListener('click', ()=>{
    let h1 = document.getElementById('counter');
    let h1Count = parseInt(h1.innerText);
    h1.innerText = h1Count+1;
  });
}
const minusButton = () => {
  const minus = document.getElementById('minus');
  minus.addEventListener('click', ()=>{
    let h1 = document.getElementById('counter');
    let h1Count = parseInt(h1.innerText);
    h1.innerText = h1Count-1;
  });
}

const likeButton = () => {
  const heart = document.getElementById('heart');
  const likes = document.querySelector('ul.likes');
  const li = document.createElement('li');
  heart.addEventListener('click', () => {
    const h1 = document.getElementById('counter');
    li.innerText = `${h1.innerText} liked`
    likes.append(li)
  })
}

const comments = () => {
  const form = document.getElementById('comment-form');
  console.log(form)
  form.addEventListener('submit',(e)=>{
    form.preventDefault();
    console.log(e.target['#input-comment'].value)
  })
}








//Function Calls
// startCounter()
plusButton()
minusButton()
likeButton()
comments()