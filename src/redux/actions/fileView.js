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
