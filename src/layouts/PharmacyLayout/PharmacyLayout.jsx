import { Outlet } from "react-router-dom";

import AppShell from "../../components/common/AppShell/AppShell";

import {
    pharmacyNavigation,
} from "../../components/common/AppShell/navigationConfig";

const PharmacyLayout = () => {
    return (
        <AppShell
            navigation={pharmacyNavigation}
            portalName="Pharmacy Management"
            portalType="pharmacy"
        >
            <Outlet />
        </AppShell>
    );
};

export default PharmacyLayout;