import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "../../routes/CustomRoutes";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";

function Layout() {
 
    return (
        <BrowserRouter>
        <div className="relative h-full ">

            <Header />
            
            <main>
                <CustomRoutes />
            </main>      

            <Footer />

        </div>
        </BrowserRouter>
    )
}

export default Layout;
