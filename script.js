function getUser() {
    const body = document.body;
    const jokeOutput = document.getElementById('jokeOutput');
    const jokeButton= document.getElementById('jokeButton');
    fetch('https://v2.jokeapi.dev/joke/Programming')
      .then((response) => {
        if (!response.ok) {
          throw new Error`Joke not found`();
        }
        return response.json();
      })
      .then((data) => {
        jokeOutput.innerHTML = data.joke || `${data.setup} - ${data.delivery}`;
        jokeOutput.style.display = 'block'; 
      })
      .catch((error) => {
                jokeOutput.innerHTML = Error`${error.message}`;
        jokeOutput.style.display = 'block';
      });
  }
  document.getElementById('jokeButton').addEventListener('click',getUser);
