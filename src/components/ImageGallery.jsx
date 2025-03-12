import { useState, useEffect } from "react";

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((res) => res.json())
      .then((data) => {
        console.log(data  )
        setImages(data)
      })
      .catch((error) => console.error("Error fetching images:", error));

  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={`http://localhost:3000/${image.filePath}`}
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
