document.getElementById('new-fact-btn').addEventListener('click', getRandomFact);

function getRandomFact() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            document.getElementById('random-fact').innerText = data.text;
        })
        .catch(error => {
            document.getElementById('random-fact').innerText = 'Oops! Could not fetch a fact. Try again later.';
            console.error('Error fetching fact:', error);
        });
}
