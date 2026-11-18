import { Route } from "react-router-dom";

import PlatformLayout from "../layouts/PlatformLayout/PlatformLayout";
import PagePlaceholder from "../components/common/PagePlaceholder";

const platformPages = [
  ["dashboard", "Dashboard"],
  ["pharmacies", "Pharmacies"],
  ["subscriptions", "Subscriptions"],
  ["plans", "Plans & Pricing"],
  ["payments", "Payments"],
  ["users", "Platform Users"],
  ["databases", "Database Management"],
  ["analytics", "Analytics"],
  ["support", "Support"],
  ["notifications", "Notifications"],
  ["audit-logs", "Audit Logs"],
  ["settings", "Settings"],
];

const PlatformRoutes = () => (
  <Route path="/platform" element={<PlatformLayout />}>
    {platformPages.map(([path, title]) => (
      <Route
        key={path}
        path={path}
        element={
          <PagePlaceholder
            title={title}
            description={`Manage ${title.toLowerCase()} across the PharmaSuite platform.`}
          />
        }
      />
    ))}
  </Route>
);

export default PlatformRoutes;
