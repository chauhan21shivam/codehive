# Code Hive

**Code Hive** is a web-based code editor that allows users to write and preview HTML, CSS, and JavaScript in real-time. The platform provides an intuitive interface for web developers and learners to test and visualize their code snippets in a streamlined environment.
[Check Out the Live Version](https://roaring-malabi-659833.netlify.app/)


## Features

- **Real-time Code Editing**: Write and edit HTML, CSS, and JavaScript code with instant feedback in the preview pane.
- **Responsive Design**: The editor layout adapts to various screen sizes, making it accessible on both desktop and mobile devices.
- **Integrated Preview**: See your changes live as you type, with a synchronized preview of your web page.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, CodeMirror
- **CodeMirror Extensions**:
  - `@codemirror/lang-html` for HTML syntax highlighting and editing.
  - `@codemirror/lang-css` for CSS syntax highlighting and editing.
  - `@codemirror/lang-javascript` for JavaScript syntax highlighting and editing.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or Yarn

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/code-hive.git
```

2. Navigate to the project directory:

```bash
   cd code-hive
```

3. Install the dependencies:

```bash
   npm install
```

or

```bash
   yarn install
```

### Running the Project

To start the development server, run:

```bash
   npm start
```

or

```bash
   yarn start
```

The project will be accessible at http://localhost:3000.

### Building for Production

To create an optimized build for production, run:

```bash
   npm run build
```

or

```bash
    yarn build
```

The build will be output to the build directory.

## Project Structure

```
plaintext
Copy code
code-hive/
│
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── Navbar.js
│   │   ├── Editor.js
│   │   └── Result.js
│   ├── Assets/
│   │   └── CodeHive.webp
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## How to Use

Start Editing: Begin by typing your HTML, CSS, or JavaScript code in the respective editor panels.
Live Preview: The preview pane will automatically update to reflect your changes.
Explore: Experiment with different code snippets and see the immediate results.

## Contributing
Contributions are welcome! If you have suggestions for improving this project or would like to report an issue, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author
**Your Name - [Shivam Chauhan](https://www.linkedin.com/in/chauhan21shivam)**
