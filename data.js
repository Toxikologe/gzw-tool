// ==========================================
// GRAY ZONE WARFARE - TACTICAL DATABASE
// Update: 0.4 Spearhead & Hotfix 0.4.0.3
// ==========================================

    // ==============================================================
    // DATENBANKEN
    // ==============================================================

    // ==============================================================
    // 1. MISSIONS-DATENBANK (TASKS) - 0.4 SPEARHEAD (100% COMPLETE)
    // ==============================================================
    const allTasks = [
        // --- HANDSHAKE TASKS ---
        { de: "Erstaufklärung", en: "First Recon", v: "Handshake", desc: "Erkunde Markt, Tankstelle und Rathaus.", sol: "Markt (141 162), Tankstelle (144 161), Ruine (141 165)." },
        { de: "Agent der Paranoia", en: "Paranoia Agent", v: "Handshake", desc: "Haus des Informanten suchen.", sol: "Startgebiet. Finde das Versteck des Informanten und sichere Hinweise." },
        { de: "Abgestürzter Vogel", en: "Little Bird Down", v: "Handshake", desc: "Finde den Heli-Absturzplatz.", sol: "Crashed Heli (145 159), Crew-Leichen (145 160)." },
        { de: "Wiederherstellung der Ordnung", en: "Restoring Order", v: "Handshake", desc: "10 Feinde in der Startstadt.", sol: "Töte 10 feindliche KIs in der Startstadt." },
        { de: "Rattennest", en: "Rat's Nest", v: "Handshake", desc: "Wanzen im Bunker.", sol: "Verstecke bei SE (143 162) und SW (140 162) untersuchen." },
        { de: "Helfende Hand", en: "Helping Hand", v: "Handshake", desc: "Intel aus dem Restaurant.", sol: "Koordinaten 141 164. Braucht ATTIC KEY (Dachboden)." },
        { de: "Zurückgelassen", en: "Left Behind", v: "Handshake", desc: "Hinweise auf VIP-Leiche.", sol: "Leiche bei den Koordinaten 147 162 finden und identifizieren." },
        { de: "Sisyphus", en: "Sisyphus", v: "Handshake", desc: "10 Feinde um die Startstadt.", sol: "Neutralisiere 10 KIs im Umland der Startstadt." },
        { de: "Funkstille", en: "Radio Silence", v: "Handshake", desc: "Funkturm auf Sabotage prüfen.", sol: "Isoliertes Haus in der Stadt (140 164). Equipment neutralisieren." },
        { de: "Radiostar", en: "Radio Star", v: "Handshake", desc: "Haus NW der Brücke.", sol: "Haus im Startgebiet. Equipment sichern/zerstören." },
        { de: "Vermisste Kinder", en: "Missing Children", v: "Handshake", desc: "UNLRA Evakuierungszentrum.", sol: "Finde zwei UNLRA-Ordner in der Startstadt." },
        { de: "Erster Schlag", en: "First Hit", v: "Handshake", desc: "Kriminellen-Anführer ausschalten.", sol: "Eliminiere den Stadt-Boss (141 162). Er trägt ein rotes Barett." },
        { de: "Rückgewinnung", en: "Reclamation", v: "Handshake", desc: "Fracht aus Versteck holen.", sol: "Startgebiet (142 165). Wähle bei Abgabe zwischen Handshake oder Lab Rat." },
        { de: "König der Kreuzung", en: "King of the Crossroads", v: "Handshake", desc: "Infos über den King.", sol: "Suche das Khonwan-Dorf und die Strip-Bar im Osten ab." },
        { de: "Neue Nachbarn", en: "New Neighbors", v: "Handshake", desc: "Checkpoints YBL-1.", sol: "Bunker Ebene -1 (142 121). Intel sichern." },
        { de: "Der Schatten über Ban Pa", en: "The Shadow Over Ban Pa", v: "Handshake", desc: "Süd/Nord-Eingänge Ban Pa.", sol: "Scoute Ban Pa Süd (204 136) und Nord (205 138)." },
        { de: "Letzter Check-Out", en: "Final Check Out", v: "Handshake", desc: "Lila Koffer identifizieren.", sol: "Pha Lang Airfield (183 158). Untersuche den Koffer." },
        { de: "Zahme Ratte", en: "Domesticated Rat", v: "Handshake", desc: "Shack-Kontakt ausmachen.", sol: "Hunter's Paradise Waldhütte. ACHTUNG: Nur Nachts (22:00-05:00). Intel holen." },
        { de: "Rebellengesindel", en: "Rebel Scum", v: "Handshake", desc: "20 Feinde Bunker YBL-1.", sol: "YBL-1 Bunker (142 121). 20 Kills erzielen." },
        { de: "Ich kam, sah, siegte I", en: "I Went, I Saw, I Conquered I", v: "Handshake", desc: "Sägewerk ausspähen.", sol: "Sawmill (138 143). Spähe Straßen/Hügel aus (Nur Nachts 22:00-05:00)." },
        { de: "Ich kam, sah, siegte II", en: "I Went, I Saw, I Conquered II", v: "Handshake", desc: "Sprengstoffwerkstatt.", sol: "Sawmill (138 143). Finde die Werkstatt und Fässer." },
        { de: "Ich kam, sah, siegte III", en: "I Went, I Saw, I Conquered III", v: "Handshake", desc: "20 Kills Sägewerk.", sol: "Sawmill. 20 Kills." },
        { de: "Manifest Destiny", en: "Manifest Destiny", v: "Handshake", desc: "Festplatte extrahieren.", sol: "Airfield (182 158). Datenbank auf dem PC checken (Nur Nachts)." },
        { de: "Schießstand", en: "Shooting Gallery", v: "Handshake", desc: "20 Kills Hunter's Paradise.", sol: "Hunter's Paradise (159 168). 20 Kills erzielen." },
        { de: "UNLRA", en: "UNLRA", v: "Handshake", desc: "Intel aus UNLRA Camp.", sol: "Tiger Bay. Finde den Ordner im Zelt (Nur Nachts 22:00-05:00)." },
        { de: "Abkürzung", en: "Shortcut", v: "Handshake", desc: "Durchgang Fort Narith.", sol: "Bunker Ebene -2 (142 121). In den Trümmern suchen." },
        { de: "Schatten über Ban Pa II", en: "The Shadow Over Ban Pa II", v: "Handshake", desc: "Kult in Ban Pa.", sol: "Hole Intel aus Ban Pa (205 137)." },
        { de: "Geschäft oder Vergnügen", en: "Business Or Pleasure", v: "Handshake", desc: "Airfield untersuchen.", sol: "Airfield (183 158). USB auf Holztisch bei Laptop (Nur Nachts)." },
        { de: "Flügel stutzen", en: "Wing Clipping", v: "Handshake", desc: "20 Feinde Flugplatz.", sol: "Pha Lang Airfield. 20 Kills." },
        { de: "Wahrer Mut", en: "True Grit", v: "Handshake", desc: "Antiker Revolver.", sol: "Hunter's Paradise (160 167). Revolver aus Motel 102 holen." },
        { de: "Ein Schuss, ein Treffer", en: "One Shot, One Kill", v: "Handshake", desc: "Commander ausschalten.", sol: "Hunter's Paradise (159 168). HP Boss (Cap, lila Shirt) töten." },
        { de: "Blick auf den Fluss", en: "Riverfront View", v: "Handshake", desc: "Schicksal Späher.", sol: "Midnight Sapphire. Finde Hinweise über den Späher." },
        { de: "Tiefste, dunkelste Fantasien", en: "Deepest, Darkest Fantasies", v: "Handshake", desc: "Flash Drive holen.", sol: "Midnight Sapphire. USB sichern." },
        { de: "Revolutionäre Straße", en: "Revolutionary Road", v: "Handshake", desc: "Tankstelle Fort Narith.", sol: "Fort Narith Tankstelle. Laptop und Notizen finden." },
        { de: "Spaziergang durch Fort Narith", en: "Fort Narith Stroll", v: "Handshake", desc: "Alle Eingänge prüfen.", sol: "Airfield (141 126), Fuel (146 127), Main (145 130), Barracks (143 131)." },
        { de: "Was hochkommt", en: "What Comes Up", v: "Handshake", desc: "Flugschreiber bergen.", sol: "Pha Lang Airfield (192 152). Blackbox am Wrack finden." },
        { de: "Gewaltsame Aufklärung", en: "Reconnaissance-in-Force", v: "Handshake", desc: "30 Soldaten Fort Narith.", sol: "Töte 30 Soldaten im Fort Narith." },
        { de: "Bis zur Schnupftabakdose", en: "Up To Snuff", v: "Handshake", desc: "VIP Kundenliste.", sol: "Hunter's Paradise (160 168). Gebäude, Schreibtisch rechts." },
        { de: "Gefährliche Schätze", en: "Hazardous Treasures", v: "Handshake", desc: "Eliminieren & Container.", sol: "Finde 30kg Container in: Sawmill, Lagoon, HP, Ban Pa, Airfield, YBL-1." },
        { de: "Hacker", en: "Hacker", v: "Handshake", desc: "4 Kameras hacken.", sol: "Fort Narith (Nur Nachts). Air Traffic, Main, North, HQ." },
        { de: "Zurückgelassen II", en: "Left Behind II", v: "Handshake", desc: "Identität Leiche.", sol: "Midnight Sapphire. Leiche identifizieren." },
        { de: "Unkraut jäten", en: "Weeding", v: "Handshake", desc: "30 LAF Forces MS.", sol: "Midnight Sapphire. 30 LAF Feinde töten." },
        { de: "Je mehr desto besser", en: "The More the Merrier", v: "Handshake", desc: "Patrouillen-Dokumente.", sol: "Fort Narith Barracks (Nur Nachts). Intel finden." },
        { de: "Der Kongressabgeordnete", en: "The Congressman", v: "Handshake", desc: "Smartphone Hotel.", sol: "Midnight Sapphire (173 166). Smartphone holen." },
        { de: "Hacker II", en: "Hacker II", v: "Handshake", desc: "Codebuch finden.", sol: "Fort Narith (Nur Nachts). 3 Antennen hacken. Codebuch HQ 2. Stock." },
        { de: "Trollbrücke", en: "Troll Bridge", v: "Handshake", desc: "Verminte Brücke.", sol: "Tiger Bay (West). Untersuche die Brücke." },
        { de: "UNLRA II", en: "UNLRA II", v: "Handshake", desc: "3 Checkpoints untersuchen.", sol: "Tiger Bay Checkpoints (Nur Nachts). Ordner sichern." },
        { de: "Paparazzi", en: "Paparazzi", v: "Handshake", desc: "Vernehmungsraum.", sol: "Hotel (171 166). MS Supply Key nutzen. Blutraum (171 169)." },
        { de: "Der Verschwundene", en: "The Man Who Disappeared", v: "Handshake", desc: "Pass im Schrank.", sol: "Midnight Sapphire (171 166) hinter Rezeption. Pass nachts ablegen." },
        { de: "Lippe riskieren", en: "Lip Out", v: "Handshake", desc: "Donald J. Dortmunder.", sol: "Midnight Sapphire. Finde Zielperson/Wohnort." },
        { de: "Kunst der Täuschung", en: "The Art of Deception", v: "Handshake", desc: "LAF Dokumente fälschen.", sol: "Fort Narith Akten holen, 30 Min warten." },
        { de: "Unbezahlbare Besitztümer", en: "Priceless Possessions", v: "Handshake", desc: "Golfschläger MS.", sol: "Midnight Sapphire. Schläger bergen." },
        { de: "Mall-Bürgerwehr", en: "Mall Vigilante", v: "Handshake", desc: "30 Kills Mall.", sol: "Tiger Bay Einkaufszentrum. 30 Kills." },
        { de: "Verborgene Tiefe", en: "The Depth", v: "Handshake", desc: "Karte Kommandozelt.", sol: "Basecamp Karte an der Wand checken." },
        { de: "Ausrüstungskontrolle", en: "Gear Check", v: "Handshake", desc: "Hinterlassene Waffen.", sol: "NW-Startstadt im hohen Gras." },
        { de: "Gegen die Wand", en: "Up Against The Wall", v: "Handshake", desc: "Exekutionsstätte.", sol: "Fort Narith S-Außenmauer." },
        { de: "Der Saboteur", en: "The Saboteur", v: "Handshake", desc: "Fahrzeuge Söldner.", sol: "Midnight Sapphire. 3 SUVs sabotieren." },
        { de: "Auge des Tigers", en: "Eye of the Tiger", v: "Handshake", desc: "Dach UNLRA HQ.", sol: "Tiger Bay Antenne checken." },
        { de: "Funküberwachung", en: "Radio Intercept", v: "Handshake", desc: "Peilsender Antenne.", sol: "Midnight Sapphire Dach." },
        { de: "Terminal-Initiative", en: "Terminal Initiative", v: "Handshake", desc: "Stürme Airfield.", sol: "Airfield Landebahn sichern." },
        { de: "Der Befreier", en: "The Liberator", v: "Handshake", desc: "Kommunikationszentrale.", sol: "Hütte 199 193. Dokument vom Tisch." },
        { de: "Familien-Erbstück", en: "Family Heirloom", v: "Handshake", desc: "Erbstück bergen.", sol: "Suche das Haus im Startgebiet ab." },
        { de: "Ein kleiner Gefallen", en: "A Small Favor", v: "Handshake", desc: "Kleinigkeit besorgen.", sol: "Sammle spezifische Items (z.B. Zigarren/MREs)." },
        { de: "Verlorener Liebhaber", en: "Lost Lover", v: "Handshake", desc: "Suche nach PMC.", sol: "Untersuche die Häuser in Nam Thaven/Kiu Vongsa." },
        { de: "Sherpa: Erste Schritte", en: "Sherpa: First Steps", v: "Handshake", desc: "Hilfe Operators.", sol: "Begleite Spieler in der Startstadt." },

        // --- GUNNY TASKS ---
        { de: "Medikamente gesucht", en: "Meds Wanted", v: "Gunny", desc: "Hilfsgüter Wasserturm.", sol: "Wasserturm (140 161). Kiste am Fundament." },
        { de: "Schießplatz-Check", en: "Range Check", v: "Gunny", desc: "Munitionskisten Schießstand.", sol: "Rechts unter Wellblechdach." },
        { de: "Luftabwehr-Sichtung", en: "AA Sighting", v: "Gunny", desc: "Markiere FLAK.", sol: "Fort Narith Block A, B, C Dächer markieren." },
        { de: "Treibstoffdiebe", en: "Fuel Thieves", v: "Gunny", desc: "Benzinkanister Hangar.", sol: "Hangar 2 hinter den Wracks." },
        { de: "Scharfschützen-Nest", en: "Sniper's Nest", v: "Gunny", desc: "Wasserturm Sniper.", sol: "Töte Wache oben auf dem Turm." },
        { de: "Herzliches Willkommen", en: "Warm Welcome", v: "Gunny", desc: "Boss in Ban Pa killen.", sol: "Ban Pa (204 136). Naga (Boss) bei Stelzenhäusern töten." },
        { de: "Waffen & Munition", en: "Guns & Ammo", v: "Gunny", desc: "Waffenlager Bunker.", sol: "Hunter's Paradise (159 168). Braucht HP WEP KEY." },
        { de: "Schießübung", en: "Shooting Practice", v: "Gunny", desc: "100m Sniper Kills.", sol: "10 Kills aus über 100m Entfernung." },
        { de: "Kampfmittelbeseitigung", en: "EOD", v: "Gunny", desc: "IEDs entschärfen.", sol: "3 Sprengsätze Hauptstraße Fort Narith." },
        { de: "Fracht", en: "Cargo", v: "Gunny", desc: "Waffenkisten markieren.", sol: "Lumber Yard Haupthalle. Marker setzen." },
        { de: "Artillerie-Sabotage", en: "Artillery Sabotage", v: "Gunny", desc: "Haubitzen Fort Narith.", sol: "3 Geschütze im Außenbereich markieren." },
        { de: "Feuerkraft", en: "Firepower", v: "Gunny", desc: "MG-Lager Bunker.", sol: "YBL-1 Ebene -2 hinter den Generatoren." },
        { de: "Panzerbrechend", en: "Armor Piercing", v: "Gunny", desc: "AP-Munition sichern.", sol: "Ground Zero Hangar 1. Grüne Kisten." },
        { de: "Schweres Gerät", en: "Heavy Equipment", v: "Gunny", desc: "Schützenpanzer markieren.", sol: "Fort Narith Innenhof (4 Fahrzeuge)." },
        { de: "Scharfschützen-Albtraum", en: "Sniper's Nightmare", v: "Gunny", desc: "20 Kills Hotel.", sol: "Midnight Sapphire. 20 Söldner töten." },
        { de: "Dschungelkampf", en: "Jungle Warfare", v: "Gunny", desc: "Wald um Ban Pa.", sol: "15 Kills im Dschungel Süd." },
        { de: "Säuberung des Sägewerks", en: "Sawmill Sweep", v: "Gunny", desc: "Sawmill befreien.", sol: "15 Kills im Sägewerk-Areal." },
        { de: "Waffenschmuggler", en: "Gun Runners", v: "Gunny", desc: "Schmuggel-Manifest.", sol: "Blue Lagoon Bootshaus Fass." },
        { de: "Gegenangriff", en: "Counterattack", v: "Gunny", desc: "Verteidige HQ-Tor.", sol: "Halte Stadt-Eingang gegen KIs." },
        { de: "Scharfschützen-Duell", en: "Sniper Duel", v: "Gunny", desc: "Sniper Flugplatz.", sol: "3 Sniper Tower/Hangar Ground Zero töten." },
        { de: "Häuserkampf", en: "CQB Mastery", v: "Gunny", desc: "Kills <10m.", sol: "15 Kills auf kurze Distanz." },
        { de: "Panzerabwehr", en: "Anti-Armor", v: "Gunny", desc: "RPG-Sprengköpfe.", sol: "Fort Narith Waffenkammer (2 Stück holen)." },
        { de: "Waffenbrüder", en: "Brothers in Arms", v: "Gunny", desc: "Verlorene M4A1.", sol: "2 unmodifizierte M4A1 aus Hunter's Paradise an Gunny übergeben." },
        { de: "Feuer frei", en: "Weapons Free", v: "Gunny", desc: "25 Kills Sägewerk.", sol: "Massive Räumung im Lumber Yard." },
        { de: "Sturm auf das Fort", en: "Storm the Fort", v: "Gunny", desc: "Fort Narith Innenhof.", sol: "Erreiche zentralen Appellplatz." },
        { de: "Säuberung der Lagune", en: "Lagoon Sweep", v: "Gunny", desc: "Kartell vertreiben.", sol: "20 Kills Blue Lagoon." },
        { de: "Kopfgeld", en: "Bounty", v: "Gunny", desc: "Barett Commander.", sol: "Rotes Barett des Hunter's Paradise Bosses looten." },
        { de: "Guerilla-Taktiken", en: "Guerrilla Tactics", v: "Gunny", desc: "Vorräte zerstören.", sol: "C4 an 3 Stapel in Ban Pa anbringen." },
        { de: "Hinter feindlichen Linien", en: "Behind Enemy Lines", v: "Gunny", desc: "Heli markieren.", sol: "Ground Zero Kampfhubschrauber markieren." },
        { de: "Schießerei", en: "Shootout", v: "Gunny", desc: "20 Kills AR.", sol: "Hunter's Paradise Feuerkampf mit Assault Rifle." },
        { de: "Schwere Rüstung", en: "Heavy Armor", v: "Gunny", desc: "Feindliche Platten.", sol: "3 unbeschädigte Westen Class 3+ bringen." },
        { de: "Scharfschützengasse", en: "Sniper Alley", v: "Gunny", desc: "Straße Tiger Bay.", sol: "10 Kills auf der Zufahrtsstraße." },
        { de: "Nahkampf", en: "Close Quarters", v: "Gunny", desc: "Räume YBL-1.", sol: "15 Kills im Bunker auf engem Raum." },
        { de: "Der Außenposten", en: "The Outpost", v: "Gunny", desc: "Außenposten Miliz.", sol: "Wald zw. Stadt/Fort. 10 Kills." },
        { de: "Die Festung", en: "The Stronghold", v: "Gunny", desc: "Schwachstellen Mauer.", sol: "3 Marker Außenperimeter Fort Narith setzen." },
        { de: "Luftüberlegenheit", en: "Air Superiority", v: "Gunny", desc: "Drohnen-Steuerung.", sol: "Ground Zero Tower. Zerschieße PC." },
        { de: "Unterdrückungsfeuer", en: "Suppressing Fire", v: "Gunny", desc: "20 Kills LMG.", sol: "Kills mit Trommelmagazin/LMG." },
        { de: "Messie", en: "Hoarder", v: "Gunny", desc: "UNLRA Vorräte Prepper.", sol: "Startgebiet Haus/Eingang durchsuchen." },
        { de: "Unter unserer Nase", en: "Under Our Noses", v: "Gunny", desc: "Gestohlene Lieferung.", sol: "Lamang Island / Startgebiet absuchen." },
        { de: "Auf dem Schießstand", en: "On the Range", v: "Gunny", desc: "Spähe Hunter's Paradise.", sol: "Shooting Lanes (159 168), Dumping Ground (159 167), Motel (160 167)." },
        { de: "Übernatürlich", en: "Supernatural", v: "Gunny", desc: "Hans Liebert Zelt.", sol: "Nördlich von Ban Pa untersuchen." },
        { de: "Kein Weg nach oben", en: "No Way Up", v: "Gunny", desc: "Schicksal PMC Squad.", sol: "Lamang Island. Leiche finden." },
        { de: "Erweiterung", en: "Expansion", v: "Gunny", desc: "LLA Pläne.", sol: "Östlich YBL-1 Gebiet sichern." },
        { de: "Das Gefecht", en: "The Stand", v: "Gunny", desc: "PMC Squad finden.", sol: "Pha Lang Airfield Leichen sichern." },
        { de: "Die Ruhe", en: "The Lull", v: "Gunny", desc: "LLA Außenposten.", sol: "NW YBL-1 / W Midnight Sapphire scouten." },
        { de: "Nadel im Dschungel", en: "Needle In A Jungle", v: "Gunny", desc: "LLA Verstecke.", sol: "S-Ö YBL-1 Farm/Hütte prüfen." },
        { de: "Schnüffler", en: "Snooper", v: "Gunny", desc: "Vorräte Tankstelle.", sol: "Östlich von Fort Narith." },
        { de: "Güterjagd", en: "Goods Hunting", v: "Gunny", desc: "Vorräte Safe House.", sol: "Nördlich von Khonwan Dorf." },
        { de: "Sie sind überall", en: "They Are Everywhere", v: "Gunny", desc: "Camp W Tiger Bay.", sol: "Tiger Bay Untersuchung durchführen." },
        { de: "Inkognito", en: "Incognito", v: "Gunny", desc: "Haus mysteriöse Person.", sol: "W Tiger Bay Central." },
        { de: "Das verlorene Lager", en: "The Campsite", v: "Gunny", desc: "Verlassenes Lager.", sol: "W-Juliet 4 Leiche." },
        { de: "Vorratsengpass", en: "Supply Squeeze", v: "Gunny", desc: "Rationen Lumber.", sol: "5 MREs Sägewerk." },
        { de: "Linie im Sand", en: "Line In The Sand", v: "Gunny", desc: "Ban Pa verteidigen.", sol: "Ban Pa (205 137). Ban Pa Pier (206 137)." },
        { de: "Tiefe Gewässer", en: "Deep Waters", v: "Gunny", desc: "Kills Blue Lagoon.", sol: "Kill 20 Bots an der Blue Lagoon. ACHTUNG: Boss Malo rotiert!" },

        // --- LAB RAT TASKS ---
        { de: "Medizinischer Detektiv", en: "Medical Detective", v: "Lab Rat", desc: "Büro Arzt Notizen.", sol: "Arzthaus (141 166). Braucht DOC KEY." },
        { de: "Ein einziger Tropfen", en: "A Single Drop", v: "Lab Rat", desc: "Wasserprobe Wasserturm.", sol: "Airfield Tanker Trucks: 182 156, 183 158, 183 158." },
        { de: "Geheimes Mitgefühl", en: "Secret Compassion", v: "Lab Rat", desc: "Hilfsgüter Farmen.", sol: "Drei Standorte: East (146 162), SW (140 160), West (139 162)." },
        { de: "Es ist im Wasser", en: "It's In The Water I", v: "Lab Rat", desc: "Wasserprobe Ban Pa.", sol: "Vogelgewebe (205 136), Wasser (205 137), Erde (206 137)." },
        { de: "Es ist im Wasser II", en: "It's In The Water II", v: "Lab Rat", desc: "Labor in Ban Pa.", sol: "Ban Pa (205 137). Braucht ELDER KEY." },
        { de: "Gefährlicher Ausbruch", en: "Hazardous Outbreak", v: "Lab Rat", desc: "Patientenakten UNLRA.", sol: "Tiger Bay Camp. Medizinisches Zelt." },
        { de: "Laborratte", en: "Lab Rat", v: "Lab Rat", desc: "Mikroskop Schule.", sol: "Startstadt Schule 1. Stock." },
        { de: "Verborgene Gefahr", en: "Hidden Danger", v: "Lab Rat", desc: "Bodenproben Sumpf.", sol: "Toxische Pfützen N-Stadt." },
        { de: "Blutproben", en: "Blood Samples", v: "Lab Rat", desc: "Blutkonserven UNLRA.", sol: "Tiger Bay HQ weißes Zelt." },
        { de: "Medizinische Ausrüstung", en: "Medical Equipment", v: "Lab Rat", desc: "Defibrillator Hotel.", sol: "Midnight Sapphire EG Krankenstation." },
        { de: "Patient Null", en: "Patient Zero", v: "Lab Rat", desc: "Leiche Isolationsstation.", sol: "Tiger Bay Zimmer 3 Feldbett." },
        { de: "Toxisches Erbe", en: "Toxic Legacy", v: "Lab Rat", desc: "Fässer Bunker.", sol: "YBL-1 Ebene -3 überflutet." },
        { de: "Giftige Pflanzen", en: "Poisonous Plants", v: "Lab Rat", desc: "Flora Ban Pa.", sol: "3 blaue Pflanzen am See." },
        { de: "Sauberes Wasser", en: "Clean Water", v: "Lab Rat", desc: "Wasserfilter Blue Lagoon.", sol: "Wassertanks am Rand platzieren." },
        { de: "Strahlungsleck", en: "Radiation Leak", v: "Lab Rat", desc: "Strahlung Ground Zero.", sol: "Zentrum Krater mit Geigerzähler." },
        { de: "Feldlazarett", en: "Field Hospital", v: "Lab Rat", desc: "OP-Besteck Camp.", sol: "2 Surkits Flüchtlingscamp." },
        { de: "Kontaminiertes Gebiet", en: "Contaminated Zone", v: "Lab Rat", desc: "Labor Schutzanzug.", sol: "Tiger Bay HQ Ebene 3 mit Gasmaske." },
        { de: "Blutgruppe", en: "Blood Type", v: "Lab Rat", desc: "Blutkonserven Bunker.", sol: "YBL-1 Ebene -1 rote Kühlbox." },
        { de: "Das Heilmittel", en: "The Cure", v: "Lab Rat", desc: "Forschungsdaten Arzt.", sol: "Arzthaus (Office Key) Computer." },
        { de: "Verlorene Lieferung", en: "Lost Shipment", v: "Lab Rat", desc: "Med-Truck Sägewerk.", sol: "Weißer Truck auf Straße." },
        { de: "Forschungsmaterial", en: "Research Material", v: "Lab Rat", desc: "Mutierte Flora.", sol: "3 rote Pflanzen Ground Zero Krater." },
        { de: "Evakuierung", en: "Evacuation", v: "Lab Rat", desc: "Flugpläne UNLRA.", sol: "Tiger Bay HQ Lobby Tresen." },
        { de: "Quarantäne", en: "Quarantine", v: "Lab Rat", desc: "Türen Labor.", sol: "3 rote Konsolen Tiger Bay Quarantäne." },
        { de: "Überlebenswichtig", en: "Vital Signs", v: "Lab Rat", desc: "5 Tourniquets.", sol: "Besorge/Kaufe 5 CATs." },
        { de: "Giftmischer", en: "Toxicologist", v: "Lab Rat", desc: "Drogenlabor Blue Lagoon.", sol: "Becherglas aus abgelegener Hütte." },
        { de: "Leben im Vergessen", en: "Living in Burrows", v: "Lab Rat", desc: "Wasser/Generator YBL-1.", sol: "Bunker (142 121). Braucht YBL-1 GENERATOR ROOM KEY." },
        { de: "Verdeckte Forschung", en: "Covert Research", v: "Lab Rat", desc: "Sensoren Fort Narith.", sol: "3 Sensoren Munitionsbunker." },
        { de: "Chemikalienunfall", en: "Chemical Spill", v: "Lab Rat", desc: "Ursache Vergiftung.", sol: "Industriegebiet Tiger Bay Fässer." },
        { de: "Medizinische Versorgung", en: "Medical Supplies", v: "Lab Rat", desc: "Morphium Lazarett.", sol: "5 Morphin-Injektoren abgeben." },
        { de: "Der Quarantänebereich", en: "The Quarantine Zone", v: "Lab Rat", desc: "UNLRA-Zelte prüfen.", sol: "Tiger Bay HQ 4 Zelte Lüftung." },
        { de: "Biologische Gefahr", en: "Biological Threat", v: "Lab Rat", desc: "Hazmat-Anzug Bunker.", sol: "YBL-1 Ebene -3 offener Spind." },
        { de: "Notoperation", en: "Emergency Surgery", v: "Lab Rat", desc: "Blut Krankenhaus.", sol: "Startstadt Krankenhaus Kühlschrank." },
        { de: "Gegenmittel", en: "Antidote", v: "Lab Rat", desc: "Exp. Medikamente.", sol: "Hotel Zimmer 202 VIP Koffer." },
        { de: "Befreiung", en: "Liberation", v: "Lab Rat", desc: "Dorfältesten-Haus.", sol: "Startgebiet. Befreie Gefangene." },
        { de: "Gute Absichten", en: "Good Intentions", v: "Lab Rat", desc: "Arzt Ban Pa.", sol: "Suche Mediziner im Dorf." },
        { de: "Toxische Umgebung", en: "Toxic Environment", v: "Lab Rat", desc: "Sumpf Bodenproben.", sol: "Nördlicher Sumpf Proben entnehmen." },
        { de: "Testresultate", en: "Test Results", v: "Lab Rat", desc: "Akten Labor.", sol: "Hole Testergebnisse." },
        { de: "Krümelsammler", en: "Crumb Collector", v: "Lab Rat", desc: "Diamanten-Zelt.", sol: "Westliches Zelt. Item auf Tisch (Alternativ zu Turncoat)." },
        { de: "Gefährliche Beute", en: "Hazardous Haul", v: "Lab Rat", desc: "Kontaminierte Proben.", sol: "YBL-1 Ebene -3." },
        { de: "Gefährliche Beute II", en: "Hazardous Haul II", v: "Lab Rat", desc: "Bringe Proben.", sol: "Übergabe an Lab Rat." },

        // --- ARTISAN TASKS ---
        { de: "Versteck-Bergung", en: "Cache Retrieval", v: "Artisan", desc: "Altes Versteck Wald.", sol: "Warehouse (140 163) und Lumber Yard (141 161)." },
        { de: "Werkzeugbeschaffung", en: "Tooling Up", v: "Artisan", desc: "3 Werkzeugsets.", sol: "Besorge 3 Toolsets im Raid." },
        { de: "Gefährliche Schätze", en: "Hazardous Treasures", v: "Artisan", desc: "Relikte in 30kg Kisten.", sol: "Sawmill Mitte (OFC Storage Key), HP West (HP WEP Key), Ban Pa Elder's House." },
        { de: "Mechaniker-Probleme", en: "Mechanic's Trouble", v: "Artisan", desc: "Fahrzeugteile.", sol: "2 Batterien, 2 Zündkerzen bei Tankstellen." },
        { de: "Ungebetene Gäste", en: "Uninvited Guests", v: "Artisan", desc: "20 Söldner Ban Pa.", sol: "Ban Pa (205 137). 20 Kills im Dorf." },
        { de: "Baupläne", en: "Blueprints", v: "Artisan", desc: "Pläne Miliz.", sol: "Sawmill Büro Vorarbeiter." },
        { de: "Ersatzteile", en: "Spare Parts", v: "Artisan", desc: "Heli-Bauteile.", sol: "3 Fragmente am Absturzplatz im Sumpf." },
        { de: "Versteck im Sumpf", en: "Swamp Stash", v: "Artisan", desc: "Waffen Sumpf.", sol: "Westlich der Stadt unter blauer Plane." },
        { de: "Schrottsammler", en: "Scrap Metal", v: "Artisan", desc: "Metallschrott Flugplatz.", sol: "5 Teile um die Wracks in Ground Zero." },
        { de: "Handwerker", en: "Handyman", v: "Artisan", desc: "Generator Ban Pa.", sol: "Reparatur mit Toolset in der Dorfmitte." },
        { de: "Schwarzmarkt", en: "Black Market", v: "Artisan", desc: "Kassenbuch Markt.", sol: "Startstadt Marktstand unter Kiste." },
        { de: "Sprengstoff", en: "Explosives", v: "Artisan", desc: "C4 Bunker.", sol: "YBL-1 Waffenkammer Regal." },
        { de: "Lieferengpass", en: "Supply Shortage", v: "Artisan", desc: "Baumaterialien.", sol: "3 Panzertape, 2 Nägel." },
        { de: "Geheime Werkstatt", en: "Secret Workshop", v: "Artisan", desc: "Werkstatt Tiger Bay.", sol: "Garage mit blauem LKW in Vorstadt." },
        { de: "Schrottplatz", en: "Scrapyard", v: "Artisan", desc: "Teile Autowracks.", sol: "5 Kupferkabel aus Autowracks besorgen." },
        { de: "Fahrzeugdiebstahl", en: "Grand Theft", v: "Artisan", desc: "Markiere LKW.", sol: "Sawmill Haupthalle Rückseite." },
        { de: "Ersatzteile gesucht", en: "Parts Needed", v: "Artisan", desc: "2 Autobatterien.", sol: "Finden in Garagen/Tankstellen." },
        { de: "Werkzeugkiste", en: "Toolbox", v: "Artisan", desc: "Artisans Kiste.", sol: "Ban Pa Elder's House Schlafzimmer." },
        { de: "Treibstoff", en: "Fuel Run", v: "Artisan", desc: "Benzinkanister.", sol: "2 rote Gas Cans abgeben." },
        { de: "Bauherr", en: "The Builder", v: "Artisan", desc: "Material Bunker.", sol: "2 Tape, 1 Toolset am Eingang YBL-1." },
        { de: "Sprengmeister", en: "Demolitions", v: "Artisan", desc: "Zünder Steinbruch.", sol: "Gelbe Box im Steinbruch-POI." },
        { de: "Schmuggler-Route", en: "Smuggler's Run", v: "Artisan", desc: "Boot Schmuggler.", sol: "Süd-Ban Pa Strand. Motoren-Check." },
        { de: "Verstecktes Gold", en: "Hidden Gold", v: "Artisan", desc: "Goldschmuck Villen.", sol: "Villa 3 Safe (Key nötig)." },
        { de: "Waffenmeister", en: "Gunsmith", v: "Artisan", desc: "M4-Teile Schießstand.", sol: "3 Lower Receiver Hunter's Paradise." },
        { de: "Eine Stadt in Trümmern", en: "A Town in Pieces", v: "Artisan", desc: "Altmetall Ban Pa.", sol: "5 Teile zwischen den Hütten." },
        { de: "Handwerkszeug", en: "Tools of the Trade", v: "Artisan", desc: "Spezialwerkzeug.", sol: "Koordinaten 141 163 aufsuchen." },
        { de: "Der Mechaniker", en: "The Mechanic", v: "Artisan", desc: "Vermisster Mechaniker.", sol: "Tankstelle Hinterhof Leiche." },
        { de: "Das Versteck des Schmugglers", en: "The Smuggler's Cache", v: "Artisan", desc: "Kisten Fluss.", sol: "Blue Lagoon. Tauchen unter Steg." },
        { de: "Geheime Lager", en: "The Hidden Stash", v: "Artisan", desc: "Waffendepot Wald.", sol: "Osten von Sawmill unter Ästen." },
        { de: "Sonderanfertigung", en: "Custom Order", v: "Artisan", desc: "Modifizierte AK.", sol: "AKMN + Suppressor + Optik abgeben." },
        { de: "Transportlogistik", en: "Transport Logistics", v: "Artisan", desc: "LKW-Flotte.", sol: "Tiger Bay Mall Rückseite. 3 Marker setzen." },
        { de: "An den Hügeln des Wahnsinns I", en: "At The Mounds Of Madness I", v: "Artisan", desc: "Hügel Ban Pa.", sol: "Wandbilder finden: 205 135, 204 137, 206 138, 207 137." },
        { de: "An den Hügeln des Wahnsinns II", en: "At The Mounds Of Madness II", v: "Artisan", desc: "Artefakt bergen.", sol: "Grabe am Grabhügel Ban Pa (205 137)." },
        { de: "Rette die Rebellion", en: "Save The Rebellion", v: "Artisan", desc: "Flash Drive Base Camp.", sol: "USB Stick im Basecamp Kommando-Zelt abholen und ins Guardhouse legen." },
        { de: "Wenn ein Baum fällt", en: "When A Tree Falls", v: "Artisan", desc: "Hauptsäge sabotieren.", sol: "Lumber Yard (138 143)." },
        { de: "Das gefährlichste Spiel", en: "The Most Dangerous Game", v: "Artisan", desc: "Natur des VIP Programms.", sol: "Hunter's Paradise (159 168). Infos über VIP-Programm sichern." },
        { de: "Verbrechen zahlt sich nicht aus", en: "Crime Doesn't Pay", v: "Artisan", desc: "Stiehl von Schmuggler.", sol: "Ban Pa Bootshaus plündern." },
        { de: "Nacht Ozean", en: "Night Ocean", v: "Artisan", desc: "Boss töten.", sol: "Gebiet (203 116). Boss killen." },
        { de: "Gefangener 23", en: "Prisoner 23", v: "Artisan", desc: "Finden Gefangenen.", sol: "YBL-1 Ebene -2 Zelle 3." },
        { de: "Artisans Liste", en: "Artisan's List", v: "Artisan", desc: "Batterien/Zündkerzen.", sol: "Tankstellen looten." },
        { de: "Artisans Liste II", en: "Artisan's List II", v: "Artisan", desc: "Kabel/Schrott.", sol: "Material sammeln." },
        { de: "Die Werkstatt", en: "The Workshop", v: "Artisan", desc: "Geheime Werkstatt.", sol: "Tiger Bay Vorstadt finden." },
        { de: "Treibstoffmangel", en: "Fuel Shortage", v: "Artisan", desc: "Treibstoff Sägewerk.", sol: "Sawmill (139 144)." },
        { de: "Invasoren aus der Ferne", en: "Invaders From Afar", v: "Artisan", desc: "Mediziner Notiz.", sol: "Sawmill (139 144). Medic's Note finden." },
        { de: "Rauchzeichen", en: "Smoke Signals", v: "Artisan", desc: "Signalfeuer Miliz.", sol: "Hügel zw. Ban Pa/Lumber." },
        { de: "Schwarze Liste", en: "Blacklist", v: "Artisan", desc: "Buch Namen.", sol: "Ban Pa Elder's House Dielen." },

        // --- TURNCOAT TASKS ---
        { de: "Der Unterhändler", en: "The Negotiator", v: "Turncoat", desc: "Leiche Unterhändler.", sol: "Bunker Ebene -2 (142 121). Benötigt YBL OFFICE 02 KEY." },
        { de: "Keine Zeugen", en: "No Witnesses", v: "Turncoat", desc: "Leise Kills.", sol: "10 Kills mit Schalldämpfer." },
        { de: "Deal des Jahrhunderts", en: "Deal of the Century", v: "Turncoat", desc: "Schwarzgeld Lagune.", sol: "Blue Lagoon Koffer unter Theke." },
        { de: "Tiefe Tiefen", en: "Deep Depths", v: "Turncoat", desc: "Logbuch Kommandant.", sol: "Fort Narith Keller Block B." },
        { de: "Vermisster Kollege I", en: "Missing Colleague I", v: "Turncoat", desc: "Vermisster Partner I.", sol: "Suche bei 145 129." },
        { de: "Vermisster Kollege II", en: "Missing Colleague II", v: "Turncoat", desc: "Vermisster Partner II.", sol: "Suche bei 143 129." },
        { de: "Blutdiamanten", en: "Blood Diamonds", v: "Turncoat", desc: "Diamanten Safe.", sol: "Midnight Sapphire VIP Safe." },
        { de: "Verräter", en: "Traitor", v: "Turncoat", desc: "Ex-PMC ausschalten.", sol: "Hunter's Paradise schwarze Weste." },
        { de: "Dreckige Geheimnisse", en: "Dirty Secrets", v: "Turncoat", desc: "Erpresserakte.", sol: "Midnight Sapphire Zimmer 204." },
        { de: "Schmiergeld", en: "Bribe Money", v: "Turncoat", desc: "Geld am Pier.", sol: "Tiger Bay Koffer in blaues Boot." },
        { de: "Falsche Fährte", en: "False Trail", v: "Turncoat", desc: "Beweise Fort Narith.", sol: "Barracken Block C Bett." },
        { de: "Schweigen ist Gold", en: "Silence is Golden", v: "Turncoat", desc: "Zeugen Lagune.", sol: "10 leise Kills Blue Lagoon." },
        { de: "Diebesgut", en: "Stolen Goods", v: "Turncoat", desc: "Gestohlene Uhren.", sol: "Sawmill Arbeiterhütte Kästchen." },
        { de: "Hinterhalt", en: "Ambush", v: "Turncoat", desc: "Überlebe Tiger Bay.", sol: "Trigger Alarm Mall & Überlebe." },
        { de: "Der Überläufer", en: "The Defector", v: "Turncoat", desc: "Kontaktmann finden.", sol: "Ban Pa Süd-Haus. Notizblock." },
        { de: "Der Klient", en: "The Client", v: "Turncoat", desc: "Söldner-Zahler.", sol: "Villa 1 Safe Belege." },
        { de: "Die Ratte", en: "The Rat", v: "Turncoat", desc: "Spitzel Ban Pa.", sol: "Kirche Ban Pa blaues Hemd." },
        { de: "Der Hinterhalt", en: "The Setup", v: "Turncoat", desc: "Fingierter Deal.", sol: "Tiger Bay Pier Hinterhalt." },
        { de: "Die Auszahlung", en: "The Payoff", v: "Turncoat", desc: "Geld Miliz.", sol: "Fort Narith Block A Quartiermeister." },
        { de: "Die Flucht", en: "The Escape", v: "Turncoat", desc: "Fluchtplan VIP.", sol: "Ground Zero Jet Cockpit." },
        { de: "Schmutzige Hände", en: "Dirty Hands", v: "Turncoat", desc: "Kills mit AK.", sol: "10 Kills Midnight Sapphire mit AK." },
        { de: "Personalabbau", en: "Downsizing", v: "Turncoat", desc: "30 LAF Kills.", sol: "Töte 30 Lamang Armed Forces bei Fort Narith." },
        { de: "Wer hat das Sagen?", en: "Who's in charge", v: "Turncoat", desc: "Dokumente Fort Narith.", sol: "Fort Narith HQ Akten besorgen." },
        { de: "Lokaler Golf-Star", en: "Local Golf Star", v: "Turncoat", desc: "Golfclub sichern.", sol: "Midnight Sapphire Golfplatz." },
        { de: "Letzte Befreiung", en: "Final Liberation", v: "Turncoat", desc: "Räume Bunker EG-2.", sol: "Bunker (142 121). Töte Boss mit blauem Bandana." },
        { de: "Narkotika-Deal", en: "Narcotic Bargain", v: "Turncoat", desc: "Drogen finden.", sol: "Blue Lagoon Drogenlabor." },
        { de: "In den richtigen Händen", en: "In The Right Hands", v: "Turncoat", desc: "Evakuierungsbefehle.", sol: "Fort Narith, Barracks A, Raum 112. Akte liegt links auf dem Tisch." },
        { de: "Evakuierungsfrage", en: "Evacuation Question", v: "Turncoat", desc: "Evakuierungsbefehle.", sol: "Fort Narith, Barracks A, Raum 112 (Alternativer Weg für In The Right Hands)." },
        { de: "Eines Mannes Müll", en: "One Man's Trash", v: "Turncoat", desc: "Blue Lagoon Lager.", sol: "Blue Lagoon Restaurant Lager (Storage Key nötig)!" },
        { de: "Keine Fragen gestellt", en: "No Questions Asked", v: "Turncoat", desc: "Villen plündern.", sol: "Finde Wertsachen in Villa Anna Jana und Marta Monica (172 165)." },
        { de: "Verspätetes Paket", en: "Delayed Package", v: "Turncoat", desc: "Post-LKW.", sol: "Straße Tiger Bay DHL Wagen." },
        { de: "Käufer unerzählter Dinge", en: "Buyer of Untold Truths", v: "Turncoat", desc: "Diamanten im Zelt.", sol: "West-Zelt bei Tiger Bay. Item auf Tisch (Alternativ zu Crumb Collector)." },
        { de: "Nenne dein Gift", en: "Name your Poison", v: "Turncoat", desc: "Chemikalien Wassertank.", sol: "Wassertank NW neben Barracken. ACHTUNG: Beendet alternative Lab Rat Quest!" },
        { de: "Drachentöter", en: "Dragonslayer", v: "Turncoat", desc: "General Pa.", sol: "Töte Boss in Fort Narith. [0.4 Hinweis: General Pa hat extremes AP-Gear]." },
        { de: "Kenne deinen Feind", en: "Know Your Enemy", v: "Turncoat", desc: "Artillerie markieren.", sol: "Fort Narith Geschütze." },
        { de: "Akademisches Interesse", en: "Academic Interest", v: "Turncoat", desc: "Schul-Daten.", sol: "Startstadt Schule Akten." },
        { de: "Freundlicher Hinweis", en: "Friendly Suggestion", v: "Turncoat", desc: "Bürgermeister Drohung.", sol: "Munition in Bett Bürgermeister ablegen." },
        { de: "Frischfleisch", en: "Fresh Meat", v: "Turncoat", desc: "Gästeliste.", sol: "Haus bei Kilo 2 LZ, im Schlafzimmer auf kleinem Tisch." },
        { de: "Frischfleisch II", en: "Fresh Meat II", v: "Turncoat", desc: "Weitere Kills.", sol: "Gegner ausschalten (Folgequest)." },
        { de: "Frischfleisch III", en: "Fresh Meat III", v: "Turncoat", desc: "Zielperson killen.", sol: "Spezifischen Feind ausschalten." },
        { de: "Drogen-Lieferung", en: "Narco Delivery", v: "Turncoat", desc: "Golfplatz Sandbunker.", sol: "Midnight Sapphire 3. Loch." },
        { de: "Suchender der Veränderung", en: "Seeker of change", v: "Turncoat", desc: "Proben aus Bett.", sol: "Barracks C, Raum 110 (141 132). Probe mit Kit aus blutigem Bett nehmen." },
        { de: "Unheimliche Akten", en: "Uncanny Files", v: "Turncoat", desc: "Geheime Dokumente.", sol: "Bunker YBL-1 Akten suchen." },

        // --- BANSHEE TASKS ---
        { de: "Holz", en: "Timber", v: "Banshee", desc: "Boss Sägewerk.", sol: "Sawmill (139 144). Töte den Boss (patrouilliert NE/Ost und große Halle)." },
        { de: "An den Hügeln", en: "At The Mounds", v: "Banshee", desc: "Gräber Ban Pa.", sol: "NE-Ban Pa Dokument Hügel." },
        { de: "Flugschreiber", en: "Flight Recorder", v: "Banshee", desc: "Blackbox C-130.", sol: "Ground Zero Wrack Heck." },
        { de: "Kopfgeldjäger", en: "Bounty Hunter", v: "Banshee", desc: "Commander Tiger Bay.", sol: "Töte Boss am Pier/HQ." },
        { de: "Nachtwache", en: "Night Watch", v: "Banshee", desc: "Stealth Raid.", sol: "Kills & Extraction bei Nacht (22:00-05:00)." },
        { de: "Blut und Sand", en: "Blood and Sand", v: "Banshee", desc: "Schmuggel Küste.", sol: "Strand S-Tiger Bay Kisten." },
        { de: "Geisterstadt", en: "Ghost Town", v: "Banshee", desc: "Tiger Bay infiltrieren.", sol: "Überleben." },
        { de: "Blutopfer", en: "Blood Sacrifice", v: "Banshee", desc: "Ritualstätte.", sol: "O-Ban Pa Schrein Knochen." },
        { de: "Verlorene Seelen", en: "Lost Souls", v: "Banshee", desc: "Dogtags Krater.", sol: "3 PMC-Leichen Ground Zero." },
        { de: "Das Auge des Sturms", en: "Eye of the Storm", v: "Banshee", desc: "Zentrum Flugplatz.", sol: "Tower Ground Zero Signalgeber." },
        { de: "Flüstern im Dunkeln", en: "Whispers in the Dark", v: "Banshee", desc: "Audiologs Bunker.", sol: "YBL-1 Ebene -2 Diktiergerät." },
        { de: "Todeszone", en: "Killzone", v: "Banshee", desc: "Sniper-Nester.", sol: "3 Marker Dächer Villen Hotel." },
        { de: "Verbotenes Wissen", en: "Forbidden Knowledge", v: "Banshee", desc: "UNLRA Geheimakten.", sol: "Tiger Bay Labor Serverraum." },
        { de: "Höllenfeuer", en: "Hellfire", v: "Banshee", desc: "Treibstofftanks.", sol: "Fort Narith 4 weiße Tanks." },
        { de: "Dämonenjagd", en: "Demon Hunt", v: "Banshee", desc: "Kultisten-Anführer.", sol: "Ruinen SVD Boss eliminieren." },
        { de: "Das Ende vom Lied", en: "The Bitter End", v: "Banshee", desc: "Mysteriöse Fracht.", sol: "Hangar 2 schwarze Kiste extrahieren." },
        { de: "Der Kult", en: "The Cult", v: "Banshee", desc: "Ritualmorde.", sol: "Sumpf Altar Messer." },
        { de: "Das Opfer", en: "The Sacrifice", v: "Banshee", desc: "Kultisten Ruinen.", sol: "5 Kills schwarze Roben." },
        { de: "Das Artefakt", en: "The Artifact", v: "Banshee", desc: "Antike Kette.", sol: "Ban Pa versunkenes Boot." },
        { de: "Die Prophezeiung", en: "The Prophecy", v: "Banshee", desc: "Schriftrollen.", sol: "YBL-1 Ebene -3 Seitengang." },
        { de: "Stimmen im Nebel", en: "Voices in the Fog", v: "Banshee", desc: "Fischerboot.", sol: "Küste S-Lagune Funkgerät." },
        { de: "Das Zeichen", en: "The Mark", v: "Banshee", desc: "Okkulte Symbole.", sol: "3 Marker an rote Symbole Stadt." },
        { de: "Verrat", en: "Betrayal", v: "Banshee", desc: "Beweise UNLRA.", sol: "Miliz-Waffen in Zelt Tiger Bay." },
        { de: "Schweinepriester", en: "Corrupt Priest", v: "Banshee", desc: "Tagebuch Prediger.", sol: "Kirche Stadt Altar." },
        { de: "Dunkle Rituale", en: "Dark Rituals", v: "Banshee", desc: "Schreine zerstören.", sol: "3 Knochen-Schreine Dschungel." },
        { de: "Mitternacht", en: "Midnight", v: "Banshee", desc: "Hotel säubern.", sol: "15 Kills im Hotel." },
        { de: "Kultisten-Jagd", en: "Cultist Hunt", v: "Banshee", desc: "Kult-Mitglieder.", sol: "10 Kills N-Sumpf." },
        { de: "Blutmond", en: "Blood Moon", v: "Banshee", desc: "Ritueller Dolch.", sol: "Hügel O-YBL-1 Baumstumpf." },
        { de: "Schattenspiele", en: "Shadow Games", v: "Banshee", desc: "Strom Fort Narith.", sol: "Keller Block B Schaltkasten." },
        { de: "Kaltblütig", en: "Cold Blooded", v: "Banshee", desc: "Messer Kills.", sol: "3 Kills mit Nahkampfwaffe." },
        { de: "Das Ritual", en: "The Ritual", v: "Banshee", desc: "Artefakt zu Banshee.", sol: "Goldene Statue Malo's Shack." },
        { de: "Endstation", en: "End of the Line", v: "Banshee", desc: "Bahnhof Söldner.", sol: "Train Yard 20 Kills." },
        { de: "Jets'N'Marks", en: "Jets'N'Marks", v: "Banshee", desc: "Jets markieren.", sol: "Ground Zero Hangar 1 & 2." },
        { de: "Waffenlieferungs-Status", en: "State of Weapon Shipment", v: "Banshee", desc: "Waffen-Kisten.", sol: "Hunter's Paradise Dschungel Ost." },
        { de: "Lamang-Verbindung", en: "Lamang Connection", v: "Banshee", desc: "Funk Pier.", sol: "Tiger Bay Pier Funk. Braucht BP Hut Key (Item auf Schreibtisch links)." },
        { de: "Tiefe Verderbtheit", en: "Deep Depravity", v: "Banshee", desc: "Kultisten-Schrein.", sol: "Östlich Ban Pa." },
        { de: "Himmelskriecher", en: "Skycrawlers", v: "Banshee", desc: "Blackbox Wrack.", sol: "Ground Zero C-130." },
        { de: "Himmelskriecher II", en: "Skycrawlers II", v: "Banshee", desc: "Weitere Flugzeugteile.", sol: "Ground Zero Wrack." },
        { de: "Ein Schuss ins Blaue", en: "A Shot in the Dark", v: "Banshee", desc: "Sniper jagen.", sol: "5 Kills Sniper." },
        { de: "Verbrechen und Strafe", en: "Felony and Punishment", v: "Banshee", desc: "Kongressabgeordneter / Gefängnis.", sol: "Midnight Sapphire (173 166). Ende Flur links unter Papier." },
        { de: "Kein Entkommen", en: "No Escape", v: "Banshee", desc: "Säubere Airfield.", sol: "Ground Zero Kills." },
        { de: "Edles Pulver", en: "Noble Powder", v: "Banshee", desc: "Kokain Zimmer 301.", sol: "Midnight Sapphire Zimmer 301." },
        { de: "Gebacken", en: "Baked", v: "Banshee", desc: "Drogenlabor C4.", sol: "Blue Lagoon Sabotage." },
        { de: "Was übrig blieb", en: "What Was Left", v: "Banshee", desc: "Dogtags Krater.", sol: "Sichere Marken Ground Zero. (Gleicher Ort wie One Man's Trash)." },
        { de: "Schmutzgräber", en: "Dirt Digger", v: "Banshee", desc: "Erpressungsakte Safe.", sol: "Tiger Bay HQ Safe." },
        { de: "Aye Aye, Captain", en: "Aye Aye, Captain", v: "Banshee", desc: "Captain finden.", sol: "Ban Pa Boot." },
        { de: "Der Wert des Teilens", en: "The Value of Sharing", v: "Banshee", desc: "Wertsachen teilen.", sol: "Banshee Loot abgeben." },
        { de: "Gesuchter Mann", en: "Wanted Man", v: "Banshee", desc: "Kopfgeld.", sol: "Zielperson ausschalten." },
        { de: "Gesuchter Mann II", en: "Wanted Man II", v: "Banshee", desc: "Kopfgeld Folgequest.", sol: "Weitere Kills." },
        { de: "Verlorenes Mädchen II", en: "Lost Girl II", v: "Banshee", desc: "Spuren folgen.", sol: "Startgebiet Hinweise suchen." },
        { de: "Unnennbar", en: "Unnameable", v: "Banshee", desc: "Kult-Hinweise.", sol: "Ban Pa Elder's House." },
        { de: "Was bleibt", en: "What Remains", v: "Banshee", desc: "Überreste.", sol: "Untersuche die Ruinen." },
        { de: "Ungläubig", en: "Unbeliever", v: "Banshee", desc: "Manifest Kapelle.", sol: "Kapelle O-Stadt Altar." },
        { de: "Aasfresser", en: "Scavenger", v: "Banshee", desc: "Wertsachen Todeszone.", sol: "Ground Zero Rucksäcke." },

        // ==============================================================
        // --- 🆕 UPDATE 0.4 SPEARHEAD TASKS (BLUEPRINTS, VULTURE & SQUAD) ---
        // ==============================================================
        
        // --- VULTURE (SECRET VENDOR) ---
        { de: "Der neue Kontakt", en: "The New Contact", v: "Vulture", desc: "Aktenkoffer von der Farm holen.", sol: "Na Xieng Farm. Nutze den Code 9135 am Vorhängeschloss, um Vultures Respekt zu gewinnen." },
        { de: "Chamäleon", en: "Chameleon", v: "Vulture", desc: "AK-308 Blueprint besorgen.", sol: "Fort Narith Jail. Finde den Blueprint hinter der kickbaren Tür und übergib ihn an Vulture." },
        { de: "Wie ein Boss", en: "Like a Boss", v: "Vulture", desc: "Versteckte Boss-Pistolen.", sol: "Töte den Boss Malo an der Blue Lagoon und loote seine 1911 C manuell aus dem Holster!" },
        
        // --- BLUEPRINT UNLOCKS (Andere Händler) ---
        { de: "Phantom-Lanze", en: "Phantom Lance", v: "Gunny", desc: "DDM4 Blueprint besorgen.", sol: "Fort Narith. Gehe in die Baracken, 2. Stock. Extrahiere den Blueprint und gib ihn bei Gunny ab." },
        { de: "Stille Bedrohung", en: "Silent Threat", v: "Artisan", desc: "SVD Blueprint besorgen.", sol: "Tiger Bay Mall. Buchladen-Hinterzimmer (TB-Mall-Key nötig)." },
        { de: "Kompakte Feuerkraft", en: "Compact Firepower", v: "Handshake", desc: "MP7A2 Blueprint besorgen.", sol: "Ransacked Shelter (188 130). Den Blueprint sichern und zu Handshake bringen." },
        { de: "Yens M700 (Side Task)", en: "Yen's M700", v: "Banshee", desc: "M700 Skin freischalten.", sol: "Midnight Sapphire. Töte den LAF Commander und sichere dir den Blueprint auf dem Hoteldach." },
        { de: "Plan B", en: "Plan B", v: "Lab Rat", desc: "Kong Thab Depot Bunker.", sol: "Kong Thab Depot. Dynamischen Keypad-Code im Umkreis finden, um die Medikamente zu sichern." },

        // --- SQUAD STRIKE MISSIONEN ---
        { de: "Squad Strike: HVT", en: "Squad Strike: HVT", v: "Handshake", desc: "Boss-Eliminierung Team.", sol: "Töte einen POI Boss im Squad. ACHTUNG: Nur der letzte Treffer (Lasthit) zählt für den Kill!" },
        { de: "Squad Strike: Sichern & Halten", en: "Squad Strike: Secure & Hold", v: "Gunny", desc: "Halte Position.", sol: "5 Min. LZ Verteidigung. ACHTUNG: Stirbst du, erhältst du einen Cooldown auf die Aufgabe!" },
        { de: "Squad Strike: Datendiebstahl", en: "Squad Strike: Data Heist", v: "Turncoat", desc: "Infiltriere HQ.", sol: "YBL-1 oder Tiger Bay Daten. Extraktion im Squad zwingend nötig." },
        { de: "Squad Strike: Night Raid", en: "Squad Strike: Night Raid", v: "Banshee", desc: "Leise Spec-Op.", sol: "Team Stealth Kills bei Nacht (22:00-05:00)." }
    ];

    // ==========================================
    // 2. WAFFEN-DATENBANK (0.4 SPEARHEAD - 100% COMPLETE)
    // ==========================================
