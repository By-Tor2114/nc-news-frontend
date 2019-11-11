# By-Tor's NC NEWS

A full stack app built using HTML, CSS and React for the frontend. The backend API/Database was built using Node.js, Express, Postgress and Knex.

## Hosted @

Hosted version of the React App: https://elegant-snyder-34f60a.netlify.com

GitHub repo for backend: https://github.com/By-Tor2114/nc-news

Hosted version of the backend: https://nc-news-full-stack.herokuapp.com/api

## Getting Started

1. #### In order to successfully run this app on a local machine, please install all necessary dependencies with the following:

```
npm i

Dependencies:
    "@reach/router": "^1.2.1",
    "axios": "^0.19.0",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-scripts": "3.2.0"
```

2. #### With dependencies installed, the app can be launched on React's local server by running the following command:

```
npm start
```

The initial page will load a list of all available articles. These articles can be filtered by available topics (Cooking, Coding, Football), or can be returned to the full list with the 'all' option.

Articles can be sorted by the date they were posted, the comment count, or the vote count.

Each article has a vote function, and also contains a link to the full article body. Each article body contains the related comments, which also feature a vote function.

In order to post new comments, or delete related comments, a user must be selected in the dropdown in the header. This does not feature authentication, and serves only as a means to demonstrate the functionality required for posting and deleting comments related to a specific user.
