export const CLOSE = "bookEdit/close"
export const close = () => ({
  type: CLOSE,
})

export const OPEN = "bookEdit/open"
export const open = (book) => ({
  type: OPEN,
  payload: { book },
})

export const SAVE_BOOK = "bookEdit/saveBook"
export const saveBook = (book) => ({
  type: SAVE_BOOK,
  payload: { book },
})

export const SAVE_BOOK_SUCCESS = "bookEdit/saveBookSuccess"
export const saveBookSuccess = (data) => ({
  type: SAVE_BOOK_SUCCESS,
  payload: { data },
})

export const SAVE_BOOK_FAILED = "bookEdit/saveBookFailed"
export const saveBookFailed = () => ({
  type: SAVE_BOOK_FAILED,
})
