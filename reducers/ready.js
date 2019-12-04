const ready = (state = false, action) => {
  switch (action.type) {
    case 'CONFIGURATION-READY': return true
    case 'CONFIGURATION-NOT_READY': return false
    default: return state
  }
}

export default ready
