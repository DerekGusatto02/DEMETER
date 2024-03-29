<?php
    ini_set('display_errors',1);
    ini_set('display_startup_errors',1);
    setlocale(LC_ALL,'it_IT');

    require_once "functions/dbAccess.php";
    session_start();
    $db=new DB\DBAccess;
    $connOk=$db->openDBConnection();
    $id_segnalazione = $_GET["id"];
    $htmlToInsert = "";
    $paginaHTML=file_get_contents("templates/detailedSegnalazioneTemplate.html");

    if(!isset($_SESSION["email"])){
        header("Location: login.php");


    }else{
        if(isset($_SESSION["admin"])){
            $profile="<span lang='en'>Dashboard</span>";
            $profilelink="dashboard.php";

            if($connOk){
                [ $indirizzo, $data, $testo, $inCarico] = $db -> getDetailedSegnalazione($id_segnalazione);
               
                $htmlToInsert .= "<h2>".$indirizzo." | ".$data."</h2>";
                $htmlToInsert .= "<p>".$testo."</p>";
                if($inCarico){
                    $htmlToInsert .= "<p class='isInCarico'>Questa segnalazione è presa in carico, se non fosse così:</p><a class='changesegnstatus' href=\"functions/updateSegnalazione.php?id=" .$id_segnalazione. "&inCarico=0\">Segnala come non presa in carico </a>";
                }else{
                    $htmlToInsert .= "<p class='isInCarico'>Questa segnalazione non è presa in carico:</p><a class='changesegnstatus' href=\"functions/updateSegnalazione.php?id=" .$id_segnalazione. "&inCarico=1\">Segnala come presa in carico </a>";
                }
        
                $htmlToInsert .= "<a id =\"deleteSegnalazione\" class='delete-button' href=\"functions/deleteSegnalazione.php?id=".$id_segnalazione."\">Elimina segnalazione</a>";
               
            } else{
                header("Location: p503.html"); 
            }
        
        
            $paginaHTML=str_replace("{profile}",$profile,$paginaHTML);
            $paginaHTML=str_replace("{profilelink}",$profilelink,$paginaHTML);
            $paginaHTML=str_replace("{detailedTitle}",$id_segnalazione,$paginaHTML);
            $paginaHTML=str_replace("{detailedSegnalazione}",$htmlToInsert,$paginaHTML);
        
            echo $paginaHTML;
           
            
        }else{
            header("Location: index.php");
        }
       
    }

    

