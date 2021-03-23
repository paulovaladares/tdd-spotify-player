/* eslint-disable no-unused-expressions */
import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbum from '../src/AlbumList';

describe('AlbumList', () => {
  it('should exist', () => {
    expect(renderAlbum).to.exist;
  });

  const data = [
    {
      album_type: 'album',
      artists: [
        {
          name: 'Incubus',
        },
      ],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
          width: 64,
        },
      ],
      name: 'The Essential Incubus',
      type: 'album',
    },
    {
      album_type: 'album',
      artists: [
        {
          name: 'Incubus',
        },
      ],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
          width: 64,
        },
      ],
      name: 'The Essential Incubus',
      type: 'album',
    },
  ];

  const markup = `
    <div class="list-item" data-album-id="${data[0].id}">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" lass="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>`;

  const markup2 = `
    <div class="list-item" data-album-id="${data[0].id}">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" lass="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>
    <div class="list-item" data-album-id="${data[1].id}">
      <img src="${data[1].images[2].url}" alt="${data[1].name}" lass="list-image">
      <div class="list-description">
        <p class="list-title">${data[1].name}</p>
        <p class="list-subtitle">${data[1].artists[0].name}</p>
      </div>
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbum(data.slice(0, 1), element);
    expect(element.innerHTML).to.be.equal(markup);
  });

  it('should create and append when more than one album', () => {
    const element2 = document.createElement('div');
    renderAlbum(data, element2);
    expect(element2.innerHTML).to.be.equal(markup2);
  });
});
