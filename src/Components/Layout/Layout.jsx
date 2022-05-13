import React from 'react';
import Nav from "../Nav";
import Main from "../Main";
import Footer from "../Footer";

export default function Layout({children }) {
    return <>
        <Nav/>
        <Main>{children}</Main>
        <Footer/>
    </>
}
