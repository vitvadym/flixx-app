const route = {
  page: window.location.pathname
}

const highlightActiveLink = () => {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === route.page) {
      link.classList.add("active");
    }
  });
};

const fetchData = async (endpoint) => {
  const API_KEY = "ecfebf36fb13c9599b30b4385926dcff";
  const API_URL = "https://api.themoviedb.org/3";

  try {
    const response = await fetch(
      `${API_URL}/discover/${endpoint}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayPopularMovies = async () => {
  const parent = document.getElementById('popular-movies');
  const { results } = await fetchData("movie");

  results.forEach((movie) => {
    const {
      id,
      title,
      poster_path: image,
      release_date: date,
    } = movie;

    const movieCard = document.createElement("div");
    movieCard.classList.add("card");

    movieCard.innerHTML = `
    <a href=movie-details.html?id=${id}>
    <img
      src=https://image.tmdb.org/t/p/w500/${image}
      class="card-img-top"
      alt=${title}
    />
  </a>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${date}</small>
    </p>
  </div>
    `;

    parent.appendChild(movieCard);
  });
};

const init = () => {
  switch (route.page) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      break;

    case "/movie-details.html":
      console.log("details");
      break;

    case "/search.html":
      console.log("search");
      break;

    case "/shows.html":
      console.log("shows");
      break;

    case "/tv-details.html":
      console.log("tv-details");
      break;
  }

  highlightActiveLink()
};

document.addEventListener('DOMContentLoaded', init)
