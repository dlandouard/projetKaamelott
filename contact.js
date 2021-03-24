let action = document.getElementById('onebtn');

action.addEventListener('click', function(){
   document.querySelector('.container').style.visibility="visible"
   document.querySelector('.container').style.opacity="1"
});

let close = document.querySelector('#croix');

close.addEventListener('click', function(){
   document.querySelector('.container').style.visibility="hidden"
   document.querySelector('.container').style.opacity="0"
});

