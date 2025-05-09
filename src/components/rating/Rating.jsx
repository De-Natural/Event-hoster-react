import React, { useState, useRef } from "react";
import { FaPlus, FaStar } from "react-icons/fa";

const Rating = () => {
  const [starRating, setStarRating] = useState(0);
  const [review, setReview] = useState("");
  const [file, setFile] = useState(null);
  const filePreviewRef = useRef(null); // To store the object URL for image preview

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      setFile(uploadedFile);
      filePreviewRef.current = URL.createObjectURL(uploadedFile); // Store the object URL
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFile(null); 
          setStarRating(0); 
          setReview("");
        }}
      >
        <div className="flex justify-center gap-60 items-center mt-20">
          <div>
            <h2 className="text-5xl font-semibold">Rate Us</h2>
            {[...Array(5)].map((_, index) => {
              const current = index + 1;
              return (
                <button
                  key={index}
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setStarRating(current)}
                >
                  <FaStar
                    size={24}
                    className={`mt-5 ${
                      current <= starRating ? "text-blue-800" : "text-gray-300"
                    }`}
                  />
                </button>
              );
            })}
            <div>
              <label htmlFor="experience" className="block mt-10 font-medium">
                We would love to know what you think about us.
              </label>
              <textarea
                name="experience"
                id="experience"
                placeholder="Describe your experience..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                maxLength={500}
                className="focus:outline-none h-40 mt-5 p-2 w-full border border-gray-500 resize-none rounded-md"
              ></textarea>
              <span className="flex justify-end">{review.length}/{500-review.length}</span>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!review}
                className="bg-black font-medium text-white w-[180px] py-2 mt-10 rounded-full cursor-pointer text-sm"
              >
                SUBMIT
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="image"
              aria-label="Upload image if necessary"
              className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer object-cover"
              style={{
                backgroundImage: file ? `url(${filePreviewRef.current})` : "none",
              }}
            >
              <input
                type="file"
                className="hidden"
                id="image"
                accept="image/*"
                onChange={handleFileChange}
              />
              {!file && (
                <FaPlus
                  className="text-xl"
                  aria-hidden="true"
                  title="Upload image"
                />
              )}
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Rating;
