import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';
import validator from 'validator';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  sendMessage(event) {
    event.preventDefault();

    if (!validator.isEmail(this.state.email)) {
      return console.log('Wrong email adrress');
    }

    const templateParams = {
      from_name: this.state.name + ' (' + this.state.email + ')',
      to_name: 'Jia Liang Lee',
      message: this.state.message,
    };

    emailjs
      .send(
        'service_ggywtqg',
        'template_femwqty',
        templateParams,
        'user_wlA5pEwATlcCZSwlX4V3j'
      )
      .then(
        (result) => {
          return console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    return (
      <div>
        <form
          className='ui form'
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <textarea
            id='name'
            name='name'
            onChange={this.handleInputChange.bind(this)}
            placeholder='your name'
            required
            value={this.state.name}
            style={{ width: '100%' }}
            rows={1}
          />
          <br />
          <textarea
            id='email'
            name='email'
            onChange={this.handleInputChange.bind(this)}
            placeholder='your email address'
            required
            value={this.state.email}
            error={this.state.errors}
            style={{ width: '100%' }}
            rows={1}
          />
          <br />
          <textarea
            id='message'
            name='message'
            onChange={this.handleInputChange.bind(this)}
            placeholder='what would you like to chat about?'
            required
            value={this.state.message}
            style={{ width: '100%', height: '250px' }}
          />
          <br />
          <Button variant='outlined' onClick={this.sendMessage.bind(this)}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
