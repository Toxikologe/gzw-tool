// Unsere Datenbank (später übersetzt du hier alles ins Deutsche)
const gzwData = [
    { name: "M4A1", type: "Waffe", info: "Standard-Gewehr, Allrounder." },
    { name: "M855", type: "Munition", info: "Gute Penetration gegen T2 Westen." },
    { name: "Laugo Alien", type: "Waffe", info: "Neu in 0.4 - extrem geringer Rückstoß." }
];

function searchData() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultBox = document.getElementById('resultBox');
    
    // Suchen nach Übereinstimmungen
    const result = gzwData.find(item => item.name.toLowerCase().includes(input));

    if (result) {
        resultBox.innerHTML = `<h3>${result.name}</h3><p>${result.info}</p>`;
    } else {
        resultBox.innerHTML = "Keine Daten gefunden. Überprüfe die Schreibweise.";
    }
}