import SpotifyWrapper from 'spotify-wrapper';

// Remember that the token is only valid for 60 seg
const spotify = new SpotifyWrapper({
  token:
    'BQDUU1nz_Klc_lDJ4YCMbA3wQBm42PFq4cmcGzdg9QWL41JOYySWraha8z4PBfA7-_sbQ7NddEVbwYNQkrgvz75yD-GIpo7VzN0EgCdN8blR2r2aNfBkt__K8gPuQCV0CXz5iKFRjj980wCG4r7unprDI5Yd9AWXVjFF73_dEVP0c8nD3q1jLBts91DgdLrOFNi48dmtCRzdThM9xz_kebCMKdzkuYmFkOZy9rOmby9sCk0QH2E9EsjO6R87qRuwSGKNPNmNhVxkbZH_kVvyfmRBkA',
});

export default spotify;
