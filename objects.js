var playlist = {
  artist: '',
  song: ''
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = 'eminem';
  playlist[song] = 'phenomenal';
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist
}