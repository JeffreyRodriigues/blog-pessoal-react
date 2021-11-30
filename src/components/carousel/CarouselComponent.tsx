import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';

function CarouselComponent() {
  const [items] = useState([
    { id: 1, title: 'item #1', img: "https://images.unsplash.com/photo-1519077336050-4ca5cac9d64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 2, title: 'item #2', img: "https://images.unsplash.com/photo-1519077336050-4ca5cac9d64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 3, title: 'item #3', img: "https://images.unsplash.com/photo-1519077336050-4ca5cac9d64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 4, title: 'item #4', img: "https://images.unsplash.com/photo-1519077336050-4ca5cac9d64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }
  ])
  return (
    <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={2500}>
      {items.map(item => <div key={item.id}>
        <img src={item.img} alt="" width="100%" height="500px" />

      </div>)}
    </Carousel>
  )
}

export default CarouselComponent;