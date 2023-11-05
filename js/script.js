const route = {
  page: window.location.pathname,
};

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
      `${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();

    setTimeout(() => {
      hideSpinner();
    }, 300);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayPopularMovies = async () => {
  const { results } = await fetchData("movie/popular");

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

    document
      .getElementById("popular-movies")
      .appendChild(movieCard);
  });
};

const displayPopularShows = async () => {
  const { results } = await fetchData("tv/popular");

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

    document
      .getElementById("popular-shows")
      .appendChild(TVShowCard);
  });
};

const displayBackground = (type, image) => {
  const background = document.createElement('div')
  background.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${image})`;
  background.classList.add('background-overlay')

  type === 'movie'
    ? document.getElementById('movie-details').appendChild(background)
    : document.getElementById('show-details').appendChild(background)
}

const displayMovieDetails = async () => {
  const movieId = window.location.search.split("=")[1];
  const movie = await fetchData(`movie/${movieId}`);

  const {
    budget,
    genres,
    title,
    runtime,
    overview,
    release_date: date,
    revenue,
    status,
    production_companies: companies,
    homepage,
    poster_path: image,
    backdrop_path: background,
    vote_average: rate,
  } = movie;

  displayBackground('movie', background)

  const formatToUSD = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const production = companies
    .map((company) => company.name)
    .join(", ");

  const movieDetails = document.createElement('div')

  movieDetails.innerHTML = `
  <div class="details-top">
  <div>
    <img
      src=https://image.tmdb.org/t/p/w500/${image}
      class="card-img-top"
      alt=${title}
    />
  </div>
  <div>
    <h2>${title}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${rate.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${date}</p>
    <p>
    ${overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
    ${genres.map((genre) => `<li>${genre.name}</li>`).join("")}
    </ul>
    <a href=${homepage} target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> ${formatToUSD(budget)}</li>
    <li><span class="text-secondary">Revenue:</span> ${formatToUSD(
    revenue
  )}</li>
    <li><span class="text-secondary">Runtime:</span> ${runtime} minutes</li>
    <li><span class="text-secondary">Status:</span> ${status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">${production}</div>
</div>
  `;

  document
    .getElementById('movie-details')
    .appendChild(movieDetails);
};


const init = () => {
  switch (route.page) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      break;

    case "/movie-details.html":
      displayMovieDetails();
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

  highlightActiveLink();
};

document.addEventListener("DOMContentLoaded", init);
