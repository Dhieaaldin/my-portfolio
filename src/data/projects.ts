export type ProjectCategory = "All" | "Machine Learning" | "Software Development" | "Data Analysis" | "SQL & Database"

export interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    category: ProjectCategory
    image: string
    github: string
    link?: string
}

export const projectsData: Project[] = [
    {
        id: "sonicshield",
        title: "SonicShield",
        description: "A real-time audio event detection app for autism support, featuring Android front-end, Flask back-end with TensorFlow Lite's YAMNet.",
        tags: ["Machine Learning", "Android", "TensorFlow", "Flask"],
        category: "Machine Learning",
        image: "/projects/project7/images/thumbnail.png",
        github: "https://github.com/Dhieaaldin/sonicshield",
    },
    {
        id: "car-price",
        title: "Car Price Predictor",
        description: "An ML-powered web application that predicts car prices based on user input. Features include exploratory data analysis and visualization.",
        tags: ["Machine Learning", "Web Development", "Data Visualization"],
        category: "Machine Learning",
        image: "/projects/project6/images/thumbnail.png",
        github: "https://github.com/Dhieaaldin/car-price-predictor",
    },
    {
        id: "insurance-rec",
        title: "Insurance Rec. System",
        description: "A hybrid recommendation system combining rule-based matching with XGBoost ML to optimize insurance product recommendations.",
        tags: ["Machine Learning", "XGBoost", "Recommendation System"],
        category: "Machine Learning",
        image: "/projects/project9/images/interface.png",
        github: "https://github.com/Dhieaaldin/insurance-recommendation-system",
    },
    {
        id: "git-visualizer",
        title: "Git Visualizer",
        description: "A Java Swing application that provides visual representation of Git repositories, featuring commit history visualization and user authentication.",
        tags: ["Java", "Swing", "JGit", "MySQL"],
        category: "Software Development",
        image: "/projects/project8/images/thumbnail.png",
        github: "https://github.com/Dhieaaldin/Git_visualizer",
    },
    {
        id: "google-analytics",
        title: "Google Analytics Analysis",
        description: "Comprehensive analysis of Google Merchandise Store data using Python. Includes data cleaning, visualization, and actionable insights.",
        tags: ["Python", "Data Analysis", "Google Analytics"],
        category: "Data Analysis",
        image: "/projects/project1/images/plot2.png",
        github: "https://github.com/Dhieaaldin/google-analytics-analysis",
    },
    {
        id: "world-layoffs",
        title: "World Layoffs Analysis",
        description: "Data cleaning and exploratory analysis of global layoff data using MySQL. Uncovers patterns and trends in workforce changes.",
        tags: ["MySQL", "Data Cleaning", "EDA"],
        category: "Data Analysis",
        image: "/projects/project4/images/plot1.png",
        github: "https://github.com/Dhieaaldin/world-layoffs-analysis",
    },
    {
        id: "nyc-sat",
        title: "NYC School SAT Analysis",
        description: "Analysis of New York City public school SAT performance data, identifying factors affecting student achievement.",
        tags: ["Data Analysis", "Education", "Statistics"],
        category: "Data Analysis",
        image: "/projects/project5/images/plot2.png",
        github: "https://github.com/Dhieaaldin/nyc-school-analysis",
    },
    {
        id: "euro-2024",
        title: "Euro 2024 Analysis",
        description: "Comprehensive analysis of Euro 2024 soccer data using SQL. Includes player statistics, team performance, and match outcomes.",
        tags: ["SQL", "Sports Analytics", "Data Visualization"],
        category: "SQL & Database",
        image: "/projects/project2/images/plot2.png",
        github: "https://github.com/Dhieaaldin/euro2024-analysis",
    },
    {
        id: "netflix",
        title: "Netflix Movies Analysis",
        description: "Analysis of Netflix movie durations and release years, exploring trends in content length over time.",
        tags: ["Data Analysis", "Entertainment", "Trends"],
        category: "Data Analysis",
        image: "/projects/project3/images/plot1.png",
        github: "https://github.com/Dhieaaldin/netflix-analysis",
    },
]
