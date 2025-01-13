data.response.forEach(match => {
    const matchDiv = document.createElement('div');
    matchDiv.className = 'match';
    matchDiv.innerHTML = `
        <img src="${match.teams.home.logo}" alt="${match.teams.home.name}" width="50">
        <img src="${match.teams.away.logo}" alt="${match.teams.away.name}" width="50">
        <h3>${match.teams.home.name} vs ${match.teams.away.name}</h3>
        <p>النتيجة: ${match.goals.home} - ${match.goals.away}</p>
        <p>التاريخ: ${new Date(match.fixture.date).toLocaleString()}</p>
    `;
    resultsContainer.appendChild(matchDiv);
});
document.getElementById('searchInput').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const matches = document.querySelectorAll('.match');
    
    matches.forEach(match => {
        const matchText = match.textContent.toLowerCase();
        match.style.display = matchText.includes(searchTerm) ? 'block' : 'none';
    });
});
