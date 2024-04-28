function generateLoremIpsum() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

let articles = [
  { title: "Artykuł 1", description: generateLoremIpsum() },
  { title: "Artykuł 2", description: generateLoremIpsum() },
  { title: "Artykuł 3", description: generateLoremIpsum() },
  { title: "Artykuł 4", description: generateLoremIpsum() },
  { title: "Artykuł 5", description: generateLoremIpsum() },
  { title: "Artykuł 6", description: generateLoremIpsum() },
  { title: "Artykuł 7", description: generateLoremIpsum() },
  { title: "Artykuł 8", description: generateLoremIpsum() },
  { title: "Artykuł 9", description: generateLoremIpsum() },
];

articles.forEach(function (article, index) {
  console.log("Artykuł " + (index + 1) + ":");
  console.log("Tytuł: " + article.title);
  console.log("Opis: " + article.description);
  console.log("---------------------");
});
