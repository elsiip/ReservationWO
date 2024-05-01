import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Reservation() {
    return (
        <div className="flex justify-between mx-[200px]">
            <div className="w-full lg:w-[422px] mt-[56px]">
                <h1 className="roboto-bold text-[#576250] text-[32px]" style={{lineHeight: '40px', letterSpacing: '-0.64px'}}>Reservation</h1>
                <h3 className="roboto-regular text-[#B8C1B2] text-base" style={{lineHeight: '24px'}}>We are excited to get planning!</h3>
                <form action="" method="post" className="form-control">
                    <div className="mt-[24px]">
                        <label htmlFor="contact" className="roboto-medium text-base text-[#576250]" style={{lineHeight: '24px'}}>Contact Information</label>
                        <input type="text" name="contact" id="contact" placeholder="Phone no." className="input input-bordered w-full h-[40px] mt-[16px]" />
                    </div>
                    <div className="mt-[24px]">
                        <label htmlFor="getMerried" className="roboto-medium text-base text-[#576250]" style={{lineHeight: '24px'}}>Who's getting married</label>
                        <input type="text" name="partner1" id="partner1" placeholder="Partner 1" className="input input-bordered w-full h-[40px] mt-[16px]" />
                        <input type="text" name="partner2" id="partner2" placeholder="Partner 2" className="input input-bordered w-full h-[40px] mt-[16px]" />
                        <input type="datetime-local" name="date" id="date" className="input input-bordered w-full h-[40px] mt-[16px]" />
                    </div>
                    <div className="mt-[16px]">
                        <select className="select select-bordered w-full h-[40px]">
                            <option disabled defaultValue>Package</option>
                            <option value="Intimate Wedding">Intimate Wedding</option>
                            <option value="Seaside Beach Wedding">Seaside Beach Wedding</option>
                            <option value="Grand Wedding">Grand Wedding</option>
                        </select>
                    </div>
                    <div className="mt-[16px] mb-[24px]">
                        <textarea className="textarea textarea-bordered w-full h-[162px]" placeholder="Tell us anything more that can help! (Optional)"></textarea>
                    </div>
                    <div className="mb-[119px]">
                        <button className="btn bg-[#A19E96] hover:bg-[#576250] text-white w-[160px]">Send</button>
                    </div>
                </form>
            </div>
            <div className="mt-[64px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d493.9457037760091!2d112.66096829221168!3d-7.940350236381776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1714580071787!5m2!1sid!2sid" width="393" height="360" className="border-none" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            
                <h1 className="mt-[24px] roboto-regular text-[#576250] text-base" style={{lineHeight: '24px'}}>Head Office</h1>
                <p className="mt-[8px] roboto-regular text-base text-[#90998B]" style={{lineHeight: '24px'}}>Royal Venture Wedding Organizer <br /> Jl. Blimbing Indah Megah, <br />Kota Araya, Blimbing, <br /> Kota Malang</p>
                <p className="mt-[8px] roboto-regular text-base text-[#90998B]" style={{lineHeight: '24px'}}>Phone : 032 1 0442 <br />Mobile: +62 8575 5008381</p>
                <h1 className="mt-[24px] roboto-medium text-[#576250] text-base" style={{lineHeight: '24px'}}>Follow Us</h1>
                <div className="flex space-x-[8px] mt-[16px]">
                    <button><FontAwesomeIcon icon={faFacebook} className='w-[24px] h-[24px] text-[#90998B]' /></button>
                    <button><FontAwesomeIcon icon={faInstagram} className='w-[24px] h-[24px] text-[#90998B]' /></button>
                    <button><FontAwesomeIcon icon={faTwitter} className='w-[24px] h-[24px] text-[#90998B]' /></button>
                </div>
            </div>
        </div>
    )
}
