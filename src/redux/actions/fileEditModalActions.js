export const CLOSE = "fileEditModal/close"
export const close = () => ({
  type: CLOSE,
})

export const OPEN = "fileEditModal/open"
export const open = (file) => ({
  type: OPEN,
  payload: { file },
})

export const SAVE_FILE = "fileEditModal/saveFile"
export const saveFile = (file) => ({
  type: SAVE_FILE,
  payload: { file },
})

export const SAVE_FILE_SUCCESS = "fileEditModal/saveFileSuccess"
export const saveFileSuccess = (data) => ({
  type: SAVE_FILE_SUCCESS,
  payload: { data },
})

export const SAVE_FILE_FAILED = "fileEditModal/saveFileFailed"
export const saveFileFailed = () => ({
  type: SAVE_FILE_FAILED,
})
