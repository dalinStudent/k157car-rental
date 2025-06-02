interface CategoryItem {
    value: string
    label: string
}

export const CategoryItems: Record<"en"| "km" | "zh", CategoryItem[]> = {
    en: [
        {
            value: "new",
            label: "New Brand"
        },
        {
            value: "used",
            label: "Used Brand"
        }
    ],
    km: [
        {
            value: "new",
            label: "New Brand"
        },
        {
            value: "used",
            label: "Used Brand"
        }
    ],
    zh: [
        {
            value: "new",
            label: "New Brand"
        },
        {
            value: "used",
            label: "Used Brand"
        }
    ]
}