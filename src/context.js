import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)
export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  useEffect( () => {
    setShowCart(true)
  }, [cartItems] )
  
  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
