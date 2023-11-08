import Swiper from '../lib/swiper';

const state = {
  page: window.location.pathname,
  API_KEY: "ecfebf36fb13c9599b30b4385926dcff",
  API_URL: "https://api.themoviedb.org/3",
  searchQuery: {
    name: "",
    type: "",
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
};

const highlightActiveLink = () => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === state.page) {
      link.classList.add('active');
    }
  });
};

const isSubmit = (event) => {
  const query = document.getElementById("search-term").value;
  const input = document.getElementById('search-term');

  if (!query) {
    event.preventDefault();
    input.style.border = '1px solid red'
  }
  setTimeout(() => {
    input.style.border = '1px solid white'
  }, 4000)
};

const showSpinner = () => {
  document.querySelector(".overlay").classList.add("show");
};

const hideSpinner = () => {
  document.querySelector(".overlay").classList.remove("show");
};

const fetchData = async (endpoint) => {
  const { API_KEY, API_URL } = state;

  try {
    showSpinner();
    const response = await fetch(
      `${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    hideSpinner();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayPopularMovies = async () => {
  const { results } = await fetchData("movie/popular");

  results.forEach((movie) => {
    const { id, title, poster_path: image, release_date: date } = movie;

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

    document.getElementById("popular-movies").appendChild(movieCard);
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

    document.getElementById("popular-shows").appendChild(TVShowCard);
  });
};

const displayBackground = (type, image) => {
  const background = document.createElement("div");
  background.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${image})`;
  background.classList.add("background-overlay");

  type === "movie"
    ? document.getElementById("movie-details").appendChild(background)
    : document.getElementById("show-details").appendChild(background);
};

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

  displayBackground("movie", background);

  const formatToUSD = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const production = companies.map((company) => company.name).join(", ");

  const movieDetails = document.createElement("div");

  movieDetails.innerHTML = `
  <div class="details-top">
  <div>
    <img
      src=${!image
      ? "/images/no-image.jpg"
      : `https://image.tmdb.org/t/p/w500/${image}`
    }
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
    ${homepage
      ? `<a href=${homepage} target="_blank" class="btn">Visit Movie Homepage</a>`
      : ''
    }
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
    .getElementById("movie-details")
    .appendChild(movieDetails);
};

