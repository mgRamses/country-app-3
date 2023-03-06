# B2B frontend take home assignment

This is a take home assignment to show your frontend skills, the api provided simulates real-world conditions, please code accordingly.

## Deliverable

We want you to create a country listing page with a search box that will filter the list.
- Horizontally centered contents
- Search input box
- List of countries. Each country should show it's name, capital and their flag
- Pagination

The styling is up to you, please use your judgement.
Please use your own css classes, but you are welcome to use a minimal prebuilt sheet like [normalize.css](https://necolas.github.io/normalize.css/).

## Guidelines

**Please spend max 4 hours in this assesment**

Prerequisites:
  - [NodeJS](https://nodejs.org/)
  - [Yarn](https://yarnpkg.com/getting-started/install)

This is the template we provide you as a starting point.
To get started just run `yarn install` and `yarn dev`
Your coding starting point is `src/App.jsx`

The API endpoint for querying countries is available at `/countries`.
It supports the following query search parameters:
  - `query`: optional, default value: `""`, to filter the countries
  - `page`: optional, default value: `1`, this helps to select the desired page
  - `page_size`: optional, default value: `10`, set the max amount of countries

## Evaluation criteria

- html: Use of appropriate html elements and behaviors.
- css: Layout of elements and information being easy to understand. We will not judge the design aesthetics. **You must write your own css classes**
- js: Familiarity with ReactJS and ability to use REST Apis and handling real world conditions (errors, slow responses etc).
