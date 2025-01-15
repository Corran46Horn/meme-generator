# Meme Generator

This project is a Meme Generator built with React. It allows users to browse, upvote, downvote, and add new memes. Memes with a high upvote-to-downvote ratio are displayed in a favorites section.

## Project Structure

src/
├── components/
│ ├── Navbar.js
│ ├── Sidebar.js
│ ├── Mem.js
│ ├── Form.js
├── routes/
│ ├── MainPage.js
│ ├── HotPage.js
│ ├── Landing.js
│ ├── FormPage.js
├── assets.json
├── App.js
├── index.js
├── App.css

Usage
Main Page: Displays all memes. Users can upvote, downvote, and add memes to favorites.
Favorites Page: Displays memes with an upvote-to-downvote ratio greater than 5. If a meme's ratio drops below 5, it will be removed from the favorites page.
Landing Page: Displays all memes.
Add Meme Page: Allows users to add new memes by providing a title and an image (either from a URL or by uploading from the computer).
