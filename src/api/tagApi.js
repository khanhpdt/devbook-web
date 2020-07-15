import axios from "axios"

function getTagSuggestions() {
  return axios.get(`http://localhost:8081/tags/suggestions`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export { getTagSuggestions }
