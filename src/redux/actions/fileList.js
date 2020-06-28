export const ON_START = "fileList/onStart"
export const onStart = () => ({
  type: ON_START,
})

export const ON_START_SUCCESS = "fileList/onStartSuccess"
export const onStartSuccess = (data) => ({
  type: ON_START_SUCCESS,
  payload: data,
})

export const ON_START_FAILED = "fileList/onStartFailed"
export const onStartFailed = () => ({
  type: ON_START_FAILED,
})

export const DELETE_FILE = "fileList/deleteFile"
export const deleteFile = (fileId) => ({
  type: DELETE_FILE,
  payload: fileId,
})

export const DELETE_FILE_SUCCESS = "fileList/deleteFileSuccess"
export const deleteFileSuccess = (data) => ({
  type: DELETE_FILE_SUCCESS,
  payload: data,
})

export const DELETE_FILE_FAILED = "fileList/deleteFileFailed"
export const deleteFileFailed = () => ({
  type: DELETE_FILE_FAILED,
})
