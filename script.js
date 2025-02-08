async function fetchNews() {
    const apiKey = "dd847275bbf04baca4c9fce79dfa492b"; // Replace with your API key
    const url = `https://newsapi.org/v2/everything?q=eFootball&language=en&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const newsContainer = document.getElementById("news-container");

        let newsHTML = "";
        data.articles.forEach((article, index) => {
            if (index < 6) { // Limit to 6 news articles
                newsHTML += `
                    <div class="news-item">
                        <img src="${article.urlToImage}" alt="News Image">
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read More</a>
                    </div>`;
            }
        });

        newsContainer.innerHTML = newsHTML;
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();
