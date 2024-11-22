/* // For Loop

// Chalang 1;
const friends = ["Zahir", "Nasiba", "Tohir", "Abdul", "Khalid", "Tohirjon", "Tim", "Joe", "Max"]

// how do we find indexs or value inside [array] going through to find out "Tohirjon"

//     Start                End           Action
for (let index = 0; index < friends.length; index++) {
   // const element = friends[index];
   
   console.log(friends[index]);
}
// Result;
Zahir
Nasiba
Tohir
Abdul
Khalid
Tohirjon
Tim
Joe
Max */

// For Loop

/* // Chalang 2;
const friends = ["Zahir", "Nasiba", "Tohir", "Abdul", "Khalid", "Tohirjon", "Tim", "Joe", "Max"]

// how do we find indexs or value inside [array] going through to find out "Tohirjon"

//     Start                End           Action
for (let index = 0; index < friends.length; index++) {
   
    console.log(index, '-- loop bigins');

    console.log('index =', index);
    
    console.log('friends[index] =', friends[index]);

    console.log(index, '-- loop ends');
    
}
// Result;
0 -- loop bigins
index = 0
friends[index] = Zahir
0 -- loop ends
1 -- loop bigins
index = 1
friends[index] = Nasiba
1 -- loop ends
2 -- loop bigins
index = 2
friends[index] = Tohir
2 -- loop ends
3 -- loop bigins
index = 3
friends[index] = Abdul
3 -- loop ends
4 -- loop bigins
index = 4
friends[index] = Khalid
4 -- loop ends
5 -- loop bigins
index = 5
friends[index] = Tohirjon
5 -- loop ends
6 -- loop bigins
index = 6
friends[index] = Tim
6 -- loop ends
7 -- loop bigins
index = 7
friends[index] = Joe
7 -- loop ends
8 -- loop bigins
index = 8
friends[index] = Max
8 -- loop ends */

// For Loop;

