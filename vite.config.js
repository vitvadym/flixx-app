import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        movieDetails: resolve(__dirname, 'movie-details.html'),
        showDetails: resolve(__dirname, 'tv-details.html'),
        search:  resolve(__dirname, 'search.html'),
        shows:  resolve(__dirname, 'shows.html'),
      },
    },
  },
})