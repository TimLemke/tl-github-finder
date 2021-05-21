import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter a username', 'danger');
    } else {
      alertContext.removeAlert();
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <section className='search-form row'>
      <div className='col-12'>
        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <label className='sr-only' htmlFor='user-search'>
              Search for GitHub users by username
            </label>
            <input
              id='user-search'
              className='form-control form-control-lg rounded-0'
              type='text'
              name='text'
              placeholder='Enter a username...'
              value={text}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Search'
              className='btn btn-primary btn-lg btn-block rounded-0'
            />
          </div>
          {githubContext.users.length > 0 && (
            <div className='form-group'>
              <button
                className='btn btn-secondary btn-lg btn-block rounded-0'
                onClick={githubContext.clearUsers}
              >
                Clear
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Search;
