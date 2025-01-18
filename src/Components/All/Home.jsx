import React, { useEffect, useState } from 'react';

function Home() {
  // State to hold categories and selected category
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  
  // State to hold videos based on selected category
  const [videos, setVideos] = useState([]);
  
  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories on component mount
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Failed to load categories.");
        setLoading(false);
      });
  }, []);

  // Fetch videos based on selected category ID
  useEffect(() => {
    if (selectedCategoryId) {
      setLoading(true);
      fetch(`https://openapi.programming-hero.com/api/videos/category/${selectedCategoryId}`)
        .then(res => res.json())
        .then(data => {
          setVideos(data.data.docs); // Assuming the videos are under `data.docs`
          setLoading(false);
        })
        .catch(error => {
          setError("Failed to load videos.");
          setLoading(false);
        });
    }
  }, [selectedCategoryId]); // This effect runs whenever the selectedCategoryId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
        <h2>Select a Category</h2>
        <ul>
          {categories.map((category) => (
            <li key={category._id} onClick={() => setSelectedCategoryId(category._id)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Display videos for the selected category */}
      {selectedCategoryId && (
        <div>
          <h2>Videos in this category:</h2>
          <div>
            {videos.map((video) => (
              <div key={video._id} className="video-item">
                <img src={video.thumbnail} alt={video.title} />
                <h3>{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