/* // Chalang 3;
const friends = ["Zahir", "Nasiba", "Tohir", "Abdul", "Khalid", "Tohirjon", "Tim", "Joe", "Max"]

// how do we find indexs or value inside [array] going through to find out "Tohirjon"

//     Start                End           Action
for (let i = 0; i < friends.length; i++) {

   
    console.log(i, '-- loop bigins');

    console.log('i =', i);
    
    console.log('friends[i] =', friends[i]);

    console.log(i, '-- loop ends');

    console.log('**********************');
    
    
}
// Result;
0 -- loop bigins
i = 0
friends[i] = Zahir
0 -- loop ends
**********************
1 -- loop bigins
i = 1
friends[i] = Nasiba
1 -- loop ends
**********************
2 -- loop bigins
i = 2
friends[i] = Tohir
2 -- loop ends
**********************
3 -- loop bigins
i = 3
friends[i] = Abdul
3 -- loop ends
**********************
4 -- loop bigins
i = 4
friends[i] = Khalid
4 -- loop ends
**********************
5 -- loop bigins
i = 5
friends[i] = Tohirjon
5 -- loop ends
**********************
6 -- loop bigins
i = 6
friends[i] = Tim
6 -- loop ends
**********************
7 -- loop bigins
i = 7
friends[i] = Joe
7 -- loop ends
**********************
8 -- loop bigins
i = 8
friends[i] = Max
8 -- loop ends
********************** */

 /* // For Loop;

 // Chalang 4;
 // How to get list
const users = {
    "count": 41,
    "list": [
        {
            "id": 4642,
            "title": "Denistest11",
            "description": "Good apartment",
            "address": "4528 w 142nd st",
            "city": "Joshua Tree",
            "state": "IL",
            "zipCode": "90292",
            "price": 999999,
            "bedrooms": 4,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 2000,
            "lotSize": 5000,
            "createdAt": "2024-11-12T18:01:15.231Z",
            "updatedAt": "2024-11-12T18:01:15.231Z",
            "images": [
                "/static/media/3.3fa33cec43a8648aeb3a.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": [
                {
                    "id": 4035
                }
            ]
        },
        {
            "id": 4641,
            "title": "Denistest10",
            "description": "Sunny and spacious 4 bed, 1 bath home in the very desirable Galewood. Well maintained home with low taxes. Close to shopping, bars, restaurants, and entertainment. Borders Oak Park. Come see it oneday :)",
            "address": "1 Joshua Tree st",
            "city": "Hawthorne",
            "state": "CA",
            "zipCode": "59715",
            "price": 1000000,
            "bedrooms": 5,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 1234,
            "lotSize": 2,
            "createdAt": "2024-11-12T18:00:56.639Z",
            "updatedAt": "2024-11-12T18:00:56.639Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": [
                {
                    "id": 4038
                }
            ]
        },
        {
            "id": 4640,
            "title": "Denistest9",
            "description": "Desert Land For Sale",
            "address": "89803 Cuthbert Rd",
            "city": "Las Vegas",
            "state": "IA",
            "zipCode": "90963",
            "price": 799999,
            "bedrooms": 5,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 2060,
            "lotSize": 5000,
            "createdAt": "2024-11-12T18:00:37.108Z",
            "updatedAt": "2024-11-12T18:00:37.108Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4639,
            "title": "Denistest8",
            "description": "Great home",
            "address": "8985 S Durango dr",
            "city": "Bozeman",
            "state": "CA",
            "zipCode": "90111",
            "price": 7000000,
            "bedrooms": 4,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 4000,
            "lotSize": 2,
            "createdAt": "2024-11-12T18:00:15.073Z",
            "updatedAt": "2024-11-12T18:00:15.073Z",
            "images": [
                "/static/media/4.7b41bdc0126a7e58e56e.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4638,
            "title": "Denistest7",
            "description": "Desert Land For Sale",
            "address": "2122 N Mobile Ave",
            "city": "San Diego",
            "state": "CA",
            "zipCode": "90111",
            "price": 799999,
            "bedrooms": 2,
            "bathrooms": 3,
            "garage": 1,
            "sqft": 2060,
            "lotSize": 5600,
            "createdAt": "2024-11-12T18:00:01.239Z",
            "updatedAt": "2024-11-12T18:00:01.239Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4637,
            "title": "Denistest6",
            "description": "test",
            "address": "89803 Cuthbert Rd",
            "city": "Bozeman",
            "state": "CA",
            "zipCode": "92252",
            "price": 589000,
            "bedrooms": 3,
            "bathrooms": 3,
            "garage": 1,
            "sqft": 2060,
            "lotSize": 2,
            "createdAt": "2024-11-12T17:59:40.734Z",
            "updatedAt": "2024-11-12T17:59:40.734Z",
            "images": [
                "/static/media/2.2fa2b799caa4c00b640d.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        }
    ]
}
const listing = users.list;

for (let i = 0; i < listing.length; i++) {

    console.log(listing[i]);
    
    // we are geting list of users
}

// Result; */

 // For Loop;

 /*// Chalang 5;
 // How to get list
const users = {
    "count": 41,
    "list": [
        {
            "id": 4642,
            "title": "Denistest11",
            "description": "Good apartment",
            "address": "4528 w 142nd st",
            "city": "Joshua Tree",
            "state": "IL",
            "zipCode": "90292",
            "price": 999999,
            "bedrooms": 4,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 2000,
            "lotSize": 5000,
            "createdAt": "2024-11-12T18:01:15.231Z",
            "updatedAt": "2024-11-12T18:01:15.231Z",
            "images": [
                "/static/media/3.3fa33cec43a8648aeb3a.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": [
                {
                    "id": 4035
                }
            ]
        },
        {
            "id": 4641,
            "title": "Denistest10",
            "description": "Sunny and spacious 4 bed, 1 bath home in the very desirable Galewood. Well maintained home with low taxes. Close to shopping, bars, restaurants, and entertainment. Borders Oak Park. Come see it oneday :)",
            "address": "1 Joshua Tree st",
            "city": "Hawthorne",
            "state": "CA",
            "zipCode": "59715",
            "price": 1000000,
            "bedrooms": 5,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 1234,
            "lotSize": 2,
            "createdAt": "2024-11-12T18:00:56.639Z",
            "updatedAt": "2024-11-12T18:00:56.639Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": [
                {
                    "id": 4038
                }
            ]
        },
        {
            "id": 4640,
            "title": "Denistest9",
            "description": "Desert Land For Sale",
            "address": "89803 Cuthbert Rd",
            "city": "Las Vegas",
            "state": "IA",
            "zipCode": "90963",
            "price": 799999,
            "bedrooms": 5,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 2060,
            "lotSize": 5000,
            "createdAt": "2024-11-12T18:00:37.108Z",
            "updatedAt": "2024-11-12T18:00:37.108Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4639,
            "title": "Denistest8",
            "description": "Great home",
            "address": "8985 S Durango dr",
            "city": "Bozeman",
            "state": "CA",
            "zipCode": "90111",
            "price": 7000000,
            "bedrooms": 4,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 4000,
            "lotSize": 2,
            "createdAt": "2024-11-12T18:00:15.073Z",
            "updatedAt": "2024-11-12T18:00:15.073Z",
            "images": [
                "/static/media/4.7b41bdc0126a7e58e56e.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4638,
            "title": "Denistest7",
            "description": "Desert Land For Sale",
            "address": "2122 N Mobile Ave",
            "city": "San Diego",
            "state": "CA",
            "zipCode": "90111",
            "price": 799999,
            "bedrooms": 2,
            "bathrooms": 3,
            "garage": 1,
            "sqft": 2060,
            "lotSize": 5600,
            "createdAt": "2024-11-12T18:00:01.239Z",
            "updatedAt": "2024-11-12T18:00:01.239Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4637,
            "title": "Denistest6",
            "description": "test",
            "address": "89803 Cuthbert Rd",
            "city": "Bozeman",
            "state": "CA",
            "zipCode": "92252",
            "price": 589000,
            "bedrooms": 3,
            "bathrooms": 3,
            "garage": 1,
            "sqft": 2060,
            "lotSize": 2,
            "createdAt": "2024-11-12T17:59:40.734Z",
            "updatedAt": "2024-11-12T17:59:40.734Z",
            "images": [
                "/static/media/2.2fa2b799caa4c00b640d.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        }
    ]
}
const listing = users.list;

for (let i = 0; i < listing.length; i++) {

    console.log(listing[i].title);
    
    // we are geting list of titles
}

// Result;
Denistest11
Denistest10
Denistest9
Denistest8
Denistest7
Denistest6 */
// For Loop;

  // Chalang 6;
 // How to get list
