import { ON_START_SUCCESS, ON_START } from "../actions/bookList"

const initialState = {
  currentPage: null,
  nPages: null,
  books: null,
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
      if (!p) {
        return state
      }
      return Object.assign({}, state, {
        books: p.list,
        nPages: Math.ceil(p.total / N_ITEMS_PER_PAGE),
      })
    default:
      return state
  }
}
