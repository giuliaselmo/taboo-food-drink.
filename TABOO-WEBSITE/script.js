/* ===== TABOO Food & Drink - script comune ===== */

/* ------------------------------------------------------------------
   DATI DEL MENU - MODIFICA SOLO QUI
   - Per aggiungere un prodotto: copia una riga { ... } e cambia i valori.
   - "img": percorso foto (es. "assets/images/margherita.jpg"); "" = nessuna foto.
   - Birre aggiornate dalle carte del locale; food e drinks sono ancora segnaposto.
------------------------------------------------------------------- */
const MENU = {
  birre: {
    intro: "Dalle birre alla spina alle etichette da scoprire, una selezione di stili e provenienze diverse. Chiedici la proposta collegata alla pompa e la spina ospite del momento.",
    categorie: [
      { titolo: "Birre alla spina", desc: "", items: [
        { nome: "Jever Pilsener", tipo: "Pilsner", origine: "Jever | Germania", gradi: "4,9% vol.", formato: "Spina · 0,3 l / 0,4 l", desc: "Secca e dissetante, con profumi erbacei e floreali, note di cereale e un amaro deciso e persistente.", prezzo: "0,3 l € 3,50 / 0,4 l € 5,00", img: "assets/images/beers/jever-pilsener.png" },
        { nome: "Alma", tipo: "West Coast IPA", origine: "Vertiga | Veneto, Italia", gradi: "6% vol.", formato: "Spina · 0,3 l / 0,5 l", desc: "Agrumata e tropicale, con luppolatura intensa, sfumature resinose e un finale secco, piacevolmente amaro.", prezzo: "0,3 l € 4,50 / 0,5 l € 7,00", img: "assets/images/beers/alma.png" },
        { nome: "Seta", tipo: "Blanche / Witbier", origine: "Birrificio Rurale | Lombardia, Italia", gradi: "5% vol.", formato: "Spina · 0,3 l / 0,5 l", desc: "Chiara e velata, fresca e speziata, con coriandolo e scorza d’arancia amara; corpo leggero e beva scorrevole.", prezzo: "0,3 l € 4,50 / 0,5 l € 7,00", img: "assets/images/beers/seta.png" },
        { nome: "IN POMPA", tipo: "Spillatura manuale a leva", origine: "Selezione variabile secondo disponibilità", gradi: "", formato: "0,5 l", desc: "Una selezione che cambia secondo disponibilità. La pompa manuale a leva valorizza una bevuta morbida e una schiuma delicata. Chiedici quale birra è collegata oggi: ti raccontiamo stile, provenienza e gradazione.", prezzo: "0,5 l € 7,00", img: "assets/images/beers/in-pompa.png" },
        { nome: "A ROTAZIONE", tipo: "Novità da scoprire", origine: "Birrifici e stili variabili secondo disponibilità", gradi: "", formato: "0,3 l / 0,5 l", desc: "Una spina dedicata alle novità, con birrifici e stili che si alternano. Chiedici la proposta del momento, con caratteristiche, gradazione e prezzo.", prezzo: "0,3 l € 4,50 / 0,5 l € 7,00", img: "assets/images/beers/a-rotazione.png" }
      ]},
      { titolo: "Fresche e luppolate", desc: "", items: [
        { nome: "Tipopils", tipo: "Italian Pils", origine: "Birrificio Italiano | Lombardia, Italia", gradi: "5,2% vol.", formato: "33 cl", desc: "Chiara, fragrante ed erbacea, con note floreali e un finale secco, piacevolmente amaro.", prezzo: "€ 6,00", img: "assets/images/beers/tipopils.png" },
        { nome: "Kellerpils", tipo: "Keller Pils · senza glutine", origine: "Birrificio Rurale | Lombardia, Italia", gradi: "4,8% vol.", formato: "33 cl", desc: "Dorata, fresca e scorrevole, caratterizzata dal lievito Munich Lager. Certificata senza glutine.", prezzo: "€ 6,00", img: "assets/images/beers/kellerpils.png" },
        { nome: "Finisterrae", tipo: "White Ale / birra di frumento", origine: "Birrificio Italiano | Lombardia, Italia", gradi: "5% vol.", formato: "33 cl", desc: "Chiara e rinfrescante, con note di banana e chiodi di garofano, corpo leggero e amaro delicato.", prezzo: "€ 6,00", img: "assets/images/beers/finisterrae.png" },
        { nome: "Magic Show", tipo: "Modern Bitter", origine: "Vertiga | Veneto, Italia", gradi: "4% vol.", formato: "33 cl", desc: "Ambrata e scorrevole, con malto biscottato, luppolo fresco e un amaro elegante.", prezzo: "€ 6,00", img: "assets/images/beers/magic-show.png" },
        { nome: "Flora", tipo: "Pale Ale", origine: "Vertiga | Veneto, Italia", gradi: "4,7% vol.", formato: "33 cl", desc: "Dorata, con aromi tropicali e resinosi, leggere note tostate e un finale equilibrato.", prezzo: "€ 6,00", img: "assets/images/beers/flora.png" },
        { nome: "Bali", tipo: "Session IPA", origine: "Vertiga | Veneto, Italia", gradi: "4,1% vol.", formato: "33 cl", desc: "Leggera e tropicale, con richiami di mango, ananas e frutto della passione; amaro delicato.", prezzo: "€ 6,00", img: "assets/images/beers/bali.png" },
        { nome: "Jaipur", tipo: "India Pale Ale", origine: "Thornbridge | Inghilterra, Regno Unito", gradi: "5,9% vol.", formato: "", desc: "IPA agrumata e tropicale, con pompelmo, limone e un amaro deciso, bilanciato dal malto.", prezzo: "€ 6,50", img: "assets/images/beers/jaipur.png" }
      ]},
      { titolo: "Maltate e scure", desc: "", items: [
        { nome: "Bibock", tipo: "Bock / Amber Lager", origine: "Birrificio Italiano | Lombardia, Italia", gradi: "6,2% vol.", formato: "", desc: "Ambrata, ricca ed equilibrata, con nocciola, caramello e miele di castagno, sostenuti da un amaro vivace.", prezzo: "€ 6,50", img: "assets/images/beers/bibock.png" },
        { nome: "Triple Pepper", tipo: "Tripel al pepe delle Andalimane", origine: "Birrificio Rurale | Lombardia, Italia", gradi: "8,8% vol.", formato: "", desc: "Tripel secca e intensa, con note fruttate e speziate, arricchite dal carattere agrumato del pepe delle Andalimane.", prezzo: "€ 7,00", img: "assets/images/beers/triple-pepper.png" },
        { nome: "Blackout", tipo: "Dry Stout", origine: "Birrificio Rurale | Lombardia, Italia", gradi: "4,2% vol.", formato: "", desc: "Stout di ispirazione irlandese, con malti tostati, caffè, cioccolato e un finale di liquirizia.", prezzo: "€ 6,00", img: "assets/images/beers/blackout.png" },
        { nome: "Market Porter", tipo: "English Porter", origine: "Thornbridge | Inghilterra, Regno Unito", gradi: "4,5% vol.", formato: "33 cl", desc: "Porter morbida e cremosa, con caffè tostato, caramello, frutta secca e cioccolato.", prezzo: "€ 6,50", img: "assets/images/beers/market-porter.png" }
      ]},
      { titolo: "Sidri", desc: "", items: [
        { nome: "British Vintage", tipo: "Sidro di mele frizzante", origine: "Henry Westons | Herefordshire, Inghilterra", gradi: "7,3% vol.", formato: "", desc: "Sidro di mele frizzante, ricco e rotondo, con gusto fresco e finale croccante.", prezzo: "€ 7,00", img: "assets/images/beers/british-vintage.png" },
        { nome: "Vintage Pear", tipo: "Sidro di pere frizzante", origine: "Henry Westons | Herefordshire, Inghilterra", gradi: "6% vol.", formato: "50 cl", desc: "Mediamente dolce, con profumi floreali e un finale fruttato persistente.", prezzo: "€ 7,00", img: "assets/images/beers/vintage-pear.png" }
      ]},
      { titolo: "Acide e a fermentazione spontanea", desc: "", items: [
        { nome: "Geuze Mariage Parfait", tipo: "Oude Geuze / Lambic", origine: "Boon | Lembeek, Belgio", gradi: "8% vol.", formato: "37,5 cl", desc: "Complessa e secca, con agrumi, rovere, vaniglia e una raffinata acidità vinosa.", prezzo: "€ 14,00", img: "assets/images/beers/geuze-mariage-parfait.png" },
        { nome: "Oude Geuze", tipo: "Oude Geuze / Lambic", origine: "3 Fonteinen | Beersel, Belgio", gradi: "6,9% vol.*", formato: "37,5 cl", desc: "Assemblaggio di lambic maturati in legno, con acidità vivace, note fruttate e finale secco. *Gradazione riportata in fattura; varia secondo l’assemblaggio.", prezzo: "€ 18,00", img: "assets/images/beers/oude-geuze.png" }
      ]}
    ]
  },
  food: {
    intro: "La cucina TABOO: bruschette, fritti, panini e piatti da condividere, preparati con ingredienti ricchi di gusto.",
    categorie: [
      { titolo: "Bruschette", desc: "", items: [
        { nome: "Regina", ingredienti: "", desc: "Pomodoro, mozzarella e origano.", prezzo: "€ 6,00", img: "" },
        { nome: "Prosciutto e funghi", ingredienti: "", desc: "Pomodoro, mozzarella, prosciutto cotto e funghi.", prezzo: "€ 8,50", img: "" },
        { nome: "Americana", ingredienti: "", desc: "Pomodoro, mozzarella e salamino piccante.", prezzo: "€ 7,50", img: "" },
        { nome: "Verde e speck", ingredienti: "", desc: "Pomodoro, mozzarella, gorgonzola e speck.", prezzo: "€ 8,50", img: "" },
        { nome: "Tonnata", ingredienti: "", desc: "Pomodoro, mozzarella, cipolla caramellata e tonno.", prezzo: "€ 8,00", img: "" },
        { nome: "Vegetariana", ingredienti: "", desc: "Pomodoro, mozzarella e verdure miste.", prezzo: "€ 8,50", img: "" },
        { nome: "Più Pork", ingredienti: "", desc: "Pomodoro, mozzarella, salsiccia, cipolla caramellata e pancetta stufata.", prezzo: "€ 9,50", img: "" },
        { nome: "Bonzo", ingredienti: "", desc: "Pomodoro, mozzarella, porchetta, grana e zucchine.", prezzo: "€ 9,00", img: "" },
        { nome: "Carbonara", ingredienti: "", desc: "Mozzarella, guanciale e salsa carbonara con uovo e pecorino.", prezzo: "€ 10,00", img: "" },
        { nome: "Friariella", ingredienti: "", desc: "Pomodoro, mozzarella, salsiccia, scamorza affumicata e friarielli.", prezzo: "€ 9,50", img: "" },
        { nome: "Pesciolotta", ingredienti: "", desc: "Pomodoro, mozzarella, salmone, brie e zucchine.", prezzo: "€ 10,00", img: "" },
        { nome: "Boscotta", ingredienti: "", desc: "Pomodoro, mozzarella, funghi, soppressa e Vezzena.", prezzo: "€ 9,50", img: "" },
        { nome: "Taboo 2.0", ingredienti: "", desc: "Pomodoro, mozzarella, radicchio, pancetta arrotolata e gorgonzola.", prezzo: "€ 9,50", img: "" },
        { nome: "Zuccotta", ingredienti: "", desc: "Pomodoro, mozzarella, zucca, prosciutto cotto e stracchino.", prezzo: "€ 9,00", img: "" }
      ]},
      { titolo: "Fritti", desc: "", items: [
        { nome: "Patate con buccia", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Polpette di Fabio", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Anelli di cipolla", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Panzerotti", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Alette di pollo", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Jalapeños", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Mozzarelline", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Pulled bites", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Nuggets di pollo", ingredienti: "", desc: "", prezzo: "€ 4,50", img: "" },
        { nome: "Fritto misto", ingredienti: "", desc: "", prezzo: "€ 9,00", img: "" }
      ]},
      { titolo: "Panini", desc: "", items: [
        { nome: "Pulled Pork", ingredienti: "", desc: "Pulled pork, cappuccio rosso e salsa tartara.", prezzo: "€ 11,00", img: "" },
        { nome: "Chicken McTaboo", ingredienti: "", desc: "Cotoletta di pollo, cipolla caramellata, pancetta stufata e salsa burger.", prezzo: "€ 10,00", img: "" },
        { nome: "Hot Dog", ingredienti: "", desc: "Würstel artigianale arrotolato nel bacon, salsa smokey e cipolla croccante.", prezzo: "€ 7,50", img: "" },
        { nome: "Tartare Bun", ingredienti: "", desc: "Tartare di manzo, zucca, stracchino e maionese ai pepi.", prezzo: "€ 10,00", img: "" },
        { nome: "Il Cotecone", ingredienti: "", desc: "Cotechino, Vezzena, friarielli e maionese al kren.", prezzo: "€ 8,50", img: "" }
      ]},
      { titolo: "Piatti", desc: "", items: [
        { nome: "Galletto e patate", ingredienti: "", desc: "Galletto cotto a bassa temperatura con erbette e patate fritte.", prezzo: "€ 15,00", img: "" },
        { nome: "Caesar Salad", ingredienti: "", desc: "Insalata iceberg, kebab di pollo, crostini di pane, scaglie di grana e salsa Caesar.", prezzo: "€ 11,00", img: "" },
        { nome: "Zuppa di cipolle", ingredienti: "", desc: "Con Vezzena e crostini.", prezzo: "€ 9,00", img: "" },
        { nome: "Folpetti con la polenta", ingredienti: "", desc: "", prezzo: "€ 14,00", img: "" },
        { nome: "Polpette al sugo con polenta", ingredienti: "", desc: "", prezzo: "€ 13,00", img: "" }
      ]}
    ]
  },
  drinks: {
    intro: "Cocktail di stagione, creazioni di Flavio Angiolillo, best seller, proposte analcoliche e selezioni di gin e whisky.",
    categorie: [
      { titolo: "Signature d'inverno", desc: "Nuovi cocktail della stagione", items: [
        { nome: "Pane & Marmellata", ingredienti: "Havana Club Rum Mix, infuso al pane tostato, purea di albicocca, limone, soda.", desc: "Tostato · Fruttato · Fresco", prezzo: "€ 8,00", img: "assets/images/drinks/pane-marmellata.png" },
        { nome: "Burro & Salvia", ingredienti: "Gin Beefeater, liquore alla salvia (Liquori di Vita), sciroppo al burro Nexus, limone.", desc: "Burroso · Erbaceo · Morbido", prezzo: "€ 8,00", img: "assets/images/drinks/burro-salvia.png" },
        { nome: "L'Ora del Tè", ingredienti: "Arigatò (liquore ai tre tè orientali), sciroppo di zucchero, menta, lime.", desc: "Aromatico · Fresco · Agrumato", prezzo: "€ 8,00", img: "assets/images/drinks/ora-del-te.png" },
        { nome: "Cheesecake alla Ciliegia", ingredienti: "Vodka Absolut infusa al biscotto, sciroppo di zucchero, limone, spuma di yogurt alla ciliegia.", desc: "Tostato · Fruttato · Fresco", prezzo: "€ 8,00", img: "assets/images/drinks/cheesecake-ciliegia.png" }
      ]},
      { titolo: "Cocktail by Flavio Angiolillo", desc: "", items: [
        { nome: "Origamone", ingredienti: "Bitter Fusetti Nigai Kanpai, Galvanina ai fiori di ciliegio.", desc: "Floreale · Frizzante · Amaricante", prezzo: "€ 8,00", img: "assets/images/drinks/origamone.png" },
        { nome: "Spina Tonic", ingredienti: "SantaSpina Fumigata (distillato affumicato di fico d'India), Galvanina Foglia di Fico.", desc: "Affumicato · Vegetale · Fresco", prezzo: "€ 8,00", img: "assets/images/drinks/spina-tonic.png" },
        { nome: "Negroni del Marinaio", ingredienti: "Bitter Fusetti, Vermouth Volume Primo, Mezcal Vida, Kahlúa.", desc: "Amaro · Affumicato · Tostato", prezzo: "€ 8,00", img: "assets/images/drinks/negroni-marinaio.png" }
      ]},
      { titolo: "I nostri Best Seller", desc: "", items: [
        { nome: "Irish Fuze Tea", ingredienti: "Whiskey Jameson infuso alla pesca, liquore alla rosa, limone.", desc: "Floreale · Fruttato · Avvolgente", prezzo: "€ 8,00", img: "assets/images/drinks/irish-fuze-tea.png" },
        { nome: "Raspberry Fumé", ingredienti: "Rum Havana Club 3 Años, Furente (liquore affumicato), purea di lamponi, lime, sciroppo di zucchero.", desc: "Fruttato · Affumicato · Fresco", prezzo: "€ 8,00", img: "assets/images/drinks/raspberry-fume.png" }
      ]},
      { titolo: "Analcolici", desc: "Freschezza e gusto, senza alcol", items: [
        { nome: "Gin Tonic 0.0", ingredienti: "", desc: "Botanico · Fresco", prezzo: "€ 7,00", img: "assets/images/drinks/analcolici.png" },
        { nome: "Americano 0.0", ingredienti: "", desc: "Amaricante · Agrumato", prezzo: "€ 6,00", img: "assets/images/drinks/analcolici.png" },
        { nome: "Mojito 0.0", ingredienti: "", desc: "Mentolato · Dissetante", prezzo: "€ 7,00", img: "assets/images/drinks/analcolici.png" },
        { nome: "Princess Peach 0.0", ingredienti: "Purea di pesca, ginger beer, lime, vaniglia.", desc: "Fruttato · Speziato · Fresco", prezzo: "€ 6,00", img: "assets/images/drinks/analcolici.png" },
        { nome: "Fragolino", ingredienti: "Purea di fragola, pompelmo rosa, lime, soda.", desc: "Fruttato · Agrumato · Dissetante", prezzo: "€ 6,00", img: "assets/images/drinks/analcolici.png" }
      ]},
      { titolo: "Bibite", desc: "", compatta: true, items: [
        { nome: "Acqua frizzante 0,25", prezzo: "€ 1,50" },
        { nome: "Acqua naturale 0,25", prezzo: "€ 1,50" },
        { nome: "Caffè", prezzo: "€ 1,50" },
        { nome: "Coca Cola", prezzo: "€ 3,50" },
        { nome: "Coca Zero", prezzo: "€ 3,50" },
        { nome: "Gingerino", prezzo: "€ 2,50" },
        { nome: "Lemonsoda", prezzo: "€ 3,50" },
        { nome: "Red Bull", prezzo: "€ 4,00" },
        { nome: "Tè limone", prezzo: "€ 3,50" },
        { nome: "Tè pesca", prezzo: "€ 3,50" },
        { nome: "Tonica", prezzo: "€ 3,50" },
        { nome: "Ginger Beer", prezzo: "€ 3,50" },
        { nome: "Fanta", prezzo: "€ 3,50" },
        { nome: "Tonica pompelmo", prezzo: "€ 4,00" },
        { nome: "Succo", prezzo: "€ 3,00" }
      ]},
      { titolo: "Aperitivi", desc: "", compatta: true, items: [
        { nome: "Americano", prezzo: "€ 6,00" },
        { nome: "Spritz Hugo", prezzo: "€ 4,00" },
        { nome: "Spritz bianco", prezzo: "€ 2,50" },
        { nome: "Spritz Campari", prezzo: "€ 4,00" },
        { nome: "Spritz Aperol", prezzo: "€ 3,50" },
        { nome: "Lemon Aperol", prezzo: "€ 3,50" },
        { nome: "Boulevardier", prezzo: "€ 7,00" },
        { nome: "Negroni", prezzo: "€ 7,00" },
        { nome: "Mezzo e Mezzo", prezzo: "€ 4,00" },
        { nome: "Old Fashioned", prezzo: "€ 7,00" },
        { nome: "Milano Torino", prezzo: "€ 6,00" },
        { nome: "Midori Lemon", prezzo: "€ 4,00" },
        { nome: "Fusettone", prezzo: "€ 7,00" }
      ]},
      { titolo: "Cocktail", desc: "", compatta: true, items: [
        { nome: "Gin Tonic", prezzo: "€ 7,00" },
        { nome: "Gin Lemon", prezzo: "€ 7,00" },
        { nome: "Gin Fizz", prezzo: "€ 7,00" },
        { nome: "Vodka Tonic", prezzo: "€ 7,00" },
        { nome: "Vodka Lemon", prezzo: "€ 7,00" },
        { nome: "Vodka Redbull", prezzo: "€ 7,00" },
        { nome: "Skinny Bitch", prezzo: "€ 7,00" },
        { nome: "Coca Rum", prezzo: "€ 7,00" },
        { nome: "Cuba Libre", prezzo: "€ 7,00" },
        { nome: "My-Thai", prezzo: "€ 7,00" },
        { nome: "Mojito", prezzo: "€ 8,00" },
        { nome: "Moscow Mule", prezzo: "€ 7,00" },
        { nome: "London Mule", prezzo: "€ 7,00" },
        { nome: "Jamaican Mule", prezzo: "€ 7,00" },
        { nome: "Mexican Mule", prezzo: "€ 7,00" },
        { nome: "Caipirinha", prezzo: "€ 7,00" },
        { nome: "Daiquiri", prezzo: "€ 7,00" },
        { nome: "Margarita", prezzo: "€ 8,00" },
        { nome: "Manhattan", prezzo: "€ 7,00" },
        { nome: "Coca Jack", prezzo: "€ 7,00" },
        { nome: "Jager Bomb", prezzo: "€ 7,00" },
        { nome: "Caipiroska", prezzo: "€ 7,00" },
        { nome: "Tom Collins", prezzo: "€ 7,00" },
        { nome: "Long Island", prezzo: "€ 8,00" },
        { nome: "Japanese Ice Tea", prezzo: "€ 8,00" },
        { nome: "Paloma", prezzo: "€ 8,00" },
        { nome: "Whisky Sour", prezzo: "€ 7,00" },
        { nome: "Espresso Martini", prezzo: "€ 7,00" }
      ]},
      { titolo: "Selezione Gin", desc: "", items: [
        { nome: "Prince Explorer Monaco Gin", ingredienti: "Italia (marchio del Principato di Monaco) · 42% vol.", desc: "Agrumato e speziato, con mandarino, ginepro, pepe rosa e pepe di Sichuan; finale caldo e persistente.", prezzo: "€ 16,00", img: "assets/images/drinks/gin-prince-explorer.png" },
        { nome: "Boatyard Double Gin", ingredienti: "Irlanda del Nord, Regno Unito · 46% vol.", desc: "Ginepro intenso, note erbacee e agrumate; il doppio contatto con le bacche dona carattere e profondità.", prezzo: "€ 12,00", img: "assets/images/drinks/gin-boatyard.png" },
        { nome: "Opificio Pink Gin", ingredienti: "Italia · 40% vol.", desc: "Fresco e agrumato, con ginepro, pompelmo rosa e limoni di Sicilia.", prezzo: "€ 8,00", img: "assets/images/drinks/gin-opificio-pink.png" },
        { nome: "Gin Alto - Distillerling", ingredienti: "Emilia-Romagna, Italia · 41% vol.", desc: "Agrumato, profumato e floreale, dal carattere fresco e delicato.", prezzo: "€ 9,00", img: "assets/images/drinks/gin-alto.png" },
        { nome: "Gin da Giù - Distillerling", ingredienti: "Emilia-Romagna, Italia · 43% vol.", desc: "Mediterraneo, erbaceo e complesso, con limone, rosmarino, menta, mirto e una particolare nota umami.", prezzo: "€ 9,00", img: "assets/images/drinks/gin-da-giu.png" },
        { nome: "The Greedy Gentle Edition", ingredienti: "Veneto, Italia · 43% vol.", desc: "Bergamotto e mandarino incontrano lavanda e geranio, con sfumature balsamiche e un finale pulito di tè verde.", prezzo: "€ 9,00", img: "assets/images/drinks/gin-greedy-gentle.png" },
        { nome: "Amázzoni Rio Negro", ingredienti: "Brasile · 51% vol.", desc: "Intenso e strutturato, con ginepro protagonista, note erbacee, coriandolo e scorza di limone.", prezzo: "€ 9,00", img: "assets/images/drinks/gin-amazzoni-rio-negro.png" },
        { nome: "Cygnet Welsh Dry Gin", ingredienti: "Galles, Regno Unito · 40% vol.", desc: "Ginepro vivace, lime e pompelmo rosa, con delicate note floreali e un finale morbido.", prezzo: "€ 10,00", img: "assets/images/drinks/gin-cygnet-welsh-dry.png" },
        { nome: "Hills & Harbour Distilled Gin Cocktail", ingredienti: "Scozia, Regno Unito · 40% vol.", desc: "Arancia bruciata e ananas affumicato, con note agrumate, tropicali e un finale delicatamente fumé.", prezzo: "€ 14,00", img: "assets/images/drinks/gin-hills-harbour.png" }
      ]},
      { titolo: "Selezione Whisky", desc: "", items: [
        { nome: "Hibiki - Japanese Harmony", ingredienti: "Giappone · 43% vol.", desc: "Blended whisky giapponese raffinato ed equilibrato, con note floreali, agrumate e un tocco di miele. Elegante e armonico.", prezzo: "€ 12,00", img: "assets/images/drinks/whisky-hibiki-harmony.png" },
        { nome: "Jameson - Black Barrel", ingredienti: "Irlanda · 40% vol.", desc: "Irish whiskey tripla distillazione, affinato in botti di bourbon selezionate e successivamente in botti tostate. Ricco, con note di vaniglia, caramello e spezie.", prezzo: "€ 5,00", img: "assets/images/drinks/whisky-jameson-black-barrel.png" },
        { nome: "Jameson Original", ingredienti: "Irlanda · 40% vol.", desc: "Iconico Irish whiskey morbido e versatile, con note di cereali, vaniglia e un delicato tocco speziato.", prezzo: "€ 4,00", img: "assets/images/drinks/whisky-jameson-original.png" },
        { nome: "Mac-Talla Strata", ingredienti: "Islay, Scozia · 46% vol.", desc: "Single malt di Islay, 15 anni di affinamento. Torbato, intenso e complesso, con note di fumo, alghe marine, agrumi e spezie.", prezzo: "€ 10,00", img: "assets/images/drinks/whisky-mactalla-strata.png" },
        { nome: "Mac-Talla Mara", ingredienti: "Islay, Scozia · 58,2% vol.", desc: "Single malt in cask strength, marino e potente. Intenso fumo di torba, iodio, agrumi e spezie, con grande personalità.", prezzo: "€ 9,00", img: "assets/images/drinks/whisky-mactalla-mara.png" },
        { nome: "Mac-Talla Flora", ingredienti: "Islay, Scozia · 48,2% vol.", desc: "Single malt leggermente torbato, più floreale e delicato. Note di miele, vaniglia, agrumi e una sottile scia affumicata.", prezzo: "€ 8,00", img: "assets/images/drinks/whisky-mactalla-flora.png" },
        { nome: "Old Perth - The Original", ingredienti: "Scozia · 46% vol.", desc: "Blended malt scozzese ricco e avvolgente, con forte influenza di botti ex-sherry. Note di frutta secca, uvetta, spezie e cacao.", prezzo: "€ 6,00", img: "assets/images/drinks/whisky-old-perth.png" }
      ]}
    ]
  }
};

