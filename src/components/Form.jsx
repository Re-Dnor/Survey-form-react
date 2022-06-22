import React from "react";

const Form = (props) => {
  const {data, handleChangeInput, handleChangeInterested, handleChangeWatched, submitForm} = props;

  return (
      <>
      <div className="page">
        <header className="header">
          <h1 className="header__title">What is your favorite TVShow?</h1>
          <p className="header__subtitle">Please take a survey on the series</p>
        </header>
        <main className="main">
          <form className="form " id="survey-form" onSubmit={submitForm}>
              <div className="form__group">
                  <label htmlFor="name" id="name-label">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Please enter your Name" onChange={handleChangeInput}/> 
              </div>
              <div className="form__group">
                  <label htmlFor="email" id="email-label">E-mail</label>
                  <input type="email" id="email" name="email" required placeholder="Please enter your Email" onChange={handleChangeInput}/> 
              </div>
              <div className="form__group">
                  <label htmlFor="favorite" id="favorite-label">Best series</label>
                  <input type="text" id="favorite" name="favorite" placeholder="Please enter your Favorite series" onChange={handleChangeInput}/> 
              </div>
              <div className="form__group">
                  <label htmlFor="number" id="number-label">How many series you watch?</label>
                  <input type="number" id="number" name="series" placeholder="Number series" min="1" max="1000" onChange={handleChangeInput}/> 
              </div>
              <div className="form__group">
                  <p className="form__title">Favorite genre</p>
                  <select className="form__select" name="genre" id="dropdown" onChange={handleChangeInput}>
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
                      <input className="form__radio" type="radio" defaultValue="yes" name="watched" onChange={handleChangeWatched}/>Yes
                      <input className="form__radio" type="radio" defaultValue="no" name="watched" onChange={handleChangeWatched}/>No
                  </label>
              </div>
              <div className="form__group form__group_checkboxs">
                  <p className="form__title">What else are you interested in?</p>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="anime" defaultValue="anime" onChange={handleChangeInterested}/>Anime</label>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="films" defaultValue="films" onChange={handleChangeInterested}/>Films</label>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="games" defaultValue="games" onChange={handleChangeInterested}/>Games</label>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="sport" defaultValue="sport" onChange={handleChangeInterested}/>Sports</label>
                  <label className="'heybl"><input className='form__checkbox' type="checkbox" name="other" defaultValue="other" onChange={handleChangeInterested}/>Other</label>
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

export default Form