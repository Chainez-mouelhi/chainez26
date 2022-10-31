'user strict'



let name = document.forms["RegForm"]["Nom"];               
let email = document.forms["RegForm"]["Email"];    
let comment = document.forms["RegForm"]["Message"];  

function Form()                                    
{ 


if (name.value == "")                                  
{ 
    alert("Mettez votre nom."); 
    name.focus(); 
    return false; 
}    

if (email.value == "")                                   
{ 
    alert("Mettez une adresse email valide."); 
    email.focus(); 
    return false; 
}    
if (email.value.indexOf("@", 0) < 0)                 
{ 
    alert("Mettez une adresse email valide."); 
    email.focus(); 
    return false; 
}    
if (email.value.indexOf(".", 0) < 0)                 
{ 
    alert("Mettez une adresse email valide."); 
    email.focus(); 
    return false; 
}    



if (comment.value == "")                  
{ 
    alert("Écrivez un commentaire."); 
    comment.focus(); 
    return false; 
} 
return true; 
}