const users = {
    "count": 41,
    "list": [
        {
            "id": 4642,
            "title": "Denistest11",
            "description": "Good apartment",
            "address": "4528 w 142nd st",
            "city": "Joshua Tree",
            "state": "IL",
            "zipCode": "90292",
            "price": 999999,
            "bedrooms": 4,
            "bathrooms": 2,
            "garage": null,
            "sqft": 2000,
            "lotSize": 5000,
            "createdAt": "2024-11-12T18:01:15.231Z",
            "updatedAt": "2024-11-12T18:01:15.231Z",
            "images": [
                "/static/media/3.3fa33cec43a8648aeb3a.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": [
                {
                    "id": 4035
                }
            ]
        },
        {
            "id": 4641,
            "title": "Denistest10",
            "description": "Sunny and spacious 4 bed, 1 bath home in the very desirable Galewood. Well maintained home with low taxes. Close to shopping, bars, restaurants, and entertainment. Borders Oak Park. Come see it oneday :)",
            "address": "1 Joshua Tree st",
            "city": "Hawthorne",
            "state": "CA",
            "zipCode": "59715",
            "price": 1000000,
            "bedrooms": 5,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 1234,
            "lotSize": 2,
            "createdAt": "2024-11-12T18:00:56.639Z",
            "updatedAt": "2024-11-12T18:00:56.639Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": [
                {
                    "id": 4038
                }
            ]
        },
        {
            "id": 4640,
            "title": "Denistest9",
            "description": "Desert Land For Sale",
            "address": "89803 Cuthbert Rd",
            "city": "Las Vegas",
            "state": "IA",
            "zipCode": "90963",
            "price": 799999,
            "bedrooms": 5,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 2060,
            "lotSize": 5000,
            "createdAt": "2024-11-12T18:00:37.108Z",
            "updatedAt": "2024-11-12T18:00:37.108Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4639,
            "title": "Denistest8",
            "description": "Great home",
            "address": "8985 S Durango dr",
            "city": "Bozeman",
            "state": "CA",
            "zipCode": "90111",
            "price": 7000000,
            "bedrooms": 4,
            "bathrooms": 2,
            "garage": 1,
            "sqft": 4000,
            "lotSize": 2,
            "createdAt": "2024-11-12T18:00:15.073Z",
            "updatedAt": "2024-11-12T18:00:15.073Z",
            "images": [
                "/static/media/4.7b41bdc0126a7e58e56e.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4638,
            "title": "Denistest7",
            "description": "Desert Land For Sale",
            "address": "2122 N Mobile Ave",
            "city": "San Diego",
            "state": "CA",
            "zipCode": "90111",
            "price": 799999,
            "bedrooms": 2,
            "bathrooms": 3,
            "garage": 1,
            "sqft": 2060,
            "lotSize": 5600,
            "createdAt": "2024-11-12T18:00:01.239Z",
            "updatedAt": "2024-11-12T18:00:01.239Z",
            "images": [
                "/static/media/1.44b525e135229f361e09.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        },
        {
            "id": 4637,
            "title": "Denistest6",
            "description": "test",
            "address": "89803 Cuthbert Rd",
            "city": "Bozeman",
            "state": "CA",
            "zipCode": "92252",
            "price": 589000,
            "bedrooms": 3,
            "bathrooms": 3,
            "garage": 2,
            "sqft": 2060,
            "lotSize": 2,
            "createdAt": "2024-11-12T17:59:40.734Z",
            "updatedAt": "2024-11-12T17:59:40.734Z",
            "images": [
                "/static/media/2.2fa2b799caa4c00b640d.jpeg"
            ],
            "isPublished": true,
            "realtor": {
                "id": 6383,
                "username": "Denis",
                "user_surname": "Denis",
                "email": "Denis04@gmail.com",
                "bio": "",
                "avatarUrl": "content/images/Screenshot2024-11-07at09.53.30cf63483f-ae87-474e-8225-77d149622ea5.png",
                "phoneNumber": null,
                "address": null,
                "country": null,
                "stateOrRegion": null,
                "city": null,
                "zipCode": null,
                "about": null,
                "isPublic": false,
                "isRealtor": false,
                "password": "$argon2id$v=19$m=4096,t=3,p=1$gmdW4DI5FWEKiKoVI7T0uw$gTe3F6+2lYavLFeimjT+/T1lAbPyOteurufHDuEHxCQ"
            },
            "favorite": []
        }
    ]
}
const listings = users.list;

for (let i = 0; i < listings.length; i++) {
    if (listings[i].hasOwnProperty('garage')) {
        console.log(listings[i].garage);
         break;
    }

}

// Result;
