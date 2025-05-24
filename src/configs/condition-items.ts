interface ConditionItem {
    lable: string
    value: string
}

export const ConditionItems: Record<"en"| "km" | "zh", ConditionItem[]> = {
    en: [
        {
            lable: "Rent By Day",
            value: "day",
        },
        {
            lable: "Rent By Week",
            value: "week",
        },
        {
            lable: "Rent By Month",
            value: "month",
        },
        {
            lable: "Sell",
            value: "sell",
        }
    ],
    km: [
        {
            lable: "ជួលជាថ្ងៃ",
            value: "day",
        },
        {
            lable: "ជួលជាអាទិត្យ",
            value: "week",
        },
        {
            lable: "ជួលជាខែ",
            value: "month",
        },
        {
            lable: "សម្រាប់លក់",
            value: "sell",
        }
    ],
    zh: [
        {
            lable: "按天出租",
            value: "day",
        },
        {
            lable: "每周租金",
            value: "week",
        },
        {
            lable: "按月租金",
            value: "month",
        },
        {
            lable: "出售",
            value: "sell",
        }
    ]
}