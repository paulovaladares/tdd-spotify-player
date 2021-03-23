import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albumsList = document.getElementById('albums-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-from');

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    spotify.search
      .albums(searchInput.value)
      .then(data => renderAlbums(data.albums.items, albumsList));
  });
}
