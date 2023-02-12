# Boilerplate Vue 3 + Vite + Vue Router + Pinia + Axios

This project is to quickly create an initial project structure with guard-protected routes.

It implements the use of refresh token.

## Technologies used

This project was created with the following technologies:

Please, if you want more information about the technologies used, visit the documentation of each one.

- [Vue 3](https://vuejs.org)
- [Vite](https://vitejs.dev)
- [Vue Router](https://router.vuejs.org)
- [Pinia](https://pinia.vuejs.org)
- [Axios](https://axios-http.com)

# Important

The project need a backend to work, so you need to create a backend with the following endpoints, because this project need a refresh token to work.
And this, should be provided by the backend.

- [x] POST /api/auth/login
- [x] POST /api/auth/refresh

Here some examples of backends that you can use:

This projects are in my github, so you can use them as you want.
The endpoint for refresh are configured to return a refresh token on cookie, but you can change it to return a refresh token on body or header(but this last I Don't like).

- [ NodeJS + Express + JWT + MongoDB ](https://github.com/Xansiety/Boilerplate-node-api-mongoDB-JWT-RefreshToken)
- [ Net 6 + JWT + SQL Server Basic functionality ](https://github.com/Xansiety/Net_6_JWT_refresh_SALT_Pswd)
- [ Net 6 + JWT + SQL Server Template web API ](https://github.com/Xansiety/Template_WebAPI_Net6_WithOutIdentity_JWT_Refresh)

# Features

- [x] Login
- [x] Profile
- [x] Home Page
- [x] Guard Protected Routes
- [x] Refresh Token
- [x] Logout
- [] Api calls with axios

> Please, if you want to contribute to this project, you can do it by adding new features or improving the existing ones. send me a pull request and I promise check with you.

# Acknowledgments

And many thanks to all the people in the next list, who have contributed to the development of this project.

Thanks to the [Vue 3](https://vuejs.org) team for the great work they do.

Thanks to the [Vite](https://vitejs.dev) team for the great work they do.

Thanks to the [Vue Router](https://router.vuejs.org) team for the great work they do.

Thanks to the [Axios](https://axios-http.com) team for the great work they do.

and special thanks to [@bluuweb](https://github.com/bluuweb) for the great inspiration he gives me with his videos, [@Klerith](https://github.com/Klerith) for the great inspiration he gives me with his videos.

# How to use

### Clone the repository

```bash
git clone [URL OF THE REPOSITORY]
```

### Go to the project folder

```bash
cd [PATH OF THE PROJECT]
```

### Install the dependencies

```bash
npm install or yarn
```

or

```bash
yarn
```

### Execute the project

```bash
npm run dev
```

or

```bash
yarn dev
```

### Enjoy it! 🚀

Put on some music, put the cell phone away for a moment and come on, you have a project to deliver or create a hobby project!

## License

I don´t have any licence of any technology used in this project, so I don´t know if I can use a licence in this project, but I don't care.. I only want to help people with this project, so you can use it as you want, but I would appreciate mention all creator/community of technologies used in this project in your project.

# Made with ❤️ by [Xansiety](https://github.com/Xansiety)
