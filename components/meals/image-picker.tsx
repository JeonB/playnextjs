import classes from "./image-picker.module.css";

interface imagePickerProps {
  label: string;
  name: string;
}
export default function ImagePicker({ label, name }: imagePickerProps) {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
        />
      </div>
    </div>
  );
}
