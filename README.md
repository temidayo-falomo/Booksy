# Booksy

Booksy is a Book finder project built mostly using modern libraries and techniques i developed myself.

## Installation

Install my-project with npm

```bash
  npm install Booksy
  cd Booksy
```

## Tech Stack Used

**Client:** React Js, React Router, Styled Components

**Server:** Firebase

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Documentation

[Documentation]()

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## License

[MIT](https://choosealicense.com/licenses/mit/)
