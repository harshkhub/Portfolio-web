import course from './images/course.png'
import predictor from './images/predictor.png'
import trade1 from './images/trade1.jpg'
import postcard from './images/postcard.png'
import neural from './images/neural.png'
import port from './images/port.png'
import twitter from './images/twitter.png'

const ProjectCardData = [
    {
        imgsrc: postcard,
        title: 'Postcard Exchange',
        text: 'Backend servlets and file-object storage for a postcard exchange social platform. Java Servlets + React, with multi-threaded WebSocket activity feeds.',
        tags: ['Java', 'Servlets', 'React', 'WebSocket'],
        view: 'https://postexchange.icytools.cn/',
        source: 'https://github.com/CSCI201-SPR24-Group24',
        privateCode: false,
    },
    {
        imgsrc: course,
        title: 'USC Course Scheduler',
        text: 'Fullstack calendar planner for college students — Spring Boot + React + PostgreSQL, deployed on AWS (RDS, S3, EC2).',
        tags: ['Spring Boot', 'React', 'PostgreSQL', 'AWS'],
        view: 'http://schedulerfrontend.s3-website.us-east-2.amazonaws.com/',
        source: 'https://github.com/harshkhub/Course-scheduler-Fullstack',
        privateCode: false,
    },
    {
        imgsrc: predictor,
        title: 'NASDAQ Stock Predictor',
        text: 'Forecasts NASDAQ prices using linear regression, random forest, and gradient boosting. Built with NumPy, Pandas, and scikit-learn.',
        tags: ['Python', 'scikit-learn', 'ML'],
        view: 'https://github.com/harshkhub/Stock-market-predictor/tree/main',
        source: 'https://github.com/harshkhub/Stock-market-predictor/tree/main',
        privateCode: false,
    },
    {
        imgsrc: trade1,
        title: 'JoeStocks Trading',
        text: 'Fullstack stock trading platform with auth, portfolio, and live Finnhub data — Java Servlets + SQL backend with vanilla JS frontend.',
        tags: ['Java', 'SQL', 'Finnhub API'],
        view: 'https://github.com/harshkhub/JoesStocks_Trader/tree/main',
        source: 'https://github.com/harshkhub/JoesStocks_Trader/tree/main',
        privateCode: false,
    },
    {
        imgsrc: neural,
        title: 'Abalone Age Neural Net',
        text: 'Single-layer neural network in scikit-learn predicting abalone age from physical attributes — trained on labeled abalone dataset.',
        tags: ['Python', 'scikit-learn'],
        view: '#',
        source: '#',
        privateCode: true,
    },
    {
        imgsrc: twitter,
        title: 'Twitter Feed Clone (C++)',
        text: 'OOP-driven Twitter feed clone in C++ with a custom data structure for tweets, follows, and timeline rendering.',
        tags: ['C++', 'OOP'],
        view: '#',
        source: '#',
        privateCode: true,
    },
    {
        imgsrc: port,
        title: 'Portfolio Website',
        text: 'This very site — built with React, custom CSS, and a dark, minimal design system.',
        tags: ['React', 'CSS'],
        view: 'https://github.com/harshkhub/Portfolio-web',
        source: 'https://github.com/harshkhub/Portfolio-web',
        privateCode: false,
    },
]

export default ProjectCardData
