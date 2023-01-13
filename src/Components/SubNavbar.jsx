import React from 'react'

import './css/Header.css'

export default function SubNavbar() {
    let arr = ['Electronics','TVs & Appliances','Men','Women','Baby & Kids','Home & Furniture',
'Sports, Books & More','Flights','Offer Zone']
  return (
    <div id='subNav'>
        {
            arr.map((item)=>{
              return  <span>{item} </span>
            })
        }
    </div>
  )
}
