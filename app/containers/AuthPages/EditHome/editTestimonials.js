import React, { useState, useEffect } from "react";
import EditClientPhoto from "./editClientPhotos";

function EditTestimonials() {
  const [newTestimonial1Title, setNewTestimonial1Title] = useState('');
  const [newTestimonial1Content, setNewTestimonial1Content] = useState('');
  const [newTestimonial1Link, setNewTestimonial1Link] = useState('');
  const [newTestimonial2Title, setNewTestimonial2Title] = useState('');
  const [newTestimonial2Content, setNewTestimonial2Content] = useState('');
  const [newTestimonial2Link, setNewTestimonial2Link] = useState('');
  const [newTestimonial3Title, setNewTestimonial3Title] = useState('');
  const [newTestimonial3Content, setNewTestimonial3Content] = useState('');
  const [newTestimonial3Link, setNewTestimonial3Link] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://honesteditz-back.herokuapp.com/get/content',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        const client1Text = data.find(item => item.name === 'client1');
        const client2Text = data.find(item => item.name === 'client2');
        const client3Text = data.find(item => item.name === 'client3');
        if (client1Text) {
          setNewTestimonial1Title(client1Text.title);
          setNewTestimonial1Content(client1Text.content);
          setNewTestimonial1Link(client1Text.link);
        }
        if (client2Text) {
          setNewTestimonial2Title(client2Text.title);
          setNewTestimonial2Content(client2Text.content);
          setNewTestimonial2Link(client2Text.link);
        }
        if (client3Text) {
          setNewTestimonial3Title(client3Text.title);
          setNewTestimonial3Content(client3Text.content);
          setNewTestimonial3Link(client3Text.link);
        }
      } else {
        console.error('Failed to fetch content:', response.status);
      }
    } catch (error) {
      console.error('Couldn\'t fetch content:', error);
    }
  };

  const saveChanges = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://honesteditz-back.herokuapp.com/content/update',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            changes: [
              {
                name: 'client1',
                title: newTestimonial1Title,
                content: newTestimonial1Content, 
                link: newTestimonial1Link
               },
              {
                name: 'client2',
                title: newTestimonial2Title,
                content: newTestimonial2Content, 
                link: newTestimonial2Link
               },
              {
                name: 'client3',
                title: newTestimonial3Title,
                content: newTestimonial3Content, 
                link: newTestimonial3Link
               },
            ],
          }),
        },
      );

      if (response.ok) {
        window.location.reload();
      } else {
        console.error('Failed to update content:', response.status);
      }
    } catch (error) {
      console.error('Couldnt updating content:', error);
    }
  };

  return (
    <>
      <h1>Testimonials</h1>
      <form>
        <label>
          <textarea
            type="text"
            placeholder="Testimonial 1"
            value={newTestimonial1Content}
            onChange={e => setNewTestimonial1Content(e.target.value)}
            name="testimonialTitle"
            />
        Testimonial 1
        </label>
        <label>
          <textarea
            type="text"
            placeholder="Testimonial 2"
            value={newTestimonial2Content}
            onChange={e => setNewTestimonial2Content(e.target.value)}
            name="testimonialTitle"
            />
        Testimonial 2
        </label>
        <label>
          <textarea
            type="text"
            placeholder="Testimonial 3"
            value={newTestimonial3Content}
            onChange={e => setNewTestimonial3Content(e.target.value)}
            name="testimonialTitle"
            />
        Testimonial 3
        </label>
      </form>
      <form>
        <label>
          <input
            type="text"
            placeholder="Client 1"
            value={newTestimonial1Title}
            onChange={e => setNewTestimonial1Title(e.target.value)}
            name="clientTitle"
            />
        Client 1
        </label>
        <label>
          <input
            type="text"
            placeholder="Client 2"
            value={newTestimonial2Title}
            onChange={e => setNewTestimonial2Title(e.target.value)}
            name="clientTitle"
            />
        Client 2
        </label>
        <label>
          <input
            type="text"
            placeholder="Client 3"
            value={newTestimonial3Title}
            onChange={e => setNewTestimonial3Title(e.target.value)}
            name="clientTitle"
            />
        Client 3
        </label>
      </form>
      <form>
        <label>
          <input
            type="text"
            placeholder="Client Youtube Link"
            value={newTestimonial1Link}
            onChange={e => setNewTestimonial1Link(e.target.value)}
            name="testimonialTitle"
            />
        Client 1 Youtube Link
        </label>
        <label>
          <input
            type="text"
            placeholder="Client Youtube Link"
            value={newTestimonial2Link}
            onChange={e => setNewTestimonial2Link(e.target.value)}
            name="testimonialTitle"
            />
        Client 2 Youtube Link
        </label>
        <label>
          <input
            type="text"
            placeholder="Client Youtube Link"
            value={newTestimonial3Link}
            onChange={e => setNewTestimonial3Link(e.target.value)}
            name="testimonialTitle"
            />
        Client 3 Youtube Link
        </label>
      </form>
      <button type="button" onClick={saveChanges}>
      Save
      </button>
      <EditClientPhoto />
    </>

  );
};

export default EditTestimonials;