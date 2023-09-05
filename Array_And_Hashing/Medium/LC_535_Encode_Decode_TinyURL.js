/*
535. Encode and Decode TinyURL
https://leetcode.com/problems/encode-and-decode-tinyurl/

Understand the Problem (P):

We need to create a URL shortening service, which means we'll have two main functions: encode and decode.
encode takes a long URL and returns a shortened URL.
decode takes a shortened URL and returns the original long URL.
The length of the given URL is at most 6 characters.
We must implement both methods without using any libraries or built-in functions.
Examples/Test Cases (E):

Let's consider some examples to understand the problem better:

encode("https://leetcode.com/problems/design-tinyurl") should return a shortened URL.
decode("http://tinyurl.com/4e9iAk") should return the original URL.
We should test the system with various URLs to ensure it works as expected.
Data Structure (D):

We'll likely need a data structure to store mappings between long and short URLs. A data structure like a dictionary (or a hash map) could be useful for this purpose.

Algorithm (A):

For encode:

Generate a unique short URL for each long URL.
Store this mapping in a data structure.
Return the short URL.
For decode:

Retrieve the original URL by looking up the short URL in the data structure.
Return the original URL.
Code (C):

We'll write the Python code to implement the encode and decode methods based on the algorithm outlined above.

Let's proceed with implementing the code:

*/

// problem link https://leetcode.com/problems/encode-and-decode-tinyurl
// time complexity O(1)
/*
const encodeMap = new Map();
const decodeMap = new Map();
const base = 'http://tinyurl.com/';

var encode = function (longUrl) {
  let shortUrl = ''
  if (!encodeMap.has(longUrl)) {
    shortUrl = base + encodeMap.size + 1
    console.log(shortUrl);
    encodeMap.set(longUrl, shortUrl);
    console.log(encodeMap);
    decodeMap.set(shortUrl, longUrl);
    console.log(decodeMap);
  }
  return shortUrl || encodeMap.get(longUrl);
};

var decode = function (shortUrl) {
  return decodeMap.get(shortUrl);
};
*/

const encodeMap = {};
const decodeMap = {};
const base = 'http://tinyurl.com/';


var encode = function (longUrl) {
  let shortUrl = '';
  if (!(longUrl in encodeMap)) {
    shortUrl = base + Object.keys(encodeMap).length + 1;
    encodeMap[longUrl] = shortUrl;
    decodeMap[shortUrl] = longUrl;
  }

  return shortUrl || encodeMap[longUrl];
};

var decode = function (shortUrl) {
  return decodeMap[shortUrl];
}

console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));



