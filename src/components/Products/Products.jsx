import './Products.css';
import headphones from '../../assets/headphones.jpg';
import monitor from '../../assets/monitor.jpg';
import keyboard from '../../assets/keyboard.jpeg';
import mouse from '../../assets/mouse.jpg';
import laptop from '../../assets/laptop.jpg';
import tablet from '../../assets/tablet.jpeg';

function Products() {
    return (
        <div className="products">
            <div className="item">
            Headphones
            <img className="product-image" src={headphones} alt="headphones" />
            <div className="description">
                <ul>
                <li>Big</li>
                <li>Comfortable</li>
                </ul>
            </div>
            </div>

            <div className="item">
            Monitor
            <img className="product-image" src={monitor} alt="monitor" />
            <div className="description">
                <ul>
                <li>Good for viewing</li>
                <li>Not heavy</li>
                </ul>
            </div>
            </div>

            <div className="item">
            Keyboard
            <img className="product-image" src={keyboard} alt="keyboard" />
            <div className="description">
                <ul>
                <li>Portable</li>
                <li>Easy to type</li>
                </ul>
            </div>
            </div>

            <div className="item">
            Mouse
            <img className="product-image" src={mouse} alt="mouse" />
            <div className="description">
                <ul>
                <li>Small</li>
                <li>Quiet</li>
                </ul>
            </div>
            </div>

            <div className="item">
            Laptop
            <img className="product-image" src={laptop} alt="laptop" />
            <div className="description">
                <ul>
                <li>High end</li>
                <li>Long battery life</li>
                </ul>
            </div>
            </div>

            <div className="item">
            Tablet
            <img className="product-image" src={tablet} alt="tablet" />
            <div className="description">
                <ul>
                <li>Easy to use</li>
                <li>Smooth screen</li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Products;