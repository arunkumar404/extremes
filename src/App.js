import { useEffect, useState } from 'react'
import Footer from './modules/Footer/Footer'
import Header from './modules/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HeroMainContainer from './containers/HeroMainContainer'
import LoginPage from './modules/Auth/LoginPage'
import SignupPage from './modules/Auth/SignupPage'
import Collections from './modules/Collections/Collections'
import { useAppContext } from './context'
import { Drawer, DrawerContent } from './components/ui/drawer'
import CloseIcon from '@mui/icons-material/Close'
import item1 from './common/images/men_item_1.webp'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  const { showCart, setShowCart, cartItems, setCartItems } = useAppContext()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedCartItems)
  }

  const increaseItemCount = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, count: item.count + 1 } : item
    )
    setCartItems(updatedCartItems)
  }

  const decreaseItemCount = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    )
    setCartItems(updatedCartItems)
  }
  return (
    <>
      <style>
        {`
          .removeAfter::after {
              content: none;
          `}
      </style>
      <div className='relative max-w-screen overflow-hidden'>
        <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
        <Routes>
          <Route
            path='/'
            element={<HeroMainContainer setIsScrolled={setIsScrolled} />}
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/collections/:category' element={<Collections />} />
        </Routes>
        <Footer />
        <Drawer open={showCart} onOpenChange={(value) => setShowCart(value)}>
          <DrawerContent className='removeAfter'>
            <div className='flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-start'>
                <div className='flex items-center w-full bg-black justify-between py-4 px-3 border-none'>
                  <p className='text-white'>CART</p>
                  <div
                    onClick={() => setShowCart(false)}
                    className='cursor-pointer'
                  >
                    <CloseIcon className='text-white' />
                  </div>
                </div>
                <div className='flex flex-col'>
                  {cartItems?.map((item) => {
                    return (
                      <div
                        key={item?.id}
                        className='flex p-5 gap-2 justify-between w-full border-b-2'
                      >
                        <img src={item?.img} alt='imgg1' className='max-h-20' />
                        <div className=''>
                          <p>{item?.name}</p>
                          <p className='text-xs font-light'>
                            Size: {item?.size}
                          </p>
                          <p className='text-sm mt-2'>
                            Rs. {item?.pricePerPiece}
                          </p>

                          <div className='flex items-center border border-[#b5b5b5] border-solid w-fit justify-between mt-4'>
                            <p
                              className='py-2 px-3  text-xs cursor-pointer'
                              onClick={() => decreaseItemCount(item.id)}
                              v
                            >
                              -
                            </p>
                            <p className='py-2 px-3 text-xs'>{item?.count}</p>
                            <p
                              className='py-2 px-3  text-xs cursor-pointer'
                              onClick={() => increaseItemCount(item.id)}
                            >
                              +
                            </p>
                          </div>
                        </div>
                        <div
                          className='cursor-pointer'
                          onClick={() => {
                            removeFromCart(item?.id)
                          }}
                        >
                          <CloseIcon
                            style={{ width: '18px', height: '18px' }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='border-t border-[#e5e5e5] border-solid mt-5'>
                <div className='flex justify-between w-full px-3 mt-5 mb-3 items-center'>
                  <p className='text-xs font-light'>SUBTOTAL</p>
                  <p className='font-normal text-2xl'>Rs.47,600.00</p>
                </div>
                <p className='italic text-[10px] font-light pl-3'>
                  Shipping, taxes, and discount codes are calculated at checkout
                </p>
                <div className='justify-center flex w-full my-4'>
                  <button className='bg-black text-white py-3 text-sm w-full mx-3'>
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}

export default App
