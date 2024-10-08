import React from "react"


const projects = [
    {
      "title": "Price Tracking",
      "description": "This is a price tracking application using Python and React for the front end. It scrapes prices of products live and compares them in case of any change.",
      "githubUrl": "https://github.com/kibetamos/Price_Tracking"
    },
    {
      "title": "SMS Platform",
      "description": "An SMS platform that uses React to send SMS to customers.",
      "githubUrl": "https://github.com/kibetamos/homelands_project_repos/tree/main/smsteq-frontend/ReactFrontend/smsteqdashboard"
    },
    {
      "title": "E-commerce Product Comparison",
      "description": "This is a React project used in e-commerce to compare products from different e-commerce sources. It uses a Supabase database, with data collected using Python.",
      "githubUrl": "https://github.com/kibetamos/Hippo/tree/main/togoventures"
    },
    {
      "title": "Meme Generator",
      "description": "A React platform that can be used to generate memes by uploading an image and adding text.",
      "githubUrl": "https://github.com/kibetamos/React/tree/main/meme"
    },
    {
      "title": "Pixabay Image Finder",
      "description": "A React project that uses the Pixabay API to find images based on user input.",
      "githubUrl": "https://github.com/kibetamos/React_Projects/tree/main/pixabay_image_finder"
    },
    {
      "title": "Legal System Analyzer",
      "description": "A React project used to analyze the legal system, with Python for the backend.",
      "githubUrl": "https://github.com/kibetamos/gunduanewfrontend"
    },
    {
      "title": "Invoice App",
      "description": "A React project used for generating invoices.",
      "githubUrl": "https://github.com/kibetamos/invoice_react"
    },
    {
      "title": "Recipe App",
      "description": "A JavaScript application that uses the Recipe API to show different foods and their recipes on refreshing.",
      "githubUrl": "https://github.com/kibetamos/Recipe_Data"
    },
    {
      "title": "Pet Search App",
      "description": "A simple React app for searching for pets.",
      "githubUrl": "https://github.com/kibetamos/PetLover"
    }
  ];
  

  
export default function Main(props) {
    return (
        <main className={props.darkMode ? "Dark": ""}>
            <h1 className="main--title">My React Projects</h1>
            <ul className="main--facts">
            {projects.map((project, index) => (
          <li key={index} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
            </ul>
        </main>
    )
}