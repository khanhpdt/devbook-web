import axios from "axios"
import _ from "lodash/collection"

function upload(files) {
  if (files && files.length > 0) {
    const data = new FormData()

    _.forEach(files, (f) => {
      data.append("files", f, f.name)
    })

    axios.post("http://localhost:8081/files/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }
}

function fetchFiles() {
  const data = {
    query: {
      match_all: {},
    },
  }
  axios.post("http://localhost:8081/files/search", data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export { upload, fetchFiles }
