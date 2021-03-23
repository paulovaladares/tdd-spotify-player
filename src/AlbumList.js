/* eslint-disable no-param-reassign */
function createMarkup(data) {
  return data
    .map(
      album => `
    <div class="list-item" data-album-id="${album.id}">
      <img src="${album.images[2].url}" alt="${album.name}" lass="list-image">
      <div class="list-description">
        <p class="list-title">${album.name}</p>
        <p class="list-subtitle">${album.artists[0].name}</p>
      </div>
    </div>`,
    )
    .join('');
}

export default function renderAlbum(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
