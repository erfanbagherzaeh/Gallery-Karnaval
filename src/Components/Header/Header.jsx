import { useState } from 'react'
import './Header.css'

const Header = () => {

    const [isMenu, setIsMenu] = useState(false)

    const searchMenu = () => {
        setIsMenu(prev => !prev)
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="header bg-white rounded-dominant">
                        <a href="#">
                            <img src="./images/logo.svg" alt="logo" width='160' />
                        </a>

                        <div className='modal-handler'>
                            <div className={`header__search-input ${isMenu ? 'header__search-input--click' : ''} vz`}>
                                <i className='fa-sharp fa-regular fa-location-dot text-gary'></i>
                                <input style={{ flexGrow: '1' }} type="text" className='fs-medium' placeholder='کجا می خوای بری؟' onClick={searchMenu} />
                            </div>

                            <div className={`modal-menu__content ${isMenu ? 'modal-menu__content--click' : ''}`}>
                                <div className='modal-menu__option vz'>
                                    <div>
                                        <p className='text-gary' style={{ fontSize: '9px' }}>شهرهای پرطرفدار داخلی</p>
                                        <div className='modal-menu__side'>
                                            <a className='modal-menu__item' href="#">تهران</a>
                                            <a className='modal-menu__item' href="#">اهواز</a>
                                            <a className='modal-menu__item' href="#">شیراز</a>
                                            <a className='modal-menu__item' href="#">مشهد</a>
                                            <a className='modal-menu__item' href="#">کیش</a>
                                            <a className='modal-menu__item' href="#">اصفهان</a>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-gary' style={{ fontSize: '9px' }}>شهرهای پرطرفدار خارجی</p>
                                        <div className='modal-menu__side'>
                                            <a className='modal-menu__item' href="#">استانبول <span className='text-gary'>{'>'} ترکیه</span></a>
                                            <a className='modal-menu__item' href="#">دبی <span className='text-gary'>{'>'} امارات متحده عربی</span></a>
                                            <a className='modal-menu__item' href="#">تفلیس <span className='text-gary'>{'>'} گرجستان</span></a>
                                            <a className='modal-menu__item' href="#">بانکوک <span className='text-gary'>{'>'} تایلند</span></a>
                                            <a className='modal-menu__item' href="#">آنتالیا <span className='text-gary'>{'>'} ترکیه</span></a>
                                            <a className='modal-menu__item' href="#">باکو <span className='text-gary'>{'>'} جمهوری آزربایجان</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className='header__box-icon'>
                            <li>
                                <a href="#">
                                    <div className='box-icon__item'>
                                        <i className='fa-sharp fa-regular fa-gears fs-icon text-red'></i>
                                        <span className='vz-light fs-low'>کنترل سفر</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='box-icon__item'>
                                        <i className='fa-sharp fa-regular fa-magnifying-glass fs-icon'></i>
                                        <span className='vz-light fs-low'>جستجو</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='box-icon__item'>
                                        <i className='fa-sharp fa-camera fs-icon'></i>
                                        <span className='vz-light fs-low'>عکاسخانه</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='box-icon__item'>
                                        <i className='fa-sharp fa-regular fa-tools fs-icon'></i>
                                        <span className='vz-light fs-low'>سفرهای من</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='box-icon__item'>
                                        <i className='fa-sharp fa-user fs-icon'></i>
                                        <span className='vz-light fs-low'>حساب کاربری</span>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <div className='header__modile-box'>
                            <a href="#">
                                <i className='fa-sharp fa-light fa-magnifying-glass'></i>
                            </a>
                            <a href="#">
                                <i className='fa-light fa-solid fa-tools'></i>
                            </a>
                            <a href="#">
                                <i className='fa-sharp fa-light fa-gears text-red'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header