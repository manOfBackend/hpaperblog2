import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../reducers';
import FooterProps from './FooterProps';


const Footer =
    () => {
        const { message, contact, copyright } = useSelector((state: RootReducerType) => state.Forms.footer);

        return <>{
            <footer>
                <div className="inner" id="footer">
                    <div className="footer-message">{message}</div>
                    <div className="footer-contact">{contact}</div>
                    <div className="footer-copyright">{copyright}</div>
                </div>
            </footer> }</>
    };

export default Footer;