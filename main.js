let body = document.querySelector("body");

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/grantmcgrath");
req.addEventListener("load", vCard);
req.send();

function vCard() {

  // Parses the response text
  let data = JSON.parse(this.responseText);
  // Creates the html in the index.html
  let html = `
  <header class = "border">
    <h1>${data.name}</h1>
  </header>
  <main>
    <section class = "border">
      <div id = "basics" class = "border">
        <h2>The Basics</h2>
        <ul>
          <li><label>Name: </label>${data.name}</li>
          <li><label>GitHub URL: </label><a href=${data.html_url}>${data.login}</a></li>
          <li><label>Email: </label>${data.email}</li>
          <li><label>Company: </label>${data.company}</li>
          <li><label>Website: </label><a href=${data.blog}>${data.blog}</a></li>
        </ul>
      </div>
      <div id = "story" class = "border">
        <h2>The Story</h2>
        <p>${data.bio}</p>
      </div>
      <div id  = "avatar" class = "border">
        <img src=${data.avatar_url} alt = "${data.name}'s profile image.'"
      </div>
    </section>
  </main>
`;
  // Inserts html into the body tag of index.html
  body.innerHTML = html;
}
