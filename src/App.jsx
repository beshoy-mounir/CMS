import { Routes, Route } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import User from "./Pages/UserLayout/User";
import Admin from "./Pages/AdminLayout/Admin";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<User />} />
                <Route path="/admin/*" element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;
