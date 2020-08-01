import axios from "axios"
import _ from "lodash/collection"
import { API_URL } from "./config"

function uploadBooks(books) {
  if (books && books.length > 0) {
    const data = new FormData()

    _.forEach(books, (f) => {
      data.append("books", f, f.name)
    })

    return axios.post(`${API_URL}/books/upload`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }
}

function findBooks() {
  const data = {
    query: {
      match_all: {},
    },
  }
  return axios.post(`${API_URL}/books/search?page=1&size=10`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

function findBookById(id) {
  return axios.get(`${API_URL}/books/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

function downloadBook(id) {
  return axios.get(`${API_URL}/books/${id}/download`, {
    responseType: "arraybuffer",
  })
}

function deleteBook(id) {
  return axios.delete(`${API_URL}/books/${id}`)
}

function saveBook(book) {
  const data = {
    title: book.title,
    tags: book.tags,
  }
  return axios.put(`${API_URL}/books/${book.id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export { uploadBooks, findBooks, findBookById, downloadBook, deleteBook, saveBook }
