import './Navigation.css';
import logo from '../../assets/shopee.png';

function Navigation() {
    return (
        <div className="nav">
            <div className="left">
                <img className="shopee-logo" src={logo} alt="shopee logo" />
                <div className="shopee-header"><i className="fa-solid fa-bars"></i></div>
            </div>
            <div className="right">
                <p>My Profile</p>
                <p>Notifications</p>
                <p>Cart</p>
                <p>Help</p>
            </div>
        </div>
    );
}

export default Navigation;