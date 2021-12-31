//TODO
GENERAL = {fname: "Heeyun", lname: "High School"};
THEME = {follower: "airplane.png", aniImage:"pixelCloudBack.png", bullet:"umbrella.png", menuImg:"menuCloud.png", clickedMenuImg:"rainbowCloud.png", menuClickedEffect: "longRain.gif"}
PORTFOLIO = [
    {menuTitle:"School",subTitle:"Brooklyn Technical High School", contents:[{boxTitle: "General Info: ", boxContents: "<b>Location: </b> Brooklyn, NY <br /><br /> <b> Total Enrollment: </b> 5,884 (Yes. it is a gigantic school) <br /> <br /><a href = 'https://bths.edu/'>Website</a> <br />", boxPicture:"bths.jpg"}]},
    {menuTitle:"Courses",subTitle:"What I learned", contents:[]},
    {menuTitle:"Leadership",  subTitle:"Things I was involved in", contents:[
        {boxTitle:"Girls Who Code Club", boxContents:"<i>2017-2021</i> <br /> As a co-president, I managed events in club. <br /> I had instructed in coding HTML, JS, CSS and guiding website construction and planned weekly meetings attended by 35 members. <br /> The goal of this club is to promote for women in STEM by providing learning opportunities for girls beginning their coding experiences. <br /><br /> <b>Instagram: </b> @bthsgirlswhocode", boxPicture:"GWC_logo.png"},
        {boxTitle:"CSI club", boxContents: "<i>2017-2021</i> <br />As an executive member, I organized presentation slides and lab works for weekly meetings attended by 35 members. <br /> By the end of the semester, we hosted competitions by designing crime scenes and scenarios, applying forensic analyses taught in the club and assigning suspects for members to investigate through roleplay. ", boxPicture:null},
        {boxTitle:"Science Olympiad", boxContents:"I directed four Science Olympiad build events as captain. In preparation for events, I studied characteristics of balsa and bass woods, aerodynamics, decryption. Instructed members about events, assigned projects, and provided constructive feedback. Increased efficiency of the team's infrastructure and membership process. <br /><br /> <img class = 'embeddedImg' src = 'images/wright_stuff.jpeg' />", boxPicture:"scioly_award.jpeg"}]},
    {menuTitle:"Research", subTitle:"What I Studied", contents:[
        {boxTitle:"Development of a Superhydrophobic Surface Using Electrolytic Deposition and the Precipitation of Polymer Chains", boxContents:"2019-2020, at Brooklyn Technical High School <br /><br />  The objective of this research was to develop a hydrophobic surface using electrodeposition of micro metal particles on a metal surface by mimicking the unique texture of the lotus leaf. <br /> <br /> My engineering goal was to develop an economically efficient method of creating a nontoxic, hydrophobic surface, which could be used to improve the infrastructure of scaffolding and the maintenance of pipes. <br /> <br /> <a href = 'https://www.emerginginvestigators.org/articles/the-development-of-a-superhydrophobic-surface-using-electrolytic-deposition-polymer-chains-precipitation'>This paper</a> was published on Journals of Emerging Investigators <br /><br /> <a href = 'datafiles/Poster_Hydrophobic Surface.pdf'>See poster</a>", hidden_title: "Abstract", hidden: "The useful life of infrastructure metals is limited by prolonged exposure to water and deposition of insoluble minerals. Advances in surface treatment suggest that both problems can be alleviated through the formation of surfaces that are hydrophobic and therefore self-cleaning. In nature, the surface of a lotus leaf displays superhydrophobicity, containing microbumps on the surface with non-polar nanofibers on the bumps. Here, we describe a process that mimics this topography. The process includes brief electrodeposition of zinc from aqueous Zn(NO3)2 followed by drying and spray-coating of a xylene silicone solution. Our results indicate that zinc coated steel has a contact angle of 130° and a sliding angle of 16°, displaying it has high hydrophobicity and self-cleaning properties. Copper yielded similar results, indicating that this method can be applied to other metals. These results suggest that a Cassie-Baxter state, the ideal droplet to surface interaction, was formed on these metal surfaces. However, further development should be done regarding the precipitation of nanofibers to maintain the created topography. Such hydrophobic surfaces would improve the longevity of metal infrastructure since its anti-rusting characteristics limits the surface's exposure to water.", boxPicture:"hydrophobic.png"},
        {boxTitle:"Detecting Odor Molecule Using Metal Quantum Dot", boxContents: "2018-2019 at Brooklyn Technical High School and York College <br /> <br /> This research was designed to develop an odor sensor that detects gas molecules based on the resistance change of a cobalt-doped graphene layer. <br /><br /> <a href ='datafiles/Poster_Odor.pdf'>See poster</a> <br /><br /><a href = 'datafiles/Paper_Odor.pdf'>Read Paper</a>", hidden_title: "Abstract", hidden: "This research was designed to develop an odor sensor that detects gas molecules based on the resistance change of a cobalt-doped graphene layer. Applying crystal field theory to the cobalt-graphene system, the resistance of the system will increase as an odorant comes closer. In addition, the energy gap created by the odorant will differ for each type of odorant. Thus, if the coordination power of odor molecules causes different energy gaps with cobalt, then different odor molecules in mixtures of gas can be differentiated in the detection. In order to detect mixture gases, detecting individual odorant with different binding power must be tested with the change of resistance. The most change was demonstrated by the highest concentration with 72.0% of acetone, and the resistance increased by 5.763 MW. Although this result proves the hypothesis successfully, further investigation for the variety of gas must be followed in order to develop a practical electronic nose that detects various smell molecules from mixture gases.", boxPicture:'presentationOdor.jpg'}]}];
const COURSE_IDX = 1;

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
        PORTFOLIO[COURSE_IDX].contents[i] = {};
        PORTFOLIO[COURSE_IDX].contents[i].boxTitle = COURSES[i].subject;
        PORTFOLIO[COURSE_IDX].contents[i].boxContents = "<ul>";
        for (j=0; j<COURSES[i].courses.length; j++){
            console.log("hi");
            console.log(COURSES[i].courses[j].title );
            PORTFOLIO[COURSE_IDX].contents[i].boxContents += "<li> <b>" + COURSES[i].courses[j].title + "</b><i> - "+COURSES[i].courses[j].when + "</i><br/>";
            PORTFOLIO[COURSE_IDX].contents[i].boxContents += COURSES[i].courses[j].moreInfo+"<a href ='" + COURSES[i].courses[j].link + "'> here</a><hr /> </li>";
        }
        PORTFOLIO[COURSE_IDX].contents[i].boxContents += "</ul>";
        PORTFOLIO[COURSE_IDX].contents[i].boxPicture = COURSES[i].picture;
    }
}
constructCourses();