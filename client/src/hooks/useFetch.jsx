import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (await fetch(url)).json();
        setBlogs(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return {isLoading, error, blogs};
};
 
export default useFetch;