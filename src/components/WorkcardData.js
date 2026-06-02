const ProjectCardData = [
    {
        section: 'Fullstack — Mains',
        items: [
            {
                title: 'USC Course Scheduler',
                description:
                    'A calendar planner for college students with secure course-material access. Hosted on AWS — RDS for the database, S3 for resources, EC2 for compute.',
                made: ['Spring Boot', 'React', 'PostgreSQL', 'AWS'],
                year: '2024',
                view: 'http://schedulerfrontend.s3-website.us-east-2.amazonaws.com/',
                source: 'https://github.com/harshkhub/Course-scheduler-Fullstack',
                privateCode: false,
            },
            {
                title: 'Postcard Exchange',
                description:
                    'A social platform for trading digital postcards. Backend in Java Servlets with multi-threaded WebSocket activity feeds and file-object storage; React front.',
                made: ['Java', 'Servlets', 'React', 'WebSocket'],
                year: '2024',
                view: 'https://postexchange.icytools.cn/',
                source: 'https://github.com/CSCI201-SPR24-Group24',
                privateCode: false,
            },
            {
                title: 'JoeStocks Trading',
                description:
                    'Trade real stocks with virtual money. Auth, portfolio, and live Finnhub data — Java Servlets + SQL on the back, vanilla JS on the front.',
                made: ['Java', 'SQL', 'Finnhub API'],
                year: '2023',
                view: 'https://github.com/harshkhub/JoesStocks_Trader/tree/main',
                source: 'https://github.com/harshkhub/JoesStocks_Trader/tree/main',
                privateCode: false,
            },
        ],
    },
    {
        section: 'ML & Data — From the lab',
        items: [
            {
                title: 'NASDAQ Stock Predictor',
                description:
                    'Forecasts NASDAQ prices using linear regression, random forest, and gradient boosting. Built with NumPy, Pandas, and scikit-learn.',
                made: ['Python', 'scikit-learn', 'ML'],
                year: '2024',
                view: 'https://github.com/harshkhub/Stock-market-predictor/tree/main',
                source: 'https://github.com/harshkhub/Stock-market-predictor/tree/main',
                privateCode: false,
            },
            {
                title: 'Abalone Age Neural Net',
                description:
                    'Single-layer neural network predicting abalone age from physical attributes — trained on a labeled abalone dataset.',
                made: ['Python', 'scikit-learn'],
                year: '2024',
                view: '#',
                source: '#',
                privateCode: true,
            },
        ],
    },
    {
        section: 'Systems — From the kitchen',
        items: [
            {
                title: 'Twitter Feed Clone in C++',
                description:
                    'A microblog in C++. Custom data structure for tweets, follows, and timeline rendering. OOP done with care, for once.',
                made: ['C++', 'OOP'],
                year: '2023',
                view: '#',
                source: '#',
                privateCode: true,
            },
            {
                title: 'This Portfolio',
                description:
                    'A field guide to me — handwritten React with a custom design system, MTA-inspired typography, and a NYC map I drew in SVG by hand.',
                made: ['React', 'CSS', 'SVG'],
                year: '2026',
                view: 'https://github.com/harshkhub/Portfolio-web',
                source: 'https://github.com/harshkhub/Portfolio-web',
                privateCode: false,
            },
        ],
    },
]

export default ProjectCardData
