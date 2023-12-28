import React from 'react'

const mainContext = React.createContext({
    books: [],
    setNewBook: () => { }
})

export default mainContext