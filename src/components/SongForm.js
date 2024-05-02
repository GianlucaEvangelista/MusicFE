import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../css/SongForm.css'

const SongForm = ({ addSong }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    album: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedSong = await addSong(formData);
      console.log('Song added successfully', addedSong);
      setFormData({
        title: '',
        artist: '',
        genre: '',
        album: '',
        year: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="song-form-container">
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter song title"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Artist</Form.Label>
        <Form.Control
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          placeholder="Enter artist's name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Enter genre"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Album</Form.Label>
        <Form.Control
          type="text"
          name="album"
          value={formData.album}
          onChange={handleChange}
          placeholder="Enter album name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Enter release year"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add song
      </Button>
    </Form>
  );
};

export default SongForm;