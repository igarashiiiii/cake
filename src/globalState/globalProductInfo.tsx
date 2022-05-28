import { createContext, useState } from 'react';

export const ProductInformations = createContext<any>({});

let database:any = [
  {productId : 0,
    BuyerId:0,
    SellerId:0,
    productDescription:'商品の説明',
    productPicture:'https://source.unsplash.com/random',
    productPrice:100,
    productStatus:'order',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle',
    productQuantity:'number'
  }
]

export const GlobalProductInfo = (props:any) => {
  const {children} = props;
  const [productInfo,setProductInfo] = useState<any>(database)
  
  return(
  <ProductInformations.Provider value={{productInfo,setProductInfo}}>
    {children}
  </ProductInformations.Provider>
  )
}