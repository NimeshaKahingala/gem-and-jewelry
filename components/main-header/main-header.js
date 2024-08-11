import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";


export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="A plate with food on it" priority></Image>
                    Gem and Jewelry
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/collection">Collection</NavLink>
                        </li>
                        <li>
                            <NavLink href="/gifts">Gifts</NavLink>
                        </li>
                        <li>
                            <NavLink href="/customize">Customize</NavLink>
                        </li>
                        <li>
                            <NavLink href="/about-us">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink href="/contact-us">Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )

}