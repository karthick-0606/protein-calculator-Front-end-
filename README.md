# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Protein Calculator Frontend

A modern, responsive web interface for the Protein Calculator application.

## 🚀 How to Run

### Option 1: Using Live Server (Recommended)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The application will open in your browser at `http://127.0.0.1:5500`

### Option 2: Using Python HTTP Server

```bash
# Navigate to the frontend directory
cd c:\Users\karth\p-backend\protein-calculator\frontend

# Start Python HTTP server
python -m http.server 8000

# Open browser and navigate to:
# http://localhost:8000
```

### Option 3: Double-Click

Simply double-click `index.html` to open it in your default browser.

## ✅ Prerequisites

- Backend server must be running on `http://localhost:8080`
- Modern web browser (Chrome, Firefox, Edge, Safari)

## 🎯 Features

- ➕ Add new users with name, weight, height, and fitness goal
- 📊 View all users with calculated protein requirements
- ✏️ Edit existing user details
- 🔄 Refresh users list
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- ✅ Real-time notifications

## 🛠️ Technology Stack

- Pure HTML5
- CSS3 with modern features (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Fetch API for backend communication

## 📝 API Endpoints Used

- `GET /api/protein` - Get all users
- `GET /api/protein/{id}` - Get user by ID
- `POST /api/protein` - Create new user
- `PATCH /api/protein/{id}` - Update user

## 🎨 Design Features

- Gradient backgrounds
- Card-based layout
- Smooth animations and transitions
- Hover effects
- Modal dialogs
- Toast notifications
- Loading spinners
- Responsive grid system

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px
