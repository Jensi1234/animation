import { createContext, useState } from "react";
import style from '../component/Carts/index.module.css';
export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [currentCart, setCurrentCart] = useState(1)
    const [nextCart1, setNextCart1] = useState('')
    const [nextCart2, setNextCart2] = useState('')
    const [nextCart3, setNextCart3] = useState('')
    const [topCss2 , setTopCss2] = useState('')

    const handleNextClick = () => {
        setCurrentCart(prev => prev + 1)
    }
    
    const handleBackClick = () => {
        setCurrentCart(prev => prev - 1)
    }

    const handleNext = () => {
        setNextCart1(style.nextStep1Css)
console.log('first')
        setTimeout(() => {
            handleNextClick();
            setNextCart1('')
        }, 1000);
    }

    const handleNext2 = () => {
        console.log("Hey",style.nextStep2)
        setNextCart2(style.nextStep2)
        setTopCss2(style.nextStep2Css)

        setTimeout(() => {
            handleNextClick();
            // setNextCart2('')
            setTopCss2('')
        }, 1000);
    }

    const handleBackStep3 = () => {
        setNextCart3(style.backStep3Css)
        setTopCss2(style.backStep2Css)
        handleBackClick();

        setTimeout(() => {
            setNextCart3('')
            setTopCss2('')
        }, 1000);
    }

    const handleBackStep2 = () => {
        setNextCart2(style.backStep2)
        setNextCart1(style.backStep1Css)
        handleBackClick();

        setTimeout(() => {
            setNextCart2('')
            setNextCart1('')
        }, 1000);
    }

    return (
        <AppContext.Provider value={{
            handleBackStep3,
            handleBackStep2,
            handleNext,
            handleNext2,
            topCss2,
            currentCart,
            nextCart1,
            nextCart2,
            nextCart3
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;