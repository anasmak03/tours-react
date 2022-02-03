import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removetour}) =>{
   const[readmore,setReadmore] = useState(false);
        return (
    
        <article className='single-tour'>
            <img src={image} alt="image"></img>
            <footer>
                <div className='tour-infos'>
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
                </div>
                <p>{readmore?info: `${info.substring(0,200)}...
                `}
                <button onClick={() => setReadmore(!readmore)}>
                    {readmore? 'show-less' : 'readMore'}
                </button>
                </p>
                <button className='delete-btn' onClick={() => removetour(id)}>
                    not interssted
                </button>
            </footer>
        </article>
      
       
        );
};

export default Tour;