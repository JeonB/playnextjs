"use client";
import { use, useRef } from "react";
import classes from "./image-picker.module.css";

interface imagePickerProps {
  label: string;
  name: string;
}
export default function ImagePicker({ label, name }: imagePickerProps) {
  const imageInput = useRef<HTMLInputElement | null>(null);
  const handlePickClick = () => {
    // const input = document.querySelector(
    //   `input[name="${name}"]`
    // ) as HTMLInputElement;
    // input.click();
    imageInput.current?.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}
