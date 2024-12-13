import { useState } from "react"

const Main = () => {

    const [isClick, setIsClick] = useState(false)

    const likeHandler = () => {
        setIsClick(prev => !prev)
    }

    return (
        <main>
            <section>
                <div className='main-image'>
                    <img src="./images/main-image.jpg" alt="baner" />   
                </div>
            </section>

            <div className="container">
                <section>
                    <div className='share-box'>
                        <div className='share-box__right'>
                            <button className='like-box' onClick={likeHandler}>
                                {isClick ? <i className='fa-sharp fa-solid fa-heart'></i> : <i className='fa-sharp fa-regular fa-heart'></i>}
                                <span className='vz-bold'>{isClick ? 38 : 37}</span>
                            </button>
                            <p className='vz-light'><span className='text-sky vz-bold'>مهدی طاهری</span> و <span className='text-sky vz-bold'>36 نفر دیگر</span> این عکس را دوست داشتند </p>
                        </div>

                        <a href='#' className='share-box__left'>
                            <i className='fa-sharp fa-regular fa-share'></i>
                            <p className='vz-light'>اشتراک گذاری</p>
                        </a>
                    </div>
                </section>

                <section>
                    <div className='info-box'>
                        <div className='info-box__one'>
                            <div className='info-box__title'>
                                <h3 className='vz-bold'>حیران شو از این همه زیبایی</h3>
                                <div className='info-box__location-bex'>
                                    <i className='fa-sharp fa-regular fa-location-dot text-gary'></i>
                                    <p className='vz-light'><span className='text-gary'>ایران</span> {'>'} استان اردبیل</p>
                                </div>
                            </div>

                            <div className='info-box__profile'>
                                <img src="./images/profile-user.jpg" alt="profile" />
                                <p className='vz'>مهسا محرابی</p>
                            </div>
                        </div>

                        <div className='info-box__two'>
                            <div className='info-box__patern'>
                                <i className='fa-regular fa-layer-group text-gary fs-icon'></i>
                                <span className='vz text-dark'>طبیعت</span>
                            </div>

                            <div className='info-box__patern'>
                                <i className='fa-regular fa-camera text-gary fs-icon'></i>
                                <p className='vz text-dark'>iPhone 6 Plus</p>
                                <p className='vz text-gary'>32 | 2.2 | 1/1980 | 4.15</p>
                            </div>

                            <div className='info-box__patern'>
                                <i className='fa-regular fa-sharp fa-calendar text-gary fs-icon'></i>
                                <p className='vz text-gary'>انتشار: 29 بهمن 1396</p>
                            </div>
                        </div>

                        <div className='info-box__three'>
                            <div className='info-box__user-comment'>
                                <img src="./images/profile-user.jpg" alt="profile" width='45' />
                                <div className='user-comment text-dark vz-bold'>
                                    <p className='text-sky'>مهسا محرابی</p>
                                    <p>نمایی از گردنه حیران از فراز جنگل فندقلو در شهر نمین خرداد 96</p>
                                </div>
                            </div>

                            <div className='send-commend'>
                                <input type="text" className='vz-light text-gary' placeholder='دیدگاه خود را بنویسید' />
                                <button>
                                    <i className='fa-sharp fa-regular fa-paper-plane'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main
