
//bold
document.getElementById('bold').addEventListener('click',function(){
    const textarea = document.getElementById('text-input');
    if (textarea.style.fontWeight =='bold') {
        textarea.style.fontWeight ='normal';
    }else{
        textarea.style.fontWeight ='bold';
    }
})

//italic
document.getElementById('italic').addEventListener('click',function(){
    const textarea = document.getElementById('text-input');
    if (textarea.style.fontStyle =='italic') {
        textarea.style.fontStyle ='normal';
    }else{
        textarea.style.fontStyle ='italic';
    }
})

//underline
document.getElementById('underline').addEventListener('click',function(){
    const textarea = document.getElementById('text-input');
    if (textarea.style.textDecoration =='underline') {
        textarea.style.textDecoration ='none';
    }else{
        textarea.style.textDecoration ='underline';
    }
})

//delete
document.getElementById('delete').addEventListener('click',function(){
    const textarea = document.getElementById('text-input');
    textarea.value = '';
})

//left-align
document.getElementById('align-left').addEventListener('click',function(){
    const textarea = document.getElementById('text-input');
    textarea.style.textAlign = 'left';
})

//center-align
document.getElementById('align-center').addEventListener('click',function(){
    const textarea = document.getElementById('text-input');
    textarea.style.textAlign = 'center';
})

//right-align
document.getElementById('align-right').addEventListener('click',function(){
    const textarea = document.getElementById('text-input');
    textarea.style.textAlign = 'right';
})

//Uppercase/lowercase/capitalize, font size and color
document.getElementById('text-tansform').addEventListener('click',function(){
    const textarea = document.getElementById('text-input');

    if (textarea.style.textTransform == 'uppercase') {
        textarea.style.textTransform = 'lowercase';
    } else if(textarea.style.textTransform == 'lowercase'){
        textarea.style.textTransform = 'capitalize';
    }else{
        textarea.style.textTransform = 'uppercase';
    }
})

//fontsize 
document.getElementById('font-size').addEventListener('change',function(event){
    const textarea = document.getElementById('text-input');
    textarea.style.fontSize = event.target.value+'px';
})

//color
document.getElementById('color').addEventListener('change',function(event){
    const textarea = document.getElementById('text-input');
    textarea.style.color = event.target.value;
})