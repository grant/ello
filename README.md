# ello

The unofficial Ello API

```js
npm install ello --save
```

## example

```
var ello = require('ello');

ello('gct', function (err, data) {
  console.log(data);
});
```

Prints out:

```json
{
  "bio": "So minimal.",
  "name": "Grant Timmerman",
  "numFollowers": 179,
  "numFollowing": 800,
  "numPosts": 3,
  "url": {
    "followers": "https://ello.co/gct/followers",
    "following": "https://ello.co/gct/following",
    "profile": "https://ello.co/gct",
    "profile_image": "http://d324imu86q1bqn.cloudfront.net/uploads/user/avatar/439532/large_profile2.png",
    "profile_links": [
      "http://grant.cm",
      "http://twitter.com/granttimmerman",
      "http://linkedin.com/in/granttimmerman"
    ]
  }
}
```
