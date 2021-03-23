import SpotifyWrapper from 'spotify-wrapper';

// Remember that the token is only valid for 60 seg
const spotify = new SpotifyWrapper({
  token:
    'BQCVd4uE3rrgdDgAf9ymyUzmtFRr5_Rza0iILCntc0J8hvcEtK1DfyZMjdJNBndNNx4lurVRuXZJlO2itmfzW6gjdEPwY-8yI7GYWsybLmLGpdn1eOUqB3ZS72x2-8KsqXjVUn1f4EeRkNDCmBH5uu7u0804uWNf9PcGNVAVS1Tph-GYdi6cur8GE3i_by8D2sKM3GfRoaPcWd_I-NcFmzcUAb9EXMcq9x8RYfa4f_R3gbEmGPjzUPxXBVPBAvlNvGgiT_REAjXR6GePM31WquQWqw',
});

export default spotify;
