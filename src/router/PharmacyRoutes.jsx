import { Route } from "react-router-dom";

import PharmacyLayout from "../layouts/PharmacyLayout/PharmacyLayout";
import PagePlaceholder from "../components/common/PagePlaceholder";

const pharmacyPages = [
    ["dashboard", "Dashboard"],
    ["billing", "Billing / POS"],
    ["sales", "Sales"],
    ["purchases", "Purchases"],
    ["customers", "Customers"],
    ["suppliers", "Suppliers"],
    ["medicines", "Medicines"],
    ["categories", "Categories"],
    ["inventory", "Stock Management"],
    ["finance", "Finance"],
    ["reports", "Reports"],
    ["employees", "Employees"],
    ["notifications", "Notifications"],
    ["settings", "Settings"],
];

const PharmacyRoutes = () => (
    <Route path="/app" element={<PharmacyLayout />}>
        {pharmacyPages.map(([path, title]) => (
            <Route
                key={path}
                path={path}
                element={
                    <PagePlaceholder
                        title={title}
                        description={`Manage your pharmacy ${title.toLowerCase()}.`}
                    />
                }
            />
        ))}
    </Route>
);

export default PharmacyRoutes;