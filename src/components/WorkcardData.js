import ASM from './images/ASM.png'
import course from './images/course.png'
import predictor from './images/predictor.png'
import test1 from './images/test1.mov'

const ProjectCardData = [
    {
        imgsrc: course,
        title: "USC course scheduler",
        text: "Created a fullstack project to help college students create their calendar, featuring a backend built with Spring Boot, a frontend crafted with React, and a PostgreSQL database for robust data management. Hosted on AWS, it leverages RDS for reliable database services, S3 for secure resource storage, and an EC2 instance for scalable cloud computing. The application simplifies course management by enabling students to easily add courses to their calendars and securely access course materials. ",
        view: "http://schedulerfrontend.s3-website.us-east-2.amazonaws.com/",
        source: "https://github.com/harshkhub/Course-scheduler-Fullstack"

    },
  {
        imgsrc: predictor,
        title: "NASDAQ stock predictor",
        text: "Developed a NASDAQ stock predictor using machine learning algorithms, including linear regression, random forest, and gradient boosting. The predictor uses historical stock data to forecast future stock prices, enabling users to make informed investment decisions. The project leverages Python libraries such as NumPy, Pandas, and Scikit-learn for data analysis and model training.  ",
        view: "https://github.com/harshkhub/Stock-market-predictor/tree/main",
        source: "https://github.com/harshkhub/Stock-market-predictor/tree/main"
    },
];
export default ProjectCardData