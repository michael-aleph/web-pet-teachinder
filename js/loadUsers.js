
import { randomUserMock, additionalUsers } from './FE4U-Lab3-mock.js'
import { validateUser } from './validateUser.js';

const cources = [
    'Mathematics',
    'Physics',
    'English',
    'Computer Science',
    'Dancing',
    'Chess',
    'Biology',
    'Chemistry',
    'Law',
    'Art',
    'Medicine',
    'Statistics',
]
const formateProperties = [
    'id',
    'gender',
    'title',
    'full_name',
    'city',
    'state',
    'country',
    'postcode',
    'coordinates',
    'timezone',
    'email',
    'b_day',
    'age',
    'phone',
    'picture_large',
    'picture_thumbnail',
    'favorite',
    'course',
    'bg_color',
    'note',
]

function getRandomSpeciality() {
    return cources[Math.floor(Math.random() * cources.length)];
}

function getRandomFavorite() {
    return Math.random() < 0.5;
}

function userExistsInList(usersList, user) {
    for (let userFromList of usersList) {
        if (userFromList['email'] === user['email'] && user['email'] != null) {
            return true
        }
    }

    return false
}

function getAgeFromBirthDate(birthDate) {
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export function loadUsers() {
    let newListOfUsers = randomUserMock.map(element => {
        return {
            'id': randomUserMock.indexOf(element) + 1,
            'gender': element.gender,
            'title': element.name.title,
            'full_name': element.name.first + ' ' + element.name.last,
            'city': element.location.city,
            'state': element.location.state,
            'country': element.location.country,
            'postcode': element.location.postcode,
            'coordinates': element.location.coordinates,
            'timezone': element.location.timezone,
            'email': element.email,
            'b_day': element.dob.date,
            'age': element.dob.age,
            'phone': element.phone,
            'picture_large': element.picture.large,
            'picture_thumbnail': element.picture.thumbnail,
            'favorite': false,
            'course': getRandomSpeciality(cources),
            'bg_color': null,
            'note': null
        }
    });

    for (let user of additionalUsers) {
        for (let property of formateProperties) {
            if (!user.hasOwnProperty(property)) {
                user[property] = undefined;
            }
        }

        user['id'] = newListOfUsers.length + 1;

        if (user['course'] === undefined) {
            user['course'] = getRandomSpeciality(cources);
        }

        user['age'] = parseInt(String(getAgeFromBirthDate(new Date(user['b_day']))));

        if (!userExistsInList(newListOfUsers, user) && validateUser(user)) {
            newListOfUsers.push(user);
        }
    }


    return newListOfUsers;
}

export const teachers = loadUsers();