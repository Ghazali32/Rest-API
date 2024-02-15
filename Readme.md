## REST API with Node.js and Express

    Steps to set up this repo : 
    1. Downoload the zip file
    2. Open it in VS Code
    3. In the terminal type :
        "npm install" followed by
        "node index.js"
    4.Now the backend server is active and can be tested

Here the API can be accessed using the following documentation :

1. Sign Up Endpoint (POST /signup):
    Method: POST
    URL: http://localhost:3000/signup
    Body: JSON object containing email, password, age, and country fields.


2. Get All Users Endpoint (GET /allUser):
    Method: GET
    URL: http://localhost:3000/allUser

3. Update User Endpoint (PUT /user/:id):
    Method: PUT
    URL: http://localhost:3000/user/:id (Replace :id with the ID of the user you want to update)
    Body: JSON object containing the fields you want to update.

4. Delete User Endpoint (DELETE /delete/:id):
    Method: DELETE
    URL: http://localhost:3000/delete/:id (Replace :id with the ID of the user you want to delete)

    You can use tools like Postman to test these api end points

