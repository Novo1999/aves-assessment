export const activeProperties = {
    properties: [
        {
            id: 1,
            name: '1st floor Family building',
            tenants: 2,
            requests: 1,
            status: 'active',
            area: 124,
            checkIns: 5,
            checkOuts: 3,
            earnings: 1000.0,
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
            area: 124,
            checkIns: 3,
            checkOuts: 1,
            earnings: 500.0,
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
            area: 124,
            checkIns: 7,
            checkOuts: 4,
            earnings: 1500.0,
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
            area: 124,
            checkIns: 2,
            checkOuts: 0,
            earnings: 200.0,
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
            area: 124,
            checkIns: 4,
            checkOuts: 3,
            earnings: 800.0,
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
            area: 124,
            checkIns: 1,
            checkOuts: 1,
            earnings: 300.0,
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
            area: 124,
            checkIns: 0,
            checkOuts: 0,
            earnings: 0.0,
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
            area: 150,
            checkIns: 8,
            checkOuts: 6,
            earnings: 2000.0,
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
            area: 110,
            checkIns: 2,
            checkOuts: 2,
            earnings: 400.0,
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
            area: 200,
            checkIns: 10,
            checkOuts: 8,
            earnings: 3500.0,
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
            area: 180,
            checkIns: 3,
            checkOuts: 3,
            earnings: 700.0,
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
            area: 250,
            checkIns: 12,
            checkOuts: 10,
            earnings: 5000.0,
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
            icon: 'checkCircle',
            key: 'checkIns',
        },
        {
            id: 2,
            title: 'Check-outs',
            icon: 'signOutAlt',
            key: 'checkOuts',
        },
        {
            id: 3,
            title: 'Earnings',
            icon: 'dollarSign',
            key: 'earnings',
        },
        {
            id: 4,
            title: 'Reviews',
            icon: 'star',
            key: 'reviews',
        },
    ],
    activeProperties,
}

type ReviewStats = {
    averageRating: number
    totalReviews: number
}

export type Stats = {
    id: number
    title: string
    icon: string
    key: string
}

export type Property = {
    id: number
    name: string
    tenants: number
    requests: number
    status: string
    area: number
    checkIns: number
    checkOuts: number
    earnings: number
    reviews: ReviewStats
}

export type DashboardData = {
    stats: Stats[]
    activeProperties: {
        properties: Property[]
    }
}
