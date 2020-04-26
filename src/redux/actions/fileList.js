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
