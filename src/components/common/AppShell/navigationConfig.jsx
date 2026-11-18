import {
    DashboardRounded,
    LocalPharmacyRounded,
    StoreRounded,
    CreditCardRounded,
    PaymentsRounded,
    PeopleAltRounded,
    StorageRounded,
    AnalyticsRounded,
    SupportAgentRounded,
    NotificationsRounded,
    SettingsRounded,
    ReceiptLongRounded,
    Inventory2Rounded,
    ShoppingCartRounded,
    PointOfSaleRounded,
    GroupsRounded,
    LocalShippingRounded,
    AccountBalanceWalletRounded,
    AssessmentRounded,
    BadgeRounded,
    HistoryRounded,
    MedicalServicesRounded,
    CategoryRounded,
} from "@mui/icons-material";

export const platformNavigation = [
    {
        title: "Overview",
        items: [
            {
                label: "Dashboard",
                path: "/platform/dashboard",
                icon: DashboardRounded,
            },
        ],
    },
    {
        title: "SaaS Management",
        items: [
            {
                label: "Pharmacies",
                path: "/platform/pharmacies",
                icon: LocalPharmacyRounded,
            },
            {
                label: "Subscriptions",
                path: "/platform/subscriptions",
                icon: CreditCardRounded,
            },
            {
                label: "Plans & Pricing",
                path: "/platform/plans",
                icon: PaymentsRounded,
            },
            {
                label: "Payments",
                path: "/platform/payments",
                icon: ReceiptLongRounded,
            },
        ],
    },
    {
        title: "Platform",
        items: [
            {
                label: "Platform Users",
                path: "/platform/users",
                icon: PeopleAltRounded,
            },
            {
                label: "Database Management",
                path: "/platform/databases",
                icon: StorageRounded,
            },
            {
                label: "Analytics",
                path: "/platform/analytics",
                icon: AnalyticsRounded,
            },
            {
                label: "Support",
                path: "/platform/support",
                icon: SupportAgentRounded,
            },
            {
                label: "Notifications",
                path: "/platform/notifications",
                icon: NotificationsRounded,
            },
            {
                label: "Audit Logs",
                path: "/platform/audit-logs",
                icon: HistoryRounded,
            },
            {
                label: "Settings",
                path: "/platform/settings",
                icon: SettingsRounded,
            },
        ],
    },
];

export const pharmacyNavigation = [
    {
        title: "Workspace",
        items: [
            {
                label: "Dashboard",
                path: "/app/dashboard",
                icon: DashboardRounded,
            },
        ],
    },
    {
        title: "Business",
        items: [
            {
                label: "Billing / POS",
                path: "/app/billing",
                icon: PointOfSaleRounded,
            },
            {
                label: "Sales",
                path: "/app/sales",
                icon: ReceiptLongRounded,
            },
            {
                label: "Purchases",
                path: "/app/purchases",
                icon: ShoppingCartRounded,
            },
            {
                label: "Customers",
                path: "/app/customers",
                icon: GroupsRounded,
            },
            {
                label: "Suppliers",
                path: "/app/suppliers",
                icon: LocalShippingRounded,
            },
        ],
    },
    {
        title: "Inventory",
        items: [
            {
                label: "Medicines",
                path: "/app/medicines",
                icon: MedicalServicesRounded,
            },
            {
                label: "Categories",
                path: "/app/categories",
                icon: CategoryRounded,
            },
            {
                label: "Stock Management",
                path: "/app/inventory",
                icon: Inventory2Rounded,
            },
        ],
    },
    {
        title: "Management",
        items: [
            {
                label: "Finance",
                path: "/app/finance",
                icon: AccountBalanceWalletRounded,
            },
            {
                label: "Reports",
                path: "/app/reports",
                icon: AssessmentRounded,
            },
            {
                label: "Employees",
                path: "/app/employees",
                icon: BadgeRounded,
            },
            {
                label: "Notifications",
                path: "/app/notifications",
                icon: NotificationsRounded,
            },
            {
                label: "Settings",
                path: "/app/settings",
                icon: SettingsRounded,
            },
        ],
    },
];