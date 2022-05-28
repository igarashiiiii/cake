import { createContext, useState } from 'react';

export const ProductInformations = createContext<any>({});

let database:any = [
  {productId : 0,
    BuyerId:0,
    SellerId:0,
    productDescription:'商品の説明No.0',
    productPicture:'https://source.unsplash.com/random',
    productPrice:100,
    productStatus:'order',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle No.0',
    productQuantity:'0'
  },
  {productId : 1,
    BuyerId:1,
    SellerId:1,
    productDescription:'商品の説明 orderNo.1',
    productPicture:'https://source.unsplash.com/random',
    productPrice:101,
    productStatus:'order',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle No.1',
    productQuantity:'1'
  },
  {productId : 2,
    BuyerId:2,
    SellerId:2,
    productDescription:'商品の説明 orderNo.2',
    productPicture:'https://source.unsplash.com/random',
    productPrice:102,
    productStatus:'order',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle No.2',
    productQuantity:'2'
  },
  {productId : 3,
    BuyerId:3,
    SellerId:3,
    productDescription:'商品の説明 SoldNo.3',
    productPicture:'https://source.unsplash.com/random',
    productPrice:103,
    productStatus:'sold',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle Sold No.3',
    productQuantity:'3'
  },
  {productId : 4,
    BuyerId:4,
    SellerId:4,
    productDescription:'商品の説明 SoldNo.4',
    productPicture:'https://source.unsplash.com/random',
    productPrice:100,
    productStatus:'sold',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle soldNo.4',
    productQuantity:'4'
  },
  {productId : 5,
    BuyerId:5,
    SellerId:5,
    productDescription:'商品の説明 sellNo.5',
    productPicture:'https://source.unsplash.com/random',
    productPrice:105,
    productStatus:'sell',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle  sellNo.5',
    productQuantity:'5'
  },
  {productId : 6,
    BuyerId:6,
    SellerId:6,
    productDescription:'商品の説明 orderNo.6',
    productPicture:'https://source.unsplash.com/random',
    productPrice:106,
    productStatus:'order',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle No.6',
    productQuantity:'6'
  },
  {productId : 7,
    BuyerId:7,
    SellerId:7,
    productDescription:'商品の説明 orderNo.7',
    productPicture:'https://source.unsplash.com/random',
    productPrice:107,
    productStatus:'order',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle No.7',
    productQuantity:'7'
  },
  {productId : 8,
    BuyerId:8,
    SellerId:8,
    productDescription:'商品の説明 SoldNo.8',
    productPicture:'https://source.unsplash.com/random',
    productPrice:108,
    productStatus:'sold',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle Sold No.8',
    productQuantity:'8'
  },
  {productId : 9,
    BuyerId:9,
    SellerId:9,
    productDescription:'商品の説明 SoldNo.9',
    productPicture:'https://source.unsplash.com/random',
    productPrice:109,
    productStatus:'sold',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle soldNo.9',
    productQuantity:'9'
  },
  {productId : 10,
    BuyerId:10,
    SellerId:10,
    productDescription:'商品の説明 sellNo.10',
    productPicture:'https://source.unsplash.com/random',
    productPrice:110,
    productStatus:'sell',
    productTradeDate:'TradeDate',
    productTitle:'ProductTitle  sellNo.10',
    productQuantity:'10'
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