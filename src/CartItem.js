import React from 'react';

class CartItem extends React.Component {
    render () {
        console.log('this.prop', this.props)
        const {price, title, qty} = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity } = this.props
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style= { styles.image } />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>{price}</div>
                    <div style={ { color: '#777' } }>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                            onClick={() => onIncreaseQuantity(product)} 
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg" 
                            onClick={() => onDecreaseQuantity(product)} 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;