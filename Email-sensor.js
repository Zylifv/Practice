function maskEmail(email) {
  let start = email.slice(0, 1);
  let search = "@";
  let position = email.indexOf(search);
  let remove = email.slice(1, position);
  let length = remove.length;
  let asterisk = "*";
  let sensor = asterisk.repeat(length - 1)
  let end = email.slice(position - 1);
  return start + sensor + end;
}

console.log("apple.pie@example.com", maskEmail("apple.pie@example.com"));
