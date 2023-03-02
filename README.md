# B2B frontend take home assignment

This is a take home assignment to show your frontend skills, it's a simple project!

## Requirements

We want you to create a search country flags tool:
1. A centered searchbox at the begining
2. After the user interacts with the searchbox, it has to move to the top of the browser
3. If there are results that match the query, it should show them below the searchbox the country name and its flag

## Considerations
- **Please spend max 4 hours in this assestment**
- You can use this template as starting point, just run `yarn install` and `yarn dev`, then you can start to code
- The endpoint where you will make the requests it's `/countries`, this endpoint supports the following params:
    - `query`: optional, to filter the countries
    - `page`: optional, default value `1`, this helps to select the desired page
    - `page_size`: optional, default value: `10`, set the max amount of countries

## Evaluation criteria
As a frontend developer, this assestment has the intention to cover the 3 main areas:

- html: Use the proper tags depending on their use
- css: We don't want to complicate with this area, just show us how to center an element and move it to the top of the container
    - **You must write your own css classes**
- js: In this area, we include react and how to make requests to the backend

**Extra points if you can add a debounce search**



