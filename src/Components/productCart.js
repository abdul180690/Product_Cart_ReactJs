import React from 'react'
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/empty_cart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    console.log(carts);
    const {id, name, price, image, slug} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id, 
            quantity: 1
        }));
    }
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={slug}>
            <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_10px_10px_#0007]' />
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        <div className='flex justify-between items-center'>
            <p>
                Rs.<span className='text-2xl font-medium'>{price}</span>
            </p>
            <button className='bg-zinc-500 text-white px-3 py-1 rounded-md hover:bg-zinc-600 flex gap-2 items-center' onClick={handleAddToCart}>
                <img src={iconCart} alt="cart" className='w-5 inline-block' />
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ProductCart