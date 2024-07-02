let express = require('express')
let app = express()
let port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

let githubPublicData = {
  username: "ankit123",
  fullname: "Ankit Kumar",
  email: "ankit@gmail.com",
  repositories: 24,
  gists: 12,
  joinedOn: "Sep 2018",
}

//1
function getProfileUrl(githubPublicData) {
  return `https://github.com/${githubPublicData.username}`;
}
app.get('/github-profile', (req, res) => {
  let profileUrl = getProfileUrl(githubPublicData);
  res.json({ profileUrl: profileUrl });
});
//github-profile

//2
function getProfileData(githubPublicData) {
  return githubPublicData.email;
}
app.get('/github-profile-email', (req, res) => {
  let profileEmail = getProfileData(githubPublicData);
  res.json({ publicEmail: profileEmail });
});
//github-profile-email

//3
function getReposCount(githubPublicData) {
  return githubPublicData.repositories;
}
app.get('/github-repos-count', (req, res) => {
  let reposCount = getReposCount(githubPublicData);
  res.json({ reposCount: reposCount });
});
//github-repos-count

//4
function getGistsCount(githubPublicData) {
  return githubPublicData.gists;
}
app.get('/github-gists-count', (req, res) => {
  let gistsCount = getGistsCount(githubPublicData);
  res.json({ gistsCount: gistsCount });
});
//github-gists-count

//5
function getUserBio(githubPublicData) {
  return {
    fullname: githubPublicData.fullname,
    joinedOn: githubPublicData.joinedOn,
    email: githubPublicData.email
  };
}
app.get('/github-user-bio', (req, res) => {
  let userBio = getUserBio(githubPublicData);
  res.json(userBio);
});
//github-user-bio

//6
function getRepoUrl(githubPublicData, repoName) {
  return `https://github.com/${githubPublicData.username}/${repoName}`;
}
app.get('/github-repo-url', (req, res) => {
  let repoName = req.query.repoName;
  let repoUrl = getRepoUrl(githubPublicData, repoName);
  res.json({ repoUrl: repoUrl });
});
//github-repo-url