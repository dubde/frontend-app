# Frontend

This project was generated using [Nx](https://nx.dev). 

## Development server

Run `nx serve frontend` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build frontend` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test frontend` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e frontend` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Brief considerations

### State and Store
Store is handled with react-redux library and it's all contained in store folder. Due to the fact that the application is quite small, it's divided in actions and reducers file. There are some "special"  actions creators as it is possible do with the react-thunk middleware library. 

Store is accessed and actions dispatched only in the app component.

### Presentational and Container components
The views are organized by containers and presentational components. The first are stored in the library "@frontend/containers", the latter in "@frontend/components". Both are not accessing state but there is more logic in the containers than the components.

### Testing
With this setup unit tests are implemented with Jest and e2e with Cypress. Cypress is quite good to test interaction and integration. It is possible to mock all the calls to the server with predefined json objects as responses. Actual connection and dialog with server can be tested in second moment. 

