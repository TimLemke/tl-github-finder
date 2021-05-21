import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='col-12 col-md-3 p-2'>
      <div className='card rounded-0'>
        <img src={avatar_url} alt='' className='card-img-top img-fluid p-4' />
        <div className='card-body'>
          <p className='small m-0'>Username:</p>
          <h5 className='card-title'>{login}</h5>
          <Link to={`/user/${login}`} className='btn btn-primary btn-block'>
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
