<!-- In this project, the goal is to carry out a sports league in which a single-page web application (SPA) dashboard is implemented using Webpack and Babel. 
The dashboard contains various scenes, such as the main view, the home view, the news view, the teams view, and the team editing and configuration view. 
Each scene contains reusable components such as the footer, the navbar, the sidebar, and the login form, among others. 
There are several types of users who have different roles and abilities to develop teams, tournaments, and statistics. 
The project is carried out according to the best web development practices learned in programming class and uses clean code and modern technologies to optimize performance and code efficiency. -->


project-root/
├── public/                        # Files accessible by the browser
│   ├── assets/                    # Static resources (images, fonts, etc.)
│   ├── css/                       # CSS files
│   │   └── main.css               # Main styles
│   ├── js/                        # JavaScript files
│   │   └── bundle.js              # Compiled JavaScript file
│   ├── index.html                 # Main HTML file
│   └── other-pages.html           # Other HTML files
├── src/                           # Source code
│   ├── app/                       # Application code
│   │   ├── assets/                # Application-specific resources
│   │   ├── helpers/               # Functions and utilities
│   │   ├── scenes/                # Application views or components
│   │   │   ├── privates/          # Private components
│   │   │   └── publics/           # Public components
│   │   ├── styles/                # Application-specific styles
│   │   │   └── app.js             # Main JavaScript file for the application
│   │   └── index.js               # Application entry point
├── dist/                          # Build-generated files
│   ├── assets/                    # Optimized resources
│   ├── bundle.js                  # Compiled JavaScript file
│   └── index.html                 # Generated HTML file
├── node_modules/                  # Project dependencies
├── .babelrc                       # Babel configuration
├── .gitignore                     # Files and directories ignored by git
├── package-lock.json              # Dependency version control
├── package.json                   # Project dependencies and scripts
└── webpack.config.js              # Webpack configuration
