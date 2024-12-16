import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header';
import './Gallery.css';
import '../../../App.css';
import { AiFillHeart, AiFillCamera, AiOutlineRise } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Gallery() {
    const [users, setUsers] = useState([]);

    // استفاده از useEffect برای فراخوانی API
    useEffect(() => {
        axios.get('http://localhost:4000/users') // آدرس فایل db.json یا API محلی شما
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // آرایه خالی یعنی فقط یک بار اجرا شود

    return (
        <>
            <Header />

            {/* بخش انتخاب‌ها */}
            <div className="box-main">
                <div className="box-flex">
                    <div className="text-icon" style={{ marginRight: '30px' }}>
                        <AiFillHeart style={{ color: "#00bf96" }} className='icon' />
                        <span> محبوب </span>
                    </div>
                    <div className="text-icon">
                        <AiFillCamera style={{ color: "#00bf96" }} className='icon' />
                        <span> تازه ها </span>
                    </div>
                    <div className="text-icon">
                        <AiOutlineRise style={{ color: "#00bf96" }} className='icon' />
                        <span> درحال پیشرفت </span>
                    </div>
                </div>
                <select className='box-select'>
                    <option className='box-item'> همه دسته بندی ها </option>
                    <option className='box-item'> طبیعت </option>
                    <option className='box-item'> چشم انداز ها و مناظر </option>
                    <option className='box-item'> حیات وحش </option>
                    <option className='box-item'> معماری </option>
                    <option className='box-item'> هوایی </option>
                    <option className='box-item'> اشیا و طبیعت بی جان </option>
                    <option className='box-item'> نجومی </option>
                    <option className='box-item'> شب </option>
                    <option className='box-item'> سیاه سفید </option>
                    <option className='box-item'> پرتره </option>
                    <option className='box-item'> ماکرو </option>
                    <option className='box-item'> خبری و ورزشی و مستند </option>
                </select>
            </div>

            {/* بخش نمایش تصاویر */}
         
            <div className="container-photo">
                {users.map((user, index) => (
                    <Link
                        key={user.id} // استفاده از id به‌عنوان کلید یکتا
                        to={{
                            pathname: `/Gallery/ax${index + 1}`, // لینک پویا
                            state: { img: user.img || user.filename } // انتخاب تصویر از img یا filename
                        }}
                    >
                        <div
                            className="photo-box"
                            style={{
                                backgroundImage: `url(${user.img || user.filename})`, // استفاده از URL تصویر
                                width:250,
                                marginBottom:0
                            }}
                        >
                        </div>
                        
                    </Link>
                ))}
            </div>
            <div className="container-photo">
                {users.map((user, index) => (
                    <Link
                        key={user.id} // استفاده از id به‌عنوان کلید یکتا
                        to={{
                            pathname: `/Gallery/ax${index + 1}`, // لینک پویا
                            state: { img: user.img || user.filename } // انتخاب تصویر از img یا filename
                        }}
                    >
                        <div
                            className="photo-box"
                            style={{
                                backgroundImage: `url(${user.img || user.filename})`, // استفاده از URL تصویر
                                width:250,
                                marginBottom:0
                            }}
                        >
                        </div>
                        
                    </Link>
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Gallery;
