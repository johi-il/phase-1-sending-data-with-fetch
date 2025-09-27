// Add your code here

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json()) // parse the Response body
    .then((object) => {
      // append the new id to the DOM
      const body = document.querySelector("body");
      body.append(object.id);
    })
    .catch((error) => {
      // append error message to the DOM
      const body = document.querySelector("body");
      body.append(error.message);
    });
}

