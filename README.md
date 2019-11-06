# By-Tor's NC NEWS

A full stack app built using HTML, CSS and React for the frontend. The backend API/Database was built using Node.js, Express, Postgress and Knex.

## Hosted @

Hosted version of the React App: tbc...

GitHub repo for backend: https://github.com/By-Tor2114/nc-news

Hosted version of the backend: https://by-tor2114-nc-news.herokuapp.com/api

## Getting Started

1. #### In order to successfully run this app on a local machine, please install all necessary dependencies with the following:

```
npm i
```

2. #### With dependencies installed, the app can be launched on React's local server by running the following command:

```
npm start
```

The initial page will load a list of all available articles. These articles can be filtered by available topics (Cooking, Coding, Football), or can be returned to the full list with the 'all' option.

Articles can be sorted by the datethe databases must be initialised with the followinghey were posted, the comment count, or the vote count.

Each article has a vote function, and also contains a link to the full article body. Each article body contains the related comments, which also feature a vote function.

By default, the page is hard coded to have the user logged in as one of the available users from the database. This will allow you to post new comments within each article, as well as delete comments that relate specifically to your user ID.
