import React, { useContext, useRef, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CheckoutDetail from './CheckoutDetail';
import { uploadOrder } from '../data/getData';
import { ToastContainer, toast } from 'react-toastify';
export default function Checkout() {
    const [correosValidos, setCorreosValidos] = useState(false);
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const correo1Ref = useRef(null);
    const correo2Ref = useRef(null);
    const telefonoRef = useRef(null);
    const [cart, setCart] = useContext(CartContext);

    function handleSubmit(event) {
        event.preventDefault();
        const correo1 = correo1Ref.current.value;
        const correo2 = correo2Ref.current.value;
        if (correo1 === correo2 && correo1.includes('@') && correo2.includes('@')) {
            setCorreosValidos(true);
        } else {
            setCorreosValidos(false);
        }
    }

    const calculateTotal = () => {
        let total = 0;

        cart.forEach((product) => {
            total += product.quantity * product.price;

        });

        return total;
    };

    const handleFinalizarCompra = () => {
        uploadOrder(cart, calculateTotal()).then((orderNumber) => {
            toast.success(`Tu orden ${orderNumber} ha sido procesada!`);
        });
    }


    return (
        <>
        <div className='container-checkout'>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" ref={nombreRef} required />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" ref={apellidoRef} required />
                </div>
                <div className="form-group">
                    <label htmlFor="correo1">Correo electrónico:</label>
                    <input type="email" id="correo1" ref={correo1Ref} required />
                </div>
                <div className="form-group">
                    <label htmlFor="correo2">Confirmar correo electrónico:</label>
                    <input type="email" id="correo2" ref={correo2Ref} required />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" id="telefono" ref={telefonoRef} />
                </div>
                <button type="submit">Enviar</button>
                {correosValidos ? (
                    <p className="mensaje-valido">Los correos electrónicos son válidos.</p>
                ) : (
                    <p className="mensaje-invalido">Los correos electrónicos no son válidos.</p>
                )}
            </form>
            <div>
                { // Solo renderizar si el correo es valido
                    cart.map(function (product) {
                        return (
                            <>
                                <CheckoutDetail product={product} />
                            </>

                        );
                    })}
                {<div className="total">
                    <p>Total: ${calculateTotal()}</p>
                </div>}
                {correosValidos && <button className='button-end' onClick={() => handleFinalizarCompra()}>Finalizar compra</button>}
                
            </div>
        </div>
        <ToastContainer autoClose={3000} />
        </>
    );


}