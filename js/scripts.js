function getItem(){
    var li = document.getItem('li');
    var theInputValue = document.getElementById("the-input").nodeValue;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild.textNode;

    if(theInputValue === ''){
        alert('input a text')
    }else{
        document.getElementById('the-ul').appendChild(li);
    }
   
}