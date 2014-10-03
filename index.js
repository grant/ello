var request = require('request');
var cheerio = require('cheerio');

var DOMAIN = 'https://ello.co';

// Gets an ello profile.
// @param username The ello profile username
// @param cb The callback passes (err, data)
// @return cb.err Error messages
// @return cb.data Profile data
var ello = function (username, cb) {
  var url = DOMAIN + '/' + username;
  request(url, function (err, response, body) {
    var data = {};
    var $ = cheerio.load(body);

    var $profileBody = $('.profile__body');
    var name = $profileBody.find('.profile__name').text();
    var $profileDeets = $('.profile__deets');
    var $profileDeetLinks = $profileDeets.find('a');
    var numPosts = +$profileDeetLinks.eq(0).find('span').text();
    var numFollowing = +$profileDeetLinks.eq(1).find('span').text();
    var numFollowers = +$profileDeetLinks.eq(2).find('span').text();

    // Bio
    var $profileBio = $('.profile__bio p');
    var bio = $profileBio.eq(0).text();
    var profileLinks = [];
    $profileBio.eq(1).find('a').each(function (i, $link) {
      profileLinks.push($link.attribs.href);
    });

    // Images
    var profile_image = 'http:' + $('.avatar--large').attr('style').match(/'(.*?)'/)[1];

    // Structure the data
    data.url = {};
    data.url.profile = DOMAIN + '/' + username;
    data.url.following = DOMAIN + $profileDeetLinks.eq(1).attr('href');
    data.url.followers = DOMAIN + $profileDeetLinks.eq(2).attr('href');
    data.url.profile_links = profileLinks;
    data.url.profile_image = profile_image;

    data.name = name;
    data.numPosts = numPosts;
    data.numFollowing = numFollowing;
    data.numFollowers = numFollowers;
    data.bio = bio;

    cb(err, data);
  });
};

module.exports = ello;