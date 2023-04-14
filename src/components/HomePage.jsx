import React from 'react'

export default function HomePage(props) {
    return (
    <>
        <div className='title-home'><h1>Todos Los productos</h1></div>
        <div className="contenedor">

            {

                props.products.map((element) => {
                    return (
                        <>
                            {element.items.map(items => (
                                <div>
                                    <img src={items.img} className='imgs-card' />
                                    <div className="informacion">
                                        <p>{items.nameProduct}</p>
                                        <p className="precio">{items.price}<span>.99</span></p>
                                        <button>Comprar</button>
                                        <button>Ver Mas</button>
                                    </div>
                                </div>
                            ))}
                        </>)
                })
            }
        </div>

    </>
    )
}
