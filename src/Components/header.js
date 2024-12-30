import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/empty_cart.png'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from '../stores/cart'

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0); 
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(items => total += items.quantity);
        setTotalQuantity(total);
        }, [carts]);
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
    <header className='flex justify-between items-center mb-5'>
        <Link to="/" className='text-2xl font-semibold'>Home.</Link>
        <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center reletive' onClick={handleOpenTabCart}>
            <img src={iconCart} alt="cart" className='w-9' />
            <span className='absolute top-3 right-12 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
        </div>
    </header>
  )
}

export default Header