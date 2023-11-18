import { useContext, useState } from "react"
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../../context/CartContext"


const ItemDetail = ( {item} ) => {
    
    const { cart, addToCart } = useContext(CartContext)

    const[quantity, setQuantity] = useState(1)

    const restar = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    const sumar = () => {
        quantity < item.stock && setQuantity(quantity + 1)
    }

    return (
            <div className="detail-container">
                <div className="prod-img">
                <img src={item.image} alt={item.name} />
                </div>
                <div>
                    <h3 className="d-title">{item.name}</h3>
                    <p className="prod-cat">Categoria: {item.categoryId}</p>
                    <p className="prod-desc">Descripcion: {item.description}</p>
                    <p className="prod-price">${item.price}</p>
                    <p className="prod-price">Stock: {item.stock}</p>
                    <ItemCount quantity={quantity} sumar={sumar} restar={restar} addToCart={() => {addToCart(item, quantity)}}/>
                </div>
            </div>
    )
}

export default ItemDetail