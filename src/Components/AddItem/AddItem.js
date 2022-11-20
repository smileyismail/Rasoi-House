import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdFastfood, MdDelete } from "react-icons/md";
import { BiCategory, BiRupee } from "react-icons/bi";
import { BsFillCloudArrowUpFill, BsTextLeft } from "react-icons/bs";

import { categories } from "../../utils/data";
import Loader from "../../utils/Loader";

const AddItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [validFieldIsVisible, setValidFieldIsVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [validityMsg, setValidityMsg] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState("");

  function uploadImage() {}
  function deleteImage() {}

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="text-center h-screen flex flex-col gap-8 justify-center items-center">
      <div className="w-[90%] md:w-1/3">
        {validFieldIsVisible && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full rounded-lg p-2 text-center text-lg font-bold ${
              isValid === true
                ? "bg-emerald-600 text-emerald-100"
                : "bg-red-500 text-red-100"
            }`}
          >
            {validityMsg}
          </motion.p>
        )}
      </div>

      <form
        onSubmit={submitHandler}
        className="bg-white p-5 rounded-lg text-headingColor w-[90%] md:w-1/2 flex flex-col justify-center items-center gap-6 text-lg"
      >
        <div className="w-full border-b-2 flex items-center gap-2">
          <MdFastfood className="text-xl" />
          <input
            type="text"
            placeholder="Name of the Food"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full focus:outline-none placeholder:text-gray-400"
          />
        </div>
        <div className="w-full border-b-2 flex items-center gap-2">
          <BiCategory className="text-xl" />
          <select
            name="category"
            id="category"
            className="w-full focus:outline-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Others" className="text-xl">
              Select Category
            </option>

            {categories.map((category) => (
              <option
                key={category.id}
                value={category.urlParam}
                className="text-base capitalize"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full border-b-2 flex items-center justify-center border-2 h-44 md:h-56  border-dashed rounded-lg">
          {isLoading === true ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <label
                  htmlFor="uploadImage"
                  className="w-full h-full flex flex-col gap-2 justify-center items-center cursor-pointer"
                >
                  <BsFillCloudArrowUpFill className="text-4xl" />
                  <p>Click here to upload!</p>
                  <input
                    type="file"
                    id="uploadImage"
                    accept="image/*"
                    onChange={uploadImage}
                    className="w-0 h-0"
                  />
                </label>
              ) : (
                <div className=" relative h-full w-full flex justify-center items-center">
                  <img
                    src={imageAsset}
                    alt="uploadedImage"
                    className="w-full h-full object-cover"
                  />
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    whileHover={{ scale: 0.95 }}
                    type="button"
                    className="absolute bottom-3 right-3 p-2 text-white rounded-xl bg-red-400 text-lg cursor-pointer outline-none hover:shadow-2xl"
                    onClick={deleteImage}
                  >
                    <MdDelete className="text-xl" />
                  </motion.button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="w-full border-b-2 flex items-center gap-2">
          <BiRupee className="text-xl" />
          <input
            type="number"
            placeholder="Price of the Food"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full focus:outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="w-full border-b-2 flex items-center gap-2">
          <BsTextLeft className="text-xl" />
          <input
            type="text"
            placeholder="Description of the Food"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full focus:outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="w-full">
          <motion.button
            whileTap={{ scale: 1.01 }}
            whileHover={{ scale: 0.99 }}
            type="submit"
            className="w-2/3 p-2 text-white rounded-xl bg-emerald-600 text-md cursor-pointer outline-none hover:shadow-2xl"
            onClick={deleteImage}
          >
            Add Item
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
