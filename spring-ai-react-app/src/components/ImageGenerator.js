import React, { useState } from "react";

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]); 

  const generateImage = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/generate-image?prompt=${prompt}`,
        {
          credentials: "include",
          method: "GET"
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse JSON response
      console.log("Response from back-end:", data);

      // Handle the back-end response based on its structure
      if (Array.isArray(data)) {
        setImageUrls(data); // If the response is an array
      } else if (data.imageUrls && Array.isArray(data.imageUrls)) {
        setImageUrls(data.imageUrls); // If the response contains `imageUrls` as an array
      } else if (data.imageUrl) {
        setImageUrls([data.imageUrl]); // If the response contains a single `imageUrl`
      } else {
        console.error("Unexpected response format:", data);
        setImageUrls([]); // Reset to an empty array on unexpected response
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div className="tab-content">
      <h2>Generate Image</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt for image"
      />
      <button onClick={generateImage}>Generate Image</button> 

      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Generated ${index}`} />
        ))}

        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div key={index + imageUrls.length} className="empty-image-slot"></div>
        ))}
      </div>
    </div>
  );
}

export default ImageGenerator;
