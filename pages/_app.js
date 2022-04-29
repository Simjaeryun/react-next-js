import NavBar from "../components/NavBar"

export default function App({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
            <style jsx global>{`
                a{
                    color:#000;
                    text-decoration:none;
                }          
                `}
            </style>
        </div>
    )
}