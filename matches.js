const API_KEY = 'gf4ixqasSQCzNtd2S9EYsWQO6i6XrOnNRW1LXmpLuiE5RqMcOzlisIp8IVdf';
const API_URL = 'https://v3.football.api-sports.io/fixtures?season=2023&league=39'; // مثال للدوري الإنجليزي

fetch(API_URL, {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY, // استخدم المفتاح هنا
        'x-rapidapi-host': 'v3.football.api-sports.io'
    }
})
.then(response => response.json())
.then(data => {
    const resultsContainer = document.getElementById('results');
    data.response.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.className = 'match';
        matchDiv.innerHTML = `
            <h3>${match.teams.home.name} vs ${match.teams.away.name}</h3>
            <p>النتيجة: ${match.goals.home} - ${match.goals.away}</p>
            <p>التاريخ: ${new Date(match.fixture.date).toLocaleString()}</p>
        `;
        resultsContainer.appendChild(matchDiv);
    });
})
.catch(error => {
    console.error('Error fetching match data:', error);
    document.getElementById('results').innerHTML = '<p>تعذر جلب النتائج. يرجى المحاولة لاحقًا.</p>';
});