/* ------------------------------------------------------------------
   RENDER DEL MENU (solo nelle pagine birre / food / drinks)
------------------------------------------------------------------- */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* Riga di dettagli sotto il nome, diversa per categoria */
const META = {
  birre: p => [p.tipo, p.origine, p.gradi, p.formato].filter(Boolean).join(" · "),
  food: p => p.ingredienti,
  drinks: p => p.ingredienti
};

function itemHTML(p, meta) {
  const img = p.img ? `<img loading="lazy" src="${esc(p.img)}" alt="${esc(p.nome)}">` : "";
  const price = esc(p.prezzo).replace(/ \/ /g, "<br>");
  return `<article class="item${p.img ? " has-img" : ""}">${img}
    <div><div class="item-name">${esc(p.nome)}</div>
    ${meta ? `<div class="item-meta">${esc(meta)}</div>` : ""}
    <p class="item-desc">${esc(p.desc)}</p></div>
    <div class="item-price">${price}</div></article>`;
}

const cat = document.body.dataset.cat;
if (cat && MENU[cat]) {
  document.getElementById("intro").textContent = MENU[cat].intro;
  document.getElementById("list").innerHTML = MENU[cat].categorie.map(c =>
    (c.titolo ? `<h2 class="cat-title">${esc(c.titolo)}</h2>` : "") +
    (c.desc ? `<p class="cat-desc">${esc(c.desc)}</p>` : "") +
    (c.compatta
      ? `<div class="list compact-list">${c.items.map(p => `<div class="compact-item"><span>${esc(p.nome)}</span><strong>${esc(p.prezzo)}</strong></div>`).join("")}</div>`
      : `<div class="list">${c.items.map(p => itemHTML(p, META[cat](p))).join("")}</div>`)
  ).join("");
}

/* ------------------------------------------------------------------
   NAVIGAZIONE MOBILE (hamburger)
------------------------------------------------------------------- */
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.getElementById("year").textContent = new Date().getFullYear();
