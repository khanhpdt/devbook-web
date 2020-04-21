import React from "react"
import { useDropzone } from "react-dropzone"

function FileDrop() {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone()

  const fileItems = acceptedFiles.map((f) => {
    return (
      <li key={f.path}>
        {f.name} - {Math.round(f.size / 1000)} KB
      </li>
    )
  })

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      <div>
        <button>Upload</button>
      </div>

      <div>
        <ul>{fileItems}</ul>
      </div>
    </div>
  )
}

export default FileDrop
