import { ON_START_SUCCESS, ON_START } from "../actions/fileList"

const initialState = {
  currentPage: null,
  nPages: null,
  files: null,
}

const N_ITEMS_PER_PAGE = 10

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_START:
      return Object.assign({}, state, {
        currentPage: 1,
      })
    case ON_START_SUCCESS:
      const p = action.payload
      return Object.assign({}, state, {
        files: p.list,
        nPages: Math.ceil(p.total / N_ITEMS_PER_PAGE),
      })
    default:
      return state
  }
}
