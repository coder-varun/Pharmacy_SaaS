import { Outlet } from "react-router-dom";

import AppShell from "../../components/common/AppShell/AppShell";

import {
    platformNavigation,
} from "../../components/common/AppShell/navigationConfig";

const PlatformLayout = () => {
    return (
        <AppShell
            navigation={platformNavigation}
            portalName="Platform Administration"
            portalType="platform"
        >
            <Outlet />
        </AppShell>
    );
};

export default PlatformLayout;