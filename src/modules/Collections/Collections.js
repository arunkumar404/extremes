import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CollectionsBroad from './CollectionsBroad'
import ProductDetailed from './ProductDetailed'

const Collections = () => {
  const { category, productName } = useParams()
  let query = new URLSearchParams(useLocation().search)
  let productId = query.get( 'id' )

  return <>{!productName ? <CollectionsBroad /> : <ProductDetailed productId={productId} productName={productName} />}</>
}

export default Collections
