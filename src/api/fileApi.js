import axios from "axios"

function upload(files) {
  if (files && files.length > 0) {
    const data = new FormData()
    data.append("file", files[0])
    axios
      .post("http://localhost:8081/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(`Files uploaded success:${response}`)
      })
      .catch((error) => {
        console.log(`Files uploaded error: ${error}`)
      })
  }
}

export { upload }
