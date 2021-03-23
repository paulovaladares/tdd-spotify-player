import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albumsList = document.getElementById('albums-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

function makeRequest(albumId) {
  spotify.album
    .getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
}

export default function selectAlbumTrigger() {
  albumsList.addEventListener('click', e => {
    makeRequest(e.target.getAttribute('data-album-id'));
    // e.target.stopPropagation();
  });
}
