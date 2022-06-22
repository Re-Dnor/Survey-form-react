import React from "react";
import update from 'immutability-helper';
import Conclusion from "./components/Conclusion.jsx"
import Form from "./components/Form.jsx"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        favorite: '',
        series: '',
        genre: '',
        watched: true,
        interested: {
          anime: false,
          films: false,
          games: false,
          sport: false,
          other: false,
        }
      },
    isSubmittedForm: false,
    }
  }

  handleChangeInput = (e) => {
    const {form} = this.state;
    const name = e.target.name;
    const value = e.target.value;
    this.setState({form: {...form, [name]: value}})
  }

  handleChangeWatched = (e) => {
    const {form} = this.state;
    const value = e.target.value;
    const newValue = value === 'yes'? true: false;
    this.setState({form: {...form, watched: newValue}})
  }

  handleChangeInterested = (e) => {
    // const {form} = this.state;
    // const name = e.target.name;
    // const newValue = !form.interested[name];
    // this.setState({form: {...form, interested: {...form.interested, [name]: newValue}}})
    const {form} = this.state;
    const {interested} = this.state.form;
    const name = e.target.name;
    const newValue = !interested[name];
    const newInterested = update(interested, {$merge: {[name]: newValue}})
    this.setState({form: {...form, interested: newInterested}})
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({isSubmittedForm: true})
  }

  goBack = (e) => {
    e.preventDefault();
    this.setState({isSubmittedForm: false})
  }


  render() {
    const {isSubmittedForm} = this.state;
    return (
      isSubmittedForm ?
      <Conclusion data={this.state.form} onClick={this.goBack}/>
        :
      <Form data={this.state} handleChangeInput={this.handleChangeInput} handleChangeInterested={this.handleChangeInterested} handleChangeWatched={this.handleChangeWatched} submitForm={this.submitForm}/>
    )
  }
}