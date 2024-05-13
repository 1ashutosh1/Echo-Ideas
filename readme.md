# Echo Ideas 📣💡

Echo Ideas is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to view articles, comment on them, and like their favorite articles. The application also provides Google OAuth for seamless user authentication. Users can update their profile information including profile picture, username, and password. Additionally, it includes an admin dashboard where administrators can manage users, view comments and posts, create new posts, and access website statistics.

## Features 🚀

- **User Authentication**: Users can sign in directly using Google OAuth or register with email and password. Users can update their profile information including profile picture, username, and password.
- **Article Viewing**: Users can view articles posted on the website.
- **Commenting**: Users can comment on articles and engage in discussions.
- **Liking Articles**: Users can like their favorite articles.
- **Admin Dashboard**: Administrators have access to a separate dashboard where they can:
  - View all registered users.
  - View all comments and posts.
  - Create new posts and edit existing ones.
  - View website statistics including the number of users registered last month, the number of posts in the last month, and the number of comments in the last month.

## Installation 💻

1. Clone the repository:
git clone https://github.com/1ashutosh1/Echo-Ideas.git

2. Install dependencies:

cd client
npm install
cd backend
npm install


3. Set up environment variables for client:

   - Create a `.env` file in the client directory.
   - Define the following variables:

VITE_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
VITE_ADMIN_EMAIL="YOUR_ADMIN_EMAIL"
VITE_BACKEND_URL="http://localhost:4000"


Replace `YOUR_FIREBASE_API_KEY`, `YOUR_ADMIN_EMAIL`, and `YOUR_BACKEND_URL` with your actual Firebase API key, admin email, and backend URL respectively.

  - Create a `.env` file in the backend directory.
   - Define the following variables:

MONGOURL="mongodb+srv://username:password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority&appName=your-app"
JWT_SECRET="YOUR_JWT_SECRET"
PORT="YOUR_PORT"
FRONTEND_URL="YOUR_FRONTEND_URL"


4. Start the server:

cd backend
npm run dev


5. Start the client:

cd client
npm run dev



6. Open your browser and navigate to `http://localhost:5173` to access the application.

## Technologies Used 🛠️

- MongoDB
- Express.js
- React.js
- Node.js
- Mongoose
- Google OAuth
- JWT Authentication
- Tailwind
- Firebase
- Flow-Bite

## Contributing 🤝

Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## License 📝

This project is licensed under the [MIT License](LICENSE).






