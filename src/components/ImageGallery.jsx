import { useState, useEffect } from "react";

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // For demo purposes
    setImages([
      { id: 1, url: "https://via.placeholder.com/300" },
      { id: 2, url: "https://via.placeholder.com/300" },
      { id: 3, url: "https://via.placeholder.com/300" },
    ]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="w-full h-64 object-cover rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
