
export function sortUsers(users, sortField, isDescending) {
    if (sortField == 'age') {
        users.sort((a, b) => a[sortField] - b[sortField]);
    } else if (sortField == 'b_day') {
        users.sort((a, b) => new Date(a) - new Date(b));
    } else if (sortField == 'country') {
        users.sort((a, b) => {
            if (a[sortField] > b[sortField]) return 1;
            if (a[sortField] < b[sortField]) return -1;
        })
    } else {
        users.sort((a, b) => {
            if (a[sortField] > b[sortField]) return 1;
            if (a[sortField] < b[sortField]) return -1;
        })
    }

    if (isDescending) users.reverse();

    return users;
}
