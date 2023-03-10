import React, { useEffect, useState } from "react";
import axios from "axios";

const postsUrl =
  "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { status, data } = await axios.get(postsUrl);

      if (status === 200) {
        setPosts(data);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error("error occured while fetching posts : ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { loading, posts };
};

export default useFetchData;
