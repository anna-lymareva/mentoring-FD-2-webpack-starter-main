import './Header.scss';
import { Button } from '../Button/Button';
// import { Input } from '../Input/Input';

export const Header = () => {
  return `
    <header class="header">
        <div class="header__wrap">
            <div class="header__logo">
                <img class="header__logo--img" src="./assets/images/logo.png" alt="logo">
            </div>
            <div class="header__navigation">
                <a class="header__navigation__link" href="#">Men's</a>
                <a class="header__navigation__link" href="#">Women's</a>
                <a class="header__navigation__link" href="#">Shoes</a>
                <a class="header__navigation__link" href="#">Accessories</a>
                <a class="header__navigation__link" href="#">Bags</a>
                <a class="header__navigation__link active" href="#">Sale</a>
            </div>   
        </div>
        <div class="header__content">
            <div class="header__content__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, ex!
            </div>
            ${Button('Get Started')}
        </div>
    </header>
    `.trim();
};
