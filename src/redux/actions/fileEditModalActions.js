export const CLOSE = "fileEditModal/close"
export const close = () => ({
  type: CLOSE,
})

export const OPEN = "fileEditModal/open"
export const open = (file) => ({
  type: OPEN,
  payload: { file },
})
