function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === '' || name2 === '') {
        alert('Please enter both names!');
        return;
    }

    // Simple love calculation (just for fun)
    const combinedName = name1 + name2;
    const loveScore = Math.floor(Math.random() * 101); // Random score between 0 and 100

    // Display the love score
    const percentageElement = document.getElementById('percentage');
    percentageElement.textContent = `Your love compatibility is: ${loveScore}%`;
}

function resetCalculator() {
    // Clear the input fields and result text
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('percentage').textContent = '';
}
