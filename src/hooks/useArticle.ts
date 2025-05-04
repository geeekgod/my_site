import { useEffect, useState } from "react";
import { Article } from "../types/article";

const mediumUrl = "https://medium.com/feed/@geeekgod";
const apiURL = `https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`;

export const useArticle = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      if (!Array.isArray(data.items)) {
        throw new Error("Invalid data format");
      }
      const items = data.items as Article[];
      setArticles(items);
    } catch (err: Error | unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return { articles, loading, error, fetchArticles };
};