const weapons = {
    // --- STURMGEWEHRE (NATO) ---
    "m4a1": { name: "M4A1 Sturmgewehr", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Die Standard-NATO-Waffe. Stark modifizierbar." },
    "m16a1": { name: "M16A1 Sturmgewehr", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "0.4 NEU: 'The Black Rifle'. Retro-Look, extrem präzise." },
    "m201c": { name: "Norinco M-201C", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "0.4 NEU: Kompakte chinesische M4-Alternative. Hoher Durability Burn!" },
    "cqa1": { name: "CQ-A1", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Chinesischer M4-Klon. Günstig für den Start, später austauschen." },
    "ddm4": { name: "Daniel Defense DDM4", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "0.4 S-TIER: Perfekte Ergonomie ab Werk. Erfordert Blueprint-Unlock." },
    "ks1": { name: "KAC KS-1 (L403A1)", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "0.4 META: Bestes Rückstoßverhalten im Spiel." },
    "sicmcx": { name: "SIG MCX", ammo: ".300 Blackout", pen: "Sehr hoch", tip: "Tödlich im Nahkampf. Munition ist extrem selten. Blueprint im Hotel." },
    "mk18": { name: "MK18", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Kurzer Lauf, hohe Ergonomie. Perfekt für den Häuserkampf." },

    // --- STURMGEWEHRE (OSTBLOCK) ---
    "ak74": { name: "AK-74", ammo: "5.45x39mm", pen: "Gut", tip: "Das Original mit Holzschäftung." },
    "ak74n": { name: "AK-74N", ammo: "5.45x39mm", pen: "Gut", tip: "Mit Schwalbenschwanz-Montage für russische Optiken." },
    "ak74m": { name: "AK-74M", ammo: "5.45x39mm", pen: "Gut", tip: "Modernisierte Version mit Polymerschaft und Klappschaft." },
    "aks74u": { name: "AKS-74U", ammo: "5.45x39mm", pen: "Mittel", tip: "Sehr kurz. Starker Rückstoß, nur für CQB." },
    "aks74un": { name: "AKS-74UN", ammo: "5.45x39mm", pen: "Mittel", tip: "AKS-74U mit seitlicher Montage-Schiene." },
    "akm": { name: "AKM", ammo: "7.62x39mm", pen: "Hoch", tip: "Hoher Rückstoß, massive Stoppwirkung." },
    "akmn": { name: "AKMN", ammo: "7.62x39mm", pen: "Hoch", tip: "AKM mit Optik-Montage." },
    "akms": { name: "AKMS", ammo: "7.62x39mm", pen: "Hoch", tip: "AKM mit nach unten klappendem Schaft." },
    "akmsn": { name: "AKMSN", ammo: "7.62x39mm", pen: "Hoch", tip: "AKMS mit Optik-Montage." },
    "ak101": { name: "AK-101", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Export-AK, die NATO-Munition verschießt." },
    "ak102": { name: "AK-102", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Kurzversion der AK-101." },
    "ak103": { name: "AK-103", ammo: "7.62x39mm", pen: "Hoch", tip: "Moderne Polymer-AK. Spürbar besserer Basis-Rückstoß als die AKM." },
    "ak104": { name: "AK-104", ammo: "7.62x39mm", pen: "Hoch", tip: "Kurzversion der AK-103." },
    "ak105": { name: "AK-105", ammo: "5.45x39mm", pen: "Gut", tip: "Kompakter Kompromiss der AK-74M." },
    "ak12": { name: "AK-12", ammo: "5.45x39mm", pen: "Gut", tip: "Modernste russische Plattform. Sehr hohe Ergonomie." },
    "ak15": { name: "AK-15", ammo: "7.62x39mm", pen: "Hoch", tip: "7.62 Variante der AK-12." },
    "ak19": { name: "AK-19", ammo: "5.56x45mm NATO", pen: "Abhängig von Muni", tip: "Neueste AK-Variante für NATO-Munition." },
    "ak308": { name: "AK-308", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "0.4 S-TIER: .308 Sniper-Muni im Vollauto-Modus. Jailbreak-Blueprint nötig!" },
    "vz58": { name: "SA vz. 58", ammo: "7.62x39mm", pen: "Hoch", tip: "0.4 NEU: 'Moravian Buzzsaw'. Hohe Feuerrate, frisst aber Haltbarkeit." },
    "vz58v": { name: "SA vz. 58 V", ammo: "7.62x39mm", pen: "Hoch", tip: "0.4 NEU: Variante mit Klappschaft." },
    "typ56": { name: "Type 56", ammo: "7.62x39mm", pen: "Mittel", tip: "Die absolute Einsteiger-Waffe. Schnell ersetzen." },
    "typ56_1": { name: "Type 56-1", ammo: "7.62x39mm", pen: "Mittel", tip: "Type 56 Variante mit Klappschaft." },
    "typ56_2": { name: "Type 56-2", ammo: "7.62x39mm", pen: "Mittel", tip: "Type 56 Variante mit seitlichem Klappschaft." },

    // --- DMR & SCHARFSCHÜTZEN ---
    "m14": { name: "M14 Battle Rifle", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "0.4 NEU: S-Tier DMR. Sehr präzise auf Distanz." },
    "m14ebr": { name: "M14 EBR", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "0.4 NEU: Modernisiertes Chassis der M14." },
    "m1a": { name: "M1A", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "0.4 NEU: Zivile Semi-Auto Variante der M14." },
    "m700": { name: "M700 Remington", ammo: "7.62x51mm NATO", pen: "Extrem", tip: "⚠️ 0.4 MECHANIK: Erfordert Manual Bolting! Tödlich auf Distanz." },
    "rem788": { name: "Remington Model 788", ammo: "5.56x45mm / .308", pen: "Hoch", tip: "0.4 NEU: 'Baby's First Sniper'. Günstig für den Anfang. Manual Bolting!" },
    "mosin": { name: "Mosin-Nagant", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "⚠️ 0.4 MECHANIK: Manual Bolting! Die SNB-Munition durchschlägt fast alles." },
    "mosin_sniper": { name: "Mosin-Nagant (Sniper)", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "Mit gebogenem Kammerstängel, um Zielfernrohre zu montieren." },
    "mosin_obrez": { name: "Mosin Obrez", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "Abgesägte Mosin. Furchtbarer Rückstoß, aber enormer Schaden auf kurze Distanz." },
    "svd": { name: "SVD Dragunov", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "0.4 S-TIER: Semi-Auto Sniper. Blueprint in der Tiger Bay Mall." },
    "svds": { name: "SVDS", ammo: "7.62x54mmR", pen: "Sehr Hoch", tip: "Klappschaft-Version der SVD." },
    "sks": { name: "SKS", ammo: "7.62x39mm", pen: "Gut", tip: "Solides Einsteiger-DMR." },
    "op_sks": { name: "OP-SKS", ammo: "7.62x39mm", pen: "Gut", tip: "SKS mit Montage für Optiken." },

    // --- SMG & SHOTGUNS ---
    "mp7a1": { name: "MP7A1", ammo: "4.6x30mm", pen: "Sehr Hoch (AP)", tip: "Hat einen fest verbauten Frontgriff." },
    "mp7a2": { name: "MP7A2", ammo: "4.6x30mm", pen: "Sehr Hoch (AP)", tip: "Ohne festen Griff, erlaubt eigene Attachments. Blueprint im Shelter." },
    "mp5a2": { name: "MP5A2", ammo: "9x19mm", pen: "Gering", tip: "Fester Schaft, extrem wenig Rückstoß." },
    "mp5a3": { name: "MP5A3", ammo: "9x19mm", pen: "Gering", tip: "Ausziehbarer Schaft für mehr Mobilität." },
    "mp5sd": { name: "MP5SD", ammo: "9x19mm", pen: "Gering", tip: "Integrierter Schalldämpfer. Sehr leise." },
    "mp5k": { name: "MP5K", ammo: "9x19mm", pen: "Gering", tip: "Kurzversion, ideal als Backup-Waffe." },
    "vityaz": { name: "PP-19-01 Vityaz", ammo: "9x19mm", pen: "Gering", tip: "Russische MP5-Alternative. Spielt sich wie eine kompakte AK." },
    "vz61": { name: "VZ-61 Skorpion", ammo: ".32 ACP", pen: "Minimal", tip: "Eher ein Spielzeug. Munition prallt an Rüstungen ab." },
    "m870": { name: "M870 Pump-Action", ammo: "12 Gauge", pen: "Gering", tip: "Standard-Shotgun. Unbedingt auf die Beine zielen!" },
    "moss590": { name: "Mossberg 590", ammo: "12 Gauge", pen: "Gering", tip: "Bessere Shotgun-Alternative zur 870." },
    "moss590a1": { name: "Mossberg 590A1", ammo: "12 Gauge", pen: "Gering", tip: "Schwere Militärversion der 590." },
    "moss590_shock": { name: "Mossberg 590 Shockwave", ammo: "12 Gauge", pen: "Gering", tip: "Extrem kurz, ohne Schaft. Sehr hoher Rückstoß." },

    // --- PISTOLEN ---
    "alien": { name: "Laugo Alien", ammo: "9x19mm", pen: "Mittel", tip: "0.4 NEU: 'Ein Sportwagen auf Schotterpisten'. Feuert so präzise wie ein Laser!" },
    "glock17": { name: "Glock 17", ammo: "9x19mm", pen: "Gering", tip: "Beste Standard-Backup-Waffe. Lässt sich mit Red-Dots modifizieren." },
    "glock19": { name: "Glock 19", ammo: "9x19mm", pen: "Gering", tip: "Kompakte Glock. Sehr zuverlässig." },
    "m9a1": { name: "M9A1 Beretta", ammo: "9x19mm", pen: "Gering", tip: "Solide Pistole mit großer Magazinkapazität." },
    "m9a3": { name: "M9A3 Beretta", ammo: "9x19mm", pen: "Gering", tip: "Modernisierte Beretta mit Gewindelauf für Schalldämpfer." },
    "1911": { name: "Colt M1911A1", ammo: ".45 ACP", pen: "Mittel", tip: "Nur 7 Schuss, aber .45 ACP richtet enormen Fleischschaden an." },
    "ccc": { name: "Colt Combat Commander", ammo: ".45 ACP", pen: "Mittel", tip: "Kompakte, kürzere Version der 1911." },
    "makarov": { name: "Makarov PM", ammo: "9x18mm", pen: "Minimal", tip: "Absolute Notfall-Waffe. Schnell austauschen." },
    "makarov_pb": { name: "Makarov PB", ammo: "9x18mm", pen: "Minimal", tip: "Makarov mit integriertem Schalldämpfer für Stealth-Kills." },
    "typ51": { name: "Type-51 / TT", ammo: "7.62x25mm", pen: "Mittel", tip: "Hohe Penetration für eine Pistole, aber winziges Magazin." }
};
    
// 3. WAFFEN BILDER DATENBANK
    const weaponImages = {
        "ak74m": "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/52/AK-74M_inspect.png",
        "ak74n": "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e2/AK-74N_inspect.png",
        "ak103": "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/30/AK-12_inspect.png",
        "ak12": "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/30/AK-12_inspect.png",
        "ak15": "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e3/AK-15_inspect.png",
        "ak19": "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/b6/AK-19_inspect.png",
        "akm": "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/94/AKM_inspect.png",
        "akmn": "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/94/AKM_inspect.png",
        "akmsn": "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/51/AKMSN_inspect.png",
        "aks74u": "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/fd/AKS74U_inspect.png",
        "ak308": "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/9d/AK-308_inspect.png",
        "cqa1": "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/b3/CQA1_inspect.png",
        "ks1": "https://static.wikia.nocookie.net/grayzonewarfare/images/c/c5/KS-1_Icon.png",
        "m4a1": "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/43/M4A1_inspect.png",
        "ddm4": "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/43/DDM4_inspect.png",
        "sicmcx": "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/2d/SIG_MCX_inspect.png",
        "m14": "https://static.wikia.nocookie.net/grayzonewarfare/images/8/80/M14_EBR_Icon.png",
        "m700": "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/a8/M700_inspect.png",
        "svd": "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/85/SVD_inspect.png",
        "mosin": "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/51/Mosin_%28S%29_inspect.png",
        "mp5": "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/52/MP5_inspect.png",
        "mp7a2": "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/f9/MP7_inspect.png",
        "m870": "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/db/M870_inspect.png",
        "alien": "https://static.wikia.nocookie.net/grayzonewarfare/images/8/8b/Laugo_Alien_Icon.png",
        "glock17": "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e4/Glock17_inspect.png",
        "m9a1": "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/bc/M9A1_inspect.png"
    };

// ==========================================
// 4. RÜSTUNG, HELME & GEAR DATENBANK (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
// isMeta: true markiert absolute Game-Changer Items!

const gearDb = [
    // ==========================================
    // --- PLATE CARRIERS (Schwere Panzerung) ---
    // ==========================================
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Defender-2 Schutzweste", stats: "NIJ III++", isMeta: true, info: "<b>Warum sie Meta ist:</b> Die stärkste Rüstung im Spiel! Stoppt selbst extrem starke AP-Munition mehrmals. Macht dich aber schwerfällig (hohe Inertia)." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "Recon Plattenträger (RPC)", stats: "NIJ III+", isMeta: true, info: "<b>Warum er Meta ist:</b> Das absolute Meta-Rig! Bietet hervorragenden Schutz (stoppt Standard-Rifle-Ammo), hat massig Platz für Magazine und ein perfektes Gewichtsverhältnis." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "M2 Plate Carrier", stats: "NIJ III", isMeta: true, info: "<b>Warum er gut ist:</b> Der beste Mid-Game Carrier. Schützt zuverlässig vor Scav-AKs (PS Munition) und hat gute Magazin-Taschen." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "CZ 4M Lancer", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Guter Schutz, aber sehr klobig und schwer. Verringert deine Ausdauer spürbar." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "LCS Sentry", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Leichter Plattenträger. Bietet guten Schutz mit hoher Mobilität, hat aber wenig Platz für große Loot-Touren." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "6B13 Sturm-Panzerung", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Russische Standard-Panzerung. Solide, aber meist schwerer als westliche Alternativen." },
    { category: "🛡️ Plate Carriers (NIJ III bis III++)", name: "6B23-1 Panzerung", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Vergleichbar mit der 6B13, oft bei Militär-KIs in Fort Narith zu finden." },

    // ==========================================
    // --- ARMOR VESTS (Weichballistik) ---
    // ==========================================
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "ATBV Schutzweste", stats: "NIJ III", isMeta: false, info: "<b>Info:</b> Seltene Weichballistik, die auch Gewehrkugeln stoppt. Du musst aber zwingend ein taktisches Rig darüber anziehen für Magazine." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "PACA Schutzweste", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> ACHTUNG: Stoppt NUR Pistolen und Schrot! Gegen Sturmgewehre komplett nutzlos." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "6B2 Schutzweste", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Alte russische Weste. Stoppt keine Gewehrkugeln." },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "Fraktions-Weste (LRI/MSS/CSI)", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Deine Startweste. Tausche sie so schnell wie möglich gegen einen echten Plate Carrier aus!" },
    { category: "🦺 Weichballistik & Westen (NIJ IIIA bis III)", name: "Security Weste", stats: "NIJ IIA", isMeta: false, info: "<b>Info:</b> Absoluter Müll. Schützt bestenfalls vor kleinen Splittern." },

    // ==========================================
    // --- BACKPACKS (Rucksäcke) ---
    // ==========================================
    { category: "🎒 Rucksäcke (Backpacks)", name: "Wanderer Rucksack (Civilian Trekstars 70L Backpack)", stats: "42 Slots (6x7)", isMeta: true, info: "<b>Warum er extrem beliebt ist:</b> Der absolute Favorit der Community für Loot-Touren!" },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Delta Rucksack (Delta Backpack)", stats: "36 Slots (6x6)", isMeta: true, info: "<b>Warum er der Beste ist:</b> Der absolut größte militärische Rucksack im Spiel. Unverzichtbar für ausgedehnte Loot-Runs in den Endgame-Zonen (Tiger Bay), um massiv Beute mitzunehmen." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Rush 72 2.0 (Rush 72 Backpack)", stats: "30 Slots (5x6)", isMeta: true, info: "<b>Warum er gut ist:</b> Hervorragender, robuster Militär-Rucksack für lange Tasks. Bietet Platz für 2-3 zerlegte Waffen." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "6Sh118 Ratnik V2", stats: "30 Slots (5x6)", isMeta: false, info: "<b>Warum er gut ist:</b> Kam Neu mit dem Spearhead Update. Ähnlich wie der Rush Rucksack, nur etwas schwerer." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Falang 28", stats: "24 Slots (4x6)", isMeta: false, info: "<b>Warum er gut ist:</b> Ziviler Rucksack. Toller Kompromiss aus Stauraum und unauffälligem Profil." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Rush 24 (Rush 24 Backpack)", stats: "24 Slots (4x6)", isMeta: false, info: "<b>Warum er gut ist:</b> Die kompaktere Version des Rush 72. Perfekter Allrounder." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "3-Tages-Sturmrucksack (3-Day Assault Pack)", stats: "24 Slots (4x6)", isMeta: false, info: "<b>Warum er gut ist:</b> Der militärische Standard von Gunny. Sehr verlässliches Platzangebot." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "AMP12 Rucksack (AMP12 Backpack)", stats: "20 Slots (4x5)", isMeta: false, info: "<b>Warum er gut ist:</b> Beliebte Quest-Belohnung (Gunny). Perfekte Größe für Mid-Game Missionen, wo Geschwindigkeit wichtig ist." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Patrouillen-Rucksack (Patrol Backpack)", stats: "20 Slots (4x5)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Reiner Anfänger-Rucksack für die ersten Stunden." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Scorpion OCP (Scorpion OCP Pack)", stats: "16 Slots (4x4)", isMeta: false, info: "<b>Warum er gut ist:</b> Bester Rucksack für das Early-Game. Reicht genau für ein OP-Kit, Wasser und ein bisschen Loot." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Tagesrucksack (Daypack)", stats: "16 Slots (4x4)", isMeta: false, info: "<b>Warum er gut ist:</b> Ziviles Äquivalent zum Scorpion OCP. Liegt oft in Häusern herum." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Gunfighter 14", stats: "9 Slots (3x3)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Kompakter Taktischer Rucksack, gerade am Anfang sehr beliebt." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Sport Rucksack (Sport Backpack)", stats: "9 Slots (3x3)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Ähnlich wie der Touristenrucksack, kann man sehr oft finden. Wenn du keinen hast, ist er besser als nichts." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Turnbeutel / Sporttasche (Drawstring Bag)", stats: "8 Slots (2x4)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Wenn du absolut pleite bist. Besser als nichts, aber mehr als ein Med-Kit passt nicht rein." },
    { category: "🎒 Rucksäcke (Backpacks)", name: "Kleiner Touristenrucksack (Small Tourist Backpack)", stats: "6 Slots (2x3)", isMeta: false, info: "<b>Warum er nützlich ist:</b> Kann man sehr oft finden, wenn du keinen hast, ist er besser als nichts." },

    // ==========================================
    // --- TACTICAL RIGS (Tragesysteme) ---
    // ==========================================
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "LBT-1961A Chest Rig", stats: "High Capacity", isMeta: true, info: "<b>Warum es Meta ist:</b> Das beste Rig im Spiel! Fasst extrem viele Magazine und Granaten. Wird direkt über Weichballistik getragen." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "TacTec Brust-Rig", stats: "Medium Capacity", isMeta: false, info: "<b>Info:</b> Solides, zuverlässiges Rig für mittlere Einsätze." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Recon Chest Rig", stats: "Medium Capacity", isMeta: false, info: "<b>Info:</b> Leichtes Rig, ideal für schnelle Flankierungs-Manöver." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Viper Chest Rig", stats: "Medium Capacity", isMeta: false, info: "<b>Info:</b> Droppt oft vom Boss 'Viper' im Dschungel. Sieht cool aus und bietet vernünftigen Platz." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Training Mini Rig", stats: "Low Capacity", isMeta: false, info: "<b>Info:</b> Reicht für 2 Magazine und 2 Bandagen. Sehr unauffällig." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Type 81 AK-Rig", stats: "Low Capacity", isMeta: false, info: "<b>Info:</b> Start-Ausrüstung für AK-Spieler." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Type 56 AK-Rig", stats: "Low Capacity", isMeta: false, info: "<b>Info:</b> Günstiges, weit verbreitetes Tragesystem bei KIs." },
    { category: "🎽 Taktische Rigs (Tragesysteme)", name: "Improvisiertes Rig", stats: "Minimal Capacity", isMeta: false, info: "<b>Info:</b> Besser als die Taschen deiner Hose, aber ansonsten Müll." },

    // ==========================================
    // --- HEADWEAR (Helme & Kopfbedeckung) ---
    // ==========================================
    { category: "🪖 Helme & Kopfbedeckung", name: "FAST MT Helm", stats: "NIJ IIIA", isMeta: true, info: "<b>Warum er Meta ist:</b> Der beste Allround-Helm! Erlaubt Headsets, Nachtsichtgeräte (NVGs) und hat das beste Gewicht-Schutz-Verhältnis." },
    { category: "🪖 Helme & Kopfbedeckung", name: "Altyn Helm", stats: "NIJ III", isMeta: true, info: "<b>Warum er Meta ist:</b> Ein Panzer für den Kopf! Stoppt Gewehrkugeln. ACHTUNG: Du kannst kein Headset tragen und das Sichtfeld ist massiv eingeschränkt!" },
    { category: "🪖 Helme & Kopfbedeckung", name: "EXFIL Helm (Team Wendy)", stats: "NIJ IIIA", isMeta: true, info: "<b>Warum er Meta ist:</b> Top-Ergonomie, unterstützt volle Kopf-Modifikationen wie NVGs." },
    { category: "🪖 Helme & Kopfbedeckung", name: "MICH TC-2000", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Guter Mid-Game Helm. Schützt vor Pistolen und Granatsplittern." },
    { category: "🪖 Helme & Kopfbedeckung", name: "MICH TC-2002", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Etwas höher geschnitten als der TC-2000, um größere Headsets besser zuzulassen." },
    { category: "🪖 Helme & Kopfbedeckung", name: "LSHZ 1+", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Russischer Standardhelm. Sehr oft in Kisten und bei KIs zu finden." },
    { category: "🪖 Helme & Kopfbedeckung", name: "6B47 Ratnik", stats: "NIJ IIIA", isMeta: false, info: "<b>Info:</b> Robustes russisches Design. Unterstützt Nachtsichtgeräte." },
    { category: "🪖 Helme & Kopfbedeckung", name: "SSh-68 Stahlhelm", stats: "NIJ IIA", isMeta: false, info: "<b>Info:</b> Klassischer Blechhelm. Schützt fast vor gar nichts." },
    { category: "🪖 Helme & Kopfbedeckung", name: "Skull Crusher (NVG Mount)", stats: "Kein Schutz", isMeta: false, info: "<b>Info:</b> Reines Tragesystem für Nachtsichtgeräte, wenn man extrem leicht (ohne Helm) unterwegs sein will." },
    { category: "🪖 Helme & Kopfbedeckung", name: "Dschungelhut (Boonie Hat)", stats: "Tarnung", isMeta: false, info: "<b>Info:</b> Bricht die menschliche Silhouette im dichten Dschungel auf." },
    { category: "🪖 Helme & Kopfbedeckung", name: "Baseballkappe / Beanie", stats: "Kosmetisch", isMeta: false, info: "<b>Info:</b> Reiner Drip für Operator." },

    // ==========================================
    // --- HEADSETS (Gehörschutz) ---
    // ==========================================
    { category: "🎧 Headsets (Gehörschutz)", name: "ComTac 4 Headset", stats: "Audio Meta", isMeta: true, info: "<b>Warum es Meta ist:</b> Das beste Headset im Spiel! Filtert laute Geräusche (eigene Schüsse, Wind) perfekt heraus und verstärkt feindliche Schritte massiv." },
    { category: "🎧 Headsets (Gehörschutz)", name: "Sordin Supreme Pro-X", stats: "Audio High", isMeta: true, info: "<b>Warum es Meta ist:</b> Sehr basslastiges Profil. Schritte auf Holz und Stein sind extrem gut und früh hörbar." },
    { category: "🎧 Headsets (Gehörschutz)", name: "ComTac 2", stats: "Audio Mid", isMeta: false, info: "<b>Info:</b> Gutes Mid-Tier Headset. Deutliches Upgrade zum Spielen ohne Gehörschutz." },
    { category: "🎧 Headsets (Gehörschutz)", name: "Earmor M32", stats: "Audio Mid", isMeta: false, info: "<b>Info:</b> Oft getragen von Söldnern. Solide Geräuschunterdrückung." },
    { category: "🎧 Headsets (Gehörschutz)", name: "Walker's Razor", stats: "Audio Mid", isMeta: false, info: "<b>Info:</b> Solides Einsteiger-Headset, manchmal etwas aggressiv bei Umgebungsgeräuschen." },
    { category: "🎧 Headsets (Gehörschutz)", name: "GSSh-01 Headset", stats: "Audio Low", isMeta: false, info: "<b>Info:</b> Das 'Rausche-Headset'. Verstärkt Schritte, aber deine eigenen Schüsse sprengen dir fast die Ohren weg. Nur im äußersten Notfall." },

    // ==========================================
    // --- FACE COVER & GLASSES ---
    // ==========================================
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Gasmaske (Gas Mask)", stats: "Strahlenschutz", isMeta: true, info: "<b>WICHTIG (0.4 UPDATE):</b> Absolut zwingend erforderlich, um Ground Zero zu betreten (in Kombination mit Rad-X Pillen)!" },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Sturmhaube (Balaclava)", stats: "Tarnung", isMeta: true, info: "<b>Warum sie Meta ist:</b> Verdeckt dein helles Gesicht im Dschungel. Ein absolutes Muss für PvP-Spieler, um nicht sofort gesehen zu werden!" },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Shemagh", stats: "Tarnung", isMeta: false, info: "<b>Info:</b> Klassisches Wüstentuch. Gute Alternative zur Balaclava." },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Schlauchschal (Neck Gaiter)", stats: "Tarnung", isMeta: false, info: "<b>Info:</b> Deckt den unteren Teil des Gesichts ab." },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Bandana", stats: "Tarnung", isMeta: false, info: "<b>Info:</b> Banditen-Style für den leichten Look." },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Taktische Schutzbrille", stats: "Kosmetisch", isMeta: false, info: "<b>Info:</b> Verhindert Glare (Blendung) in manchen Lichtsituationen." },
    { category: "🕶️ Masken & Brillen (Face Cover)", name: "Sportsonnenbrille / Aviators", stats: "Kosmetisch", isMeta: false, info: "<b>Info:</b> Aktuell rein optische Anpassungen für deinen Operator." },

    // ==========================================
    // --- BELTS (Taktische Gürtel) ---
    // ==========================================
    { category: "🪢 Taktische Gürtel (Belts)", name: "Operator Gürtel (Operator Belt)", stats: "2x3 Slots", isMeta: true, info: "<b>Warum er Meta ist:</b> Der größte Gürtel im Spiel! Erlaubt dir, 60-Schuss-Magazine, Meds und mehrere Granaten im absoluten Schnellzugriff zu haben." },
    { category: "🪢 Taktische Gürtel (Belts)", name: "Gefechtsgürtel (Battle Belt)", stats: "2x2 Slots", isMeta: true, info: "<b>Warum er gut ist:</b> Sehr guter Mid-Game Gürtel. Bietet Platz für Erste-Hilfe (SurKit) und Ersatzmagazine." },
    { category: "🪢 Taktische Gürtel (Belts)", name: "Taktischer Gürtel (Tactical Belt)", stats: "1x2 Slots", isMeta: false, info: "<b>Info:</b> Besser als der Standard-Dienstgürtel." },
    { category: "🪢 Taktische Gürtel (Belts)", name: "Dienstgürtel (Duty Belt)", stats: "1x2 Slots", isMeta: false, info: "<b>Info:</b> Start-Ausrüstung. Reicht gerade mal für eine Bandage und ein kleines Magazin." }
];
    
// ==========================================
// 5. BOSS DATENBANK & INTEL (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const bosses = {
    // --- STARTREGIONEN & WÄLDER ---
    "market_leader": { 
        name: "Krimineller Anführer (Criminal Leader)", 
        loc: "Startstadt (Marktplatz)", 
        loot: "Basis-Waffen, Munition, Start-Schlüssel", 
        tip: "Trägt meist eine Schrotflinte oder eine einfache AK. Er ist sehr aggressiv auf kurze Distanz, lässt sich aber leicht flankieren." 
    },
    "lumber_boss": { 
        name: "Sägewerk-Vorarbeiter (Lumber Yard Foreman)", 
        loc: "Lumber Yard (Hauptgebäude / Echo)", 
        loot: "SKS, AKM, Holzfäller-Schlüssel", 
        tip: "Versteckt sich oft im Sägewerk-Hauptgebäude oder bei den Holzstapeln. Hat meist 2-3 stark gepanzerte Wachen bei sich." 
    },
    "rebel_ybl": { 
        name: "Rebellen-Anführer (Rebel Leader)", 
        loc: "YBL-1 Bunker (Haupteingang oder Untergeschoss)", 
        loot: "AK-Plattformen, Level IIIA Rüstung, Bunker Keys", 
        tip: "Trägt oft ein rotes Barett. Nutze Granaten (Flashbangs/Frags), um ihn und seine Wachen aus den extrem engen Gängen des Bunkers zu treiben." 
    },

    // --- MID-GAME POIs ---
    "hunter_commander": { 
        name: "Feindlicher Kommandant (Hostile Commander)", 
        loc: "Hunter's Paradise (Schießstand oder Bar)", 
        loot: "M4A1, M855 Munition, Level III Rüstung", 
        tip: "Achtung: Er und seine Wachen nutzen oft westliche (amerikanische) Waffen. Er droppt sehr oft wertvolle Schlüssel für die angrenzende Waffenkammer." 
    },
    "malo_blue": { 
        name: "Grin / Malo Luangrath (Blue Lagoon Boss)", 
        loc: "Blue Lagoon (Resort, Kahok Werkstatt oder kleine Insel)", 
        loot: "Level III+ Rüstung, 1911 C Pistole (Quest-Item)", 
        tip: "<b>0.4 ROTATION:</b> Spawnt jetzt an 3 verschiedenen Orten! Nutze AP-Munition für seine Level III+ Rüstung. <b>Wichtig:</b> Vergiss nicht, seine '1911 C Pistole' manuell aus seinem Holster zu looten (Wichtig für die Quest 'Like a Boss')!" 
    },
    "banpa_leader": { 
        name: "Naga / Ältester (Elder Leader)", 
        loc: "Ban Pa (Ältestenhaus oder verstecktes Dock)", 
        loot: "Type 51 Pistole, AK-Varianten, Holzstatuen", 
        tip: "Trägt ein auffälliges orangefarbenes Hemd. Du brauchst ihn für die 'Warm Welcome' Quest. Er patrouilliert meist beim großen Ältestenhaus auf den Holzstelzen oder unten am geheimen Dock." 
    },

    // --- END-GAME & HIGH DANGER ---
    "fort_commander": { 
        name: "General Pa (Fort Commander)", 
        loc: "Fort Narith (Hauptquartier)", 
        loot: "Level III++ Rüstung (Defender-2), High-End Sturmgewehre, AP-Munition", 
        tip: "Einer der am schwersten gepanzerten Gegner im gesamten Spiel. Ziele unbedingt auf den Kopf (Gesicht) oder die Beine, wenn du keine reine AP-Munition (wie M995) geladen hast!" 
    },
    "midnight_laf": { 
        name: "LAF Kommandant (LAF Commander)", 
        loc: "Midnight Sapphire (Dach oder obere Stockwerke)", 
        loot: "Signatur-Waffe, Level III+ Rüstung, Hotel Office Key", 
        tip: "Extrem schwer bewacht! Wenn du ihn das erste Mal tötest, erhältst du Zugang zur 'M700 Side Task'. Sein Schlüssel öffnet den wertvollen Loot-Raum auf der 2. Etage des Hotels." 
    },
    "tiger_bay_unlra": { 
        name: "UNLRA Offizier (UNLRA Officer)", 
        loc: "Tiger Bay (Flüchtlingslager / UNLRA HQ)", 
        loot: "High-Tier Meds, seltene Intel-Dokumente", 
        tip: "Das UNLRA-Lager ist eine absolute Todeszone. Räume erst die Umgebung per Scharfschütze, bevor du ihn pushst. Droppt den blauen UNLRA-Ordner für Handshake." 
    },
    "tiger_bay_pier": { 
        name: "Pier Boss (Tiger Bay)", 
        loc: "Tiger Bay (Am Ende des Piers)", 
        loot: "Sniper-Gewehre, Zielfernrohre, Schmuck", 
        tip: "Der extrem lange Weg über den Holzpier bietet null Deckung. Nutze Scharfschützengewehre, um ihn und seine Wachen aus sicherer Distanz vom Ufer aus auszuschalten." 
    },
    "airfield_boss": { 
        name: "Airfield Commander (Ground Zero)", 
        loc: "Pha Lang Airfield (Hangar, Marktplatz oder Zentralgebäude)", 
        loot: "High-End Gear, Spezial-Schlüssel", 
        tip: "<b>0.4 ROTATION:</b> Hat jetzt 3 verschiedene Spawn-Punkte (Haupt-Hangar, Marktplatz oder Zentralgebäude)! Extrem wichtig für die 'Departure' Mission. Er wird von 2 schwer gepanzerten Elitesoldaten eskortiert." 
    },

    // --- ROAMING BOSSES (Wechselnde Spawns) ---
    "viper": { 
        name: "Viper (Jungle Camps)", 
        loc: "Dschungel (Wechselnde kleine Camps)", 
        loot: "Viper Chest Rig, modifizierte SMGs", 
        tip: "Ein extrem mobiler Boss, der sich oft in den dicht bewachsenen und schwer einsehbaren Dschungel-Camps versteckt. Nahkampf-Waffen (Shotguns/SMGs) sind hier Pflicht." 
    },
    "bloodhound": { 
        name: "Bloodhound (Military Checkpoints)", 
        loc: "Militär-Checkpoints (z.B. nördlich von YBL-1)", 
        loot: "Taktische Rucksäcke, schwere Schutzwesten", 
        tip: "Bewacht oft die Übergänge zwischen den Sektoren. Agiert extrem taktisch und nutzt oft weitreichende Flankierungsmanöver mit seinen Wachen. Niemals still stehen bleiben!" 
    },
    "golden_boy": { 
        name: "Golden Boy (Midnight Sapphire)", 
        loc: "Midnight Sapphire (Villen-Viertel)", 
        loot: "Goldene Waffen, extrem viel Bargeld, Diamanten", 
        tip: "Der Name ist Programm: Er droppt den teuersten Loot im Spiel. Wird jedoch von den gefährlichsten Elite-Söldnern verteidigt. Perfekt für den 'Millionärs-Run'." 
    }
};
    
// ==========================================
// 6. AMMO MATRIX & BALLISTIK (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
// Die Penetrationswerte (pen) sind exakt auf die Rüstungsklassen abgestimmt:
// 2.0 = NIJ IIIA | 3.0 = NIJ III | 3.5 = NIJ III+ | 4.0 = NIJ III++

const armorClasses = [
    { label: "NIJ IIIA", threshold: 2.0 },
    { label: "NIJ III", threshold: 3.0 },
    { label: "NIJ III+", threshold: 3.5 },
    { label: "NIJ III++", threshold: 4.0 }
];

const ammoMatrixData = [
    // --- 5.56x45mm NATO (M4A1, KS-1, DDM4, M16A1, CQ-A1) ---
    { name: "5.56 M995 Panzerbrechend (M995 AP)", cal: "5.56x45mm", pen: 4.5, dmg: 40 },
    { name: "5.56 SSA AP Hochgeschwindigkeits-AP (SSA AP)", cal: "5.56x45mm", pen: 4.2, dmg: 38 },
    { name: "5.56 M855A1 Verbesserte Pen. (M855A1)", cal: "5.56x45mm", pen: 3.5, dmg: 50 },
    { name: "5.56 M856A1 Leuchtspur AP (M856A1 Tracer)", cal: "5.56x45mm", pen: 3.2, dmg: 51 },
    { name: "5.56 M855 Standard (M855 Ball)", cal: "5.56x45mm", pen: 3.0, dmg: 52 },
    { name: "5.56 M856 Leuchtspur (M856 Tracer)", cal: "5.56x45mm", pen: 2.8, dmg: 54 },
    { name: "5.56 M193 Zivil (M193)", cal: "5.56x45mm", pen: 2.5, dmg: 58 },
    { name: "5.56 MK255 Mod 0 RRLP (MK255 Mod 0)", cal: "5.56x45mm", pen: 1.5, dmg: 65 },
    { name: "5.56 HP BT Hohlspitz (HP BT)", cal: "5.56x45mm", pen: 1.0, dmg: 75 },
    { name: "5.56 Warmageddon Fleischschaden (Warmageddon)", cal: "5.56x45mm", pen: 0.5, dmg: 85 },

    // --- 5.45x39mm (AK-74, AK-12, AK-105, AKS-74U) ---
    { name: "5.45 7N39 Igolnik / PPBS (7N39)", cal: "5.45x39mm", pen: 4.5, dmg: 37 },
    { name: "5.45 BS Panzerbrechend (BS)", cal: "5.45x39mm", pen: 4.0, dmg: 40 },
    { name: "5.45 BP Gehärtet (BP)", cal: "5.45x39mm", pen: 3.5, dmg: 45 },
    { name: "5.45 BT Leuchtspur (BT Tracer)", cal: "5.45x39mm", pen: 3.5, dmg: 44 },
    { name: "5.45 PP Verbessert (PP)", cal: "5.45x39mm", pen: 3.0, dmg: 48 },
    { name: "5.45 PS Standard (PS)", cal: "5.45x39mm", pen: 2.5, dmg: 50 },
    { name: "5.45 FMJ Vollmantel (FMJ)", cal: "5.45x39mm", pen: 2.0, dmg: 54 },
    { name: "5.45 PRS Übungsmunition (PRS)", cal: "5.45x39mm", pen: 1.5, dmg: 60 },
    { name: "5.45 US Unterschall (US Subsonic)", cal: "5.45x39mm", pen: 1.5, dmg: 65 },
    { name: "5.45 SP Teilmantel (SP)", cal: "5.45x39mm", pen: 1.0, dmg: 68 },
    { name: "5.45 HP Hohlspitz (HP)", cal: "5.45x39mm", pen: 0.5, dmg: 75 },

    // --- 7.62x39mm (AKM, SKS, SA vz. 58, Type 56) ---
    { name: "7.62x39 MAI AP High-End AP (MAI AP)", cal: "7.62x39mm", pen: 4.5, dmg: 46 },
    { name: "7.62x39 BP Panzerbrechend (BP)", cal: "7.62x39mm", pen: 3.5, dmg: 50 },
    { name: "7.62x39 PS Standard (PS)", cal: "7.62x39mm", pen: 3.0, dmg: 55 },
    { name: "7.62x39 T45M Leuchtspur (T45M Tracer)", cal: "7.62x39mm", pen: 2.5, dmg: 57 },
    { name: "7.62x39 FMJ Vollmantel (FMJ)", cal: "7.62x39mm", pen: 2.5, dmg: 60 },
    { name: "7.62x39 US Unterschall (US Subsonic)", cal: "7.62x39mm", pen: 2.0, dmg: 58 },
    { name: "7.62x39 SP Teilmantel (SP)", cal: "7.62x39mm", pen: 1.5, dmg: 70 },
    { name: "7.62x39 HP Hohlspitz (HP)", cal: "7.62x39mm", pen: 0.5, dmg: 80 },

    // --- 7.62x51mm NATO / .308 (M14, M1A, M700, AK-308) ---
    { name: "7.62 M993 Schweres AP (M993 AP)", cal: "7.62x51mm", pen: 5.0, dmg: 65 },
    { name: "7.62 M61 Panzerbrechend (M61)", cal: "7.62x51mm", pen: 4.5, dmg: 70 },
    { name: "7.62 M62 Leuchtspur (M62 Tracer)", cal: "7.62x51mm", pen: 3.8, dmg: 75 },
    { name: "7.62 M80 Standard (M80 Ball)", cal: "7.62x51mm", pen: 3.2, dmg: 80 },
    { name: "7.62 BCP FMJ Zivil (BCP FMJ)", cal: "7.62x51mm", pen: 2.8, dmg: 85 },
    { name: "7.62 TCW SP Jagdmunition (TCW SP)", cal: "7.62x51mm", pen: 1.5, dmg: 100 },
    { name: "7.62 Ultra Nosler Fleischschaden (Ultra Nosler)", cal: "7.62x51mm", pen: 1.0, dmg: 110 },

    // --- 7.62x54mmR (SVD Dragunov, Mosin-Nagant) ---
    { name: "7.62x54R BS Panzerbrechend (BS)", cal: "7.64x54mmR", pen: 5.0, dmg: 72 },
    { name: "7.62x54R SNB Spezial-AP (SNB)", cal: "7.64x54mmR", pen: 4.5, dmg: 75 },
    { name: "7.62x54R 7N1 Sniper (7N1 Sniper)", cal: "7.64x54mmR", pen: 4.0, dmg: 82 },
    { name: "7.62x54R LPS Standard (LPS Gzh)", cal: "7.64x54mmR", pen: 3.5, dmg: 80 },
    { name: "7.62x54R T-46M Leuchtspur (T-46M)", cal: "7.64x54mmR", pen: 3.0, dmg: 82 },
    { name: "7.62x54R FMJ Vollmantel (FMJ)", cal: "7.64x54mmR", pen: 2.5, dmg: 84 },
    { name: "7.62x54R SP Teilmantel (SP)", cal: "7.64x54mmR", pen: 1.5, dmg: 95 },

    // --- .300 Blackout (SIG MCX) [0.4 NEU] ---
    { name: ".300 BLK AP Panzerbrechend (AP)", cal: ".300 BLK", pen: 3.8, dmg: 55 },
    { name: ".300 BLK CBJ Militär (CBJ)", cal: ".300 BLK", pen: 3.2, dmg: 60 },
    { name: ".300 BLK M62 Leuchtspur (M62 Tracer)", cal: ".300 BLK", pen: 3.0, dmg: 58 },
    { name: ".300 BLK BCP FMJ Zivil (BCP FMJ)", cal: ".300 BLK", pen: 2.5, dmg: 62 },
    { name: ".300 BLK Whisper Unterschall (Whisper)", cal: ".300 BLK", pen: 2.0, dmg: 65 },
    { name: ".300 BLK V-MAX Fleischschaden (V-MAX)", cal: ".300 BLK", pen: 0.5, dmg: 85 },

    // --- 4.6x30mm (MP7A1, MP7A2) [0.4 NEU] ---
    { name: "4.6x30 AP SX Rüstungsbrecher (AP SX)", cal: "4.6x30mm", pen: 3.8, dmg: 35 },
    { name: "4.6x30 FMJ SX Vollmantel (FMJ SX)", cal: "4.6x30mm", pen: 3.0, dmg: 43 },
    { name: "4.6x30 Subsonic SX Unterschall (Subsonic)", cal: "4.6x30mm", pen: 2.0, dmg: 45 },
    { name: "4.6x30 Action SX Zivil (Action SX)", cal: "4.6x30mm", pen: 1.0, dmg: 50 },

    // --- 9x19mm Parabellum (Glock, MP5, Alien, Vityaz) ---
    { name: "9mm 7N31 Panzerbrechend (7N31 AP)", cal: "9x19mm", pen: 3.0, dmg: 45 },
    { name: "9mm AP 6.3 Militär (AP 6.3)", cal: "9x19mm", pen: 2.5, dmg: 52 },
    { name: "9mm PST Gzh Standard (PST Gzh)", cal: "9x19mm", pen: 1.8, dmg: 55 },
    { name: "9mm PSO Gzh Übung (PSO Gzh)", cal: "9x19mm", pen: 1.0, dmg: 60 },
    { name: "9mm Luger CCI Hohlspitz (Luger CCI)", cal: "9x19mm", pen: 0.8, dmg: 70 },
    { name: "9mm QuakeMaker Expansion (QuakeMaker)", cal: "9x19mm", pen: 0.5, dmg: 85 },
    { name: "9mm RIP Beinschredder (RIP)", cal: "9x19mm", pen: 0.2, dmg: 100 },

    // --- .45 ACP (Colt 1911, CCC) ---
    { name: ".45 ACP AP Panzerbrechend (AP)", cal: ".45 ACP", pen: 2.5, dmg: 65 },
    { name: ".45 ACP Match Vollmantel (Match FMJ)", cal: ".45 ACP", pen: 1.5, dmg: 72 },
    { name: ".45 ACP Lasermatch Leuchtspur (Lasermatch)", cal: ".45 ACP", pen: 1.0, dmg: 80 },
    { name: ".45 ACP RIP Fleischschaden (RIP)", cal: ".45 ACP", pen: 0.2, dmg: 120 },

    // --- Russische Pistolen (9x18 Makarov, 7.62x25 Tokarev) ---
    { name: "7.62x25 Tokarev PST (PST Gzh)", cal: "7.62x25mm", pen: 2.0, dmg: 48 },
    { name: "7.62x25 Tokarev PT Gzh (PT Gzh)", cal: "7.62x25mm", pen: 1.5, dmg: 55 },
    { name: "7.62x25 Tokarev LRNPC Hohlspitz (LRNPC)", cal: "7.62x25mm", pen: 0.5, dmg: 65 },
    { name: "9x18 Makarov PMM Verbessert (PMM)", cal: "9x18mm", pen: 1.8, dmg: 50 },
    { name: "9x18 Makarov PST Standard (PST)", cal: "9x18mm", pen: 1.2, dmg: 55 },
    { name: "9x18 Makarov BZT Leuchtspur (BZT)", cal: "9x18mm", pen: 1.0, dmg: 58 },
    { name: "9x18 Makarov SP8 Hohlspitz (SP8)", cal: "9x18mm", pen: 0.8, dmg: 68 },
    { name: "9x18 Makarov SP7 Fleischschaden (SP7)", cal: "9x18mm", pen: 0.5, dmg: 75 },

    // --- .32 ACP (VZ-61 Skorpion) ---
    { name: ".32 ACP FMJ Vollmantel (.32 FMJ)", cal: ".32 ACP", pen: 1.0, dmg: 40 },
    { name: ".32 ACP JHP Hohlspitz (.32 JHP)", cal: ".32 ACP", pen: 0.5, dmg: 50 },

    // --- 12 Gauge (Shotguns: M870, Mossberg 590) ---
    { name: "12G AP-20 Flintenlaufgeschoss (AP-20 Slug)", cal: "12 Gauge", pen: 3.0, dmg: 160 },
    { name: "12G Copper Sabot Slug (Copper Sabot)", cal: "12 Gauge", pen: 2.5, dmg: 140 },
    { name: "12G Grizzly Slug Massivgeschoss (Grizzly 40)", cal: "12 Gauge", pen: 1.8, dmg: 190 },
    { name: "12G Flechette Pfeilmunition (Flechette)", cal: "12 Gauge", pen: 1.5, dmg: 120 },
    { name: "12G RIP Slug Beinschredder (RIP Slug)", cal: "12 Gauge", pen: 0.5, dmg: 260 },
    { name: "12G 8.5mm Magnum Schrot (8.5mm Magnum)", cal: "12 Gauge", pen: 0.5, dmg: 400 },
    { name: "12G 00 Buckshot Schrot (00 Buck)", cal: "12 Gauge", pen: 0.5, dmg: 280 },
    { name: "12G 7mm Buckshot Schrot (7mm Buck)", cal: "12 Gauge", pen: 0.2, dmg: 320 }
];
    
// ==========================================
// 7. SCHLÜSSEL & RÄUME (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const allKeys = [
    // ==========================================
    // --- NAM THAVEN (Mithras Startstadt) ---
    // ==========================================
    { group: "🔰 Startregionen (Mithras)", name: "Arztpraxis-Schlüssel (Nam Thaven Doctor's Office Key)", loc: "Nam Thaven", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
    { group: "🔰 Startregionen (Mithras)", name: "Restaurant-Lager (Nam Thaven Restaurant Storage Key)", loc: "Nam Thaven", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
    { group: "🔰 Startregionen (Mithras)", name: "Markt-Büro (Nam Thaven Marketplace Office Key)", loc: "Nam Thaven", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
    { group: "🔰 Startregionen (Mithras)", name: "Markt-Besenkammer (Nam Thaven Marketplace Broom Closet Key)", loc: "Nam Thaven", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
    { group: "🔰 Startregionen (Mithras)", name: "Markt-Lagerraum (Nam Thaven Marketplace Storeroom Key)", loc: "Nam Thaven", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
    { group: "🔰 Startregionen (Mithras)", name: "Motelzimmer (Nam Thaven Motel Room Key)", loc: "Nam Thaven", effect: "Öffnet ein Motelzimmer am Stadtrand.", loot: "Kleidung, Wertsachen" },
    { group: "🔰 Startregionen (Mithras)", name: "UNLRA-Büro (Nam Thaven UNLRA Office Key)", loc: "Nam Thaven", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
    { group: "🔰 Startregionen (Mithras)", name: "Sägewerk Wartungsraum (Nam Thaven Lumberyard Maintenance Key)", loc: "Nam Thaven", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
    { group: "🔰 Startregionen (Mithras)", name: "Rathaus Finanzabteilung (Nam Thaven Town Hall Finance Key)", loc: "Nam Thaven", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

    // ==========================================
    // --- KIU VONGSA (Crimson Startstadt) ---
    // ==========================================
    { group: "🔰 Startregionen (Crimson)", name: "Arztpraxis-Schlüssel (Kiu Vongsa Doctor's Office Key)", loc: "Kiu Vongsa", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
    { group: "🔰 Startregionen (Crimson)", name: "Restaurant-Lager (Kiu Vongsa Restaurant Storage Key)", loc: "Kiu Vongsa", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
    { group: "🔰 Startregionen (Crimson)", name: "Markt-Büro (Kiu Vongsa Marketplace Office Key)", loc: "Kiu Vongsa", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
    { group: "🔰 Startregionen (Crimson)", name: "Markt-Besenkammer (Kiu Vongsa Marketplace Broom Closet Key)", loc: "Kiu Vongsa", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
    { group: "🔰 Startregionen (Crimson)", name: "Markt-Lagerraum (Kiu Vongsa Marketplace Storeroom Key)", loc: "Kiu Vongsa", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
    { group: "🔰 Startregionen (Crimson)", name: "Motelzimmer (Kiu Vongsa Motel Room Key)", loc: "Kiu Vongsa", effect: "Öffnet ein Motelzimmer.", loot: "Kleidung, Wertsachen" },
    { group: "🔰 Startregionen (Crimson)", name: "UNLRA-Büro (Kiu Vongsa UNLRA Office Key)", loc: "Kiu Vongsa", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
    { group: "🔰 Startregionen (Crimson)", name: "Sägewerk Wartungsraum (Kiu Vongsa Lumberyard Maintenance Key)", loc: "Kiu Vongsa", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
    { group: "🔰 Startregionen (Crimson)", name: "Bürgermeister-Villa Zimmer (Kiu Vongsa Mayor's Mansion Key)", loc: "Kiu Vongsa", effect: "Öffnet ein Zimmer in der Bürgermeister-Villa.", loot: "Wertsachen, Safe" },
    { group: "🔰 Startregionen (Crimson)", name: "Rathaus Finanzabteilung (Kiu Vongsa Town Hall Finance Key)", loc: "Kiu Vongsa", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

    // ==========================================
    // --- PHA LANG (Lamang LRI Startstadt) ---
    // ==========================================
    { group: "🔰 Startregionen (Lamang LRI)", name: "Arztpraxis-Schlüssel (Pha Lang Doctor's Office Key)", loc: "Pha Lang", effect: "Öffnet das Büro des Arztes.", loot: "Medizinische Vorräte, Task-Intel" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Restaurant-Lager (Pha Lang Restaurant Storage Key)", loc: "Pha Lang", effect: "Öffnet das Lager des Restaurants.", loot: "Provisions, Task-Items" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Markt-Büro (Pha Lang Marketplace Office Key)", loc: "Pha Lang", effect: "Öffnet das Marktbüro.", loot: "Bargeld, Intel" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Markt-Besenkammer (Pha Lang Marketplace Broom Closet Key)", loc: "Pha Lang", effect: "Öffnet die Besenkammer am Markt.", loot: "Werkzeuge, Schrott" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Markt-Lagerraum (Pha Lang Marketplace Storeroom Key)", loc: "Pha Lang", effect: "Öffnet den Lagerraum des Marktes.", loot: "Materialien, Rucksäcke" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Motelzimmer (Pha Lang Motel Room Key)", loc: "Pha Lang", effect: "Öffnet ein Motelzimmer.", loot: "Kleidung, Wertsachen" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "UNLRA-Büro (Pha Lang UNLRA Office Key)", loc: "Pha Lang", effect: "Öffnet das lokale UNLRA Büro.", loot: "Medizin, Dokumente" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Sägewerk Wartungsraum (Pha Lang Lumberyard Maintenance Key)", loc: "Pha Lang", effect: "Öffnet den städtischen Wartungsraum.", loot: "Werkzeuge" },
    { group: "🔰 Startregionen (Lamang LRI)", name: "Rathaus Finanzabteilung (Pha Lang Town Hall Finance Key)", loc: "Pha Lang", effect: "Keycard für das Rathaus.", loot: "Bargeld, Tresor" },

    // ==========================================
    // --- HUNTER'S PARADISE ---
    // ==========================================
    { group: "🎯 Hunter's Paradise", name: "HP Waffenkammer (Hunter's Paradise Weapon Storage Key)", loc: "Hunter's Paradise", effect: "Öffnet die Waffenkammer.", loot: "High-Tier Waffen, Task-Container" },
    { group: "🎯 Hunter's Paradise", name: "HP Motel 102 (Hunter's Paradise Motel Room 102 Key)", loc: "Hunter's Paradise", effect: "Öffnet Zimmer 102 im Motel.", loot: "Task-Intel (True Grit)" },
    { group: "🎯 Hunter's Paradise", name: "HP Motel 101 (Hunter's Paradise Motel Room 101 Key)", loc: "Hunter's Paradise", effect: "Öffnet Zimmer 101 im Motel.", loot: "Low-Tier Waffen, Munition" },
    { group: "🎯 Hunter's Paradise", name: "HP Improvisierte Waffenkammer (Hunter's Paradise Improvised Armory Key)", loc: "Hunter's Paradise", effect: "Öffnet eine umfunktionierte Waffenkammer im Motel.", loot: "Waffen, Aufsätze" },
    { group: "🎯 Hunter's Paradise", name: "HP Schießstand-Lager (Hunter's Paradise Shooting Lines Storage Key)", loc: "Hunter's Paradise", effect: "Öffnet das Lager an den Schießbahnen.", loot: "Munition, Gehörschutz" },
    { group: "🎯 Hunter's Paradise", name: "HP Bunker-Schlüssel (Hunter's Paradise Bunker Key)", loc: "Hunter's Paradise", effect: "Öffnet den kleinen Bunker-Bereich.", loot: "Militärbedarf, Waffen" },

    // ==========================================
    // --- SAWMILL ---
    // ==========================================
    { group: "🌲 Sägewerk (Lumber Yard)", name: "Vorarbeiter-Büro (Sawmill Office Key)", loc: "Sawmill", effect: "Öffnet das Hauptbüro.", loot: "Task-Dokumente, Safe" },
    { group: "🌲 Sägewerk (Lumber Yard)", name: "Sägewerk Büro-Lager (Sawmill Office Storage Room Key)", loc: "Sawmill", effect: "Öffnet den Lagerraum am Büro.", loot: "Task-Container (30kg)" },
    { group: "🌲 Sägewerk (Lumber Yard)", name: "Sägewerk Lagerschuppen (Sawmill Storage Shed Key)", loc: "Sawmill", effect: "Öffnet den Geräteschuppen.", loot: "Werkzeuge, Materialien" },
    { group: "🌲 Sägewerk (Lumber Yard)", name: "Sägewerk Toiletten (Sawmill Toilet Key)", loc: "Sawmill", effect: "Öffnet die sanitären Anlagen.", loot: "Geringe Wertsachen, Medizin" },

    // ==========================================
    // --- BAN PA ---
    // ==========================================
    { group: "🎣 Ban Pa (Fischerdorf)", name: "BP Fischerhütte (Ban Pa Fishing Hut Key)", loc: "Ban Pa", effect: "Öffnet eine verschlossene Hütte am Wasser.", loot: "Task-Intel, Schrott" },
    { group: "🎣 Ban Pa (Fischerdorf)", name: "Haus des Ältesten (Ban Pa Elder's House Key)", loc: "Ban Pa", effect: "Öffnet das große Haus des Dorfältesten.", loot: "Statuen, Task-Item" },
    { group: "🎣 Ban Pa (Fischerdorf)", name: "Zimmer des Ältesten (Ban Pa Elder's Room Key)", loc: "Ban Pa", effect: "Öffnet das Schlafzimmer des Ältesten.", loot: "Wertsachen, Tresor" },
    { group: "🎣 Ban Pa (Fischerdorf)", name: "BP Lagerhaus (Ban Pa Warehouse Key)", loc: "Ban Pa", effect: "Öffnet das Lagergebäude am Rand.", loot: "Schmuggelware, Waffen" },

    // ==========================================
    // --- YBL-1 BUNKER ---
    // ==========================================
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Schlafzimmer (YBL-1 Bedroom Key)", loc: "YBL-1 Bunker", effect: "Öffnet die Schlafräume.", loot: "Kleidung, Wertsachen" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Flur D Lager (YBL-1 Corridor D Storage Room Key)", loc: "YBL-1 Bunker", effect: "Öffnet das Lager in Sektor D.", loot: "Munition, Rucksäcke" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Wartungstür (YBL-1 Maintenance Door Key)", loc: "YBL-1 Bunker", effect: "Öffnet einen Wartungsschacht.", loot: "Werkzeuge, Elektronik" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Waffenkammer (YBL-1 Weapon Storage Key)", loc: "YBL-1 Bunker", effect: "Öffnet die Bunker-Waffenkammer.", loot: "Militär-Waffen, Aufsätze" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Büro 02 (YBL-1 Office 02 Key)", loc: "YBL-1 Bunker", effect: "Öffnet Büro 02.", loot: "Task-Intel (The Negotiator)" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Büro 01 (YBL-1 Office Key 01)", loc: "YBL-1 Bunker", effect: "Öffnet Büro 01.", loot: "Dokumente, Intel" },
    { group: "☢️ YBL-1 Bunker", name: "YBL-1 Generatorraum (YBL-1 Generator Room Key)", loc: "YBL-1 Bunker", effect: "Öffnet den Hauptgeneratorraum.", loot: "Task-Zugang, Werkzeug" },

    // ==========================================
    // --- PHA LANG AIRFIELD ---
    // ==========================================
    { group: "✈️ Ground Zero & Airfield", name: "Hangar 03 Schlüssel (Hangar 03 Key)", loc: "Pha Lang Airfield", effect: "Öffnet Hangar 3.", loot: "Waffen-Teile, Militär-Kisten" },
    { group: "✈️ Ground Zero & Airfield", name: "Airfield Lagerbüro (Pha Lang Airfield Storage Office Key)", loc: "Pha Lang Airfield", effect: "Öffnet das Büro im Lagerbereich.", loot: "Intel, Safe" },
    { group: "✈️ Ground Zero & Airfield", name: "Airfield Besprechungsraum (Pha Lang Airfield Meeting Room Key)", loc: "Pha Lang Airfield", effect: "Öffnet den Meeting-Raum.", loot: "Militärische Pläne, Akten" },
    { group: "✈️ Ground Zero & Airfield", name: "Airport Lagerschuppen (Airport Storage Shed Key)", loc: "Pha Lang Airfield", effect: "Öffnet den Schuppen am Flugfeld.", loot: "Werkzeuge, Treibstoff" },

    // ==========================================
    // --- BLUE LAGOON ---
    // ==========================================
    { group: "🌊 Blaue Lagune (Blue Lagoon)", name: "Malo's Hütte (Blue Lagoon Shack Key)", loc: "Blue Lagoon", effect: "Öffnet die Hütte über dem Wasser.", loot: "Waffen, Task-Items" },
    { group: "🌊 Blaue Lagune (Blue Lagoon)", name: "Lagunen-Bürolager (Blue Lagoon Office Storage Key)", loc: "Blue Lagoon", effect: "Öffnet das Verwaltungsbüro-Lager.", loot: "Intel, Wertsachen" },
    { group: "🌊 Blaue Lagune (Blue Lagoon)", name: "BL Restaurant-Lager (Blue Lagoon Restaurant Storage Key)", loc: "Blue Lagoon", effect: "Öffnet den Storage Room im Restaurant.", loot: "Task-Intel (One Man's Trash)" },

    // ==========================================
    // --- FORT NARITH ---
    // ==========================================
    { group: "🪖 Fort Narith (Basis)", name: "FN HQ Rezeption Lager (Fort Narith HQ Reception Storage Key)", loc: "Fort Narith", effect: "Öffnet das Lager hinter der HQ-Rezeption.", loot: "Bargeld, Elektronik" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Tower-Schlüssel (Fort Narith Air Traffic Control Tower Key)", loc: "Fort Narith", effect: "Öffnet den ATC-Tower.", loot: "Militär-Funk, Waffen" },
    { group: "🪖 Fort Narith (Basis)", name: "FN HQ Archiv (Fort Narith HQ Archive Key)", loc: "Fort Narith", effect: "Öffnet das Archiv im Hauptquartier.", loot: "Intel, Geheimdokumente" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke A102 (A102 Key)", loc: "Fort Narith", effect: "Öffnet Raum A102.", loot: "Waffen, Westen" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke A103 (A103 Key)", loc: "Fort Narith", effect: "Öffnet Raum A103.", loot: "Munition, Kleidung" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke A208 (A208 Key)", loc: "Fort Narith", effect: "Öffnet Raum A208.", loot: "Wertsachen, Helme" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke A210 (A210 Key)", loc: "Fort Narith", effect: "Öffnet Raum A210.", loot: "Waffen-Koffer" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke C101 (C101 Key)", loc: "Fort Narith", effect: "Öffnet Raum C101.", loot: "Task-Items, High-Tier Loot" },
    { group: "🪖 Fort Narith (Basis)", name: "Baracke C108 (C108 Key)", loc: "Fort Narith", effect: "Öffnet Raum C108.", loot: "Militär-Ausrüstung" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Schrottplatz-Schuppen (Fort Narith Dumping Ground Storage Shed Key)", loc: "Fort Narith", effect: "Öffnet den Schuppen am Schrottplatz.", loot: "Werkzeuge" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Garagenbüro (Fort Narith Garage Office Key)", loc: "Fort Narith", effect: "Öffnet das Büro in der Fahrzeughalle.", loot: "Fahrzeugteile, Safe" },
    { group: "🪖 Fort Narith (Basis)", name: "FN HQ Funkraum (Forth Narith HQ Comms Room Key)", loc: "Fort Narith", effect: "Öffnet den Kommunikationsraum.", loot: "Elektronik, Task-Infos" },
    { group: "🪖 Fort Narith (Basis)", name: "FN HQ Lagerraum (Fort Narith HQ Storage Room Key)", loc: "Fort Narith", effect: "Öffnet den allgemeinen Lagerraum im HQ.", loot: "Rucksäcke, Helme" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Lazarett Intensivstation (Fort Narith Infirmary ICU Key)", loc: "Fort Narith", effect: "Öffnet die ICU.", loot: "High-Tier Medizin (Stims, Surkits)" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Randgebiet Waffenkammer (Fort Narith Outskirts Improvised Armory Key)", loc: "Fort Narith", effect: "Öffnet ein improvisiertes Waffenlager.", loot: "Waffen, Granaten" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Motel Waffenkammer (Fort Narith Motel Improvised Armory Key)", loc: "Fort Narith", effect: "Öffnet eine Waffenkammer im Motel-Bereich.", loot: "Militär-Waffen" },
    { group: "🪖 Fort Narith (Basis)", name: "FN Schießstand-Büro (Fort Narith Shooting Range Office Key)", loc: "Fort Narith", effect: "Öffnet das Büro am Schießstand.", loot: "Munition, Aufsätze" },
    { group: "🪖 Fort Narith (Basis)", name: "Turncoats Haus (Turncoat's House Key)", loc: "Fort Narith / Umland", effect: "Öffnet das Versteck des Turncoats.", loot: "Spezifischer Loot, Intel" },

    // ==========================================
    // --- MIDNIGHT SAPPHIRE ---
    // ==========================================
    { group: "💎 Midnight Sapphire (Hotel)", name: "Golfclub-Lager (Golf Club Storage Key)", loc: "Midnight Sapphire", effect: "Öffnet das Lagerhäuschen am Golfplatz.", loot: "Sporttaschen, Wertsachen" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Garage Marta Monica (Villa Marta Monica Garage Key)", loc: "Midnight Sapphire", effect: "Öffnet die Garage der östlichen Villa.", loot: "Werkzeug, Safe" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Hotel-Büro (Midnight Sapphire Hotel Office Key)", loc: "Midnight Sapphire", effect: "Öffnet das Management-Büro.", loot: "Safe, Bargeld, Intel" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Hotel Versorgungsraum (Hotel Supply Closet Key Card)", loc: "Midnight Sapphire", effect: "Gewährt Zugang zum Supply Closet (Task).", loot: "Zugang CCTV-Raum" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Villa Katherine (Villa Katherine Key)", loc: "Midnight Sapphire", effect: "Öffnet eine weitere Luxusvilla.", loot: "Geld, Schmuck, Safe" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Villa Anna Jana (Villa Anna Jana Key)", loc: "Midnight Sapphire", effect: "Öffnet die mittlere Villa.", loot: "Task-Dokumente, Safe" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Villa Luisa (Villa Luisa Key)", loc: "Midnight Sapphire", effect: "Öffnet die Villa Luisa.", loot: "High-Tier Wertsachen" },
    { group: "💎 Midnight Sapphire (Hotel)", name: "Garage Elena (Villa Elena Garage Key)", loc: "Midnight Sapphire", effect: "Öffnet die Garage von Villa Elena.", loot: "Waffen-Koffer, Schrott" },

    // ==========================================
    // --- TIGER BAY ---
    // ==========================================
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Zementfabrik-Lager (Cement Factory Storage Key)", loc: "Tiger Bay", effect: "Öffnet das Lager in der Fabrik.", loot: "Baumaterial, Werkzeuge" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "TB Zentrale Waffenkammer (Tiger Bay Central Armory Key)", loc: "Tiger Bay", effect: "Öffnet die Haupt-Waffenkammer.", loot: "Massive Waffen- & Munitionsmengen" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Banditen-Ausguck (Improvised Bandit Lookout Key)", loc: "Tiger Bay", effect: "Öffnet einen verschlossenen Sniper-Spot.", loot: "Scharfschützengewehre, Optiken" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Toto Baumarkt-Lager (Toto Hardware Storage Key)", loc: "Tiger Bay", effect: "Öffnet das Lager des Baumarkts.", loot: "Werkzeuge (Toolsets)" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Handelsdepot-Büro (Tiger Bay Trade Depot Office Key)", loc: "Tiger Bay", effect: "Öffnet das Depotbüro.", loot: "Geldkästen, Intel" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Pier Lagerhaus (Pier Storage Key)", loc: "Tiger Bay", effect: "Öffnet das Lagerhaus direkt am Pier.", loot: "Waffen-Kisten, Aufsätze" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "TB Randgebiet-Garage (Tiger Bay Outskirts Garage Key)", loc: "Tiger Bay", effect: "Öffnet eine Garage im Außenbereich.", loot: "Fahrzeugteile" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "UNLRA Ausrüstungscontainer (UNLRA Equipment Container Key)", loc: "Tiger Bay", effect: "Öffnet einen Container im Flüchtlingslager.", loot: "Rucksäcke, Westen" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "UNLRA Quarantäne (UNLRA Quarantine Key)", loc: "Tiger Bay", effect: "Öffnet die Isolationsstation.", loot: "Medizinische High-Tier Güter, Task-Items" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "UNLRA Medizincontainer (UNLRA Medical Container Key)", loc: "Tiger Bay", effect: "Öffnet den Sanitäts-Container.", loot: "IFAKs, Surkits, Stims" },
    { group: "🏙️ Tiger Bay (Großstadt)", name: "Haus am Teich (House by the Pond Key)", loc: "Tiger Bay", effect: "Öffnet ein spezifisches Haus am Wasser.", loot: "Ziviler Loot, Wertsachen" },

    // ==========================================
    // --- LAMANG ISLAND (Dörfer & POIs) ---
    // ==========================================
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Villa Vongphet Zimmer (Villa Vongphet Room Key)", loc: "Lamang Island", effect: "Öffnet ein Zimmer in Villa Vongphet.", loot: "Safe, Schmuck" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Sunset Chalet Waffenkoffer (Sunset Chalet Firearms Case Key)", loc: "Lamang Island", effect: "Öffnet einen bestimmten Waffenkoffer.", loot: "High-Tier Waffe" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Fanny Paradise Büro (Fanny Paradise Office Key)", loc: "Lamang Island", effect: "Öffnet das Büro im Fanny Paradise.", loot: "Intel, Bargeld" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Marktplatz-Haus (Small Marketplace House Key)", loc: "Lamang Island", effect: "Öffnet ein kleines Haus am lokalen Markt.", loot: "Provisions" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Klassenzimmer-Schlüssel (School Room Key)", loc: "Lamang Island", effect: "Öffnet einen Raum in der verlassenen Schule.", loot: "Rucksäcke, Elektronik" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Inthavong Farmschuppen (Inthavong Farm Shed Key)", loc: "Inthavong", effect: "Öffnet den Schuppen der Farm.", loot: "Werkzeuge" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Hidden Fields Hütte 03 (Hidden Fields 03 Hut Key)", loc: "Hidden Fields", effect: "Öffnet Hütte 03.", loot: "Schmuggelware, Drogen" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Hidden Fields Hütte 02 (Hidden Fields 02 Hut Key)", loc: "Hidden Fields", effect: "Öffnet Hütte 02.", loot: "Waffen, Munition" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Phouarun Restaurant Dachboden (Phouarun Restaurant Attic Key)", loc: "Phouarun", effect: "Öffnet den Dachbodenraum.", loot: "Versteckte Kisten, Intel" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Phousai Dorfhaus (Phousai Village House Key)", loc: "Phousai", effect: "Öffnet ein verschlossenes Haus im Dorf.", loot: "Provisions, Wertsachen" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "LAF Funkturm-Raum (LAF Radio Tower Room Key)", loc: "Lamang Island", effect: "Öffnet den Raum unter dem Funkturm.", loot: "Militärische Kommunikation, Aufsätze" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Khonwan Dorfhaus (Khonwan Village House Key)", loc: "Khonwan", effect: "Öffnet ein Gebäude in Khonwan.", loot: "Kleidung, einfache Waffen" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Khamhao Reisdepot (Khamhao Rice Depot Room Key)", loc: "Khamhao", effect: "Öffnet einen Raum im Reisdepot.", loot: "Große Mengen Nahrung, Geld" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Dongphou Wander-Hütte (Dongphou Hiking Camp Cottage Key)", loc: "Dongphou", effect: "Öffnet die Wanderhütte.", loot: "Zeltbedarf, Rucksäcke" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Baustellen-Lager (Construction Site Storage Key)", loc: "Lamang Island", effect: "Öffnet den Baucontainer.", loot: "Baumaterial (Nägel, Tape), Werkzeuge" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Ban Khamphet Haus (Ban Khamphet House Key)", loc: "Ban Khamphet", effect: "Öffnet ein Haus im Dorf Ban Khamphet.", loot: "Provisions" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Ban Phouphienge Zimmer (Ban Phouphienge Room Key)", loc: "Ban Phouphienge", effect: "Öffnet ein privates Zimmer.", loot: "Wertsachen, Tresor" },
    { group: "🗺️ Lamang Island (Dörfer & POIs)", name: "Siang Radiostation (Siang Radio Station Room Key)", loc: "Lamang Island", effect: "Öffnet einen Technikraum der Radiostation.", loot: "Elektronik, Kabel" },

    // ==========================================
    // --- UPDATE 0.4 SPEARHEAD KEYS ---
    // ==========================================
    { group: "🆕 Update 0.4 (Spearhead)", name: "FN Gefängnisschlüssel (Fort Narith Jail Key)", loc: "Fort Narith Jail", effect: "Öffnet Zellenblock-Bereiche.", loot: "AK-308 Blueprint (hinter kickbarer Tür)" },
    { group: "🆕 Update 0.4 (Spearhead)", name: "TB Einkaufszentrum Schlüssel (Tiger Bay Mall Key / TB-Mall-Key)", loc: "Tiger Bay Mall", effect: "Öffnet den Hinterraum der Buchhandlung.", loot: "SVD Dragunov Blueprint" },
    { group: "🆕 Update 0.4 (Spearhead)", name: "Vipers Autoschlüssel (Viper's Car Key)", loc: "Pha Lang Airfield", effect: "Öffnet den Wagen am Fluss für die 'Like a Boss' Quest.", loot: "Intel für Vulture" },
    { group: "🆕 Update 0.4 (Spearhead)", name: "Touristenunterkunft Schlüssel (Ransacked Tourist Shelter Key)", loc: "Ransacked Shelter (188, 130)", effect: "Öffnet den Hauptraum der Unterkunft.", loot: "MP7A2 Blueprint" },
    { group: "🆕 Update 0.4 (Spearhead)", name: "Entlegenes Lager Schlüssel (Remote Campsite Key)", loc: "Südlich YBL-1 (149, 111)", effect: "Öffnet die verschlossene Kiste am Flusslager.", loot: "Mossberg 590 Blueprint" }
];
    
// ==========================================
// 8. LOOT-DATENBANK (100% COMPLETE INKL. TASK-WARNUNGEN)
// ==========================================
// HÄNDLER-PROFIT-TIPPS:
// - Genussmittel (Vices) -> Gunny
// - Schmuck (Jewellery) -> Turncoat
// - Elektronik (Electronics) -> Lab Rat
// - Finanzen (Funds) -> Artisan
// - Beweise & Militär (Evidence/Mil) -> Handshake

const lootItemsDb = [
    // ==========================================
    // --- GENUSSMITTEL (Vices) ---
    // ==========================================
    { name: "Moutai - 50 Jahre (Moutai - 50y)", price: 15000, size: "1x2", weight: "1.500 kg", category: "Genussmittel", trader: "Gunny", info: "WICHTIG: Einer der wertvollsten Funde im Spiel. Bringt 7.500$ pro Slot." },
    { name: "Allanach Single Malt Scotch - 40J", price: 5451, size: "1x2", weight: "2.100 kg", category: "Genussmittel", trader: "Gunny", info: "Sehr hoher Wert, unbedingt mitnehmen." },
    { name: "Breda Rum - 30 Jahre (Breda Rum - 30y)", price: 3802, size: "1x2", weight: "1.700 kg", category: "Genussmittel", trader: "Gunny", info: "Hoher Wert, guter Loot für den Rucksack." },
    { name: "Tequila Tzintzimitl - 25J", price: 2020, size: "1x2", weight: "1.800 kg", category: "Genussmittel", trader: "Gunny", info: "Lohnt sich, bringt ca. 1.000$ pro Slot." },
    { name: "Goodlad Whiskey - 20 Jahre", price: 450, size: "1x2", weight: "1.600 kg", category: "Genussmittel", trader: "Gunny", info: "Geringer Wert. Nur einpacken, wenn extrem viel Platz ist." },
    { name: "Schlangenwein (Snake Wine)", price: 399, size: "1x2", weight: "1.400 kg", category: "Genussmittel", trader: "Gunny", info: "Kaum wertvoll, oft in Ban Pa zu finden. Liegen lassen." },
    { name: "Parfüm 'Himmlisch' (Heavenly Perfume)", price: 335, size: "1x2", weight: "0.350 kg", category: "Genussmittel", trader: "Gunny", info: "Recht leicht, aber bringt nicht viel ein." },
    { name: "Lambert Zigarren (Lambert Cigars)", price: 282, size: "1x2", weight: "0.600 kg", category: "Genussmittel", trader: "Gunny", info: "TASK ITEM WICHTIG! 1-2 Stück für die Handshake-Task 'A Small Favor' aufheben!" },
    { name: "Parfüm 'Zart' (Delicate Perfume Bottle)", price: 150, size: "1x1", weight: "0.300 kg", category: "Genussmittel", trader: "Gunny", info: "Nimmt nur 1 Slot weg, aber bringt kaum Profit." },
    { name: "Hyperborea Zigaretten (Hyperborea Cigarettes)", price: 139, size: "1x1", weight: "0.020 kg", category: "Genussmittel", trader: "Gunny", info: "Extrem leicht, gut um leere 1x1 Lücken zu füllen." },
    { name: "Parfüm 'Duftend' (Fragrant Perfume Bottle)", price: 75, size: "1x2", weight: "0.250 kg", category: "Genussmittel", trader: "Gunny", info: "Verschwendet 2 Slots für nur 75$. SCHROTT!" },

    // ==========================================
    // --- SCHMUCK (Jewellery) ---
    // ==========================================
    { name: "Platinring (Platinum Ring)", price: 10000, size: "1x1", weight: "0.010 kg", category: "Schmuck", trader: "Turncoat", info: "WICHTIG: Eines der besten Items im Spiel! 10.000$ für 1 Slot. Direkt in den Safe-Container!" },
    { name: "Majestätische Titanuhr (Majestic Titanium Watch)", price: 8000, size: "1x1", weight: "0.100 kg", category: "Schmuck", trader: "Turncoat", info: "WICHTIG: Absoluter Top-Loot. In den Safe-Container packen." },
    { name: "Diamantring (Diamond Ring)", price: 7700, size: "1x1", weight: "0.010 kg", category: "Schmuck", trader: "Turncoat", info: "Extrem wertvoll und wiegt quasi nichts." },
    { name: "Diamantohrringe (Diamond Earrings)", price: 5700, size: "1x1", weight: "0.020 kg", category: "Schmuck", trader: "Turncoat", info: "Sehr wertvoll. Ideal für den 1x1 Platz im Secure Container." },
    { name: "Smaragdhalskette (Emerald Necklace)", price: 5300, size: "1x1", weight: "0.050 kg", category: "Schmuck", trader: "Turncoat", info: "Hervorragender Wert." },
    { name: "Diamant-Korallen-Ring (Diamond-Coral Ring)", price: 5250, size: "1x1", weight: "0.020 kg", category: "Schmuck", trader: "Turncoat", info: "Hervorragender Wert pro Slot." },
    { name: "Perfekte Perlenohrringe (Perfect Pearl Earrings)", price: 5000, size: "1x1", weight: "0.010 kg", category: "Schmuck", trader: "Turncoat", info: "Top-Tier Loot, wiegt fast nichts." },
    { name: "Prunkvoller Ring (Elaborate Ring)", price: 4400, size: "1x1", weight: "0.020 kg", category: "Schmuck", trader: "Turncoat", info: "Sehr solider Fund, immer einstecken." },
    { name: "Saphir-Anhänger (Sapphire Pendant)", price: 3600, size: "1x1", weight: "0.010 kg", category: "Schmuck", trader: "Turncoat", info: "Bringt sehr gutes Geld für die Größe." },
    { name: "Elegante Luxusuhr (Sleek Luxury Watch)", price: 1700, size: "1x1", weight: "0.130 kg", category: "Schmuck", trader: "Turncoat", info: "Guter Mid-Tier Schmuck." },
    { name: "Master Carbon SEAL Automatikuhr", price: 1450, size: "1x1", weight: "0.170 kg", category: "Schmuck", trader: "Turncoat", info: "Immer noch lohnenswert für 1 Slot." },
    { name: "Dunkle Perlenkette (Dark Pearl Necklace)", price: 1350, size: "1x1", weight: "0.050 kg", category: "Schmuck", trader: "Turncoat", info: "Guter Wert, ideal zum Lücken füllen." },
    { name: "Edelsteinring (Gemstone Ring)", price: 820, size: "1x1", weight: "0.010 kg", category: "Schmuck", trader: "Turncoat", info: "Solider 1x1 Fund." },
    { name: "Luxus-Smartwatch (Luxury Smartwatch)", price: 600, size: "1x1", weight: "0.150 kg", category: "Schmuck", trader: "Turncoat", info: "Mid-Tier Loot, wird für höherwertige Ringe oft ausgetauscht." },
    { name: "Goldhalskette (Gold Necklace)", price: 180, size: "1x1", weight: "0.020 kg", category: "Schmuck", trader: "Turncoat", info: "Kaum was wert. Eher liegen lassen." },
    { name: "Goldring (Gold Ring)", price: 150, size: "1x1", weight: "0.020 kg", category: "Schmuck", trader: "Turncoat", info: "Geringer Wert für Schmuck." },
    { name: "Moderne Uhr (Modern Watch)", price: 150, size: "1x1", weight: "0.120 kg", category: "Schmuck", trader: "Turncoat", info: "Bringt weniger Geld als eine gute Packung Munition." },

    // ==========================================
    // --- FINANZEN (Funds) ---
    // ==========================================
    { name: "Schwarze Kreditkarte (Black Credit Card)", price: 15000, size: "1x1", weight: "0.010 kg", category: "Finanzen", trader: "Artisan", info: "WICHTIG: JACKPOT! 15.000$ für 1 Slot! Sofort in die Secure Lockbox!" },
    { name: "Platin-Kreditkarte (Platinum Credit Card)", price: 6000, size: "1x1", weight: "0.005 kg", category: "Finanzen", trader: "Artisan", info: "Exzellenter Wert, wiegt absolut nichts." },
    { name: "Goldene Kreditkarte (Gold Credit Card)", price: 2200, size: "1x1", weight: "0.005 kg", category: "Finanzen", trader: "Artisan", info: "Solider 1x1 Loot, immer einstecken." },
    { name: "Standard-Kreditkarte (Common Credit Card)", price: 600, size: "1x1", weight: "0.005 kg", category: "Finanzen", trader: "Artisan", info: "Guter Platzfüller, besonders am Anfang." },

    // ==========================================
    // --- MILITÄRAUSRÜSTUNG (Military Equipment) ---
    // ==========================================
    { name: "LTSD-4-3 Laser-Designator", price: 60000, size: "3x3", weight: "14.000 kg", category: "Militärausrüstung", trader: "Handshake", info: "WICHTIG: Das teuerste Item im Spiel! Belegt aber riesige 9 Slots und wiegt 14 Kilo! Plan deine Extraktion." },
    { name: "R-438 Barrier-T Funkstation", price: 45000, size: "2x2", weight: "16.000 kg", category: "Militärausrüstung", trader: "Handshake", info: "WICHTIG: Extrem schwer (16kg). Bringt ein Vermögen, frisst aber massiv Ausdauer." },
    { name: "PBG-01+ Drohnensteuerung", price: 6400, size: "2x2", weight: "14.200 kg", category: "Militärausrüstung", trader: "Handshake", info: "Sehr schwer für 6.400$. Oft lohnt sich der Gewichts-Ausdauer-Nachteil nicht." },
    { name: "ATM Hacking-Tool (ATM Hacking Tool)", price: 5000, size: "1x1", weight: "0.150 kg", category: "Militärausrüstung", trader: "Handshake", info: "WICHTIG: Hervorragend! 5.000$ für 1x1 Platz. Oft in Tiger Bay zu finden." },
    { name: "C2 Militär-Laptop (C2 Military Laptop)", price: 4900, size: "2x2", weight: "5.000 kg", category: "Militärausrüstung", trader: "Handshake", info: "Vorsicht: Belegt 4 Slots und wiegt 5kg. Nur bei viel Platz mitnehmen." },
    { name: "Operation Data Encrypted Hard Disk", price: 4875, size: "1x1", weight: "0.180 kg", category: "Militärausrüstung", trader: "Handshake", info: "WICHTIG: S-Tier Loot! Enormer Wert für nur 1 Slot." },
    { name: "STRELETS-M Tablet", price: 4700, size: "1x1", weight: "0.400 kg", category: "Militärausrüstung", trader: "Handshake", info: "Top-Item für die Hosentasche." },
    { name: "AN/PYQ-10 Gerät (AN-PYQ-10)", price: 3150, size: "1x2", weight: "0.970 kg", category: "Militärausrüstung", trader: "Handshake", info: "Guter, leichter Military-Loot." },
    { name: "KIK-11 Taktischer Keyloader (KIK-11)", price: 2900, size: "1x1", weight: "0.450 kg", category: "Militärausrüstung", trader: "Handshake", info: "Hoher Wert für nur 1 Slot." },
    { name: "One-Time Pad Key Sheets", price: 2400, size: "1x1", weight: "0.100 kg", category: "Militärausrüstung", trader: "Handshake", info: "Sehr lukrativ, immer einstecken." },
    { name: "HGCS-30 UAV Drohnensteuerung", price: 2000, size: "2x2", weight: "3.000 kg", category: "Militärausrüstung", trader: "Handshake", info: "Belegt 4 Slots für 2.000$. Eher schlechter Wert pro Slot (500$)." },
    { name: "Biometrische Zugangskarte", price: 1950, size: "1x1", weight: "0.008 kg", category: "Militärausrüstung", trader: "Handshake", info: "Gutes Geld, wiegt weniger als eine Patrone." },
    { name: "Biometrischer USB-Stick", price: 1875, size: "1x1", weight: "0.004 kg", category: "Militärausrüstung", trader: "Handshake", info: "Winzig, leicht, wertvoll." },
    { name: "Robustes Militär-Tablet", price: 1200, size: "2x2", weight: "2.000 kg", category: "Militärausrüstung", trader: "Handshake", info: "Zu groß (2x2) für den geringen Preis." },
    { name: "NPI-2 Navigations-Empfänger", price: 1100, size: "1x1", weight: "0.300 kg", category: "Militärausrüstung", trader: "Handshake", info: "Guter Füller für 1 Slot." },
    { name: "GLONASS Grot-M", price: 937, size: "1x2", weight: "0.800 kg", category: "Militärausrüstung", trader: "Handshake", info: "Unter 500$ pro Slot. Eher mäßig." },
    { name: "AZART P1 Funkgerät", price: 825, size: "1x2", weight: "0.720 kg", category: "Militärausrüstung", trader: "Handshake", info: "Standard-Mil-Loot." },
    { name: "Handheld ECM Störsender", price: 712, size: "1x2", weight: "2.000 kg", category: "Militärausrüstung", trader: "Handshake", info: "Viel zu schwer (2kg) für 712$." },
    { name: "Signal-Repeater RT97S", price: 675, size: "3x2", weight: "1.660 kg", category: "Militärausrüstung", trader: "Handshake", info: "RIESIG (6 Slots) für nur 675$. SCHROTT!" },

    // ==========================================
    // --- ELEKTRONIK (Electronics) ---
    // ==========================================
    { name: "Schwarzes Luxus-Telefon (Black Luxury Phone)", price: 1500, size: "1x1", weight: "0.100 kg", category: "Elektronik", trader: "Lab Rat", info: "Top-Tier Elektronik. Wird oft in Safes gefunden." },
    { name: "Luxus-Smartphone (Luxury Smartphone)", price: 1000, size: "1x1", weight: "0.100 kg", category: "Elektronik", trader: "Lab Rat", info: "Wertvoller Platzfüller." },
    { name: "Teures Smartphone (Expensive Smartphone)", price: 350, size: "1x1", weight: "0.100 kg", category: "Elektronik", trader: "Lab Rat", info: "Solide, falls noch Platz ist." },
    { name: "Standard Smartphone", price: 250, size: "1x1", weight: "0.100 kg", category: "Elektronik", trader: "Lab Rat", info: "Eher geringer Wert, kann bei Platzmangel weggeworfen werden." },

    // ==========================================
    // --- BEWEISE & INTEL (Evidence) ---
    // ==========================================
    { name: "VIP Reisepass (VIP Passport)", price: 6800, size: "1x1", weight: "0.050 kg", category: "Beweise", trader: "Handshake", info: "WICHTIG: Ein extrem wertvoller Fund (6.800$ für 1x1)! Oft in Hotel-Zimmern." },
    { name: "Verschlüsselte Festplatte (Encrypted HDD)", price: 3450, size: "1x1", weight: "0.180 kg", category: "Beweise", trader: "Handshake", info: "Top-Tier Loot, sofort in den Secure Container." },
    { name: "Touristen-Pass (Tourist Passport)", price: 2625, size: "1x1", weight: "0.050 kg", category: "Beweise", trader: "Handshake", info: "Sehr profitabel für seine Größe." },
    { name: "Verstärkter Militär-Laptop", price: 2304, size: "2x2", weight: "2.500 kg", category: "Beweise", trader: "Handshake", info: "Achtung: Belegt 4 Slots und ist schwer. Nur mitnehmen wenn viel Platz ist." },
    { name: "Armee-Geheimdienstinfos (Army Intel)", price: 1280, size: "1x2", weight: "0.100 kg", category: "Beweise", trader: "Handshake", info: "Gutes Intel für den Rucksack." },
    { name: "Spiegelreflexkamera (Reflex Camera)", price: 960, size: "2x1", weight: "0.400 kg", category: "Beweise", trader: "Handshake", info: "Ca. 480$ pro Slot. Okay fürs Mid-Game." },
    { name: "Geschäftsmann ID (Businessman ID Card)", price: 937, size: "1x1", weight: "0.050 kg", category: "Beweise", trader: "Handshake", info: "Hervorragend als Lückenfüller." },
    { name: "Standard Laptop", price: 750, size: "2x2", weight: "1.500 kg", category: "Beweise", trader: "Handshake", info: "Viel zu groß (4 Slots) für läppische 750$. Müll!" },
    { name: "Führerschein (Driver's License)", price: 262, size: "1x1", weight: "0.050 kg", category: "Beweise", trader: "Handshake", info: "Bringt weniger als Basis-Ringe." },
    { name: "Einheimischen ID (Local ID Card)", price: 187, size: "1x1", weight: "0.050 kg", category: "Beweise", trader: "Handshake", info: "Geringer Wert." },
    { name: "Kriminal-Akte (Crime-related Intel)", price: 140, size: "1x2", weight: "0.100 kg", category: "Beweise", trader: "Handshake", info: "Wertlos. Verstopft 2 Slots." },
    { name: "Touristen ID (Tourist ID Card)", price: 112, size: "1x1", weight: "0.050 kg", category: "Beweise", trader: "Handshake", info: "Wertlos." },
    { name: "Digitalkamera (Digital Camera)", price: 112, size: "1x1", weight: "0.250 kg", category: "Beweise", trader: "Handshake", info: "Verschwendeter Platz." },

    // ==========================================
    // --- TASK RELEVANTER MEDIZINBEDARF ---
    // ==========================================
    { name: "OP-Besteck (Surgical Kit / Surkit)", price: 150, size: "1x2", weight: "0.500 kg", category: "Laborbedarf", trader: "Lab Rat", info: "TASK ITEM WICHTIG! 2 Stück für die Task 'Field Hospital' (Lab Rat) aufheben!" },
    { name: "Morphin-Injektor (Morphine)", price: 35, size: "1x1", weight: "0.020 kg", category: "Laborbedarf", trader: "Lab Rat", info: "TASK ITEM WICHTIG! 5 Stück für die Task 'Medical Supplies' (Lab Rat) aufheben!" },
    { name: "CAT Tourniquet (Abbindesystem)", price: 25, size: "1x1", weight: "0.050 kg", category: "Laborbedarf", trader: "Lab Rat", info: "TASK ITEM WICHTIG! 5 Stück für die Task 'Vital Signs' (Lab Rat) aufheben!" },
    { name: "Antigen-Fläschchen (Vial of Antigens)", price: 947, size: "1x1", weight: "0.030 kg", category: "Laborbedarf", trader: "Lab Rat", info: "Der einzige wirklich wertvolle reine Labor-Loot. Top!" },
    { name: "Wasserreinigungstabletten", price: 27, size: "1x1", weight: "0.125 kg", category: "Laborbedarf", trader: "Lab Rat", info: "Wird manchmal für Dailies gesucht, ansonsten wertlos." },
    { name: "Desinfektionsmittel (Disinfectant)", price: 199, size: "1x1", weight: "1.000 kg", category: "Laborbedarf", trader: "Lab Rat", info: "Viel zu schwer (1kg) für 199$." },
    { name: "Schwefelsäure (Sulfuric Acid)", price: 99, size: "2x2", weight: "5.030 kg", category: "Laborbedarf", trader: "Lab Rat", info: "SCHROTT: Wiegt massige 5 Kilo für lächerliche 99$! Bloß nicht einpacken!" },
    { name: "Industrie-Lösungsmittel", price: 29, size: "2x2", weight: "3.800 kg", category: "Laborbedarf", trader: "Lab Rat", info: "SCHROTT!" },
    { name: "Rohrreiniger (Drain Cleaner)", price: 15, size: "1x2", weight: "5.000 kg", category: "Laborbedarf", trader: "Lab Rat", info: "SCHROTT: 5 Kilo schwer für 15$. Niemals looten." },
    { name: "UN Medizinische Werkzeuge", price: 15, size: "2x1", weight: "0.500 kg", category: "Laborbedarf", trader: "Lab Rat", info: "Wird manchmal für Daily-Aufgaben verlangt, sonst wertlos." },

    // ==========================================
    // --- WERKSTATT & BAUMATERIAL (Workshop Supplies) ---
    // ==========================================
    { name: "Werkzeugkasten (Toolset)", price: 142, size: "2x2", weight: "1.000 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! 4 Stück aufheben! (Wird 3x für 'Tooling Up' & 1x für 'The Builder' benötigt)." },
    { name: "Benzinkanister (Fuel Canister)", price: 21, size: "2x2", weight: "5.000 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! 2 Stück für die Task 'Fuel Run' (Artisan) aufheben!" },
    { name: "Panzertape (Duct Tape)", price: 12, size: "1x1", weight: "0.200 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! 5 Stück aufheben! (3x für 'Supply Shortage', 2x für 'The Builder')." },
    { name: "Kupferkabel (Copper Wire)", price: 18, size: "1x1", weight: "0.300 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! 5 Stück für die Task 'Scrapyard' (Artisan) aufheben." },
    { name: "Zündkerzen (Spark Plugs)", price: 15, size: "1x1", weight: "0.150 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! Mind. 2 Stück für 'Mechanic's Trouble' und 'Artisan's List' aufheben!" },
    { name: "Nägel (Nails)", price: 8, size: "1x1", weight: "0.500 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! 2 Stück für die Task 'Supply Shortage' (Artisan) aufheben." },
    { name: "Starthilfekabel (Jumper Cables)", price: 30, size: "2x2", weight: "2.340 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! Unbedingt für die spätere Task 'Artisan's List II' aufbewahren." },
    { name: "Autobatterie (Car Battery)", price: 56, size: "2x2", weight: "12.660 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! 2 Stück für 'Parts Needed' (Artisan) aufheben. Achtung: Extrem schwer!" },
    { name: "Motorradbatterie (Motorbike Battery)", price: 36, size: "2x1", weight: "2.000 kg", category: "Werkstatt", trader: "Artisan", info: "TASK ITEM WICHTIG! 2 Stück für die Task 'Mechanic's Trouble' (Artisan) aufheben." },
    { name: "Weißes Lithiumfett (White Lithium Grease)", price: 150, size: "2x3", weight: "15.880 kg", category: "Werkstatt", trader: "Artisan", info: "ACHTUNG SCHROTT: Belegt 6 Slots und wiegt fast 16 Kilo für 150$. Liegen lassen!" },
    { name: "Defekte Nagelpistole", price: 75, size: "2x2", weight: "2.500 kg", category: "Werkstatt", trader: "Artisan", info: "Guter Schrott für Platzfüller am Anfang." },
    { name: "Defekter Winkelschleifer", price: 56, size: "2x2", weight: "2.499 kg", category: "Werkstatt", trader: "Artisan", info: "Nur als generischer Schrott für 'Artisan's List' nützlich." },
    { name: "Multitool", price: 54, size: "1x1", weight: "0.120 kg", category: "Werkstatt", trader: "Artisan", info: "Nützlich für frühe Gunny/Artisan Dailies." },
    { name: "Motoröl (Motor Oil)", price: 15, size: "2x2", weight: "4.300 kg", category: "Werkstatt", trader: "Artisan", info: "SCHROTT!" },

    // ==========================================
    // --- HAUSHALTSWAREN & VERPFLEGUNG ---
    // ==========================================
    { name: "MRE (Meal Ready to Eat)", price: 25, size: "1x2", weight: "0.400 kg", category: "Haushalt", trader: "Handshake", info: "TASK ITEM WICHTIG! 5 Stück für 'Supply Squeeze' & ca. 3 für 'A Small Favor' aufheben!" },
    { name: "Packung AA-Batterien (AA Batteries)", price: 7, size: "1x1", weight: "0.024 kg", category: "Haushalt", trader: "Lab Rat", info: "TASK ITEM WICHTIG! Wird für die Task 'Artisan's List' benötigt. Aufheben!" },
    { name: "Nachfüllbares Feuerzeug", price: 37, size: "1x1", weight: "0.080 kg", category: "Haushalt", trader: "Lab Rat", info: "Minimaler Wert." },
    { name: "Propanflasche (Propane Bottle)", price: 31, size: "1x2", weight: "0.453 kg", category: "Haushalt", trader: "Lab Rat", info: "Müll." },
    { name: "Stange Tahirs Zigaretten", price: 27, size: "3x1", weight: "0.250 kg", category: "Haushalt", trader: "Gunny", info: "Lohnt den Platz nicht." },
    { name: "Bleichmittel (Bleach)", price: 19, size: "1x1", weight: "3.570 kg", category: "Haushalt", trader: "Lab Rat", info: "Fast 4 Kilo schwer für 19$! Ignorieren." },
    { name: "Vaseline (Petrolatum)", price: 9, size: "1x1", weight: "0.370 kg", category: "Haushalt", trader: "Lab Rat", info: "Müll." },
    { name: "Tahirs Zigaretten (Tahirs Cigarettes)", price: 5, size: "1x1", weight: "0.013 kg", category: "Haushalt", trader: "Gunny", info: "Müll." },

    // ==========================================
    // --- QUEST ITEMS / TOOLS (Spezial) ---
    // ==========================================
    { name: "Pro Multitool", price: 0, size: "1x1", weight: "0.120 kg", category: "Spezial-Ausrüstung", trader: "Handshake", info: "Reines Quest-Item. Muss gekauft werden." },
    { name: "Kamera-Wanze (Camera Wiretap)", price: 0, size: "1x1", weight: "0.010 kg", category: "Spezial-Ausrüstung", trader: "Handshake", info: "Reines Quest-Item für Sabotage-Missionen." },
    { name: "GPS-Tracker", price: 0, size: "1x1", weight: "0.050 kg", category: "Spezial-Ausrüstung", trader: "Gunny", info: "Wird oft zum Markieren von Trucks, Helis & Flaks benötigt." },
    { name: "Probenentnahme-Kit (Sample Collection Kit)", price: 0, size: "1x1", weight: "0.100 kg", category: "Spezial-Ausrüstung", trader: "Lab Rat", info: "Zum Entnehmen von Blut- oder Sumpfproben." },
    { name: "Vorrätekiste (Box of Supplies)", price: 0, size: "2x2", weight: "2.000 kg", category: "Spezial-Ausrüstung", trader: "Diverse", info: "Wird für Logistik-Missionen genutzt." }
];
    
// ==========================================
// 9. STASH & CONTAINER DATENBANK (0.4 SPEARHEAD)
// ==========================================
// isMeta: true markiert die absoluten Pflichtkäufe mit dem 🔥-Symbol!

const containersDb = [
    // --- SECURE CONTAINERS ---
    { category: "🔒 Secure Containers (Raid-Schutz)", name: "Safe Lock Box (2x2)", size: "4 Slots intern", source: "Standard Edition / Artisan Level 1", isMeta: false, info: "<b>Wofür:</b> Basis-Schutz für Wertsachen und Schlüssel.<br><b>Kosten:</b> ~ $10.000<br><b>Kaufempfehlung:</b> Dein Start-Container. Bietet Platz für 1 Wallet, 1 Key Holder und kleine Meds." },
    { category: "🔒 Secure Containers (Raid-Schutz)", name: "Admin Tasche (2x3) (Admin Pouch)", size: "6 Slots intern", source: "Tactical Edition / Artisan Level 2", isMeta: true, info: "<b>Wofür:</b> Mittlerer Secure Container.<br><b>Kosten:</b> ~ $35.000<br><b>Kaufempfehlung:</b> Teuer, aber wichtiges Upgrade für Standard-Spieler, um z.B. ein OP-Kit (Surg Kit) verlustfrei mitzunehmen." },
    { category: "🔒 Secure Containers (Raid-Schutz)", name: "TAS Schließfach (3x3) (TAS Lockbox)", size: "9 Slots intern", source: "Elite & Supporter Edition / Artisan Level 4", isMeta: true, info: "<b>Wofür:</b> Maximaler Schutz für dicken Loot.<br><b>Kosten:</b> ~ $150.000<br><b>Kaufempfehlung:</b> Das ultimative Endgame-Ziel. Absoluter Luxus für schwere Quests und teuren Loot." },

    // --- STASH CASES (Lagerkisten im Basecamp) ---
    { category: "📦 Stash Cases (Lagerkisten)", name: "Muxxum Waffenkoffer (Muxxum Rifle Case)", size: "96 Slots intern", source: "Gunny Level 4", isMeta: true, info: "<b>Wofür:</b> Ausschließlich für Schusswaffen.<br><b>Kosten:</b> ~ $105.000<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Pflichtkauf!</b> Hinweis: Sehr lange Waffen (SVD / M16) passen oft nicht aufrecht. Nimm Magazin und Griff ab, dann sind die Waffen nur 1 Slot breit!" },
    { category: "📦 Stash Cases (Lagerkisten)", name: "HARDE-Kiste (HARDE Case)", size: "60 Slots intern", source: "Gunny Level 3", isMeta: true, info: "<b>Wofür:</b> Ausschließlich für Schusswaffen.<br><b>Kosten:</b> ~ $77.000<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Pflichtkauf!</b> Guter Vorgänger für den großen Muxxum Koffer." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Waffenteilkiste (Weapon Parts Case)", size: "42 Slots intern", source: "Gunny Level 3", isMeta: false, info: "<b>Wofür:</b> Visiere, Griffe, Schalldämpfer und Schäfte.<br><b>Kosten:</b> ~ $60.000<br><b>Kaufempfehlung:</b> Sehr nützlich, wenn du gerne teure Scopes und Attachments hortest." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Metal-Munitionskiste (Metal Ammo Box)", size: "Nimmt 4 Slots ein, massiver Innenraum", source: "Turncoat Level 2", isMeta: true, info: "<b>Wofür:</b> Munitionskiste für lose Patronen.<br><b>Kosten:</b> ~ $60.300<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Mindestens 2 Stück kaufen!</b> Spart extrem viel Platz." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "MM-Munitionskiste (MM Ammo Box)", size: "Nimmt 6 Slots ein, massiver Innenraum", source: "Turncoat Level 4", isMeta: true, info: "<b>Wofür:</b> Munitionskiste für lose Patronen.<br><b>Kosten:</b> ~ $45.000<br><b>Kaufempfehlung:</b> Die große Version. Spart im Lategame massiv Platz." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Handgranatenkoffer (Hand Grenade Storage Box)", size: "Nimmt 6 Slots ein, fasst 20 Granaten", source: "Turncoat Level 3", isMeta: false, info: "<b>Wofür:</b> Granatenkoffer für Sprengstoff-Enthusiasten.<br><b>Kosten:</b> ~ $75.500<br><b>Kaufempfehlung:</b> Wer viel und gerne mit Granaten spielt, sollte sich 1-2 Stück kaufen." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Magazinkiste (Magazine Crate)", size: "Großes Raster für Magazine", source: "Gunny Level 3", isMeta: true, info: "<b>Wofür:</b> Leere und geladene Waffenmagazine.<br><b>Kosten:</b> ~ $55.000<br><b>Kaufempfehlung:</b> Sehr wichtig, um das Chaos im Inventar zu besiegen." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "IV-Schutzkoffer (IV Truncase)", size: "Riesiges Raster für Rüstung & Rucksäcke", source: "Artisan Level 2", isMeta: true, info: "<b>Wofür:</b> Helme, Westen, Rigs, Gürtel und Rucksäcke.<br><b>Kosten:</b> ~ $61.700<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Top!</b> Achtung: Du kannst keinen Rucksack hineinlegen, wenn sich in dem Rucksack eine Waffe befindet!" },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Erste-Hilfe-Koffer (First Aid Case)", size: "Großes Raster für Medizin", source: "Lab Rat Level 2", isMeta: true, info: "<b>Wofür:</b> OP-Kits, Blutbeutel, Bandagen.<br><b>Kosten:</b> ~ $40.000<br><b>Kaufempfehlung:</b> Sehr wichtiges Mid-Game Upgrade." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Kühlbox / Proviantkiste (Personal Cooler)", size: "Großes Raster für Essen/Trinken", source: "Artisan Level 2", isMeta: false, info: "<b>Wofür:</b> Getränke, Rationen und Snacks.<br><b>Kosten:</b> ~ $60.200<br><b>Kaufempfehlung:</b> Gut, um MREs und Wasser auf Vorrat zu halten." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Großer Schlüsselkoffer (Huge Key Case)", size: "Nimmt 3 Slots ein, fasst 30 Keys", source: "Banshee Level 3", isMeta: true, info: "<b>Wofür:</b> Lagerung ALLER Schlüssel, die du nicht im Raid brauchst.<br><b>Kosten:</b> ~ $65.000<br><b>Kaufempfehlung:</b> Sehr praktisch für Sammler, denen der kleine Key Holder im Stash nicht reicht." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Mörser-Kiste (Mortar Round Case)", size: "Spezialraster für Sprengmittel", source: "Gunny Level 3", isMeta: false, info: "<b>Wofür:</b> Mörsergranaten.<br><b>Kosten:</b> ~ $75.000<br><b>Kaufempfehlung:</b> <b style='color:#ff4c4c;'>Finger weg!</b> Kostet 75k und spart effektiv nur mickrige 5 Slots. Absolute Geldverschwendung." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Kleiner Tresor (Small Safe)", size: "24 Slots intern", source: "Vulture Level 3", isMeta: false, info: "<b>Wofür:</b> Bargeld und High-Value Loot (Gold, Diamanten).<br><b>Kosten:</b> ~ $75.000<br><b>Kaufempfehlung:</b> Nette Spielerei, aber Bargeld nimmt viel weniger Platz weg als das Loot selbst. Besser direkt verkaufen." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Großer Tresor (Large Safe)", size: "108 Slots intern", source: "Vulture Level 4", isMeta: false, info: "<b>Wofür:</b> Der ultimative Geldtresor.<br><b>Kosten:</b> ~ $105.000<br><b>Kaufempfehlung:</b> Reiner Endgame-Flex für Spieler mit Millionen auf dem Konto." },
    { category: "📦 Stash Cases (Lagerkisten)", name: "Verwaltungstisch (Administrative Desk)", size: "210 Slots", source: "Artisan Level 3", isMeta: false, info: "<b>Wofür:</b> Aufbewahrung von großen Dokumentenmengen.<br><b>Kosten:</b> ~ $89.500<br><b>Kaufempfehlung:</b> Wer Spaß am Sammeln von allen Dokumenten hat und mehr der Lore verstehen will, sollte die Kiste kaufen." },

    // --- MICRO-CONTAINER & POUCHES (Für den Raid) ---
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Geldbörse (Tactical Wallet)", size: "Nimmt 1 Slot ein, bietet 4 intern", source: "Artisan Level 1", isMeta: true, info: "<b>Wofür:</b> Bargeld, Kreditkarten und Pässe.<br><b>Kosten:</b> ~ $3.500<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Absolutes Must-Have!</b> Gehört sofort in deine Secure Pouch." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Lederschlüsselhalter (Key Holder)", size: "Nimmt 1 Slot ein, fasst viele Keys", source: "Artisan Level 2", isMeta: true, info: "<b>Wofür:</b> Raumschlüssel und Zugangskarten.<br><b>Kosten:</b> ~ $4.500<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Must-Have!</b> Sichern, um Schlüssel beim Tod nicht zu verlieren." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Schlüsseltasche (Key Case)", size: "Nimmt 2 Slots ein, fasst extrem viele Keys", source: "Artisan Level 3", isMeta: true, info: "<b>Wofür:</b> Raumschlüssel und Zugangskarten.<br><b>Kosten:</b> ~ $6.000<br><b>Kaufempfehlung:</b> <b style='color:var(--accent);'>Must-Have!</b> Für Operator, die für ganz Tiger Bay und das Hotel gewappnet sein wollen." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Injektoren-Etui (Injector Case)", size: "9 Slots intern für Injektoren", source: "Lab Rat Level 4", isMeta: true, info: "<b>Wofür:</b> Aufbewahrung von Adrenalin, Morphin und Stims.<br><b>Kosten:</b> Variiert<br><b>Kaufempfehlung:</b> Ein starkes Endgame-Item, um massiv Platz im Container oder Belt zu sparen." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Verwaltungstasche (Administration Bag)", size: "Nimmt 2 Slots ein, fasst 6 Slots", source: "Artisan Level 2", isMeta: false, info: "<b>Wofür:</b> Aufbewahrung von Dokumenten, Karten, Schlüssel und Geld.<br><b>Kosten:</b> ~ $75.900<br><b>Kaufempfehlung:</b> Kann man kaufen, muss man aber nicht." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Kombat-Ordner (Kombat Folder)", size: "Nimmt 4 Slots ein, fasst 16 Slots", source: "Artisan Level 3", isMeta: false, info: "<b>Wofür:</b> Dokumente, Karten, Schlüssel und Geld.<br><b>Kosten:</b> ~ $75.400<br><b>Kaufempfehlung:</b> Auf jeden Fall besser als die kleine Verwaltungstasche." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Hartschalen-Erste-Hilfe (HFAK)", size: "1x2 Slot", source: "Lab Rat Level 1", isMeta: false, info: "<b>Wofür:</b> Kleine Medizintasche für den Gürtel.<br><b>Kosten:</b> ~ $90<br><b>Kaufempfehlung:</b> Kann man sehr oft in der Welt finden." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Mini-Erste-Hilfe-Set (MFAK)", size: "1x3 Slot", source: "Lab Rat Level 2", isMeta: false, info: "<b>Wofür:</b> Kleine Medizintasche für den Gürtel.<br><b>Kosten:</b> ~ $200<br><b>Kaufempfehlung:</b> Günstig, hilft am Anfang enorm." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "Schnellverschluss-Medikit (QFAK)", size: "2x3 Slots", source: "Lab Rat Level 3", isMeta: false, info: "<b>Wofür:</b> Mittlere Med-Pouch.<br><b>Kosten:</b> ~ $320<br><b>Kaufempfehlung:</b> Sehr effizient auf dem Tactical Belt." },
    { category: "👝 Micro-Container & Pouches (Inventar)", name: "RIP-AWAY EMT POUCH (EMT)", size: "3x3 Slots", source: "Lab Rat Level 4", isMeta: false, info: "<b>Wofür:</b> Große Sanitätstasche für den Rucksack.<br><b>Kosten:</b> Variiert<br><b>Kaufempfehlung:</b> Ideal für designierte Squad-Medics." },

    // --- STASH-ERWEITERUNGEN ---
    { category: "🏗️ Locker Upgrades (Stash-Erweiterung)", name: "Locker-Erweiterungen (Locker Expansions)", size: "Dauerhafte Stash-Vergrößerung", source: "Quests & Spielerlevel", isMeta: true, info: "<b>Wofür:</b> Vergrößert dauerhaft dein Basecamp-Schließfach.<br><b>Kosten:</b> Kostenlos.<br><b>Wann:</b> Bei Handshake/Turncoat Quests UND automatisch auf Spielerlevel 20, 30, 40, 50!" }
];
    
// ==========================================
// 10. LANDEZONEN & NAVIGATION (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const lzDb = {
    // --- STARTGEBIETE (Safe Zones) ---
    "lz_alpha": { 
        name: "Nam Thaven (Mithras)", 
        lzs: "Alpha 1, Alpha 2, Alpha 3", 
        danger: "Gering (Low)", 
        tip: "Das Startgebiet für Mithras-Operator. Sehr sicher. LZ Alpha 3 ist perfekt, um das östliche Reisfeld ohne KI-Kontakt zu durchqueren." 
    },
    "lz_bravo": { 
        name: "Pha Lang (LRI)", 
        lzs: "Bravo 1, Bravo 2, Bravo 3", 
        danger: "Gering (Low)", 
        tip: "Startgebiet der LRI. Gute Deckung durch den dichten Dschungel direkt an den Landezonen. Ideal für Solo-Neulinge." 
    },
    "lz_charlie": { 
        name: "Kiu Vongsa (Crimson)", 
        lzs: "Charlie 1, Charlie 2, Charlie 3", 
        danger: "Gering (Low)", 
        tip: "Crimson Startgebiet. Die LZs liegen recht offen. Achte auf KI-Sniper, die sich in den Randgebäuden des Dorfes verstecken." 
    },

    // --- MID-GAME POIs ---
    "lz_echo": { 
        name: "Sägewerk (Lumber Yard)", 
        lzs: "Echo 1, Echo 2", 
        danger: "Mittel (Medium)", 
        tip: "Echo 1 liegt gefährlich nah am Hauptlager und wird oft von KIs gepusht. Echo 2 bietet einen deutlich sichereren Anmarsch durch den Wald." 
    },
    "lz_foxtrot": { 
        name: "Hunter's Paradise", 
        lzs: "Foxtrot 1, Foxtrot 2", 
        danger: "Mittel-Hoch (PvP Hotspot)", 
        tip: "Foxtrot 1 bietet extrem schnellen Zugang zum Schießstand, wird aber im PvP sehr oft von gegnerischen Fraktionen belagert (LZ-Camping)!" 
    },
    "lz_india": { 
        name: "Fischerdorf (Ban Pa)", 
        lzs: "India 1, India 2", 
        danger: "Mittel-Hoch (Medium-High)", 
        tip: "LZ India 1 liegt extrem gefährlich direkt neben den Hütten. Nutze India 2 für einen getarnten Vorstoß durch den Sumpf." 
    },
    "lz_kilo": { 
        name: "Blaue Lagune (Blue Lagoon)", 
        lzs: "Kilo 1, Kilo 2", 
        danger: "Mittel-Hoch (Medium-High)", 
        tip: "Wenig Deckung bei Kilo 1. Kilo 2 ist taktisch klüger, um das Restaurant von der bewaldeten Südseite aus anzugreifen." 
    },

    // --- END-GAME POIs (High Danger) ---
    "lz_juliet": { 
        name: "YBL-1 Bunker", 
        lzs: "Juliet 1, Juliet 2", 
        danger: "Hoch (High)", 
        tip: "Bereite dich sofort nach der Landung auf Gegenwehr vor. Juliet 2 eignet sich hervorragend, um die Hintereingänge des Bunkers zu flankieren." 
    },
    "lz_delta": { 
        name: "Fort Narith (Militärbasis)", 
        lzs: "Delta 1, Delta 2, Delta 3", 
        danger: "Extrem (Extreme)", 
        tip: "⚠️ 0.4 UPDATE: Das Gebiet wird nun sporadisch mit Mörsern (Mortar Strikes) beschossen! Delta 3 ist Selbstmord, wenn du nicht sofort in Deckung sprintest." 
    },
    "lz_hotel": { 
        name: "Midnight Sapphire", 
        lzs: "Hotel 1, Hotel 2, Hotel 3", 
        danger: "Extrem (Extreme)", 
        tip: "Hotel 1 führt dich in die Nähe der Villen (Millionärs-Run). Hotel 2 über den Golfplatz. Beide LZs sind von tödlichen Scharfschützen umgeben." 
    },
    "lz_lima": { 
        name: "Tiger Bay (Großstadt)", 
        lzs: "Lima 1, Lima 2", 
        danger: "Absolutes Maximum (Insane)", 
        tip: "Die gefährlichste Zone im Spiel. KIs stürmen den Heli oft schon beim Landen. Nutze dichten Rauch (Smoke Grenades) direkt beim Aussteigen!" 
    },
    "lz_golf": { 
        name: "Ground Zero", 
        lzs: "Golf 1, Golf 2", 
        danger: "Tödlich (Lethal - Radiation)", 
        tip: "Das Epizentrum. Extreme Radioaktivität! Ohne die neue Gasmaske und Anti-Strahlen-Medikation stirbst du hier innerhalb von Sekunden." 
    }
};

    // 11. SYMPTOME DATENBANK
    const symptomDb = {
        "gray_vision": { diag: "Kritischer Blutverlust", treat: "Blutbeutel", info: "Fülle dein Blut SOFORT auf!" },
        "blurry_vision": { diag: "Schock / Akuter Schmerz", treat: "Schmerzmittel", info: "Nimm Ibuprofen oder Morphin." },
        "tunnel_vision": { diag: "Koma steht bevor", treat: "Tourniquet + Blut", info: "Stoppe die Blutung sofort!" },
        "limping": { diag: "Knochenbruch (Bein)", treat: "Schiene", info: "Schiene anlegen, sonst kannst du nicht sprinten." },
        "weapon_sway": { diag: "Knochenbruch (Arm)", treat: "Schiene + Painkillers", info: "Stoppt das Wackeln beim Zielen." },
        "stamina_drain": { diag: "Organschaden oder Erschöpfung", treat: "Surkit oder Essen", info: "Heile deine Lunge oder iss etwas." },
        "coughing": { diag: "Organschaden (Lunge/Magen)", treat: "Surkit", info: "Such dir sichere Deckung für die OP." },
        "heartbeat": { diag: "Adrenalinabfall", treat: "Morphin", info: "Beruhigt den Puls." },
        "stomach": { diag: "Nahrungsmangel", treat: "Essen", info: "Iss, bevor die Ausdauer-Strafen greifen." }
    };

    // 12. STATUS EFFECT DATENBANK
    const statusEffectsDb = {
        "out_of_breath": { 
            de: "Außer Atem", en: "Out of Breath", 
            desc: "Erschöpfung der Beinkraft. Atemstillstand. Lungenschädigung.",
            effect: "Hörbarer Herzschlag/Atemgeräusche. Verhindert Atemstillstand.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/bd/OutOfBreathIcon.png"
        },
        "cramps": { 
            de: "Krämpfe", en: "Cramps", 
            desc: "Arm-Ausdauer liegt unter 1%",
            effect: "Erhöht das Waffenschwanken & Verhindert Nahkampfangriffe.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/27/CrampsIcon.png"
        },
        "sore_arms": { 
            de: "Schmerzende Arme", en: "Sore Arms", 
            desc: "Arm-Ausdauer liegt unter 40%",
            effect: "Erhöht das Waffenschwanken",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/50/SoreArmsIcon.png"
        },
        "fatigued": { 
            de: "Erschöpft (Gelb)", en: "Fatigued", 
            desc: "Bein-Ausdauer liegt unter 40%",
            effect: "Hörbarer Herzschlag/Atemgeräusche. Unterbricht vorübergehend die Regeneration der Ausdauer.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/34/FatiguedIcon.png"
        },
        "exhausted": { 
            de: "Erschöpft (Rot)", en: "Exhausted", 
            desc: "Bein-Ausdauer liegt unter 1%",
            effect: "Hörbarer Herzschlag/Atemgeräusche. Sichtbares Waffenzittern. Verhindert Sprinten und Springen. Verhindert Überwinden von Hindernissen/Klettern. Unterbricht vorübergehend die Regeneration der Beinkraft.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/66/ExhaustedIcon.png"
        },
        "encumbered": { 
            de: "Überlastet", en: "Encumbered", 
            desc: "Bis das Gewicht unter 54 kg sinkt",
            effect: "Verhindert Sprinten und Springen. Verringert die Regeneration der Beinkraft. Verringert die Zielgeschwindigkeit.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/92/EncumberedIcon.png"
        },
        "dazed": { 
            de: "Benommenheit", en: "Dazed", 
            desc: "Tritt auf bei Kopftreffern (wenn der Helm das Projektil abfängt) oder durch sehr nahe Explosionen.",
            effect: "Verschwommene Sicht und stark gedämpftes Gehör. Du verlierst kurzzeitig die akustische Orientierung im Raum.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/75/OrangeBrainIcon.png"
        },
        "bleed_light": { 
            de: "Blutung: Leicht", en: "Light Bleeding", 
            desc: "Wird durch Streifschüsse, kleine Kaliber oder Umgebungs-Schaden (Stacheldraht) verursacht.",
            effect: "Langsamer Blutverlust (rotes Tropfen-Icon). Heilt im Gegensatz zu schweren Wunden über Zeit von selbst, kann aber mit einer Bandage sofort gestoppt werden.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7b/LightBleedIcon.png"
        },
        "bleed_med": { 
            de: "Blutung: Mittel", en: "Medium Bleeding", 
            desc: "Klassische Schusswunde, typischerweise durch Sturmgewehre verursacht.",
            effect: "Moderater Blutverlust. Heilt NICHT von selbst. Muss zwingend mit Bandage, Combat Gauze oder Tourniquet behandelt werden.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/6f/MediumBleedingIcon.png"
        },
        "bleed_heavy": { 
            de: "Blutung: Schwer", en: "Severe Bleeding", 
            desc: "Arterielle Blutung. Meist durch schwere Kaliber (Sniper) oder Volltreffer auf ungeschützte Gliedmaßen.",
            effect: "Extrem schneller Blutverlust! Führt in kürzester Zeit zum Koma. Das Tourniquet (CAT) ist die einzig verlässliche und schnellste Sofortmaßnahme.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e7/SevereBleedingIcon.png"
        },
        "fatigued": { 
            de: "Ermüdung", en: "Fatigued", 
            desc: "Verursacht durch permanentes Sprinten oder beginnenden Mangel an Hydration/Energie.",
            effect: "Hörbarer Herzschlag und schweres Atmen. Stoppt vorübergehend die Regeneration der Bein-Ausdauer (Leg Stamina).",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/34/FatiguedIcon.png"
        },
        "exhausted": { 
            de: "Erschöpfung", en: "Exhausted", 
            desc: "Kritischer Mangel an Hydration/Energie oder extreme Gewichts-Überbelastung.",
            effect: "Sichtbares Waffenwackeln (Sway). Verhindert Sprinten, Springen und Klettern. Regeneration der Ausdauer ist komplett gestoppt. Sofort essen/trinken!",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/66/ExhaustedIcon.png"
        },
        "coma": { 
            de: "Koma", en: "Coma", 
            desc: "Tritt auf, wenn dein Blutvolumen auf Null sinkt oder lebenswichtige Organe (Herz, Gehirn) zerstört werden.",
            effect: "Vollständiger Kontrollverlust, der Charakter kollabiert. Du hast ein kurzes Zeitfenster, in dem dich Teammitglieder retten können (Blutbeutel, Epi-Pen).",
            img: "https://via.placeholder.com/150x150/222222/444444?text=Coma"
        },
        "suffering": { 
            de: "Leiden", en: "Suffering", 
            desc: "Begleiterscheinung von zerstörten Knochen (Arme/Beine) oder massiven Organschäden.",
            effect: "Der Charakter stöhnt unkontrolliert vor Schmerzen (Gegner können dich dadurch orten!). Führt zu Schwindel und verzieht das Aiming.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/69/SufferingIcon.png"
        },
        "pain": { 
            de: "Schmerz", en: "Pain", 
            desc: "Entsteht durch Wunden oder 'Blunt Force Trauma' (Rüstung stoppt das Projektil, aber die Aufprallenergie schlägt durch).",
            effect: "Verschwommene Ränder im Sichtfeld und leichtes Pulsieren. Heilt bei Prellungen (Bruises) oft von selbst, ansonsten Schmerzmittel nutzen.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/9b/PainIcon.png"
        },
        "nausea": { 
            de: "Übelkeit", en: "Nausea", 
            desc: "Entsteht primär durch Leberschäden, starke radioaktive Verstrahlung oder Intoxikation.",
            effect: "Verzerrte Sicht und Unwohlsein. Nutze zwingend ein Surgery Kit (falls Leber beschädigt) oder verlasse das radioaktive Gebiet.",
            img: "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7a/NauseousIcon.png"
        },
        "intoxication": { 
            de: "Vergiftung", en: "Intoxication", 
            desc: "Akkumuliert sich durch den übermäßigen Einsatz von Stimulanzien (wie Painkillern) oder unsauberem Sumpf-Wasser.",
            effect: "Baut sich langsam auf und führt zu schwerer Übelkeit. Sinkt über Zeit langsam ab oder erfordert spezifische Gegenmittel.",
            img: "https://via.placeholder.com/150x150/222222/a35a7c?text=Toxic"
        },
        "radiation": { 
            de: "Verstrahlung", en: "Radiation", 
            desc: "Entsteht in hochgradig verstrahlten Gebieten (wie dem Ground Zero Krater am Airfield).",
            effect: "Akkumuliert im Körper. Führt unbehandelt zu Gewebeschäden, Übelkeit und letztendlich zum Tod. Erfordert Schutzanzug/Gasmaske.",
            img: "https://via.placeholder.com/150x150/222222/aaff00?text=Radiation"
        }
    };

    function updateStatusEffect() {
        const val = document.getElementById('statusSelect').value;
        const infoDisplay = document.getElementById('statusInfo');
        const imgElement = document.getElementById('statusImg');
        
        if (val === "") {
            infoDisplay.innerHTML = "Wähle einen Effekt für Ursachen und Auswirkungen...";
            imgElement.src = "https://via.placeholder.com/150x150/222222/7ca35a?text=Status+Wählen";
        } else {
            const info = statusEffectsDb[val];
            infoDisplay.innerHTML = `
                <div style="margin-bottom: 8px;"><strong>Ursache:</strong> ${info.desc}</div>
                <div style="color: #ff4c4c; font-weight: bold; margin-bottom: 4px;">Auswirkung:</div>
                <div style="line-height: 1.4;">${info.effect}</div>
            `;
            imgElement.src = info.img;
        }
    }
    
// ==========================================
// 13. HÄNDLER FREISCHALTUNGEN (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
// isMeta: true markiert absolute Game-Changer Items!

const tradersDb = [
    // ==========================================
    // --- GUNNY (Westliche Waffen & Munition) ---
    // ==========================================
    { trader: "Gunny", level: 1, name: "M4A1 & CQ-A1 (5.56x45)", isMeta: false, info: "Basis-Sturmgewehre. Die CQ-A1 ist eine günstige chinesische Alternative zur M4." },
    { trader: "Gunny", level: 1, name: "Glock 19 & Remington 870", isMeta: false, info: "Verlässliche Nebenwaffen und Schrotflinten für den Start." },
    { trader: "Gunny", level: 1, name: "M193 Munition (5.56x45)", isMeta: false, info: "Zivile Munition. Kaum Rüstungsdurchschlag." },
    { trader: "Gunny", level: 1, name: "Aimpoint T-1 Rotpunktvisier", isMeta: false, info: "Gutes, klares Visier für die ersten Missionen." },
    
    { trader: "Gunny", level: 2, name: "KAC QDSS-NT4 Schalldämpfer", isMeta: true, info: "Dein erster Schalldämpfer für die M4! Ein absoluter Game-Changer, um KI-Gruppen nicht sofort zu alarmieren." },
    { trader: "Gunny", level: 2, name: "M855 Munition (5.56x45)", isMeta: false, info: "Militär-Standard. Durchschlägt leichte Helme und Soft-Armor (NIJ IIIA)." },
    { trader: "Gunny", level: 2, name: "Trijicon ACOG 4x Visier", isMeta: true, info: "Das beste Mid-Game Visier für Distanzkämpfe im dichten Dschungel." },
    { trader: "Gunny", level: 2, name: "EOTech EXPS3 Holovisier", isMeta: false, info: "Perfekt für den Nahkampf (Tiger Bay & Bunker)." },
    { trader: "Gunny", level: 2, name: "30-Schuss PMAG Magazin", isMeta: false, info: "Leichter und zuverlässiger als die Standard-Blechmagazine." },

    { trader: "Gunny", level: 3, name: "DDM4 (Blueprint Unlock)", isMeta: true, info: "Nur verfügbar nach Abschluss der Quest 'Phantom Lance'. Eine der präzisesten 5.56 Waffen im Spiel!" },
    { trader: "Gunny", level: 3, name: "M855A1 AP Munition (5.56x45)", isMeta: true, info: "Durchschlägt Level III Rüstungen zuverlässig. Die absolute Pflicht-Munition ab Level 3!" },
    { trader: "Gunny", level: 3, name: "Elcan SpecterDR 1-4x", isMeta: true, info: "Umschaltbares Visier (Nahkampf & Distanz). Das beliebteste Meta-Visier." },
    { trader: "Gunny", level: 3, name: "SureFire RC2 Schalldämpfer", isMeta: true, info: "Besserer Schalldämpfer als der KAC, extrem gute Rückstoßdämpfung." },
    { trader: "Gunny", level: 3, name: "60-Schuss SureFire Magazin", isMeta: true, info: "Verdoppelt deine Feuerkraft ohne Nachladen. Überlebenswichtig für Tiger Bay!" },

    { trader: "Gunny", level: 4, name: "L403A1 / KS-1 Rifle", isMeta: true, info: "0.4 Neuzugang! Das britische Elite-Gewehr. Teuer, aber überragendes Handling." },
    { trader: "Gunny", level: 4, name: "M995 AP Munition (5.56x45)", isMeta: true, info: "Panzerbrechend! Ignoriert fast jede Rüstung im Spiel (selbst NIJ III++)." },
    { trader: "Gunny", level: 4, name: "Vudu 1-6x Scharfschützen-Visier", isMeta: true, info: "Das absolute Meta-Sniper-Visier für westliche Sturmgewehre." },
    { trader: "Gunny", level: 4, name: "Waffenkoffer (Weapon Case)", isMeta: true, info: "Der Stash-Retter! Bietet enormen Platz für deine gesammelten Waffen." },
    { trader: "Gunny", level: 4, name: "PEQ-15 Laser/IR Modul", isMeta: false, info: "Wichtig für Night-Raids mit Nachtsicht." },

    // ==========================================
    // --- HANDSHAKE (Rüstungen, Rucksäcke & Helme) ---
    // ==========================================
    { trader: "Handshake", level: 1, name: "Patrol Rucksack (16 Slots)", isMeta: false, info: "Besser als nichts für die ersten Loot-Runs." },
    { trader: "Handshake", level: 1, name: "6B2 Schutzweste (NIJ IIIA)", isMeta: false, info: "Schützt nur vor Pistolen und Schrot. Gegen Sturmgewehre der KIs komplett nutzlos." },
    { trader: "Handshake", level: 1, name: "PASGT Helm", isMeta: false, info: "Basis-Kopfschutz." },

    { trader: "Handshake", level: 2, name: "Delta Backpack (24 Slots)", isMeta: true, info: "Der erste richtig große Rucksack. Erhöht deinen Loot-Profit massiv!" },
    { trader: "Handshake", level: 2, name: "M2 Plate Carrier (NIJ III)", isMeta: true, info: "Die erste brauchbare Panzerung. Stoppt Standard-Sturmgewehrkugeln (z.B. PS-Munition)." },
    { trader: "Handshake", level: 2, name: "GSSH-01 Headset", isMeta: false, info: "Verstärkt feindliche Schritte, macht aber eigenen Beschuss unangenehm laut." },
    { trader: "Handshake", level: 2, name: "MICH Helm", isMeta: false, info: "Solider NIJ IIIA Helm mit Platz für Headsets." },

    { trader: "Handshake", level: 3, name: "Recon Plate Carrier (NIJ III+)", isMeta: true, info: "Die Meta-Rüstung! Perfekte Balance aus Gewicht, Stauraum und Schutz vor harten Treffern." },
    { trader: "Handshake", level: 3, name: "3-Day Assault Backpack", isMeta: false, info: "Sehr großer Rucksack, macht dich aber schwerfälliger und senkt die Ausdauer." },
    { trader: "Handshake", level: 3, name: "AMP Headset", isMeta: true, info: "Das beste Headset. Filtert laute Schüsse perfekt heraus und verstärkt nur Schritte." },

    { trader: "Handshake", level: 4, name: "Defender-2 Weste (NIJ III++)", isMeta: true, info: "Die stärkste Rüstung im Spiel! Macht dich fast unbesiegbar gegen Standard-Kugeln." },
    { trader: "Handshake", level: 4, name: "FAST MT Helm", isMeta: true, info: "Kombinierbar mit Nachtsichtgeräten (NVG) und ballistischem Gesichtsschutz." },
    { trader: "Handshake", level: 4, name: "Rush Backpack", isMeta: true, info: "Der beste Rucksack im Endgame. Riesig, aber mit moderaten Speed-Penalties." },
    { trader: "Handshake", level: 4, name: "Ausrüstungskoffer (Gear Case)", isMeta: true, info: "Spart massiv Platz in deiner Stash, indem du Helme und Westen stapelst." },

    // ==========================================
    // --- LAB RAT (Medizin & Vorräte) ---
    // ==========================================
    { trader: "Lab Rat", level: 1, name: "Bandagen & Tourniquets", isMeta: false, info: "Stoppt leichte (Bandage) und schwere (Tourniquet) Blutungen." },
    { trader: "Lab Rat", level: 1, name: "Kleine Blutkonserve (Blood Bag)", isMeta: false, info: "Füllt dein Blutlevel nach schweren Treffern langsam wieder auf." },
    { trader: "Lab Rat", level: 1, name: "Splint (Schiene)", isMeta: false, info: "Heilt gebrochene Knochen, um wieder rennen zu können." },

    { trader: "Lab Rat", level: 2, name: "SurKit (Chirurgisches Set)", isMeta: true, info: "Lebensretter! Heilt zerstörte Organe (Lunge, Leber) im Feld, sonst verblutest du unweigerlich." },
    { trader: "Lab Rat", level: 2, name: "Große Blutkonserve", isMeta: true, info: "Stellt dein gesamtes Blutvolumen auf einmal wieder her. Sehr wichtig nach Coma-Phasen." },
    { trader: "Lab Rat", level: 2, name: "IFAK (Erste-Hilfe-Set)", isMeta: false, info: "Kombiniert Blutungskontrolle und leichte Heilung auf wenig Platz." },
    { trader: "Lab Rat", level: 2, name: "Ibuprofen", isMeta: false, info: "Günstige, langanhaltende Schmerzlinderung." },

    { trader: "Lab Rat", level: 3, name: "Adrenalin-Injektor", isMeta: true, info: "Regeneriert sofort massiv Ausdauer. Überlebenswichtig für die Flucht aus Hotzones!" },
    { trader: "Lab Rat", level: 3, name: "Morphin-Injektor", isMeta: true, info: "Unterdrückt sofort alle Schmerz-Effekte und unscharfe Sicht, selbst bei gebrochenen Beinen." },
    { trader: "Lab Rat", level: 3, name: "4-Slot Medkits", isMeta: false, info: "Heilt Wunden extrem schnell, belegt aber viel Platz." },

    { trader: "Lab Rat", level: 4, name: "Anti-Strahlen Pillen (Rad-X)", isMeta: true, info: "0.4 Feature: Ohne diese Pillen und eine Gasmaske überlebst du das Ground Zero Epizentrum nicht!" },
    { trader: "Lab Rat", level: 4, name: "Regenerations-Stims", isMeta: true, info: "Heilt dich langsam passiv über Zeit hoch. Sehr teuer, aber das absolute Meta für Tiger Bay." },
    { trader: "Lab Rat", level: 4, name: "Medizin-Koffer (Medical Case)", isMeta: true, info: "Riesige Box für deine Stash, um all deine SurKits und Stims sauber zu lagern." },

    // ==========================================
    // --- ARTISAN (Östliche Waffen, AKs & Mods) ---
    // ==========================================
    { trader: "Artisan", level: 1, name: "AKM, SKS & Type 56", isMeta: false, info: "Die Arbeitstiere. Schlagen hart zu, haben aber enormen Rückstoß." },
    { trader: "Artisan", level: 1, name: "7.62x39mm PS Munition", isMeta: false, info: "Solider Durchschlag gegen frühe Helme und leichte Westen." },
    
    { trader: "Artisan", level: 2, name: "AK-74M", isMeta: false, info: "Viel präziser als die AKM, feuert das kleinere 5.45 Kaliber." },
    { trader: "Artisan", level: 2, name: "PBS-1 Schalldämpfer (7.62)", isMeta: true, info: "Macht deine AKM lautlos. Ein Muss für Sägewerk und Ban Pa." },
    { trader: "Artisan", level: 2, name: "Kobra & PSO-1 Visiere", isMeta: false, info: "Klassische russische Visiere für Nahkampf (Kobra) und Distanz (PSO-1)." },

    { trader: "Artisan", level: 3, name: "AK-12 (Spearhead Modell)", isMeta: true, info: "Extrem geringer Rückstoß, fantastische Feuerrate. Die beste 5.45 Waffe!" },
    { trader: "Artisan", level: 3, name: "5.45x39mm BP Munition", isMeta: true, info: "Hervorragende Penetration gegen militärische Panzerung." },
    { trader: "Artisan", level: 3, name: "PBS-4 & Hexagon Schalldämpfer", isMeta: true, info: "Die besten Suppressors für alle 5.45 Modelle." },
    { trader: "Artisan", level: 3, name: "60-Schuss AK Magazine", isMeta: true, info: "Trommelmagazine für Dauerfeuer in Häuserkämpfen." },

    { trader: "Artisan", level: 4, name: "7.62x39mm MAI AP Munition", isMeta: true, info: "Die beste 7.62 Munition im Spiel! Zerstört dicke Westen auf einen Schlag." },
    { trader: "Artisan", level: 4, name: "5.45x39mm BS / 7N39 Igolnik", isMeta: true, info: "Absolutes AP-Monster für die AK-12. Geht durch alles durch." },
    { trader: "Artisan", level: 4, name: "OKP-7 Visier", isMeta: false, info: "Das beliebteste und sauberste Rotpunkt-Visier für die AK-Plattform." },
    { trader: "Artisan", level: 4, name: "Item Case", isMeta: true, info: "Bietet massig Platz für Schrott, Loot und Werkzeuge in deiner Basis." },

    // ==========================================
    // --- TURNCOAT (Ex-Söldner Gear, Rigs & 7.62x54R) ---
    // ==========================================
    { trader: "Turncoat", level: 1, name: "Mosin-Nagant & 7.62x54R LPS", isMeta: false, info: "Das alte Scharfschützengewehr. Ein Schuss, massiver Schaden." },
    { trader: "Turncoat", level: 1, name: "Bank Robber & Chicom Rigs", isMeta: false, info: "Günstige Westen für reine Zero-to-Hero Loot-Runs ohne Rüstung." },

    { trader: "Turncoat", level: 2, name: "SVD Dragunov (Basis)", isMeta: false, info: "Starkes halbautomatisches Sniper, aber ohne Mods schwer zu kontrollieren." },
    { trader: "Turncoat", level: 2, name: "PU Scope", isMeta: false, info: "Das klassische Visier für die Mosin." },
    { trader: "Turncoat", level: 2, name: "Phantom Rig", isMeta: false, info: "Sehr gute taktische Weste mit viel Stauraum." },

    { trader: "Turncoat", level: 3, name: "AK-15", isMeta: true, info: "Moderne 7.62x39 Variante. Tödlich und extrem präzise." },
    { trader: "Turncoat", level: 3, name: "7.62x54R 7N1 Sniper-Munition", isMeta: true, info: "Extrem hoher Fleisch-Schaden. Tötet Ziele ohne NIJ III oft mit einem Körpertreffer." },
    { trader: "Turncoat", level: 3, name: "TGP-V Schalldämpfer (SVD)", isMeta: true, info: "Reduziert den enormen Knall der SVD. Ein Muss für Tiger Bay Sniper." },
    { trader: "Turncoat", level: 3, name: "4-Slot Gürtel (Belts)", isMeta: true, info: "Die besten Gürtel im Spiel! Endlich Platz für große 60-Schuss Magazine in der Schnellauswahl." },

    { trader: "Turncoat", level: 4, name: "7.62x54R SNB AP Munition", isMeta: true, info: "Durchschlägt absolut jede Deckung und jeden Helm. Die stärkste Kugel des Spiels." },
    { trader: "Turncoat", level: 4, name: "SVT-40", isMeta: true, info: "0.4 Neuzugang! Historisch, aber verheerende Stoppwirkung." },
    { trader: "Turncoat", level: 4, name: "Munitions-Koffer (Ammo Case)", isMeta: true, info: "Endlich ein Ort, um deine gesammelte AP-Munition platzsparend zu lagern!" },

    // ==========================================
    // --- BANSHEE (High-End NATO, Sniper & Night Ops) ---
    // ==========================================
    { trader: "Banshee", level: 1, name: "M700 Sniper", isMeta: false, info: "Präzises westliches Repetiergewehr." },
    { trader: "Banshee", level: 1, name: "7.62x51mm M80 Munition", isMeta: false, info: "Gute Basis-Munition, stoppt KIs auf Distanz." },

    { trader: "Banshee", level: 2, name: "M700 Schalldämpfer", isMeta: true, info: "Macht dich zum tödlichen Geist aus den Hügeln von Midnight Sapphire." },
    { trader: "Banshee", level: 2, name: "Razor HD Gen II 1-6x Visier", isMeta: true, info: "Wahnsinnig klare Sicht. Das beste Zoom-Visier für mittlere und große Distanzen." },
    { trader: "Banshee", level: 2, name: "7.62x51mm M62 Tracer", isMeta: false, info: "Gute Penetration, aber die Leuchtspur verrät nachts deine Position." },

    { trader: "Banshee", level: 3, name: "M1A & SR-25 DMR", isMeta: true, info: "Halbautomatische Sniper-Gewehre. Perfekt, um ganze Squads auf Distanz zu zerlegen." },
    { trader: "Banshee", level: 3, name: "7.62x51mm M61 AP Munition", isMeta: true, info: "Durchschlagskraft pur. Tötet stark gepanzerte Ziele extrem schnell." },
    { trader: "Banshee", level: 3, name: "Großer Schlüsselbund (Keyholder)", isMeta: true, info: "Pflichtkauf! Bietet enormen Platz für alle deine Keys aus dem 0.4 Update." },

    { trader: "Banshee", level: 4, name: "Nachtsichtgeräte (NVGs)", isMeta: true, info: "Quad-Nods! Macht die Dunkelheit zu deinem Revier (Night Raids 22-05 Uhr)." },
    { trader: "Banshee", level: 4, name: "Thermal-Visiere (FLIR)", isMeta: true, info: "Unglaublich teuer, aber OP. Du siehst Feinde leuchtend weiß durch das dickste Blattwerk!" },
    { trader: "Banshee", level: 4, name: "Alien Pistole (Laugo Alien)", isMeta: true, info: "0.4 Neuzugang! Die beste Pistole im Spiel, feuert fast ohne spürbaren Rückstoß." },
    { trader: "Banshee", level: 4, name: "M993 AP Munition", isMeta: true, info: "Höchster Penetrationswert im gesamten Spiel. Geht durch Defender-2 Westen wie durch Butter." },

    // ==========================================
    // --- VULTURE (0.4 Secret Vendor & Boss Gear) ---
    // ==========================================
    { trader: "Vulture", level: 1, name: "Boss Skins (z.B. Viper's 1911 C)", isMeta: false, info: "Kosmetische Freischaltungen und modifizierte Waffen, nachdem du Boss-Tasks erledigt hast." },
    { trader: "Vulture", level: 2, name: "Rotierende Boss-Schlüssel", isMeta: true, info: "Vulture verkauft gelegentlich extrem seltene Boss-Schlüssel für In-Game Cash." },
    { trader: "Vulture", level: 3, name: "AK-308 (Blueprint Freischaltung)", isMeta: true, info: "Nach Abschluss der 'Chameleon' Quest. Ein absolutes Monster-Gewehr auf 7.62x51mm Basis." },
    { trader: "Vulture", level: 4, name: "Vulture's Black Market Case", isMeta: false, info: "Geheimer Stash-Koffer für wertvolle Schmuggelware." },
    { trader: "Vulture", level: 4, name: "Secure Container Upgrades", isMeta: true, info: "Vergrößert deine sichere Lockbox (z.B. auf 3x3). Das absolute Endgame-Grind-Ziel!" }
];

    // 14. FRAKTIONEN DATENBANK
    const factionDb = {
        "mss": {
            name: "Mithras Security Systems",
            motto: "Aegis Fortis",
            desc: "Mithras bezeichnet sich selbst als PMC-System, das von Soldaten für Soldaten geführt wird. Das System fragt nicht nach der Vergangenheit seiner Bewerber, sondern beurteilt sie nur nach ihren Fähigkeiten im Feld. Die Organisation wird von einem Komitee hochrangiger Offiziere geleitet. Ihr Hauptquartier in Lamang befindet sich im südlichen Nam Thaven.",
            logo: "https://static.wikia.nocookie.net/gray-zone-warfare/images/c/c4/MSS_logo.png"
        },
        "csi": {
            name: "Crimson Shield International",
            motto: "Ex Cineribus",
            desc: "Crimson Shield stieg während des syrischen Bürgerkriegs auf. Berühmt für eine beeindruckende Erfolgsquote von 95 %, aber oft kritisiert für ihre rücksichtslosen Methoden. Niemand weiß, wer wirklich das Sagen hat. Ihre Elite-Soldaten sind für harte, kompromisslose Einsätze bekannt. Ihr Hauptquartier in Lamang liegt in Kiu Vongsa.",
            logo: "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/12/CSI_logo.png"
        },
        "lri": {
            name: "Lamang Recovery Initiative",
            motto: "Salus Populi",
            desc: "Ein PMC, das von einem exzentrischen Technologie-Milliardär gegründet und finanziert wurde. Die LRI präsentiert sich als streng philanthropische Organisation, deren Ziel es ist, die Region nach dem 'Ereignis' zu sichern und die Zivilbevölkerung zu schützen. Sie operieren extrem hochtechnisiert und arbeiten strikt nach Protokoll. Ihr Hauptquartier befindet sich in Pha Lang.",
            logo: "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7f/LRI_logo.png"
        },
        "laf": {
            name: "Lamang Army Forces",
            motto: "-",
            desc: "Die Streitkräfte von Lamang (LAF) sind die nationalen Streitkräfte des Landes. Sie bestehen größtenteils aus Angehörigen der Armee von Lamang, vom einfachen Soldaten bis zum Kommandeur. Diese Fraktion kann nicht von Spielern gespielt werden. Es handelt sich um eine KI-Fraktion, die dazu dient, Gebiete auf der Karte zu bevölkern und die Hintergrundgeschichte zu berücksichtigen.",
            logo: "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/9e/LAF_Faction_icon.png"
        }
    };

    // ==========================================
// 15. CODES & PASSWÖRTER (0.4 SPEARHEAD - 100% COMPLETE)
// ==========================================
const codesDb = [
    // --- 0.4 SPEARHEAD (NEU) ---
    { name: "Kong Thab Depot Bunker (Kong Thab Bunker)", code: "Dynamisch", loc: "Kong Thab Depot", info: "Die Tür zum neuen Bunker erfordert ein Keypad. Der Code (z.B. 6867 oder 3412) generiert sich bei jedem Server-Neustart neu und liegt auf Notizzetteln im näheren Umkreis versteckt (Wichtig für die Quest 'Plan B')." },
    { name: "Na Xieng Farm (Farm Padlock)", code: "9135", loc: "Na Xieng (Mohnfelder / Poppy Fields)", info: "<b>Fester Code!</b> Schließt ein Vorhängeschloss auf, oft genutzt für die Vulture-Quest 'The New Contact' (0.4). Die Hinweise dazu liegen bei den Koordinaten 192,154 und 178,153." },

    // --- NAKASA VILLAGE & FORT NARITH (Das 5-Code-Rätsel) ---
    // ACHTUNG: Im Erdgeschoss des blauen Hauses in Nakasa (140, 134) liegen 5 Haftnotizen auf der Küchentheke. Diese Codes wechseln bei jedem Server-Neustart und öffnen die folgenden 5 Schlösser:
    { name: "Nakasa Obergeschoss (Nakasa Upper Floor Door)", code: "Dynamisch (5er Set)", loc: "Nakasa Village (Blaues Haus)", info: "Eine der 5 Haftnotizen aus der Küche im Erdgeschoss öffnet diese Keypad-Tür im oberen Stockwerk." },
    { name: "Nakasa Munitionskiste (Nakasa Ammo Box)", code: "Dynamisch (5er Set)", loc: "Nakasa Village (Holzhütte)", info: "Eine Kiste in der Holzhütte mit der Veranda neben dem blauen Haus. Der Code ist eine der 5 Notizen aus der Küche." },
    { name: "FN Müllplatz-Kiste (Dumping Ground Crate)", code: "Dynamisch (5er Set)", loc: "Nördlich von Fort Narith (Dumping Ground)", info: "Militärkiste auf dem Schrottplatz (nahe der Landezone). Der Code ist ebenfalls eine der 5 Notizen aus dem blauen Haus in Nakasa." },
    { name: "FN Garagen-Kiste (Garage Crate)", code: "Dynamisch (5er Set)", loc: "Bürogebäude gegenüber dem FN-Haupttor", info: "Militärkiste auf dem unteren Regal in der Garage (nördlich vom Motel). Code stammt aus der Nakasa-Küche." },
    { name: "Squad Mission Tür (Squad Mission Door)", code: "Dynamisch (5er Set)", loc: "Nakasa Village", info: "Der fünfte Code aus der Küche öffnet eine gesicherte Tür im Dorf für bestimmte Waffenkisten-Missionen." },
    
    // --- FORT NARITH (Weitere) ---
    { name: "Flugkontrollturm (Air Control Tower)", code: "9198", loc: "Fort Narith (Airfield)", info: "<b>Fester Code!</b> Der Code für den Tower findet sich auf einem Zettel im Serverraum A204 der Militärbaracken." },
    { name: "Static Echoes Tür (Static Echoes Door)", code: "Dynamisch (Oft 2063)", loc: "Nakasa Village (Obergeschoss)", info: "Nachdem du die erste Tür im Obergeschoss (mit dem Küchen-Code) geöffnet hast, liegt drinnen ein Buch mit dem Code für diese zweite Tür." },

    // --- HUNTER'S PARADISE & SAWMILL ---
    { name: "Alter Bunker (Old Bunker Padlock)", code: "Dynamisch", loc: "Hunter's Paradise", info: "Der Code steht auf einer leuchtend gelben Haftnotiz im Büro hinter der Waffenkammer, rechts an der Wand direkt neben der gefesselten Leiche." },
    { name: "Sägewerk Schuppen & Lager (Sawmill Padlocks)", code: "Dynamisch", loc: "Lumber Yard (Sawmill)", info: "Es gibt Vorhängeschlösser für den Schuppen, die Toilette und das Lagerhaus. Die Codes spawnen immer auf Zetteln in der direkten Umgebung." },

    // --- STARTGEBIETE (Starter Towns) & BAN PA ---
    { name: "Villa Elena Tresor (Villa Garage Safe)", code: "Dynamisch", loc: "Startstadt (Starter Town)", info: "Der Code für den Safe in der Garage liegt auf einem kleinen Notizblock auf dem Nachttisch im Schlafzimmer im Obergeschoss der Villa." },
    { name: "Rathaus Tresor (Town Hall Safe)", code: "Dynamisch", loc: "Startstadt (Starter Town)", info: "Der Code befindet sich auf einem Zettel direkt neben dem Schalter für das stadtweite Übertragungsradio." },
    { name: "Ban Suk Hütte (Ban Suk Door)", code: "8777", loc: "Ban Suk (Südöstliche Halbinsel)", info: "<b>Fester Code!</b> Steht in einem roten Buch auf einem Boot in der Nähe. <b>Pro-Tipp:</b> Du kannst das Schloss komplett umgehen, indem du einfach über das Bücherregal neben der Tür kletterst!" },

    // --- YBL-1 BUNKER & TIGER BAY ---
    { name: "Gefängniszelle & Lager (Prison Cell & Storage)", code: "Dynamisch", loc: "YBL-1 Bunker", info: "Die Codes für die Zelle und das Padlock-Lager im Bunker generieren sich dynamisch und sind in benachbarten Räumen auf Tischen versteckt." },
    { name: "UNLRA Hauptquartier (UNLRA HQ Keypad)", code: "Dynamisch", loc: "Tiger Bay", info: "Der Code für das Tastenfeld spawnt zufällig in der direkten Umgebung des UNLRA-Gebäudes (oft auf Schreibtischen)." }
];

// ==========================================
// 16. LOOT RUNS & FARMING ROUTEN (0.4 SPEARHEAD)
// ==========================================
const lootRoutesDb = [
    {
        id: "route_midnight",
        name: "Der Millionärs-Run (The Millionaire's Run)",
        location: "Midnight Sapphire (Hotel & Villen)",
        danger: "Hoch (High)",
        time: "~ 20-25 Minuten",
        requirements: "Wallet, Hotel/Villa Keys.",
        target: "Bargeld, Elektronik, M700 & SIG MCX Blueprint.",
        video: "https://www.youtube.com/watch?v=xoHA6eLkHSc",
        steps: [
            "<b>1. Landung:</b> LZ Hotel 1 oder 2.",
            "<b>2. Villen:</b> Tresore in Schlafzimmern und PCs in Büros looten.",
            "<b>3. Hotel EG:</b> Rechts hinten den <b>SIG MCX Blueprint</b> sichern.",
            "<b>4. Hotelzimmer:</b> Attachments und Wertsachen hinter verschlossenen Türen.",
            "<b>5. Dach:</b> Am Ende den <b>M700 Blueprint</b> und LTSD Laser finden."
        ],
        tip: "Verkaufe Schmuck an Turncoat (125%) und Elektronik an Lab Rat (125%)."
    },
    {
        id: "route_narith",
        name: "Die Waffenkammer (The Armory Run)",
        location: "Fort Narith (HQ & Baracken)",
        danger: "Extrem (Extreme)",
        time: "~ 30-35 Minuten",
        requirements: "Delta Backpack, Rüstung NIJ III+.",
        target: "Rüstung, AP-Munition, DDM4 & AK-308 Blueprint.",
        video: "https://www.youtube.com/watch?v=AIDko0yBmos",
        steps: [
            "<b>1. Landung:</b> LZ Delta 1/2. Achtung vor Mörserbeschuss!",
            "<b>2. Schrottplatz:</b> Militärkiste looten (Nakasa-Code nötig).",
            "<b>3. Baracken:</b> 2. Stock <b>DDM4 Blueprint</b>, Raum A204 Code holen.",
            "<b>4. Gefängnis:</b> In den Zellen-Gängen nach dem <b>AK-308 Blueprint</b> suchen.",
            "<b>5. Tower:</b> Code nutzen und Waffen-Racks am Airfield plündern."
        ],
        tip: "Nimm nur die teuren Attachments mit, um Platz für Rüstungen zu sparen."
    },
    {
        id: "route_tigerbay",
        name: "Das Urbane Chaos (The Urban Jungle)",
        location: "Tiger Bay (UNLRA & Mall)",
        danger: "Maximum (Insane)",
        time: "~ 40-50 Minuten",
        requirements: "Squad empfohlen, viel Munition, große Med-Kits.",
        target: "SVD Dragunov Blueprint, High-Tier Meds, UNLRA Intel.",
        video: "https://www.youtube.com/watch?v=6TaADu5-Fl4",
        steps: [
            "<b>1. Landung:</b> India 2 oder Lima LZs.",
            "<b>2. UNLRA Camp:</b> Sanitätszelte für OP-Kits und Stims plündern.",
            "<b>3. UNLRA HQ:</b> Dynamischen Code suchen und blaue Quest-Ordner sichern.",
            "<b>4. Schleichweg:</b> Durch den Zaun beim Schrottplatz zur Mall-Rückseite.",
            "<b>5. Mall:</b> Im Hinterzimmer des Bookstores den <b>SVD Blueprint</b> holen."
        ],
        tip: "Farme KI rund um die Mall für den 'TB-Mall-Key', falls er dir fehlt."
    },
    {
        id: "route_hunters",
        name: "Der Schrottsammler (The Scavenger Run)",
        location: "Hunter's Paradise",
        danger: "Mittel (Medium)",
        time: "~ 15 Minuten",
        requirements: "Ideal für Solo-Spieler.",
        target: "Weapon Parts, M14 EBR Blueprint, Mods.",
        video: "https://www.youtube.com/watch?v=am99ZXCWC10",
        steps: [
            "<b>1. Landung:</b> LZ Foxtrot 1 oder 2.",
            "<b>2. Schießstand:</b> Munition und Weapon Mods auf Tischen/Bänken.",
            "<b>3. Bunker:</b> Gelbe Notiz im Büro lesen und Bunker-Schloss öffnen.",
            "<b>4. Waffenkammer:</b> Im Nebenraum den <b>M14 EBR Blueprint</b> einsammeln.",
            "<b>5. Boss:</b> Hostile Commander für Rüstung und Keys ausschalten."
        ],
        tip: "Perfekt für Artisan-Dailies (Defekte Waffenteile sammeln)."
    },
    {
        id: "route_banpa",
        name: "Die Ban Pa Schatzsuche (The Ban Pa Treasure Hunt)",
        location: "Ban Pa (Fischerdorf)",
        danger: "Mittel (Medium)",
        time: "~ 20 Minuten",
        requirements: "Keine speziellen Anforderungen.",
        target: "Holzstatuen, Lithiumfett, Schmuck.",
        video: "https://www.youtube.com/watch?v=9TJg6uGjifA",
        steps: [
            "<b>1. Landung:</b> LZ India 1 oder 2.",
            "<b>2. Pfahlbauten:</b> Depot-Codes auf Zetteln suchen, Lithiumfett looten.",
            "<b>3. Ältestenhaus:</b> Via Außengeländer/Balkon ohne Key eindringen.",
            "<b>4. Versteck:</b> Munitionskiste unter dem Tisch im Geheimraum plündern.",
            "<b>5. Naga Boss:</b> Aktenkoffer beim Radioturm (192, 137) sichern."
        ],
        tip: "Bester Ort für die 3 Holzstatuen der 'Hazardous Treasures' Quest."
    }
];

    // 17. Waffen Blueprints
    const blueprintDb = {
        "AK-308": { loc: "Fort Narith Jail (142, 130)", desc: "Hinter einer aufkickbaren Tür unter der Kaffeemaschine.", tip: "Du musst den Jail Key besitzen." },
        "AKMN": { loc: "Erhöhte Hütte (195, 153)", desc: "In der kleinen Hütte auf halbem Weg zwischen Ban Pa und Tiger Bay.", tip: "Vorsicht vor den Patrouillen im Dschungel." },
        "DDM4": { loc: "Fort Narith Barracks (141, 131)", desc: "Im 2. Stock der Baracken auf einem Tisch.", tip: "Häufig umkämpftes Gebiet!" },
        "M700 Sniper": { loc: "Hotel Dach (Midnight Sapphire)", desc: "Am entfernten Ende des Dachs (Treppe hoch).", tip: "Nutze den Heli-Landeplatz Hotel 1." },
        "M14 EBR": { loc: "Hunter's Paradise (159, 168)", desc: "Im Raum direkt neben der verschlossenen Waffenkammer.", tip: "Kein Schlüssel für diesen spezifischen Raum nötig." },
        "MP7A2": { loc: "Ransacked Tourist Shelter (188, 130)", desc: "Liegt auf der Couch im Hauptraum.", tip: "Benötigt den Tourist Shelter Key." },
        "SIG MCX": { loc: "Hotel Midnight Sapphire (171, 166)", desc: "Im Erdgeschoss, hintere rechte Seite.", tip: "Gute Tarnung ist hier Pflicht." },
        "SVD Dragunov": { loc: "Tiger Bay Mall (197, 129)", desc: "Im Hinterraum der Buchhandlung auf einem Regal.", tip: "Extreme KI-Dichte, bring genug Munition mit." },
        "Mossberg 590": { loc: "Remote Campsite (149, 111)", desc: "Südöstlich von YBL-1, in einer Kiste beim Flusslager.", tip: "Relativ friedliche Zone für Anfänger." }
    };
