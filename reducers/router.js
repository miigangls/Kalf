const router= (state = {name: 'register', options: {}}, action) => {
  console.log(action.route);
  switch (action.type) {
    case 'ROUTE-UPDATE': return { name: action.route, options: action.options || {} }
    default: return state
  }
}

export default router
