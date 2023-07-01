import React from 'react'
import ScrollableFeed from "react-scrollable-feed"

const ScrollableChat = ({messages}) => {
  return <ScrollableFeed>
    {messages && messages.map((m, i) => (
      <div></div>
    ))}
  </ScrollableFeed>
    
  
}

export default ScrollableChat