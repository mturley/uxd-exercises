export const compareByLastNameDesc = (userA, userB) => {
  // Comparator for sorting users by name, descending
  // Tries to use the last name if possible by looking after the space
  const splitA = userA.name.split(' ');
  const splitB = userB.name.split(' ');
  const compareA = splitA.length === 2 ? splitA[1] : userA.name;
  const compareB = splitB.length === 2 ? splitB[1] : userB.name;
  if (compareA < compareB) return 1;
  if (compareA > compareB) return -1;
  return 0;
};

export const formatAddress = address =>
  `${address.street} ${address.suite}, ${address.city}, ${address.zipcode}`;
