import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import TextWrapper from '../Component/TextWrapper';
import Dropdown from '../Component/UI/Dropdown';
import InputBox from '../Component/UI/InputBox';
import Button from '../Component/UI/Button';

const CurrencyCode = ['AUD', 'EUR', 'GBP', 'INR', 'USD'];

class Conversion extends Component {
  state = {
    amount: 0,
    fromCurrencyCode: '',
    toCurrencyCode: '',
    result: 0,
    errorMsg: '',
    apiError: '',
  };

  componentDidMount() {
    const api_key = sessionStorage.getItem('apikey');
    if (api_key === null) {
      this.setState({ errorMsg: 'API Key is empty. Please add your API key ' });
    }
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  /** Execute conversion API */
  getConversionRate = () => {
    const api_key = sessionStorage.getItem('apikey');
    if (api_key === null) {
      this.setState({ errorMsg: 'API Key is empty. Please add your API key ' });
      return;
    }
    const fromCode = this.state.fromCurrencyCode;
    const toCode = this.state.toCurrencyCode;
    const amount = this.state.amount;
    const query = `${fromCode}_${toCode}`;

    axios
      .get(
        `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${api_key}`
      )
      .then((res) => {
        // AUD_EUR
        const val = res.data[query];
        const total = amount * val;
        const converted_amt = Math.round((total * 100) / 100);
        this.setState({ result: converted_amt });
      })
      .catch((e) => {
        this.setState({ apiError: e.response.data.error });
      });
  };
  render() {
    const { errorMsg, apiError, result, amount } = this.state;

    let errorMessage =
      errorMsg !== '' ? (
        <div>
          <span className='error'>{errorMsg}</span>
        </div>
      ) : (
        ''
      );

    let showConverstionResult = result ? <TextWrapper text={result} /> : '';

    return (
      <div className='container mt-4'>
        <div className='row'>
          <div className='col'>
            <h4>
              <TextWrapper text='Currency Converter' />
            </h4>
            {errorMessage}
            {apiError && <span className='error'>{apiError}</span>}
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-12 col-sm-12'>
            <form>
              <div className='form-row'>
                <div className='form-group col-md-3'>
                  <label htmlFor='inputCity'>Amount</label>
                  <InputBox
                    name='amount'
                    placeholder='Amount'
                    handleInputChange={this.handleChange}
                  />
                </div>
                <div className='form-group col-md-3'>
                  <label htmlFor='inputState'>From</label>
                  <Dropdown
                    name='fromCurrencyCode'
                    list={CurrencyCode}
                    changeHandler={this.handleChange}
                  />
                </div>
                <div className='form-group col-md-3'>
                  <label htmlFor='inputState'>To</label>
                  <Dropdown
                    name='toCurrencyCode'
                    list={CurrencyCode}
                    changeHandler={this.handleChange}
                  />
                </div>
              </div>
              <Button
                type='button'
                text='Convert'
                clickHandler={this.getConversionRate}
                disabled={!amount}
              />
            </form>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-6 text-center'>
            <h3 className='result'>{showConverstionResult}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Conversion;
