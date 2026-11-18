import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PlatformRoutes from "./PlatformRoutes";
import PharmacyRoutes from "./PharmacyRoutes";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/app/dashboard" replace />}
                />

                {PlatformRoutes()}

                {PharmacyRoutes()}

                <Route
                    path="*"
                    element={<h2>404 - Page Not Found</h2>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;