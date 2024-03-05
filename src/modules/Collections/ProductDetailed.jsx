import React from 'react'
import styles from './Collections.module.css'
import item1 from '../../common/images/item_view_1.webp'
import item2 from '../../common/images/item_view_2.webp'

const ProductDetailed = ({ productId, productName }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

  return (
    <div>
      <div className='bg-black pt-[4.2rem] border-b border-[#7c7b7b48]' />
      <div className='py-14 px-4 flex items-start gap-5'>
        <div className='flex flex-col gap-4'>
          <img src={item1} alt={'sfsd'} className='w-16 h-22' />
          <img src={item2} alt={'sfsd'} className='w-16 h-22' />
        </div>
        <img src={item1} alt={'sfsd'} className='w-[750px] h-[800px]' />
        <div className='ml-8'>
          <h1 className='text-[37px] font-light'>
            {capitalizeFirstLetter(productName.split('-').join(' '))}
          </h1>
          <p className='my-8 text-[22px] text-[#3d3d3d]'>€ 120.00</p>
          <div className='flex gap-5'>
            {['XL', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((itemSize, i) => {
              return (
                <span className='border border-[#b5b5b5] flex items-center justify-center w-12 h-10 font-light text-[13px]' key={i}>
                  {itemSize}
                </span>
              )
            })}
          </div>
          <button className='bg-black uppercase text-[11px] w-[280px] h-[45px] mt-12 text-[#ffffff] font-semibold'>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailed
