export const activeProperties = {
    properties: [
        {
            id: 1,
            name: "20' 1st floor Family building",
            tenants: 2,
            requests: 1,
            status: "active",
            area: "124 sq m",
            checkIns: 5,
            checkOuts: 3,
            earnings: "$1,000.00",
            reviews: {
                averageRating: 4.5,
                totalReviews: 100,
            },
        },
        {
            id: 2,
            name: "21' 1st floor Family building",
            tenants: 2,
            requests: 1,
            status: "inactive",
            area: "124 sq m",
            checkIns: 3,
            checkOuts: 1,
            earnings: "$500.00",
            reviews: {
                averageRating: 4.0,
                totalReviews: 75,
            },
        },
        {
            id: 3,
            name: "22' 1st floor Family building",
            tenants: 2,
            requests: 1,
            status: "active",
            area: "124 sq m",
            checkIns: 7,
            checkOuts: 4,
            earnings: "$1,500.00",
            reviews: {
                averageRating: 4.7,
                totalReviews: 120,
            },
        },
        {
            id: 4,
            name: "23' 1st floor Family building",
            tenants: 2,
            requests: 1,
            status: "inactive",
            area: "124 sq m",
            checkIns: 2,
            checkOuts: 0,
            earnings: "$200.00",
            reviews: {
                averageRating: 4.2,
                totalReviews: 50,
            },
        },
        {
            id: 5,
            name: "17' 1st floor Single building",
            tenants: 2,
            requests: 1,
            status: "active",
            area: "124 sq m",
            checkIns: 4,
            checkOuts: 3,
            earnings: "$800.00",
            reviews: {
                averageRating: 4.6,
                totalReviews: 110,
            },
        },
        {
            id: 6,
            name: "18' 1st floor Single building",
            tenants: 2,
            requests: 1,
            status: "pending",
            area: "124 sq m",
            checkIns: 1,
            checkOuts: 1,
            earnings: "$300.00",
            reviews: {
                averageRating: 4.3,
                totalReviews: 30,
            },
        },
        {
            id: 7,
            name: "19' 1st floor Single building",
            tenants: 2,
            requests: 1,
            status: "pending",
            area: "124 sq m",
            checkIns: 0,
            checkOuts: 0,
            earnings: "$0.00",
            reviews: {
                averageRating: 0,
                totalReviews: 0,
            },
        },
    ],
};

export const dashboardData = {
    stats: [
        {
            id: 1,
            title: "Check-ins",
            data: 12,
            icon: "checkCircle",
        },
        {
            id: 2,
            title: "Check-outs",
            data: 32,
            icon: "signOutAlt",
        },
        {
            id: 3,
            title: "Earnings",
            data: "$4,923.68",
            icon: "dollarSign",
        },
        {
            id: 4,
            title: "Reviews",
            data: {
                averageRating: 4.5,
                totalReviews: 1400,
            },
            icon: "star",
        },
    ],
    nextSteps: [
        {
            title: "Set up your calendar",
            progress: "4/6",
            status: "incomplete",
        },
        {
            title: "Increase your bookings",
            progress: "2/6",
            status: "incomplete",
        },
    ],
    newBookings: [
        {
            property: "196 Kansas Avenue",
            dateRange: "24.08 - 1.09",
            duration: "7 Days",
            earnings: "$2,178.78",
            image: "property-1.jpg",
        },
        {
            property: "917 Garden Street",
            dateRange: "24.08 - 1.09",
            duration: "7 Days",
            earnings: "$2,178.78",
            image: "property-2.jpg",
        },
        {
            property: "568 Gotham Center",
            dateRange: "24.08 - 1.09",
            duration: "7 Days",
            earnings: "$2,178.78",
            image: "property-3.jpg",
        },
    ],
    newActivity: [
        {
            title: "Pet Friendliness",
            timeAgo: "3 hours ago",
            details: "196 Kansas Avenue, Block A, 7th Floor, Number 14",
            type: "question",
        },
        {
            title: "Water Issue",
            timeAgo: "10 hours ago",
            details: "917 Garden Street, Santa Monica, CA 987 360",
            type: "damage report",
        },
        {
            title: "Invoice Inquiry",
            timeAgo: "2 days ago",
            details: "568 Gotham Center, Santa Monica, CA 987 360",
            type: "request",
        },
        {
            title: "Water Issue",
            timeAgo: "5 days ago",
            details: "1016 Penstreet, Block A, 7th Floor, Number 14",
            type: "request",
        },
    ],
    filters: {
        timePeriod: "Last month",
    },
    activeProperties,
};
