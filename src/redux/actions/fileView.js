export const ON_START = "fileView/onStart"
export const onStart = (id) => ({
  type: ON_START,
  payload: {
    fileId: id,
  },
})

export const ON_START_SUCCESS = "fileView/onStartSuccess"
export const onStartSuccess = (data) => ({
  type: ON_START_SUCCESS,
  payload: data,
})

export const ON_START_FAILED = "fileView/onStartFailed"
export const onStartFailed = () => ({
  type: ON_START_FAILED,
})

export const DOWNLOAD_FILE = "fileView/downloadFile"
export const downloadFile = (id) => ({
  type: DOWNLOAD_FILE,
  payload: {
    fileId: id,
  },
})

export const DOWNLOAD_FILE_SUCCESS = "fileView/downloadFileSuccess"
export const downloadFileSuccess = (data) => ({
  type: DOWNLOAD_FILE_SUCCESS,
  payload: data,
})

export const DOWNLOAD_FILE_FAILED = "fileView/downloadFileFailed"
export const downloadFileFailed = () => ({
  type: DOWNLOAD_FILE_FAILED,
})
