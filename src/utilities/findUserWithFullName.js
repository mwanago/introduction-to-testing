export function findUserWithFullName(usersArray, nameToFind) {
  return usersArray.find((user) => {
    const userFullName = `${user.firstName} ${user.lastName}`;
    return nameToFind === userFullName;
  });
}
