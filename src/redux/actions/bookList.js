export const ON_START = "bookList/onStart"
export const onStart = () => ({
  type: ON_START,
})

export const ON_START_SUCCESS = "bookList/onStartSuccess"
export const onStartSuccess = (data) => ({
  type: ON_START_SUCCESS,
  payload: data,
})

export const ON_START_FAILED = "bookList/onStartFailed"
export const onStartFailed = () => ({
  type: ON_START_FAILED,
})

export const DELETE_BOOK = "bookList/deleteBook"
export const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  payload: bookId,
})

export const DELETE_BOOK_SUCCESS = "bookList/deleteBookSuccess"
export const deleteBookSuccess = (data) => ({
  type: DELETE_BOOK_SUCCESS,
  payload: data,
})

export const DELETE_BOOK_FAILED = "bookList/deleteBookFailed"
export const deleteBookFailed = () => ({
  type: DELETE_BOOK_FAILED,
})
