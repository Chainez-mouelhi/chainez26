<?php


  if(isset($_POST['valider']))
  {
  	if(isset($_POST['Nom']) AND isset($_POST['Email']) AND isset($_POST['Message']))
  	{
  		if(!empty($_POST['Nom']) AND !empty($_POST['Email']) AND !empty($_POST['Message']))
  		{
           $name=htmlspecialchars($_POST['Nom']);
           $email=htmlspecialchars($_POST['Email']);
           $message=htmlspecialchars($_POST['Message']);
 
             
             echo "<h2> Bonjour, merci pour votre message </h2>";
  		}
  	}
  }

?>