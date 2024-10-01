interface project {
  title: string;
  cover: string;
  tags: string[];
  code_link: string;
  deploy_link: string;
  desc: string;
}

export const projects: project[] = [
  {
    title: "Blood Bank",
    cover: "/assets/projects/bloodbank.png",
    tags: ["PHP", "CSS", "JS", "GitHub API", "RESTful API" , "BootStrap" ],
    code_link: "https://github.com/garimagoyal321/BloodBankApp.git",
    deploy_link:"https://github.com/garimagoyal321/BloodBankApp/releases/tag/v1" ,
    desc: "Blood Bank Application is a comprehensive platform designed to streamline the process of blood donation and management. It connects blood donors, recipients, and hospitals, making the process of finding and donating blood more efficient and transparent.",
  },
  {
    title: "Chair Color Changer",
    cover: "/assets/projects/color_changer.PNG",
    tags: [ "HTML","github","CSS"],
    code_link: "https://github.com/garimagoyal321/Chair-Color-Changer.git",
    deploy_link: "https://github.com/garimagoyal321/Chair-Color-Changer/releases/tag/C1",
    desc: "Dynamic chair color changer, Interactive Design: Click buttons to change the chair's color instantly!,Responsive Layout: Looks great on any device!"
  },
  {
    title: "Image Rotator",
    cover: "/assets/projects/rotator.PNG",
    tags: ["HTML", "CSS", "animation", "responsive","JavaScript","3d Effect"],
    code_link: "https://github.com/garimagoyal321/rotateimage.git",
    deploy_link: "#",
    desc: "Image Rotator is a sleek and responsive web-based image carousel that dynamically rotates images to create an engaging visual display. Built using HTML, CSS, and JavaScript, this project offers a smooth and customizable way to showcase images with minimal code.",
  },
  {
    title: "Heart Trail Animation",
    cover: "/assets/projects/heart_trail.PNG",
    tags: ["HTML", "CSS", "animation", "responsive"],
    code_link: "https://github.com/garimagoyal321/hearttrailanimation.git",
    deploy_link: "#",
    desc: "Heart Trail Animation is a fun and interactive project where animated hearts follow the user's clicks on the screen, creating a beautiful visual trail effect. Built using HTML, CSS, and JavaScript, this project brings life to the screen with smooth and dynamic heart animations.",
  },
  
  {
    title: "Text Editor",
    cover: "/assets/projects/Text_editor.PNG",
    tags: ["CSS", "Javascript", "HTML", "Responsive"],
    code_link: "https://github.com/garimagoyal321/Code-Editor.git",
    deploy_link: "#",
    desc: "Custom Text Editor is a lightweight and intuitive web-based text editor that allows users to create, edit, and format text with ease. Built using simple and efficient HTML, CSS, and JavaScript, this text editor offers essential features for editing documents directly in the browser.",
  },
  
 
];
