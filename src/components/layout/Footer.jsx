import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.scss";
import icon from "../../assets/images/fIcon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const {
    footerContainer,
    footerImg,
    footerHeading,
    footerLinks,
    socialIconsRow,
    contactsRow,
    contact,
} = styles;

export default function Footer() {
    const navigationLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/menu", label: "Menu" },
        { to: "/reservation", label: "Reservation" },
    ];

    const socialMediaLinks = [
        { href: "https://www.facebook.com/thelittlelemonshop/", icon: faFacebook },
        { href: "https://www.instagram.com/littlelemonmoon/", icon: faInstagram },
        { href: "https://twitter.com/littlelemonrhw", icon: faTwitter },
        { href: "https://www.youtube.com/watch?v=3Li-FfypZYE", icon: faYoutube },
    ];

    const contactInfo = [
        { icon: faLocationDot, info: "2395 Maldove Way, Chicago Illinois" },
        { icon: faPhone, info: "(629)-243-6827" },
        { icon: faEnvelope, info: "contact@littlelemon.com" },
    ];

    return (
        <div className={ footerContainer }>
            <footer>
                <menu>
                    <li className={ footerImg }>
                        <img src={ icon } alt="Little Lemon logo" />
                    </li>
                    <li>
                        <h4 className={ footerHeading }>Navigation</h4>
                        <ul className={ footerLinks }>
                            { navigationLinks.map((link) => (
                                <li key={ link.to }>
                                    <Link to={ link.to }>{ link.label }</Link>
                                </li>
                            )) }
                        </ul>
                    </li>

                    <li>
                        <h4 className={ footerHeading }>Contact</h4>
                        <ul className={ `${ footerLinks } ${ contactsRow }` }>

                            { contactInfo.map((info) => (
                                <li key={ info.info }>
                                    <FontAwesomeIcon icon={ info.icon } />
                                    <span>{ info.info }</span>
                                </li>
                            )) }
                        </ul>
                    </li>

                    <li className={ contact }>
                        <h4 className={ footerHeading }>Connect</h4>
                        <ul className={ `${ footerLinks } ${ socialIconsRow }` }>
                            { socialMediaLinks.map((socialLink) => (
                                <li key={ socialLink.href }>
                                    <a
                                        href={ socialLink.href }
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={ socialLink.icon } />
                                    </a>
                                </li>
                            )) }
                        </ul>
                    </li>
                </menu>
            </footer>
        </div>
    );
}