const displayShowDetails = async () => {
  const showId = window.location.search.split("=")[1];
  const show = await fetchData(`tv/${showId}`);
  console.log(show);

  const {
    genres,
    original_name: name,
    last_episode_to_air: lastEpisode,
    overview,
    first_air_date: date,
    status,
    number_of_seasons: seasonsAmount,
    production_companies: companies,
    homepage,
    poster_path: image,
    backdrop_path: background,
    vote_average: rate,
  } = show;

  displayBackground("tv", background);

  const production = companies.map((company) => company.name).join(", ");

  const showDetails = document.createElement("div");

  showDetails.innerHTML = `
    <div class="details-top">
    <div>
      <img
        src=${!image
      ? "/images/no-image.jpg"
      : `https://image.tmdb.org/t/p/w500/${image}`
    }
        class="card-img-top"
        alt=${name}
      />
    </div>
    <div>
      <h2>${name}</h2>
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
    <h2>Show info</h2>
    <ul>
    <li><span class="text-secondary">Number Of Episodes:</span> 
    ${seasonsAmount}
    </li>
    <li>
      <span class="text-secondary">Last Episode To Air:</span>
      ${lastEpisode.air_date}
    </li>
    <li><span class="text-secondary">Status:</span> ${status}</li>
  </ul>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">${production}</div>
  </div>`;

  document.getElementById("show-details").appendChild(showDetails);
};

const initSwiper = () => {
  const swiper = new Swiper(".swiper", {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
    },

    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};


const showSliders = async () => {
  const { results } = await fetchData("movie/top_rated");
  console.log(results);

  results.forEach((movie) => {
    const { id, title, vote_average: rate, poster_path: image } = movie;

    const movieSlide = document.createElement("div");
    movieSlide.classList.add("swiper-slide");

    movieSlide.innerHTML = `
    <a href="movie-details.html?id=${id}">
      <img src=https://image.tmdb.org/t/p/w500/${image} alt=${title} />
    </a>
    <h4 class="swiper-rating">
      <i class="fas fa-star text-secondary"></i> ${rate.toFixed(1)} / 10
    </h4>
    `;

    document.querySelector(".swiper-wrapper").appendChild(movieSlide);
  });

  initSwiper();
};

const displaySearchResults = (results) => {
  document.getElementById('search-results-heading').innerHTML = '';
  document.getElementById('search-results').innerHTML = '';

  if (!!results.length) {
    results.forEach((result) => {
      const {
        poster_path: image,
        title,
        name,
        id,
        first_air_date,
        release_date,
      } = result;

      const cart = document.createElement('div');
      cart.classList.add('cart');

      const {
        searchQuery: { page,name: query, totalPages, totalResults, type },
      } = state;

      cart.innerHTML = `
          <div class="card">
            <a href=${type}-details.html?id=${id}>
            <img src=${image
          ? `https://image.tmdb.org/t/p/w500/${image}`
          : 'http://surl.li/mzaha'
        }
             class="card-img-top" alt=${title || name} />
          </a>
          <div class="card-body">
            <h5 class="card-title">${title || name}</h5>
            <p class="card-text">
            ${release_date
          ? `Release Date: ${release_date || first_air_date}`
          : ''
        }
            </p>
          </div>
        </div>`;

      const resultHeading = document.getElementById('search-results-heading');
      resultHeading.innerHTML = `<h2>${results.length} results of 
        ${totalResults} for ${query}</h2>`;

      document.getElementById('search-results').appendChild(cart);
      const pages = document.querySelector('.page-counter');
      pages.textContent = `
      Page ${page} of ${totalPages}`;
    });
  } else {
    const message = document.createElement('h1');
    const pagination = document.querySelector('.pagination');
    pagination.style.display = 'none';

    message.textContent = 'NO RESUTS MATCH';
    message.style.margin = '0 auto';
    message.style.height = 'calc(100vh - 400px)';

    document.getElementById('search-results').appendChild(message);
  }
};

const searchAPIData = async () => {
  const {
    API_KEY,
    API_URL,
    searchQuery: { name, type, page },
  } = state;

  showSpinner();

  try {
    const response = await fetch(
      `${API_URL}/search/${type}?api_key=${API_KEY}&query=${name}&page=${page}`
    );

    const data = await response.json();
    hideSpinner();
    return data;
  } catch (error) {
    alert(error.message);
  }
};

const searchMedia = async () => {
  const query = window.location.search;
  const urlParams = new URLSearchParams(query);

  state.searchQuery.name = urlParams.get('search-term');
  state.searchQuery.type = urlParams.get('type');

  const { results, page, total_pages, total_results } = await searchAPIData();
  state.searchQuery.page = page;
  state.searchQuery.totalResults = total_results;
  state.searchQuery.totalPages = total_pages;

  displaySearchResults(results);
};

const displayPagination = () => {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  nextButton.addEventListener('click', async () => {
    if (state.searchQuery.page < state.searchQuery.totalPages) {
      state.searchQuery.page++;

      const { results } = await searchAPIData();
      displaySearchResults(results);
      prevButton.disabled = false;
    } else {
      nextButton.disabled = true;
    }
  });

  prevButton.addEventListener('click', async () => {
    if (state.searchQuery.page > 1) {
      state.searchQuery.page--;

      const { results } = await searchAPIData();
      displaySearchResults(results);
      nextButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }
  });
};

const init = () => {
  switch (state.page) {
    case '/':
    case '/index.html':
      showSliders();
      displayPopularMovies();
      break;

    case '/movie-details.html':
      displayMovieDetails();
      break;

    case '/search.html':
      searchMedia();
      displayPagination();
      break;

    case '/shows.html':
      displayPopularShows();
      break;

    case '/tv-details.html':
      displayShowDetails();
      break;
  }
  highlightActiveLink();
};


document.addEventListener('DOMContentLoaded', init);
const submitBtn = document.querySelector('.btn');
submitBtn.addEventListener('click', isSubmit);
