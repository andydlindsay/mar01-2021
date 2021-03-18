# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Hashing
* one-way process
* plaintext password => hashing function => alpha-numeric string (hash)
* salt => extra string that gets fed into the hash function
* comparison function built-in to the hashing software

### Encryption
* plaintext => encryption function => encrypted string
* encrypted string => decryption function => plaintext


http://localhost:9876/login
* plaintext protocol
* person in the middle attack

### HTTPS
* HTTP Secure
* Private key/public key
* Public key
  * available to everyone who wants it
  * used to encrypt the data
* Private key
  * never shared with anyone
  * used to decrypt the data

### REST
* Naming convention for routes
* REpresentational State Transfer
* routes we use to interact with our resources represent the underlying data structure
* RESTful => you are using REST

GET /my-maps
GET /the-pins-for-my-maps

Browse  GET   /urls
Read    GET   /urls/:id (/urls/abscdf)
Edit    POST  /urls/:id/edit
Add     POST  /urls
Delete  POST  /urls/:id/delete

* maps, pins

Browse  GET   /maps

Read    GET   /maps/:id/pins
Edit    POST  /maps/:id/pins/:pin_id

Edit    POST  /maps/:id/edit
Add     POST  /maps
Delete  POST  /maps/:id/delete

### HTTP Methods
* GET, POST
* PUT, PATCH, DELETE
* AJAX

Browse  GET    /urls
Read    GET    /urls/:id
Edit    PATCH  /urls/:id
Add     POST   /urls
Delete  DELETE /urls/:id

req.query.source

https://www.google.com/search?
safe=active&
sxsrf=ALeKk03R2SfJaEiJkP8smvXhHH3xOcwZZw%3A1616091636548&
source=hp&
ei=9JlTYO6_HovP0PEPh9S7sAc&iflsig=AINFCbYAAAAAYFOoBPzxj7eKI_IczVFYH2hsVUkSodUs&
q=query+string&
oq=query+string&
gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBwgAEIcCEBQyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoFCAAQkQI6BQgAELEDOgUILhCxAzoICAAQsQMQgwE6CAguEMcBEK8BOggILhCxAxCDAToCCC46BAgAEApQtwZY5w5gwA9oAHAAeACAAWyIAfMGkgEEMTEuMZgBAKABAaoBB2d3cy13aXo&sclient=gws-wiz&ved=0ahUKEwjuiay_urrvAhWLJzQIHQfqDnYQ4dUDCAk&uact=5
