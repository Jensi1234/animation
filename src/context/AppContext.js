
import { createContext, useState } from "react";
import style from '../component/Carts/index.module.css';
export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [currentCart, setCurrentCart] = useState(1)
    const [cart1Top, setCart1Top] = useState('')
    const [cart2Width, setCart2Width] = useState('')
    const [cart2Top, setCart2Top] = useState('')
    const [cart3Width, setCart3Width] = useState('')
    const [cartOpacity, setCartOpacity] = useState(style.cartOpacity)

    const handleNextClick = () => {
        setCurrentCart(prev => prev + 1)
    }

    const handleBackClick = () => {
        setCurrentCart(prev => prev - 1)
    }

    const handleCart1Next = () => {
        setCart1Top(style.topCart1Next)
        setCart2Width(style.widthCart2Next)
        setCartOpacity(style.cartOpacity)

        setTimeout(() => {
            handleNextClick();
            setCart1Top('')
            setCart2Width('')
        }, 1000);
    }

    const handleCart2Next = () => {
        setCart2Top(style.topCart2Next)
        setCart3Width(style.widthCart3Next)

        setCartOpacity('')
        setTimeout(() => {
            handleNextClick();
            setCart3Width('')
            setCart2Top('')
            setCartOpacity(style.cartOpacity)
        }, 1000);
    }

    const handleCart2Back = () => {
        handleBackClick();
        setCart2Width(style.widthCart2Back)
        setCart1Top(style.topCart1Back)

        setCartOpacity('')
        setTimeout(() => {
            setCart2Width('')
            setCart1Top('')
            setCartOpacity(style.cartOpacity)
        }, 1000)
    }

    const handleCart3Back = () => {
        handleBackClick();
        setCart3Width(style.widthCart3Back)
        setCart2Top(style.topCart2Back)
        setCartOpacity('')

        setTimeout(() => {
            setCart3Width('')
            setCart2Top('')
            setCartOpacity(style.cartOpacity)
        }, 1000);
    }

    return (
        <AppContext.Provider value={{
            handleCart1Next,
            handleCart2Next,
            handleCart2Back,
            handleCart3Back,
            currentCart,
            cart1Top,
            cart2Width,
            cart2Top,
            cart3Width,
            cartOpacity
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;