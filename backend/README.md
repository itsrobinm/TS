## Welcome to the technical part of the interview! Congratulations for making it here.

### Scenario: Shopping Cart 🛒

- A client has asked you to build a checkout system for a shop which sells home furniture.

- You can find the list of products and their prices in `/src/products.json`.

- Your task is to create an API endpoint that can take in item `id`s and return the total cost. The endpoint should accept a POST request.

- For example,

| Endpoint        | Request                 | Response            |
| --------------- | ----------------------- | ------------------- |
| POST /api/total | { "items": ["1"] }      | { "total": 7.99 }   |
| POST /api/total | { "items": ["2", "3"] } | { "total": 224.98 } |

- The above example takes in a list of strings, however, feel free to structure your requests in any way you'd like.

- Think about edge cases and how you would handle them e.g. an empty list, null values, invalid items etc.

- To run the app, first install the dependencies by running `npm i`, then run the app with `npm run dev`. It's a good idea to do this before writing any code just to check everything is working.

- Run unit tests with `npm test`.

- We are using the `supertest` library in the test file (`src/test/total.spec.ts`) but feel free to install and use a different library if you wish. Within the test file we have also included a link to the `supertest` documentation.

- We recommend using a tool such as Postman to manually test your solution.

#### Advice

- We understand that you only have an hour to do this and thus we would rather you write good quality code even if it means you do not finish the exercise rather than rush to get it done at the expense of code quality.

- As well as code quality, try to think about unit tests, extensibility and maintainability.

#### Good luck!
