import Item from '../Item/Item'

const ItemList = ({productos, name}) => {

    return (
        <div>
            <h2>{name}</h2>

            <div className='products'>
                {productos.map((prod) =>
                <Item key={prod.id} product={prod}/>
                )}
            </div>
        </div>
    )
}

export default ItemList