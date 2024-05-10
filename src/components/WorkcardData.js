import ASM from './images/ASM.png'
import course from './images/course.png'
import predictor from './images/predictor.png'
import test1 from './images/test1.mov'
import trade1 from './images/trade1.jpg'
import postcard from './images/postcard.png'
import AVL from './images/AVL.png'
import neural from './images/neural.png'
import port from './images/port.png'
import twitter from './images/twitter.png'

const ProjectCardData = [
    {
        imgsrc: postcard,
        title: "Postcard exchange",
        text: "Developed the backend servlets and File object storage for a postcard exchange social platform. Enables users to create, view, and exchange postcards with other users. The project uses Java Servlets for backend operations and a simple front-end built with React. Leverages multi-threading through a websocket connection to view recent activities on the home page.",
        view: "https://postexchange.icytools.cn/",
        source: "https://github.com/CSCI201-SPR24-Group24",
        privateCode: false
    },
    {
        imgsrc: course,
        title: "USC course scheduler",
        text: "Created a fullstack project to help college students create their calendar, featuring a backend built with Spring Boot, a frontend crafted with React, and a PostgreSQL database for robust data management. Hosted on AWS, it leverages RDS for reliable database services, S3 for secure resource storage, and an EC2 instance for scalable cloud computing. The application simplifies course management by enabling students to easily add courses to their calendars and securely access course materials. ",
        view: "http://schedulerfrontend.s3-website.us-east-2.amazonaws.com/",
        source: "https://github.com/harshkhub/Course-scheduler-Fullstack",
        privateCode: false

    },
  {
        imgsrc: predictor,
        title: "NASDAQ stock predictor",
        text: "Developed a NASDAQ stock predictor using machine learning algorithms, including linear regression, random forest, and gradient boosting. The predictor uses historical stock data to forecast future stock prices, enabling users to make informed investment decisions. The project leverages Python libraries such as NumPy, Pandas, and Scikit-learn for data analysis and model training.  ",
        view: "https://github.com/harshkhub/Stock-market-predictor/tree/main",
        source: "https://github.com/harshkhub/Stock-market-predictor/tree/main",
        privateCode: false
    },
    {
        imgsrc: trade1,
        title: "JoeStocks Trading",
        text: "This Stock Trading Platform is a full-stack web application allowing users to authenticate, purchase stocks, sell them, and view their portfolio. It pulls live stock data from the Finnhub API and utilizes Java Servlets for backend operations, with a simple front-end built with HTML, CSS, and JavaScript. User data is managed in an SQL database.",
        view: "https://github.com/harshkhub/JoesStocks_Trader/tree/main",
        source: "https://github.com/harshkhub/JoesStocks_Trader/tree/main",
        privateCode: false
    },
    {
        imgsrc: neural,
        title: "Neural network for abalone names",
        text: "Developed a neural network to predict the age of abalone snails based on physical attributes. The project uses Python and scikit-learn to create a single layer model that can accurately predict the age of abalones based on their physical characteristics. The model is trained on a dataset of abalone snails with known ages, enabling it to make accurate predictions for new data.",
        view: "https://postexchange.icytools.cn/",
        source: "https://github.com/CSCI201-SPR24-Group24",
        privateCode: true
    },
    {
        imgsrc: twitter,
        title: "Twitter feed clone",
        text: "Developed a Twitter feed clone using C++. The project uses a custom data structure to store tweets and user information, enabling users to post tweets, follow other users, and view their feed. The project leverages object-oriented programming principles to create a modular and extensible codebase, making it easy to add new features and functionality.",
        view: "https://github.com/harshkhub/Portfolio-web",
        source: "https://github.com/harshkhub/Portfolio-web",
        privateCode: true
    },
    {
        imgsrc: port,
        title: "Portfolio website",
        text: "Here is the code for this portfolio website!",
        view: "https://github.com/harshkhub/Portfolio-web",
        source: "https://github.com/harshkhub/Portfolio-web",
        privateCode: false
    },
];
export default ProjectCardData