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

const showSpinner = () => {
  document.querySelector(".overlay").classList.add("show");
};

const hideSpinner = () => {
  document.querySelector(".overlay").classList.remove("show");
};


const fetchData = async (endpoint) => {
  const API_KEY = "ecfebf36fb13c9599b30b4385926dcff";
  const API_URL = "https://api.themoviedb.org/3";

  try {
    showSpinner();

    const response = await fetch(
      `${API_URL}/discover/${endpoint}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();

    setTimeout(() => {
      hideSpinner();
    }, 400);

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

const displayPopularShows = async () => {
  const parent = document.getElementById('popular-shows');
  const { results }  = await fetchData('tv');

  results.forEach((show) => {
    const {
      id,
      original_name: title,
      poster_path: image,
      first_air_date: date,
    } = show;

    const TVShowCard = document.createElement("div");
    TVShowCard.classList.add("card");

    TVShowCard.innerHTML = `
    <a href=tv-details.html?id=${id}>
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

    parent.appendChild(TVShowCard);
  });
};



const init = () => {
  switch (route.page) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      break;

    case "/movie-details.html":
      break;

    case "/search.html":

      break;

    case "/shows.html":
      displayPopularShows();
      break;

    case "/tv-details.html":
      console.log("tv-details");
      break;
  }

  highlightActiveLink()
};

document.addEventListener('DOMContentLoaded', init)
