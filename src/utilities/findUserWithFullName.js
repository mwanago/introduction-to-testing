export function findUserWithFullName(usersArray, nameToFind) {
  const desiredUser = usersArray.find((user) => {
    const userFullName = `${user.firstName} ${user.lastName}`;
    return nameToFind === userFullName;
  });
  if (desiredUser) {
    return desiredUser.heightInCm;
  }
}
