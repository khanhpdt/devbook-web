export const ON_START = "book/onStart"
export const onStart = (id) => ({
  type: ON_START,
  payload: {
    bookId: id,
  },
})

export const ON_START_SUCCESS = "book/onStartSuccess"
export const onStartSuccess = (data) => ({
  type: ON_START_SUCCESS,
  payload: data,
})

export const ON_START_FAILED = "book/onStartFailed"
export const onStartFailed = () => ({
  type: ON_START_FAILED,
})

export const DOWNLOAD_BOOK = "book/downloadBook"
export const downloadBook = (id) => ({
  type: DOWNLOAD_BOOK,
  payload: {
    bookId: id,
  },
})

export const DOWNLOAD_BOOK_SUCCESS = "book/downloadBookSuccess"
export const downloadBookSuccess = (data) => ({
  type: DOWNLOAD_BOOK_SUCCESS,
  payload: data,
})

export const DOWNLOAD_BOOK_FAILED = "book/downloadBookFailed"
export const downloadBookFailed = () => ({
  type: DOWNLOAD_BOOK_FAILED,
})
