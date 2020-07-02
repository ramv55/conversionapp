import React, { Component } from 'react';
import TextWrapper from '../Component/TextWrapper';
import InputBox from '../Component/UI/InputBox';
import Button from '../Component/UI/Button';

class Home extends Component {
  state = {
    apiKey: '',
    message: '',
  };

  handleChange = (evt) => {
    this.setState({
      apiKey: evt.target.value,
    });
  };

  /** Adding API key to sessionStore */
  addApiKey = () => {
    sessionStorage.setItem('apikey', this.state.apiKey);
    this.setState({ message: 'You have been added API key successfully.' });
    this.setState({ apiKey: '' });
  };

  render() {
    let successMsg;
    successMsg = this.state.message ? (
      <span className='statusMsg'>{this.state.message}</span>
    ) : (
      ''
    );

    return (
      <div className='container mt-4'>
        <div className='row'>
          <div className='col'>
            <h4>
              <TextWrapper text='Welcome to Conversion App' />
            </h4>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-6 col-sm-12'>
            <form>
              <div className='form-group'>
                <label htmlFor='formGroupExampleInput'>
                  Please provide an API key
                </label>
                <InputBox
                  name='inputApiKey'
                  placeholder='API Key'
                  handleInputChange={this.handleChange}
                  value={this.state.apiKey}
                />
                {successMsg}
              </div>
              <Button
                type='button'
                text='Add Api Key'
                clickHandler={this.addApiKey}
                disabled=''
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
