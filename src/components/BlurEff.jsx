import React from 'react'
import '../styles/components/blureff.scss'
const BlurEff = ({navDimensions,sideShowDimensions}) => {
  console.log(navDimensions.height+sideShowDimensions.height)
  return (
    <div className='blureff'>
      <div className='blur-nav' style={{height:navDimensions.height,width:navDimensions.width}}></div>
      <div className='blur-sidedshow' style={{height:navDimensions.height+sideShowDimensions.height,width:sideShowDimensions.width}}>
      <div className='small-change'style={{height:navDimensions.height}}></div>
      </div>
    </div>
  )
}

export default BlurEff