import QuantityActions from './QuantityActions.jsx';
import QuantitySelectorStep from './QuantitySelectorStep.jsx';
import Product from './Product.jsx';
import { useState } from 'react';

function Quantity() {
    const [quantity, setQuantity] = useState(1);
    const [steps, setSteps] = useState(1);
    return (
        <>
            <Product quantity={quantity} />
            <h5>Quantity = {quantity}</h5>
            <QuantitySelectorStep
                steps={steps}
                setSteps={setSteps} />
            <br />
            <QuantityActions
                steps={steps}
                quantityValue={quantity}
                upOrDownQuantity={setQuantity} />
        </>
    )
}

export default Quantity;