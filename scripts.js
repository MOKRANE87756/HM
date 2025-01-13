document.addEventListener("DOMContentLoaded", () => {
    const resultsContainer = document.getElementById("results");

    fetch('https://api.example.com/football-matches') // استخدم واجهة برمجة تطبيقات مناسبة
        .then(response => response.json())
        .then(data => {
            data.matches.forEach(match => {
                const matchDiv = document.createElement('div');
                matchDiv.className = 'match';
                matchDiv.innerHTML = `
                    <h3>${match.homeTeam} vs ${match.awayTeam}</h3>
                    <p>النتيجة: ${match.homeScore} - ${match.awayScore}</p>
                    <p>التاريخ: ${match.date}</p>
                `;
                resultsContainer.appendChild(matchDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching match data:', error);
            resultsContainer.innerHTML = '<p>تعذر جلب النتائج. يرجى المحاولة لاحقًا.</p>';
        });
});
