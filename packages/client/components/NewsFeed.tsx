import React, { useEffect, useState } from 'react';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
}

const NewsFeed: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('/api/news');
      const data = await response.json();
      setArticles(data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div className="news-feed">
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      <ul className="divide-y divide-gray-200">
        {articles.map((article, index) => (
          <li key={index} className="py-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
