document.getElementById('novelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const keywords = document.getElementById('keywords').value.split(',').map(keyword => keyword.trim());
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    // 小説のネタを生成する簡単なロジック
    const story = `ある日、${keywords[0]}の世界で、${keywords[1]}が大冒険を始めた。${keywords[2]}が現れて…`;

    const p = document.createElement('p');
    p.innerText = story;
    resultDiv.appendChild(p);
});
