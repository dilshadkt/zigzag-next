"use client";
import React, { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
const ImagePicker = ({
  setvalue,

  index,
}: {
  setvalue: any;
  index: number;
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }

    setvalue(`page.${index}.image`, e.target.files);
  };

  const resetPrevieImage = () => {
    setPreviewImage(null);
  };
  return (
    <div className="border w-[400px] h-[300px] rounded-lg my-2 flex-center overflow-hidden">
      {!previewImage ? (
        <label>
          <AddPhotoAlternateIcon className="text-gray-500  scale-[2.3] cursor-pointer" />
          <input type="file" className="hidden" onChange={handlePreviewImage} />
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
            className="absolute z-30 w-10 h-10 bg-blue-400 top-2 right-2 cursor-pointer flex-center rounded-full"
          >
            <EditIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
