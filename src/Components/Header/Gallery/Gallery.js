import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header';
import './Gallery.css';
import '../../../App.css';

import { AiFillHeart, AiFillCamera, AiOutlineRise } from "react-icons/ai";

function Gallery() {
    // تابع باز کردن تصویر
    const openImage1 = () => {
        window.open(
            "https://media.karnaval.ir/members/2024/10/ea35070c-6783-4125-bfd9-830d553ecce7.jpg?size=0x300",
            "_blank"
        );
    };
    const openImage2 = () => {
        window.open(
            " https://media.karnaval.ir/members/2024/10/9cb74b48-b267-43a8-9906-daf2c3fe5564.jpeg?size=0x300",
            "_blank"
        );
    };
    const openImage3 = () => {
        window.open(
            " https://media.karnaval.ir/members/2024/11/bfa9676a-23ca-4289-8a4b-fb27786fba66.jpg?size=0x300",
            "_blank"
        );
    };
    const openImage4 = () => {
        window.open(
            " https://media.karnaval.ir/members/2024/11/9a0fc945-3196-43f9-b51d-591b14883c90.jpg?size=0x300 ",
            "_blank"
        );
    };
    const openImage5 = () => {
        window.open(
            " https://media.karnaval.ir/members/2024/10/5dfdaf1a-b36d-4640-8218-eb7b1f66bfef.jpg?size=0x300 ",
            "_blank"
        );
    };
    const openImage6 = () => {
        window.open(
            " 	https://media.karnaval.ir/members/2024/10/72becb09-8ae2-4bb8-b9d7-02987147a1d3.jpg?size=0x300 ",
            "_blank"
        );
    };
    const openImage7 = () => {
        window.open(
            " 	 https://media.karnaval.ir/members/2024/10/36d2f762-0c52-49e0-abc0-29c6491eefe9.jpg?size=0x300 ",
            "_blank"
        );
    };
    const openImage8 = () => {
        window.open(
            " https://media.karnaval.ir/members/2024/10/581a6d92-4aae-49fc-9377-691c79f5a6e6.jpeg?size=0x300",
            "_blank"
        );
    }

    return (
        <>
            <Header />

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

            <div className="container-photo">
                {/* باکس تصویر با قابلیت کلیک */}
                <div className="ax1" onClick={openImage1}></div>
                <div className="ax2" onClick={openImage2}></div>
                <div className="ax3" onClick={openImage3}></div>
                <div className="ax4" onClick={openImage4}></div>
                <div className="ax5" onClick={openImage5}></div>
                <div className="ax6" onClick={openImage6}></div>
                <div className="ax7" onClick={openImage7}></div>
                <div className="ax8" onClick={openImage8}></div>

                <div className="ax1" onClick={openImage1}></div>
                <div className="ax2" onClick={openImage2}></div>
                <div className="ax3" onClick={openImage3}></div>
                <div className="ax4" onClick={openImage4}></div>
                <div className="ax5" onClick={openImage5}></div>
                <div className="ax6" onClick={openImage6}></div>
                <div className="ax7" onClick={openImage7}></div>
                <div className="ax8" onClick={openImage8}></div>

                <div className="ax1" onClick={openImage1}></div>
                <div className="ax2" onClick={openImage2}></div>
                <div className="ax3" onClick={openImage3}></div>
                <div className="ax4" onClick={openImage4}></div>
                <div className="ax5" onClick={openImage5}></div>
                <div className="ax6" onClick={openImage6}></div>
                <div className="ax7" onClick={openImage7}></div>
                <div className="ax8" onClick={openImage8}></div>

                <div className="ax1" onClick={openImage1}></div>
                <div className="ax2" onClick={openImage2}></div>
                <div className="ax3" onClick={openImage3}></div>
                <div className="ax4" onClick={openImage4}></div>
                <div className="ax5" onClick={openImage5}></div>
                <div className="ax6" onClick={openImage6}></div>
                <div className="ax7" onClick={openImage7}></div>
                <div className="ax8" onClick={openImage8}></div>



            </div>

            <Footer />
        </>
    );
}

export default Gallery;
