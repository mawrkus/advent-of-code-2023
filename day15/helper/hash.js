export function hash(string) {
  let result = 0;

  for (let i = 0; i < string.length; i += 1) {
    result += string.charCodeAt(i);
    result *= 17;
    result %= 256;
  }

  return result;
}
