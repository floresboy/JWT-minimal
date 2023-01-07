# JWT-minimal

based upon:
https://www.youtube.com/watch?v=xBYr9DxDqyU
https://www.youtube.com/watch?v=mbsmsi7l3r4

Usage :
nodemon --watch index.js
curl --location --request POST '0.0.0.0:3000/api/login' --data-raw ''
the above wiil produce a JWT token string  (Bearer) that can be used for auth input below.
curl --location --request GET '0.0.0.0:3000/api/protected' --header 'Authorization: Bearer eyJhbGc....Xk7P1JlNeI70ii3FcQ'
