function generateLoremIpsum() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

function displayArticleInfo(article) {
  console.log("Title: " + article.title);
  console.log("Description: " + article.description);
  console.log("---------------------");
}

let articles = [
  { title: "Article 1", description: generateLoremIpsum() },
  { title: "Article 2", description: generateLoremIpsum() },
  { title: "Article 3", description: generateLoremIpsum() },
  { title: "Article 4", description: generateLoremIpsum() },
  { title: "Article 5", description: generateLoremIpsum() },
  { title: "Article 6", description: generateLoremIpsum() },
  { title: "Article 7", description: generateLoremIpsum() },
  { title: "Article 8", description: generateLoremIpsum() },
  { title: "Article 9", description: generateLoremIpsum() },
];

articles.forEach(function (article, index) {
  console.log("Article " + (index + 1) + ":");
  displayArticleInfo(article);
});
