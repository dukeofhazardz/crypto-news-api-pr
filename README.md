## Crypto News API

### Description

This project is a web scraping API built with Node.js and Express.js to fetch and serve cryptocurrency-related news articles from various sources. The API fetches articles related to Bitcoin, Ethereum, Cardano, Dogecoin, and NFTs from different websites and returns the data in JSON format.

### Features

- Fetches cryptocurrency news articles from multiple sources
- Endpoints to retrieve articles for specific cryptocurrencies
- Integrated with Redis for caching
- Built with modern JavaScript using ES Modules

### Technologies Used

- Node.js
- Express.js
- Cheerio (for web scraping)
- Redis (for caching)

### API Endpoints

- **GET /**: Fetches all cryptocurrency news articles.
- **GET /bitcoin**: Fetches cryptocurrency news articles related to Bitcoin.
- **GET /ethereum**: Fetches cryptocurrency news articles related to Ethereum.
- **GET /cardano**: Fetches cryptocurrency news articles related to Cardano.
- **GET /dogecoin**: Fetches cryptocurrency news articles related to Dogecoin.
- **GET /nft**: Fetches cryptocurrency news articles related to NFTs.

### Usage

- Make requests to the specified endpoints to retrieve cryptocurrency news articles in JSON format.

### Contributors

- [Nnaemeka Daniel John](https://github.com/dukeofhazardz)

### License

This project is licensed under the [MIT License](LICENSE).