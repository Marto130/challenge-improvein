
# improve-in challenge

The API allows to load information about movies, tvShows episodes, actors and directors in a database deployed in mongoAtlas. It also allows to get this information about movies and tvShows episodes.  
It also implements user signUp and signIn, authentication by token with JWT and an endpoint for refresh token.

* **The API uses MongoDB Atlas as database. There are loaded some actors, directors, movies and tvShows.**  

* User loaded in the database:  
    **email:** admin@admin.com  
  **password:** admin.

* **In the project is attached a collection of Postman with the endpoints to create these entities.**



## Tech Stack

**Server:** Node, Express, bcrypt, JWT authentication  
**DataBase:** MongoDB (Atlas)


## Installation

Clone the repo  
Install with npm


```bash
  npm install
```

## Deployment

To deploy this project run

```bash
  npm start
```




## API Reference

**Attached to the project is a collection of postman with the endpoints to use the API.**

#### Movie: search movies
**Available filters:** title, actor, director, year, genre, originalLanguage.
The Response is in descending order by year.
```http
  GET /api/v1/movies?title=Point Break&actor=Keanu Charles Reeves&director=&year=1991&genre=action&originalLanguaje
```

#### tvShow: Get episode by ID

```http
  GET /api/v1/tvShow/episode/:${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### User: signUp

```http
  POST /api/v1/user/signUp
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   | `string` | **Required**. unique
| `password`| `string` | **Required**. |

#### User: signIn

```http
  POST /api/v1/user/signIn
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   | `string` | **Required**.
| `password`| `string` | **Required**. |

#### User: refreshToken

```http
  POST /api/v1/user/refresh
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `refreshtoken`   | `string` | **Required**. On request header

## Environment Variables

The environment variables are located in the "local.env" file.
