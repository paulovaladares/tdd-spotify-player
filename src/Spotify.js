import SpotifyWrapper from 'spotify-wrapper';

// Remember that the token is only valid for 60 seg
const spotify = new SpotifyWrapper({
  token:
    'BQCLElSls669WfyTGIeOsgiMyCaRo8UYfxBh89kUjS3KHAbPU1hhiPPGlZfzlznxmY-FVsHUhY777wa0miuTC-JS4zdSVgL7W5s7GQ2BHqhgpO8E-G3HmIDQq77Mun9XzBGABw-ZhWSxJ1-SCmJ6MyhMIu6XaWDVdQIX5dEdxt0KLp9fxx3apbg1gzCe4s4mlRhJgYc7-c5uoBlpR9JrnsM6K1jw8VZD208C0RGzPsz84gbc4epcjSaedZRwlY-mqXORhM1TaNWU6TBksa9bi1KalA',
});

export default spotify;
