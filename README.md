# ReactRestApiClient
Cliente de API Rest (React)

Este proyecto lo hice como parte de un conjunto de aplicaciones que consumen una API que programé en Python para las operaciones básicas (CRUD) de una lista de contactos: [Contact List App](https://github.com/EmptyShop/FlaskSqlAlchemyApp). Este proyecto (ReactRestApiClient) es un cliente para Web, codificado en React. La UI contiene una tabla con la lista de contactos registrados. Un contenedor de campos de edición (correspondientes a nombre, email y teléfono) se accede a través de los botones para **Agregar** y **Editar** contactos.

# Cómo lo Hice

## En este proyecto utilicé:

  * React 18.3.1
  * React Router 6.27.0
  * Bootstrap 5.3.3
  * Bootstrap-icons 1.11.3

## Lo implementé así:
  * En el archivo `index.js` agregué la ruta para el componente principal `<Listado />`:
    ```sh
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Listado />,
        errorElement: <ErrorPage />,
      },
    ]);
    ```
  * En el componente `Listado` contenido en el archivo `components/listado.js` tengo dos contenedores, uno para la tabla con los datos registrados y otro para los campos de edición correspondientes a las acciones de **Agregar** y **Actualizar**. Este segundo contenedor es un `<div>` modal que aparece sólo para editar los campos. Su **id** es `modalContactos`.
  * Utilizo `fetch()` para las operaciones REST.
  * Utilizo `useEffect()` para cargar la lista de contactos automáticamente al cargar la aplicación.
  * Para actualizar la UI y el modelo de datos automáticamente, utilizo `useState()`.

## La ayuda que utilicé:
Para este proyecto me basé en un video tutorial que muestra cómo consumir servicios Restful con React. Yo lo adapté a mi propia API y además me apoyé en información complementaria:

* [CRUD en React consumiendo una API](https://www.youtube.com/watch?v=fgQHjMotDPk)
* [Learn React](https://es.react.dev/learn)
* [Tutorial de React](https://www.tutorialesprogramacionya.com/reactya/index.php?inicio=0)
* [How to Fetch API Data in React](https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/)
* [React Router | Tutorial](https://reactrouter.com/en/main/start/tutorial)
* [How to use Bootstrap Icons in React](https://www.geeksforgeeks.org/how-to-use-bootstrap-icons-in-react/)

# Lo que sigue
El alcance de este proyecto es comparar el desempeño y las implementaciones de cada versión de app cliente para consumo de servicios Restful que tengo en este repositorio ([Angular](https://github.com/EmptyShop/AngularRestApiClient), React, [Vue](https://github.com/EmptyShop/VueRestApiClient) y [Kotlin](https://github.com/EmptyShop/KotlinRestApiClient)). Por lo que no tengo planeado agregar o modificar funcionalidades.

Siéntete libre de comentar y sugerir cosas para esta app.

# Documentación Autogenerada por React:

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
