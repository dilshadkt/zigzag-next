"use client";
import React, { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
const ImagePicker = ({
  setvalue,
  index,
  image,
  setCurrentImage,
}: {
  setvalue?: any;
  index?: number;
  image?: any;
  setCurrentImage?: React.Dispatch<string | File>;
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(
    image ? image : null
  );

  const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setCurrentImage && setCurrentImage(e.target.files[0]);
    }

    setvalue && setvalue(`page[${index}][image]`, e.target.files);
  };

  const resetPrevieImage = () => {
    setPreviewImage(null);
  };
  return (
    <div className="border w-full h-full rounded-lg  flex-center overflow-hidden">
      {!previewImage ? (
        <label>
          <AddPhotoAlternateIcon className="text-gray-500  scale-[2.3] cursor-pointer" />
          <input
            type="file"
            name={`page[${index}][image]`}
            className="hidden"
            onChange={handlePreviewImage}
          />
        </label>
      ) : (
        <div className="full relative">
          <Image
            src={previewImage}
            alt="preview image"
            width={300}
            height={300}
            className="full object-cover"
          />
          <div
            onClick={resetPrevieImage}
            className="absolute z-20 w-10 h-10 bg-blue-400 top-2 right-2 cursor-pointer flex-center rounded-full"
          >
            <EditIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
