import { ThemeProvider } from "../context/ThemeContext";
import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import "./globals.css";

export const metadata = {
    title: "ApTaxLedger Solution",
    description: "Your accounting and tax solutions provider",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <body>
                <ThemeProvider>
                    <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                        <Topbar />
                        <Navbar />
                        <main style={{ flex: '1 0 auto' }}>
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
