
function findUserPercentByCondition(allUsers, condition) {
    let filteredUsers = allUsers.filter((user) => condition(user));

    return ((filteredUsers.length / allUsers.length) * 100).toFixed(2);
}