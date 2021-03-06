import React, { useState, useRef, useEffect } from 'react';


export default function NewBookPage({handleAddBook}){
  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    published: ''
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddBook(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Add New Book</h1>
      <form  autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">

          <label>Book's Name (Required)</label>
          <input
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Book genre (Required)</label>
          <input
            className="form-control"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date published (Required)</label>
          <input
            className="form-control"
            name="published"
            value={formData.published}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn"
          onClick={handleSubmit}
          disabled={invalidForm}
        >
          Add Book
        </button>
      </form>
    </>
  );
  
}