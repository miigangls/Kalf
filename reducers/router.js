const router= (state = {name: '', options: {}}, action) => {
  let units;
  switch (action.type) {
    case 'ROUTE-UPDATE': return { name: action.route, options: action.options || {} }
    default: return state
  }
}

export default router
