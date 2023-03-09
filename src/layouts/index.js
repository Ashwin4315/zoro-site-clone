

import Footer from "./Footer";
import "./index.css"
import Navbar from "./Navbar";

function Layout({children}) {
    return ( 
        <div className="Layout">
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}

export default Layout;