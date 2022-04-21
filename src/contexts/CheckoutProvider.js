import { useState } from 'react';
import CheckoutContext from './checkout-context';

const CheckoutProvider = (props) => {
    const [isCheckedOut,setIsCheckedOut] = useState(false);

    const handleSetCheckedOut = () => {
        setIsCheckedOut(true);
    }

    const handleRemoveCheckedOut = () => {
        setIsCheckedOut(false);
    }

    const checkoutContext = {
        isCheckedOut: isCheckedOut,
        setCheckedOut: handleSetCheckedOut,
        removeCheckedOut: handleRemoveCheckedOut,
    }

    return <CheckoutContext.Provider value={}>{props.children}</CheckoutContext.Provider>
}