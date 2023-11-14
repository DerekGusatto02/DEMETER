document.addEventListener('DOMContentLoaded', () => {
    // Leggi il parametro dalla URL
    const urlParams = new URLSearchParams(window.location.search);
    const paragrafo = urlParams.get('paragrafo');
  
    // Ottieni l'elemento in cui inserire il contenuto dinamico
    const contenutoDinamico = document.getElementById('contenuto-dinamico');
  
    // In base al parametro, mostra il testo corrispondente
    switch (paragrafo) {
      case '1':
        contenutoDinamico.innerHTML = '<p>Nell\'affrontare l\'emergenza alluvione che ha colpito diversi Comuni della nostra regione, l\'azienda Demeter dimostra ancora una volta il suo impegno sociale e ambientale. Nel corso del fine settimana appena trascorso, un contingente di operatori altamente specializzati è stato inviato nei luoghi più colpiti per coordinare e supportare le attività di rimozione di detriti e rifiuti causati dall\'alluvione.  \
        L\'obiettivo principale di questa missione è la raccolta e lo smaltimento di elettrodomestici, mobili e altri materiali danneggiati dall\'acqua. La situazione attuale ha generato una quantità significativa di rifiuti che occupano le strade, rendendo necessario un intervento immediato per ripristinare la normalità nei Comuni interessati. \
        Gli operatori di Demeter, altamente addestrati e dotati delle attrezzature più moderne, si stanno alternando nella guida di due mezzi specializzati con ragno, ognuno equipaggiato con due cassoni scarrabili. Questi veicoli sono progettati per affrontare terreni difficili e condizioni ambientali avverse, garantendo un intervento efficace e sicuro. \
        Il piano di intervento prevede un impegno costante per le prossime due settimane, durante le quali gli operatori di Demeter lavoreranno senza sosta per ripulire le strade e liberare la viabilità. La presenza di mezzi con ragno permetterà di accedere a zone altrimenti difficilmente raggiungibili, assicurando una copertura completa e una pulizia accurata. \
        Questa iniziativa non solo rappresenta un contributo fondamentale al ripristino delle normali condizioni di vita nei Comuni colpiti, ma sottolinea anche l\'impegno di Demeter nella gestione responsabile dei rifiuti e nell\'assistenza alle comunità locali in situazioni di emergenza. \
        Demeter si conferma dunque non solo come un\'azienda leader nel settore della raccolta rifiuti, ma anche come un partner affidabile e solidale nei confronti delle comunità in cui opera. L\'impegno verso la sostenibilità e la responsabilità sociale è un elemento fondamentale della filosofia aziendale, che si traduce concretamente in azioni tempestive e efficaci in momenti di difficoltà come quello attuale. \
        Il team di Demeter ringrazia anche la popolazione per la collaborazione e la comprensione, ricordando l\'importanza di una gestione consapevole dei rifiuti per la salvaguardia dell\'ambiente e la promozione di una comunità più resiliente.</p>';
        break;

      case '2':
        contenutoDinamico.innerHTML = '<p>Demeter, sempre all\'avanguardia nell\'impegno per un ambiente sano e sostenibile, ha recentemente lanciato il suo ultimo progetto didattico mirato a sensibilizzare gli studenti sull\'importanza della corretta gestione dei rifiuti. \
        Il progetto, intitolato \"Riciclo In Pratica\", è stato ufficialmente avviato la scorsa settimana con una serie di eventi educativi e interattivi presso le scuole primarie e secondarie di primo grado. L\'obiettivo principale di Riciclo In Pratica è fornire informazioni chiare e accessibili sulla corretta gestione dei rifiuti, incoraggiando pratiche sostenibili e responsabili applicabili fin da subito nella pratica di tutti i giorni, dimostrando come piccoli gesti facciano la differenza. \
        Durante il lancio del progetto, il team di Demeter ha presentato un programma ricco di attività coinvolgenti, tra cui workshop interattivi e seminari informativi. Gli esperti del settore hanno condiviso conoscenze fondamentali sul riciclo, la raccolta differenziata e le ultime tecnologie utilizzate nel trattamento dei rifiuti.\
        Il direttore generale di Demeter ha dichiarato entusiasta\: \"Riciclo In Pratica rappresenta un passo significativo nella nostra missione di promuovere una cultura più consapevole riguardo alla gestione dei rifiuti. Vogliamo coinvolgere attivamente la comunità, educando le persone a fare scelte più sostenibili nella loro vita quotidiana".\
        Il progetto prevede anche la distribuzione di materiale informativo, come opuscoli e guide pratiche. Inoltre, è stata lanciata una campagna social media con l\'hashtag #RicicloInPratica per coinvolgere un pubblico più ampio e incoraggiare la condivisione di buone pratiche in materia di gestione dei rifiuti. \
        La risposta iniziale alla campagna è stata estremamente positiva, con numerosi studenti, insegnanti e membri della comunità che hanno partecipato attivamente agli eventi di sensibilizzazione. \
        Demeter si impegna a mantenere viva l\'attenzione su questo importante tema nel lungo periodo, continuando a collaborare con le scuole e le organizzazioni locali per promuovere pratiche eco-sostenibili ed un cambiamento positivo nelle abitudini quotidiane della comunità che possano contribuire alla creazione di un ambiente più pulito e sano per le generazioni future.\</p>';
        break;

      case '3':
        contenutoDinamico.innerHTML = '<p>È con grande entusiasmo che annunciamo la consegna dei nuovi EcoCalendari per l\'anno 2024! In un impegno continuo per la sostenibilità e la gestione responsabile dei rifiuti, Demeter è lieta di mettere a disposizione dei cittadini i calendari delle raccolte per il prossimo anno.\
        Calendari Online e sull\'App\: Sempre a Portata di Mano \
        Le informazioni sulle raccolte del nuovo anno sono già consultabili sul nostro sito web. Inoltre, per rendere l\'accesso ancora più facile e immediato, abbiamo reso disponibile l\'intero calendario del 2024 tramite la nostra App ufficiale. Ora, gli utenti possono pianificare in anticipo le proprie attività di smaltimento rifiuti, contribuendo così attivamente alla gestione efficiente delle risorse. \
        Attenzione alle Variazioni Durante le Festività\
        Vorremmo sottolineare l\'importanza di controllare attentamente l\'EcoCalendario, specialmente in vista delle prossime festività. In alcuni Comuni, le raccolte subiranno delle variazioni per adattarsi al contesto festivo. Questo è un passo fondamentale per garantire una gestione ottimale dei rifiuti durante periodi in cui le abitudini quotidiane potrebbero subire cambiamenti. \
        Coinvolgimento Attivo dei Cittadini\
        Demeter invita i cittadini a partecipare attivamente al processo di gestione dei rifiuti, utilizzando le risorse messe a disposizione sul nostro sito e sull\'App. La collaborazione di tutti è essenziale per mantenere un ambiente pulito e sostenibile. \
        Continuate a seguire le nostre News per ulteriori aggiornamenti e informazioni rilevanti per la vostra comunità. Demeter si impegna a fornire servizi di qualità e a promuovere uno stile di vita ambientalmente responsabile. \
        Grazie per la vostra partecipazione continua!\
        Il Team Demeter</p>';
        break;

      case '4':
        contenutoDinamico.innerHTML = '<p>versione 1 \
        Demeter, sempre attenta alle esigenze della comunità e al rispetto dell\'ambiente, è lieta di informare i cittadini sulle nuove normative riguardanti i bidoni della spazzatura. Queste nuove disposizioni sono state introdotte con l\'obiettivo di semplificare la raccolta differenziata e promuovere uno smaltimento responsabile dei rifiuti.\
        In risposta alle crescenti sfide ambientali, le autorità competenti hanno implementato nuovi standard per i colori dei bidoni, al fine di rendere più intuitiva la separazione dei rifiuti. È importante che tutti i cittadini siano a conoscenza di queste modifiche per contribuire con successo alla gestione sostenibile dei rifiuti.   \
    \
        Colori Standard dei Bidoni e la Loro Significato:\
\
        - Blu: Carta e cartone - Il bidone blu è destinato alla raccolta di carta e cartone. Assicuratevi che gli imballaggi siano puliti e privi di residui alimentari.\
        - Giallo: Plastica e metalli - Questo bidone accoglie plastica e metalli. Ricordate di schiacciare le bottiglie e di separare i metalli dagli altri materiali.\
        - Verde: Vetro - Il bidone verde è destinato al vetro. Si prega di rimuovere tappi e coperchi prima del conferimento.\
        - Marrone: Organico - Tutti i rifiuti organici, come scarti alimentari e residui vegetali, vanno nel bidone marrone.\
        - Grigio: Rifiuti indifferenziati - Nel caso in cui alcuni materiali non rientrino nelle categorie sopra menzionate, devono essere smaltiti nel bidone grigio.\
        \
        Demeter invita tutti i cittadini a rispettare scrupolosamente queste nuove disposizioni per garantire una raccolta differenziata efficiente. L\'adozione di queste pratiche contribuirà significativamente alla riduzione dell\'impatto ambientale e alla promozione di uno stile di vita sostenibile.\
        Siamo fiduciosi che la nostra comunità accoglierà positivamente queste nuove normative, dimostrando ancora una volta il suo impegno per un ambiente più pulito e salutare. Continuate a seguire le notizie su Demeter per rimanere aggiornati su iniziative e sviluppi futuri legati alla gestione dei rifiuti. Insieme, possiamo fare la differenza. \
    \
\
\
\
        versione 2\
        Demeter, sempre attenta alle esigenze della comunità e al rispetto dell\'ambiente, desidera informare i cittadini sulle recenti normative concernenti i bidoni della spazzatura. Queste disposizioni sono state introdotte con l\'obiettivo di semplificare la raccolta differenziata e promuovere uno smaltimento responsabile dei rifiuti, in risposta alle sfide ambientali in aumento.\
        Le nuove norme prevedono standardizzazioni nei colori dei bidoni per rendere più intuitiva la separazione dei rifiuti. È fondamentale che ogni cittadino sia a conoscenza di tali cambiamenti per contribuire con successo alla gestione sostenibile dei rifiuti.\
        Ecco i colori standard dei bidoni e il loro significato\
        Blu: Carta e Cartone - Questo bidone è destinato alla raccolta di carta e cartone. Si prega di assicurarsi che gli imballaggi siano puliti e privi di residui alimentari.\
        Giallo: Plastica e Metalli - In questo bidone vanno plastica e metalli. Si raccomanda di schiacciare le bottiglie e di separare i metalli dagli altri materiali.\
        Verde: Vetro - Il bidone verde è destinato al vetro. Prima del conferimento, è importante rimuovere tappi e coperchi.\
        Marrone: Organico - Tutti i rifiuti organici, come scarti alimentari e residui vegetali, devono essere smaltiti nel bidone marrone.\
        Grigio: Rifiuti Indifferenziati - Nel caso in cui alcuni materiali non rientrino nelle categorie sopra menzionate, devono essere smaltiti nel bidone grigio.\
        Demeter invita calorosamente tutti i cittadini a rispettare scrupolosamente queste nuove disposizioni per garantire una raccolta differenziata efficiente. L\'adozione di queste pratiche contribuirà in modo significativo alla riduzione dell\'impatto ambientale e alla promozione di uno stile di vita sostenibile.\
        Confidiamo che la nostra comunità accoglierà positivamente queste nuove normative, dimostrando ancora una volta il suo impegno per un ambiente più pulito e salutare. Continuate a seguire le notizie su Demeter per rimanere aggiornati su iniziative e sviluppi futuri legati alla gestione dei rifiuti. Insieme, possiamo fare la differenza.\
    </p>';
        break;

      default:
        contenutoDinamico.innerHTML = '<p>Contenuto generico...</p>';
    }
  });