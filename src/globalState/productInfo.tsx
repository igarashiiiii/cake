import React, { createContext } from 'react';

export const ProductInformations = createContext('');

export const ProductInfo = (props:any) => {
  const {children} = props;
  return(
  <ProductInformations.Provider value={'100'}>
    {children}
  </ProductInformations.Provider>
  )
}