<?php
    ini_set('display_errors',1);
    ini_set('display_startup_errors',1);
    setlocale(LC_ALL,'it_IT');

    session_start();
    $paginaHTML=file_get_contents("templates/inserisciNotiziaTemplate.html");
    $htmlToInsert="";

    require_once("functions/dbAccess.php");
    require_once("functions/functions.php");

    if(isset($_SESSION["email"]) && isset($_POST["titolo"])){
        $db=new DB\DBAccess;
        $connOk=$db->openDBConnection();
        if($connOk){
            $titolo = cleanInput($_POST['titolo'], $db->getConnection());
            $data = cleanInput($_POST['data'], $db->getConnection());
            $articolo = cleanInput($_POST['articolo'], $db->getConnection());
            $descrizione = cleanInput($_POST['descrizione'], $db->getConnection());
            $urlImg = cleanInput($_POST['urlImg'], $db->getConnection());
            $db->insertNotizia($titolo,$articolo,$descrizione,$urlImg,$data);    
        }else{
           header("Location: p503.html");
        }
       
    }

    if(isset($_SESSION["email"]) && isset($_SESSION["admin"])){
        $profile="<span lang='en'>Dashboard</span>";
        $profilelink="dashboard.php";
       
        $htmlToInsert .="

        <form id=\"notizia\" action=\"inserisciNotizia.php\" method=\"post\" onsubmit=\"return validazioneFormNotizia()\">

                <fieldset>
                    <legend>Nuova Notizia</legend>
                        <div class=\"form-linegroup\">
                            <label for=\"titolo\">Titolo:</label>
                            <input type=\"text\" id=\"titolo\" name=\"titolo\" placeholder=\"Titolo dell'articolo\" required>
                        </div>
                        <div class=\"form-linegroup\">
                            <label for=\"data\">Data:</label>
                            <input type=\"date\" id=\"data\" name=\"data\" required >    
                        </div>
                        <div class=\"form-linegroup\">
                            <label for=\"descrizione\">Descrizione in breve:</label>
                            <input type=\"text\" id=\"descrizione\" name=\"descrizione\" placeholder=\"Descrizione dell'articolo\" required >    
                        </div>
                        <div class=\"form-linegroup\">
                            <label for=\"articolo\">Testo:</label>
                            <textarea id=\"articolo\" name=\"articolo\" placeholder=\"Testo dell'articolo\"></textarea>   
                        </div>
                        <div class=\"form-linegroup\">
                            <label for=\"urlImg\">Percorso dell'immagine all'interno della cartella img/news/:</label>
                            <input type=\"text\" id=\"urlImg\" name=\"urlImg\" placeholder=\"image.png\" required >    
                        </div>
                        <div class=\"form-linegroup\">
                            <input type=\"submit\" value='Inserisci notizia' id='subformnot'>
                        </div>
                </fieldset>

            </form> ";
            $paginaHTML=str_replace("{profile}",$profile,$paginaHTML);
            $paginaHTML=str_replace("{profilelink}",$profilelink,$paginaHTML);
            $paginaHTML=str_replace("{content}",$htmlToInsert,$paginaHTML);
            echo $paginaHTML;

    }
    else{
        $htmlToInsert="<p>Non hai i permessi per accedere a questa pagina. Per favore esegui il <a href=\"login.php\">login</a> oppure <a href=\"registrazione.php\">registrati</a></p>";
        $paginaHTML=str_replace("{profile}","Accedi",$paginaHTML);
        $paginaHTML=str_replace("{profilelink}","login.php",$paginaHTML);
        $paginaHTML=str_replace("{content}",$htmlToInsert,$paginaHTML);
        echo $paginaHTML;
        
    }
