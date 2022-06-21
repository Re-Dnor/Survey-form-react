import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      accRules: '',
    isSubmittedForm: false,
  }
  }
  render() {
    return (
      <div>huehue</div>
    )
  }
}