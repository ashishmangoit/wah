import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
} from "lucide-react";
import footerlogo from "../../assets/images/footerlogo.png";
import FooterInfoColumn from "../FooterInfoColumn.tsx";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import googleplayStore from '../../assets/images/googleplaystore.png'
import appStore from '../../assets/images/appstore.png'
import qr from '../../assets/images/qr.png'

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#e99b0e] text-black px-8 py-10 mt-16">
            <div className="w-11/12 flex justify-evenly ">
                <div className="w-1/2 text-center flex items-center flex-col justify-center">
                    <img src={footerlogo} alt="" className="w-[100px]"/>
                    <p className="mb-4">Subscribe</p>
                    <p>Get First Deal for free</p>
                </div>

                <div className="w-1/2 flex justify-around">
                    <FooterInfoColumn
                        title="Support"
                        items={[
                            "Frisco, Texas, US",
                            "75035",
                            "admin@wahsmartdeals.com",
                            "+1 972-565-4111",
                        ]}
                    />
                    <FooterInfoColumn
                        title="Account"
                        items={["My Account", "My Stuff", "Wallet", "Chat"]}
                    />
                    <FooterInfoColumn
                        title="Quick Link"
                        items={[
                            "Privacy Policy",
                            "Terms Of Use",
                            "FAQ",
                            "Contact",
                        ]}
                    />
                </div>
                <div className="space-x-2 ">
                    <h2 className="font-semibold mb-4">Download App</h2>
                    <div className='flex'>
                        <img src={qr} alt="" className="w-[76px] mr-[9px]" />
                        <div className="grid gap-[7px]">
                            <img src={googleplayStore} alt="" className="h-[33px] w-[116px]"/>
                            <img src={appStore} alt="" className="h-[33px] w-[116px] ml-[0px]"/>
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                        <Facebook />
                        <Instagram />
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-900">
                © Copyright wahsmartdeals 2025. All right reserved
            </div>
        </footer>
    );
};

export default Footer;
