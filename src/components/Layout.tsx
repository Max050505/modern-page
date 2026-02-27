import NavBar from "./elements/NavBar";
import Footer from "./elements/Footer";
import { useEffect } from "react";


interface LayoutsProps {
    title: string,
    children: React.ReactNode,
}


export default function Layout({title, children}: LayoutsProps){

    useEffect(() => {
        document.title = title
    }, [title])
    return (
        <>
        <NavBar/>

        <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
        </main>

        <Footer/>
        </>
    );
}