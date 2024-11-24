export const activeProperties = {
    properties: [
        {
            id: 1,
            name: '1st floor Family building',
            tenants: 2,
            requests: 1,
            status: 'active',
            area: '124 sq m',
            checkIns: 5,
            checkOuts: 3,
            earnings: '$1,000.00',
            reviews: {
                averageRating: 4.5,
                totalReviews: 100,
            },
        },
        {
            id: 2,
            name: '1st floor Family building',
            tenants: 2,
            requests: 1,
            status: 'inactive',
            area: '124 sq m',
            checkIns: 3,
            checkOuts: 1,
            earnings: '$500.00',
            reviews: {
                averageRating: 4.0,
                totalReviews: 75,
            },
        },
        {
            id: 3,
            name: '1st floor Family building',
            tenants: 2,
            requests: 1,
            status: 'active',
            area: '124 sq m',
            checkIns: 7,
            checkOuts: 4,
            earnings: '$1,500.00',
            reviews: {
                averageRating: 4.7,
                totalReviews: 120,
            },
        },
        {
            id: 4,
            name: '1st floor Family building',
            tenants: 2,
            requests: 1,
            status: 'inactive',
            area: '124 sq m',
            checkIns: 2,
            checkOuts: 0,
            earnings: '$200.00',
            reviews: {
                averageRating: 4.2,
                totalReviews: 50,
            },
        },
        {
            id: 5,
            name: '1st floor Single building',
            tenants: 2,
            requests: 1,
            status: 'active',
            area: '124 sq m',
            checkIns: 4,
            checkOuts: 3,
            earnings: '$800.00',
            reviews: {
                averageRating: 4.6,
                totalReviews: 110,
            },
        },
        {
            id: 6,
            name: '1st floor Single building',
            tenants: 2,
            requests: 1,
            status: 'pending',
            area: '124 sq m',
            checkIns: 1,
            checkOuts: 1,
            earnings: '$300.00',
            reviews: {
                averageRating: 4.3,
                totalReviews: 30,
            },
        },
        {
            id: 7,
            name: '1st floor Single building',
            tenants: 2,
            requests: 1,
            status: 'pending',
            area: '124 sq m',
            checkIns: 0,
            checkOuts: 0,
            earnings: '$0.00',
            reviews: {
                averageRating: 0,
                totalReviews: 0,
            },
        },
        {
            id: 8,
            name: '2nd floor Family building',
            tenants: 3,
            requests: 2,
            status: 'active',
            area: '150 sq m',
            checkIns: 8,
            checkOuts: 6,
            earnings: '$2,000.00',
            reviews: {
                averageRating: 4.8,
                totalReviews: 130,
            },
        },
        {
            id: 9,
            name: '2nd floor Family building',
            tenants: 1,
            requests: 0,
            status: 'inactive',
            area: '110 sq m',
            checkIns: 2,
            checkOuts: 2,
            earnings: '$400.00',
            reviews: {
                averageRating: 3.9,
                totalReviews: 40,
            },
        },
        {
            id: 10,
            name: '3rd floor Luxury building',
            tenants: 4,
            requests: 3,
            status: 'active',
            area: '200 sq m',
            checkIns: 10,
            checkOuts: 8,
            earnings: '$3,500.00',
            reviews: {
                averageRating: 4.9,
                totalReviews: 200,
            },
        },
        {
            id: 11,
            name: '3rd floor Luxury building',
            tenants: 2,
            requests: 1,
            status: 'pending',
            area: '180 sq m',
            checkIns: 3,
            checkOuts: 3,
            earnings: '$700.00',
            reviews: {
                averageRating: 4.1,
                totalReviews: 60,
            },
        },
        {
            id: 12,
            name: '4th floor Penthouse',
            tenants: 5,
            requests: 4,
            status: 'active',
            area: '250 sq m',
            checkIns: 12,
            checkOuts: 10,
            earnings: '$5,000.00',
            reviews: {
                averageRating: 5.0,
                totalReviews: 300,
            },
        },
    ],
}

export const dashboardData = {
    stats: [
        {
            id: 1,
            title: 'Check-ins',
            data: 12,
            icon: 'checkCircle',
        },
        {
            id: 2,
            title: 'Check-outs',
            data: 32,
            icon: 'signOutAlt',
        },
        {
            id: 3,
            title: 'Earnings',
            data: '$4,923.68',
            icon: 'dollarSign',
        },
        {
            id: 4,
            title: 'Reviews',
            data: {
                averageRating: 4.5,
                totalReviews: 1400,
            },
            icon: 'star',
        },
    ],
    nextSteps: [
        {
            title: 'Set up your calendar',
            progress: '4/6',
            status: 'incomplete',
        },
        {
            title: 'Increase your bookings',
            progress: '2/6',
            status: 'incomplete',
        },
    ],
    newBookings: [
        {
            property: '196 Kansas Avenue',
            dateRange: '24.08 - 1.09',
            duration: '7 Days',
            earnings: '$2,178.78',
            image: 'property-1.jpg',
        },
        {
            property: '917 Garden Street',
            dateRange: '24.08 - 1.09',
            duration: '7 Days',
            earnings: '$2,178.78',
            image: 'property-2.jpg',
        },
        {
            property: '568 Gotham Center',
            dateRange: '24.08 - 1.09',
            duration: '7 Days',
            earnings: '$2,178.78',
            image: 'property-3.jpg',
        },
    ],
    newActivity: [
        {
            title: 'Pet Friendliness',
            timeAgo: '3 hours ago',
            details: '196 Kansas Avenue, Block A, 7th Floor, Number 14',
            type: 'question',
        },
        {
            title: 'Water Issue',
            timeAgo: '10 hours ago',
            details: '917 Garden Street, Santa Monica, CA 987 360',
            type: 'damage report',
        },
        {
            title: 'Invoice Inquiry',
            timeAgo: '2 days ago',
            details: '568 Gotham Center, Santa Monica, CA 987 360',
            type: 'request',
        },
        {
            title: 'Water Issue',
            timeAgo: '5 days ago',
            details: '1016 Penstreet, Block A, 7th Floor, Number 14',
            type: 'request',
        },
    ],
    filters: {
        timePeriod: 'Last month',
    },
    activeProperties,
}


type ReviewStats = {
    averageRating: number;
    totalReviews: number;
};

type Stats = {
    id: number;
    title: string;
    data: number | string | ReviewStats;
    icon: string;
};

type NextStep = {
    title: string;
    progress: string;
    status: string;
};

type Booking = {
    property: string;
    dateRange: string;
    duration: string;
    earnings: string;
    image: string;
};

type Activity = {
    title: string;
    timeAgo: string;
    details: string;
    type: string;
};

type Filters = {
    timePeriod: string;
};

export type Property = {
    id: number;
    name: string;
    tenants: number;
    requests: number;
    status: string;
    area: string;
    checkIns: number;
    checkOuts: number;
    earnings: string;
    reviews: ReviewStats;
};

export type DashboardData = {
    stats: Stats[];
    nextSteps: NextStep[];
    newBookings: Booking[];
    newActivity: Activity[];
    filters: Filters;
    activeProperties: {
        properties: Property[];
    };
};