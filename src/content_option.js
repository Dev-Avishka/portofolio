const logotext = "Devdisa";
const meta = {
    title: "Devdisa Dissanayake",
    description: "I’m Devdisa Dissanayake, a computer science student at Edith Cowan University who has been coding since I was 13",
};

const introdata = {
    title: "I’m Devdisa Dissanayake",
    animated: {
        first: "I love coding",
        second: "I can code websites",
        third: "I develop mobile apps and games",
    },
    description: "I am a student who is going to Edith Cowan University",
    your_img_url: "https://www.dropbox.com/scl/fi/guljh7388lc664ugcw304/mpypicfinal.png?rlkey=avnrk0p0dd01utywx85o1xoer&st=3eebf6d0&raw=1",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I am student going to Ecu for computer science degree and I have built several projects till now since I was 13. ",
};
const worktimeline = [{
        jobtitle: "I need a job",
        where: "No where",
        date: "till now",
    }
];

const skills = [{
        name: "Python",
        value: 50,
    },
    {
        name: "Express",
        value: 100,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Unity",
        value: 95,
    },
];

const services = [{
        title: "Website Development",
        description: "I will develop websites for you.",
    },
    {
        title: "Mobile Apps",
        description: "I can develop mobile apps using flutter, react native or Android Studio",
    },
    {
        title: "Game Development",
        description: "I can make games for you in unity",
    },
];

const dataportfolio = [
    {
        img: "https://www.dropbox.com/scl/fi/u5cqz049sowii7n36pag7/ember_eagle.png?rlkey=ze8sc2law2rvbzvn9mazrff59&st=4czy6j7n&raw=1",
        description: "Ember Eagle: A simple social media site I started when I was 13 and finished when I was 16. Made with no framework for frontend and node js for backend",
        link: "https://github.com/Dev-Avishka/EmberEagle/tree/main/public",
    },
    {
        img: "data:image/jpeg;base64,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",
        description: "A tip calculator for mobile I made with python",
        link: "https://github.com/Dev-Avishka/EmberEagle/tree/main/public",
    },
    {
        img: "data:image/png;base64,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",
        description: "A lot of leetcode problems solved in python",
        link: "https://github.com/Dev-Avishka/leetcode-solved",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wrOeFdrUz0CZ8E_EN3BHTgFrtYRqba-opw&s",
        description: "More",
        link: "https://github.com/Dev-Avishka",
    }
];

const contactConfig = {
    YOUR_EMAIL: "dabdissanayake@gmail.com",
  
    description: "For further inquiries contact me through email or this form",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_huj9yfx",
    YOUR_TEMPLATE_ID: "template_227vzvg",
    YOUR_USER_ID: "CiyomFaloFH6O5h5s",
};

const socialprofils = {
    github: "https://github.com/Dev-Avishka",

    linkedin: "https://www.linkedin.com/in/dev-avishka-65ba5a325/",
    instagram: "https://www.instagram.com/dev_avishka/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};