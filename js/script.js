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
  const parent = document.getElementById('popular-movies');
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

    parent.appendChild(movieCard);
  });
};

const displayPopularShows = async () => {
  const parent = document.getElementById('popular-shows');
  const { results }  = await fetchData('tv/popular');

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

const displayMovieDetails = async () => {
  const movieId = window.location.search.split('=')[1]
  const movie = await fetchData(`movie/${movieId}`)

  const movieDetails = document.createElement('div');
  movieDetails.classList.add('movie-details');

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
    vote_average: rate,
  } = movie;
  console.log(movie)

  const formatToUSD = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const production = companies
    .map((company) => company.name)
    .join(", ");

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
    ${genres.map((genre) =>
      `<li>${genre.name}</li>`).join('')}
    </ul>
    <a href=${homepage} target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> ${formatToUSD(budget)}</li>
    <li><span class="text-secondary">Revenue:</span> ${formatToUSD(revenue)}</li>
    <li><span class="text-secondary">Runtime:</span> ${runtime} minutes</li>
    <li><span class="text-secondary">Status:</span> ${status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">${production}</div>
</div>
  `
  document.querySelector('.back').appendChild(movieDetails)
}



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

  highlightActiveLink()
};

document.addEventListener('readystatechange', init)
