const baseUrl = process.env.NODE_ENV === "production" 
? 'https://sightechsystems.com' 
: 'http://localhost:3000';

export default baseUrl;