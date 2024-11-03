
const form = document.querySelector('#meme-generator');
const urlInput = document.querySelector('#url');
const topInput = document.querySelector('#topText');
const bottomInput = document.querySelector('#bottomText');
const outterDiv = document.querySelector('#container')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const newImgDiv = document.createElement('div');

    const topText = document.createElement('p');
    // topText.setAttribute('type','text');
    topText.innerText = topInput.value;
    topText.classList.add('topText');
    // newImgDiv.innerText = topInput.value;
    topInput.value ='';
    newImgDiv.append(topText);


    const newImg = document.createElement('img');
    newImg.setAttribute('src',urlInput.value); 
    newImg.setAttribute('background',urlInput.value); 
    outterDiv.append(newImgDiv);
    newImgDiv.append(newImg);
    urlInput.value = '';
    newImg.classList.add('newImg');
    newImgDiv.classList.add('newImgDiv');

    

    const bottomText = document.createElement('p');
    // bottomText.setAttribute('type','text');
    bottomText.innerText = bottomInput.value;
    bottomText.classList.add('bottomText');
    bottomInput.value ='';
    newImgDiv.append(bottomText);
})


const selectedImg = document.querySelector('#container');
selectedImg.addEventListener('click', function(e) {
    // console.log(e.target);
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
    }
})


