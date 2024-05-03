
import { createContext, useState } from "react";
import style from '../component/Carts/index.module.css';
export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [currentCart, setCurrentCart] = useState(1)
const [cart1NextTop , setCart1NextTop] = useState('')
const [cart2NextWidth , setCart2NextWidth] = useState('')
const [cart2NextTop , setCart2NextTop] = useState('')
const [cart3NextWidth ,setCart3NextWidth] = useState('')

    const handleNextClick = () => {
        setCurrentCart(prev => prev + 1)
    }
    
    const handleBackClick = () => {
        setCurrentCart(prev => prev - 1)
    }

    const handleCart1Next = () =>{
        setCart1NextTop(style.topCart1Next)
        setCart2NextWidth(style.widthCart2Next)

        setTimeout(() => {
            handleNextClick();
            setCart1NextTop('')
            setCart2NextWidth('')
        }, 1000);
    }

    const handleCart2Next = () =>{  
        setCart2NextTop(style.topCart2Next)
        setCart3NextWidth(style.widthCart3Next)

        setTimeout(() => {
            handleNextClick();
            setCart3NextWidth('')
            setCart2NextTop('')
        }, 1000);
    }

    const handleCart2Back = () =>{
        setCart1NextTop(style.topCart1Back)
        setCart2NextWidth(style.widthCart2Back)
        handleBackClick();
        setTimeout(() => {
            setCart1NextTop('')
            setCart2NextWidth('')
        },1000)
    }

    const handleCart3Back = () => {
        setCart3NextWidth(style.widthCart3Back)
        setCart2NextTop(style.topCart2Back)
        handleBackClick();
        setTimeout(() => {
            setCart3NextWidth('')
            setCart2NextTop('')
        }, 1000);
    }
    
    return (
        <AppContext.Provider value={{
            handleNextClick,
            handleCart1Next,
            handleCart2Next,
            handleBackClick ,
            handleCart2Back,
            handleCart3Back,
            currentCart,
            cart1NextTop,
            cart2NextWidth,
            cart2NextTop,
            cart3NextWidth,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;