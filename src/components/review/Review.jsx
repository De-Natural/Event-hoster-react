import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Review = () => {
  return (
    <>
      <div className="min flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-1">
            Thanks for using our platform..!
          </h2>
          <em className="mb-3 font-normal">Would you like to drop a review?</em>
          <form>
            <div className="flex flex-col mt-5 p">
              <textarea
                name="review"
                id="review"
                cols={10}
                rows={5}
                placeholder="Enter a review here...."
                className=" pt-2 border border-gray-400 w-100 max-w-100 resize-none indent-2 focus:outline-none rounded-md px-2"
              />
              <div className="flex justify-between px-5 mt-4">
                <button
                  className="bg-black text-white px-4 py-2 rounded-sm font-semibold cursor-pointer"
                  type="cancel"
                >
                  Cancel
                </button>
                <button
                  className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
                  type="submit"
                >
                  Send{" "}
                  <FaPaperPlane className="transition-transform rotate-60" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
