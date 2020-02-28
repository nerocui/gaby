import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { DropzoneProps } from "../../models/props";

const Dropzone = (props: DropzoneProps) => {

  const onDrop = useCallback(acceptedFiles => {
    console.log("onDrop being called!!!!");
    props.handleChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ className: props.wrapperStyle })}>
      <input {...getInputProps()} />
      <p className="element--dropzone__text">
        {isDragActive ? props.activeText : props.inActiveText}
      </p>
    </div>
  );
};

export default Dropzone;
