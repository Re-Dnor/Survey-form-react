import React from "react";

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
        watched: '',
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
    const {form} = this.state;
    const name = e.target.name;
    const newValue = !form.interested[name];
    this.setState({form: {...form, interested: {...form.interested, [name]: newValue}}})
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({isSubmittedForm: true})
  }

  goBack = (e) => {
    e.preventDefault();
    this.setState({isSubmittedForm: false})
  }

  renderForm = () => {
    return (
      <>
      <div className="page">
        <header className="header">
          <h1 className="header__title">What is your favorite TVShow?</h1>
          <p className="header__subtitle">Please take a survey on the series</p>
        </header>
        <main className="main">
          <form className="form " id="survey-form" onSubmit={this.submitForm}>
              <div className="form__group">
                  <label htmlFor="name" id="name-label">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Please enter your Name" onChange={this.handleChangeInput}/> 
              </div>
              <div className="form__group">
                  <label htmlFor="email" id="email-label">E-mail</label>
                  <input type="email" id="email" name="email" required placeholder="Please enter your Email" onChange={this.handleChangeInput}/> 
              </div>
              <div className="form__group">
                  <label htmlFor="favorite" id="favorite-label">Best series</label>
                  <input type="text" id="favorite" name="favorite" placeholder="Please enter your Favorite series" onChange={this.handleChangeInput}/> 
              </div>
              <div className="form__group">
                  <label htmlFor="number" id="number-label">How many series you watch?</label>
                  <input type="number" id="number" name="series" placeholder="Number series" min="1" max="1000" onChange={this.handleChangeInput}/> 
              </div>
              <div className="form__group">
                  <p className="form__title">Favorite genre</p>
                  <select className="form__select" name="genre" id="dropdown" onChange={this.handleChangeInput}>
                      <option disabled defaultValue>Select</option>
                      <option defaultValue="drama">Drama</option>
                      <option defaultValue="thriller">Thriller</option>
                      <option defaultValue="crime">Crime</option>
                      <option defaultValue="action">Action</option>
                      <option defaultValue="adventure">Adventure</option>
                  </select>
              </div>
              <div className="form__group">
                  <p className="form__title">Do you watch series?</p>
                  <label htmlFor="" name="watched">
                      <input className="form__radio" type="radio" defaultValue="yes" name="watched" onChange={this.handleChangeWatched}/>Yes
                      <input className="form__radio" type="radio" defaultValue="no" name="watched" onChange={this.handleChangeWatched}/>No
                  </label>
              </div>
              <div className="form__group form__group_checkboxs">
                  <p className="form__title">What else are you interested in?</p>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="anime" defaultValue="anime" onChange={this.handleChangeInterested}/>Anime</label>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="films" defaultValue="films" onChange={this.handleChangeInterested}/>Films</label>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="games" defaultValue="games" onChange={this.handleChangeInterested}/>Games</label>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="sport" defaultValue="sport" onChange={this.handleChangeInterested}/>Sports</label>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="other" defaultValue="other" onChange={this.handleChangeInterested}/>Other</label>
              </div>
              <div className="form__group">
                  <p className="form__title"></p>
                  <textarea className='form__textarea' name="comments" id="comments" placeholder="You can enter your comment"></textarea>
              </div>
              <div className="form__group">
                  <button className="btn" type="submit" id="submit">Submit</button>
              </div>
          </form>
      </main>
    </div>
      </>
    )
  }

  renderTable = () => {
    const {form} = this.state;
    const {name, email, favorite, series, genre, watched, interested} = form;
    return (
      <>
      {watched? 
        <div className="table">
        <header className="header">
          <h1 className="header__title">Thanks {name} for completed survey</h1>
          <h2 className="header__subtitle">{favorite === 'Better call Saul'? 'This is my tooooo': `${favorite} is not bad, but "Better call Saul" perfecto`}</h2>
        </header>
        <button className="btn-back" onClick={this.goBack}>Back</button>
        </div> :
        <div className="table">
        <header className="header">
          <h1 className="header__title">WTF</h1>
        </header>
        <button className="btn-back" onClick={this.goBack}>Back</button>
        </div>
        
        }
      </>
    )
  }

  render() {
    const {isSubmittedForm} = this.state;
    return (
      <>
      {isSubmittedForm? this.renderTable() : this.renderForm()}
      </>
    )
  }
}