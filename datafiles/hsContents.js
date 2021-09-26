//TODO
const GENERAL = {fname: "Heeyun's", lname: "High School"};
const THEME = {follower: "airplane.png", aniImage:"pixelCloudBack.png", bullet:"umbrella.png", menuImg:"menuCloud.png", clickedMenuImg:"rainbowCloud.png", menuClickedEffect: "longRain.gif"}
PORTFOLIO = [{menuTitle:"Courses",subTitle:"What I learned", contents:[]},
{menuTitle:"Leadership",  subTitle:"Things I was involved in", contents:[
    {boxTitle:"Girls Who Code Club", boxContents:"<i>2017-2021</i> <br /> As executive member, managed events in club. <br /> Instructed coding languages and website construction projects <br /> Promoted for women in STEM", boxPicture:"bths.jpg"},
    {boxTitle:"Columbia Univerisity", boxContents: "<i>2021 - </i>", boxPicture:"columbia.png"},
    {boxTitle:"Language", boxContents:"English, Korean, Spanish(a little)", boxPicture:null}]},
{menuTitle:"Research", subTitle:"What I Did", contents:[{boxTitle:"Connected Computing & Media Processing AI Research Lab", boxContents:"2020, in Kyungpook National University of Korea <br /> Investigated how Deep Q-learning AI can be implemented in Green City traffic light systems.", boxPicture:"CCMP.jpeg"},{boxTitle:"Responsible Data Science Lab.", boxContents: "2019 in NYU, NY <br /> through ARISE (Applied Research Innovations in Science and Engineering) Program <br /> Assisted in data analysis using Python; mined and organized Big Data to validate the lab-developed algorithm to forecast the public's candidate preference during voting.", boxPicture:"cloud1.png", hidden_title: "Abstract", hidden: "Computational social choice is an interdisciplinary area of research and practice that combines insights from mathematics, logic, economics and computer science to aggregate preferences of individuals to arrive at a society-wide consensus. In a standard election, selecting a winner is trivial: simply pick the candidate with the majority of votes. However, as the number of candidates increases and different voting rules are used, it becomes increasingly difficult to determine the outcome. More specifically, dealing with incompleteness and uncertainty, an inherent characteristic of polling is a serious challenge confronted in this field of research. While initial computational social choice researchers focused on formulating algorithms to determine winners given partial preferences, currently work is being done to carry this forward to implement and optimize such algorithms. Despite the importance of the problem, there is no comprehensive, public dataset of partial preferences of real-world elections. To address this, we mine datasets of recommender systems and rating websites to develop a comprehensive dataset of partial preferences, where each voter (e.g., viewers on Netflix) gives their preferences over a subset of candidates (e.g., movies on Netflix). We plan to use this dataset to validate our optimizations of the algorithms we are developing, and to eventually make this dataset public."},{boxTitle:"Language", boxContents:"English, Korean, Spanish(a little)", boxPicture:null}]}];

const COURSES = [
    {
        subject: "Computer Science / Engineering", 
        courses:[
            {title:"AP Computer Science",
            when:"2 Semesters of Senior Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=221793&type=d&termREC_ID=&pREC_ID=593780"},
            {title:"Fundamentals of IT Infrastructure",
            when:"1 Semester of Senior Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=231673&type=d&termREC_ID=&pREC_ID=449092"},
            {title:"Big Data: Warehousing and Analytics",
            when:"1 Semesters of Senior Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=231673&type=d&termREC_ID=&pREC_ID=449092"},
            {title:"Web Development",
            when:"2 Semesters of Junior Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=221793&type=d&termREC_ID=&pREC_ID=593777"},
            {title:"PTLW Digital Electronics with Arduino",
            when:"2 Semesters of Junior Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=221793&type=d&termREC_ID=&pREC_ID=432440"},
            {title:"AP Computer Science Principles",
            when:"2 Semesters of Sophomore Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=221793&type=d&termREC_ID=&pREC_ID=593315"},
            {title:"PLTW Design and Drafting for Production",
            when:"2 Semesters of Freshmen Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=315773&type=d&termREC_ID=&pREC_ID=593302"}
        ],
        picture:"cloud1.png"
    },
    {
        subject: "Mathematics", 
        courses:[
            {title:"Multivariable Calculus",
            when:"2 Semesters of Senior Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=228633&type=d&termREC_ID=&pREC_ID=443607"},
            {title:"AP Calculus BC",
            when:"2 Semester of Junior Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=228633&type=d&termREC_ID=&pREC_ID=443598"},
            {title:"Intermediate Math Analysis",
            when:"2 Semesters of Sophmore Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=18380&type=d&termREC_ID=&pREC_ID=46235"},
            {title:"Pre-Calculus",
            when:"2 Semesters of Sophomore Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=228633&type=d&termREC_ID=&pREC_ID=443596"},
            {title:"Geometry",
            when:"2 Semesters of Freshmen Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=228633&type=d&termREC_ID=&pREC_ID=443594"},
            {title:"Junior Math Analysis",
            when:"2 Semesters of Freshmen Year",
            moreInfo: "Course Information could be found:",
            link:"https://www.bths.edu/apps/pages/index.jsp?uREC_ID=18380&type=d&termREC_ID=&pREC_ID=46235"}
        ],
        picture:"cloud1.png"
    },
    {subject: "...Still updating Social Studies, Science, and Language subjects"}

];

function constructCourses(){
    for(i=0; i<COURSES.length; i++){
        PORTFOLIO[0].contents[i] = {};
        PORTFOLIO[0].contents[i].boxTitle = COURSES[i].subject;
        PORTFOLIO[0].contents[i].boxContents = "<ul>";
        for (j=0; j<COURSES[i].courses.length; j++){
            console.log("hi");
            console.log(COURSES[i].courses[j].title );
            PORTFOLIO[0].contents[i].boxContents += "<li> <b>" + COURSES[i].courses[j].title + "</b><i> - "+COURSES[i].courses[j].when + "</i><br/>";
            PORTFOLIO[0].contents[i].boxContents += COURSES[i].courses[j].moreInfo+"<a href ='" + COURSES[i].courses[j].link + "'> here</a><hr /> </li>";
        }
        PORTFOLIO[0].contents[i].boxContents += "</ul>";
        PORTFOLIO[0].contents[i].boxPicture = COURSES[i].picture;
    }
}
constructCourses();