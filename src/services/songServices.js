const baseUrl = 'http://localhost:8080/songs';

export const fetchSongs = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const addSong = async (songData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(songData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};