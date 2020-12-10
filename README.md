# lp-dev-test

Find the errors:
1. When I attempt to GET on /api/showme   it doesnt work.
2. When I attempt to GET on /api/whynot  it isnt returning a payload, why ?
3. When I attempt to GET on /api/google  I am not getting a response ?
4. *Once 3 is answered (error in 3 applies here too)*
   When I attempt to GET on /api/googlemaps   why is there no response?
5. Write a function that generates a shortened link with the bitly api: https://dev.bitly.com/api-reference
   The route should return an object like this one on success
   {
   success: true,
   shortUrl: 'https://bitly.is/37yRkJD'
   }
   Bitly bearer token: b052d02e8a40d8359993c16a32a2c33b815e21a2
6. Explain what this file is doing , what the included npms is
7. Implement a middleware that checks if a request has a bearer token on the Authorization header, and stores the value in request.bearer. If it does not contain this header, terminate the route with an Unauthorized error. Use this middleware on the bitly route from (5)
8. add  dotenv  to the project. Then add appropriate file(s)   then make sure any tokens, env vars etc are specified there.  We def wanna listen on port 1080
   and we want to make sure ALL important things are NOT in direct code!
   
9. (Optional) Pretend you have a table called:  table_users ,  cols:  id (pk, uniqueident, unsigned int),  firstName (varchar(50)), lastName (varchar(50)), brandId (int)
   Add the proper npm's to access this data,  create a db helper file to lookup the data (ORM integration a huge++ for sanitization but not required)
   Add two new routes. First route will only return id, firstName, lastName  of ALL records
   second route will require a "id" query param (pk of the record id),  which will return the entire record of that id
   (keeping in mind if no orm then sanitization is happening etc)
   
   
   How To Run
   1) Create a Schema in mysql on your local with id : root , password: password
   2) Run the db.mysql script
   3) make a .env file and specify the PORT={DESIRED_PORT_NUMBER} there
