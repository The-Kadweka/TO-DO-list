var closeButton = document.getElementsByClassName("close");



function  createNewElement(){
    var li = document.createNewElement('li');
    var theInputValue = document.getElementById("the-input").nodeValue;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild.textNode;

    if(theInputValue === ''){
        alert('input a text')
    }else{
        document.getElementById('the-ul').appendChild(li);
    }
    var thePanTag = document.createNewElement("SPAN");
    var text = document.createTextNode("U007")
    thePanTag.className = "close";
    thePanTag.appendChild(text);
    li.appendChild(thePanTag);
    

    for(i = 0; i< closeButton.length; i++){
        closeButton[i].onclick =  function(){
            theDiv.style.display = "none";
        }
    }
}