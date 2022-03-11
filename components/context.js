import React, { useContext, useState } from 'react'
import { createClient } from 'contentful'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [smallNav, setSmallNav] = useState(false)
  const [click, setClick] = useState(false)

  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_SECRET,
    accessToken: process.env.NEXT_PUBLIC_CMS_SECRET,
  })
  const changeNav = () => {
    setSmallNav(!smallNav)
  }

  const changeClick = () => {
    setClick(!click)
  }

  return (
    <AppContext.Provider
      value={{ changeClick, setSmallNav, changeNav, smallNav, click, client }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
