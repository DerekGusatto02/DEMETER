function caricamento(){
    let inputIndirizzo = document.getElementById("indirizzo");
    inputIndirizzo.onblur = function (){validateIndirizzo(this)};
    let inputData = document.getElementById("data");
    inputData.onblur = function (){validateData(this)};
    let inputTesto = document.getElementById("testo");
    inputTesto.onblur = function (){validate(this)};
}


function showError(tag, stringa){
    const padre = tag.parentNode;
    const errore = document.createElement("strong");
    errore.className = "errorSuggestion";
    errore.appendChild(document.createTextNode(stringa));
    padre.appendChild(errore);
}   

function removeChildInput(tag){
    const padre = tag.parentNode;
    if(padre.children.length == 3){
        padre.removeChild(padre.children[2]);
    }
}

function validateIndirizzo(input){
    removeChildInput(input);
    try{
      
        
        return true;
    }catch (err) {
        showError(input, "Data non valida!"); 
        inputURL.focus(); 
        inputURL.select(); 
        return false;
    }
}

function validateTesto(input){
    removeChildInput(input);
    try{
      
        
        return true;
    }catch (err) {
        showError(input, "Data non valida!"); 
        inputURL.focus(); 
        inputURL.select(); 
        return false;
    }
}

function validateTesto(input){
    removeChildInput(input);
    try{
      
        
        return true;
    }catch (err) {
        showError(input, "Testo non valido!");
        inputURL.focus(); 
        return false;
    }
}

function validazioneForm(){
    let inputIndirizzo = document.getElementById("indirizzo");
    let inputData = document.getElementById("data");
    let inputTesto = document.getElementById("testo");
    return validateIndirizzo(inputIndirizzo) && validateData(inputData) && validateTesto(inputTesto);

}