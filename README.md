# Petful Server
[Vercel Link](https://petful-client-gamma.vercel.app)

[Client Repo](https://github.com/AngeloThinks/petful-client.git)

[Heroku Live App](https://pacific-chamber-02247.herokuapp.com)

[Server Repo](https://github.com/AngeloThinks/petful-server.git)

Stack Used:
Express, Node, Nodemon

API Documentation:

Base URL:

GET /people
Return an array of poeple.

GET /pets/dogs
Returns the dog at the top of a queue to be adopted.

GET /pets/cats
Returns the cat at the top of a queue to be adopted.

DELETE /people
Dequeue person at the top. 

DELETE /pets/dogs
Dequeue dog at the top and return new top of queue.

DELETE /pets/cats
Dequeue cat at the top and return new top of queue.

POST /people
Add new person to the end of the queue.

Summary:
This is a 1 day project that matches a user to a pet on a first in first out basis. Users can see other adopters do the same.

Landing page:
Read the instructions on the landing page
Enter your name to add yourself to the queue

Adoption page:
View the next pets in the Queue available for adoption
Wait your turn to adopt - you will automatically be matched with the next pet in Queue

Technology
Front-End: HTML5, CSS3, JavaScript ES6, React
Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
Development Environment: Heroku, Nodemon