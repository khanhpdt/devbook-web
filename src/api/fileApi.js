import axios from "axios"
import _ from "lodash/collection"

function upload(files) {
  if (files && files.length > 0) {
    const data = new FormData()

    _.forEach(files, (f) => {
      data.append("files", f, f.name)
    })

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

function fetchFiles() {
  console.log("API fetchFiles called")
}

export { upload, fetchFiles }
