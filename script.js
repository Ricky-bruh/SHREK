function showResults(choice) {
    const resultsDiv = document.getElementById('results');
    const buttonsDiv = document.querySelector('.buttons');

    if (choice === 'yes') {
        resultsDiv.innerHTML = '<p>Hai usato i tuoi neuroni e hai risposto correttamente!</p>';
    } else {
        resultsDiv.innerHTML = '<p>Peccato! Ecco alcuni motivi: Shrek è un classico, ha una grande colonna sonora e personaggi indimenticabili.</p>';
        setTimeout(function () {
            window.location.href = 'Shrek.mp4'
            // window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Rick Roll link
        }, 500); // 0.5 secondi di attesa prima del reindirizzamento
    }

    // Nasconde i pulsanti e mostra i risultati
    buttonsDiv.style.display = 'none';
    resultsDiv.style.display = 'block';
}
