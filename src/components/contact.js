import React, { Component } from 'react';
import axios from 'axios';
import ContactForm from './contactForm';

class Contact extends Component {
  render() {
    return (
      <div>
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
