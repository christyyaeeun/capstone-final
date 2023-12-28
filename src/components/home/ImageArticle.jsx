import React from 'react'
import styles from '../../styles/ImageArticle.module.scss';
import img1 from '../../assets/images/Asset 22.png';
import img2 from '../../assets/images/Asset 24.png';
import img3 from '../../assets/images/Asset 23.png';

export default function ImageArticle() {
    return (
        <section className={ styles.imageSection }>
            {/* Article 1 */ }
            <div className={ styles.articleWrapper }>
                <article className={ styles.imageArticle }>
                    <h2>Our New Menu</h2>
                    <img src={ img1 } alt="Our New Menu" transform="scale(1.0)"
                        transition="0.3s ease-in-out" />
                    <p>
                        Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional
                        recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and
                        have a menu of 12 - 15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere
                        with moderate prices, making it a popular place for a meal any time of the day.
                    </p>
                    <a href="menu.html" target="_blank" rel="noopener noreferrer">
                        See our new menu
                    </a>
                </article>
            </div>
            {/* Article 2 */ }
            <div className={ styles.articleWrapper }>
                <article className={ styles.imageArticle }>
                    <h2>Reserve a table</h2>
                    <img src={ img2 } alt="Reserve a table" />
                    <p>
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue
                        their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his
                        experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand
                        the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                    </p>
                    <a href="/rsvp" target="_blank" rel="noopener noreferrer">
                        Book your table now
                    </a>
                </article>
            </div>
            {/* Article 3 */ }
            <div className={ styles.articleWrapper }>
                <article className={ styles.imageArticle }>
                    <h2>Opening Hours</h2>
                    <img loading="lazy" src={ img3 } alt="Opening Hours" />
                    <p>
                        Indulge in our exquisite seasonal flavors as we welcome you throughout the week. Our doors are open to
                        satisfy your cravings and create a memorable dining experience. Join us during the following hours:
                    </p>
                    <ul>
                        <li>
                            <b>Mon - Fri:</b> 2pm - 10pm
                        </li>
                        <li>
                            <b>Sat:</b> 2pm - 11pm
                        </li>
                        <li>
                            <b>Sun:</b> 2pm - 9pm
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

