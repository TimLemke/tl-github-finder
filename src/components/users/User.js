import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Link to='/' className='btn btn-primary rounded-0 mb-4'>
            Back to Search
          </Link>
        </div>
        <div className='col-12'>
          <div className='card rounded-0'>
            <div className='card-header'>
              <h1 className='h3'>{name}</h1>
              <p className='m-0'>Location: {location}</p>
              <p className='m-0'>
                Hireable:
                {hireable ? (
                  <i className='fas fa-check text-success ml-2'></i>
                ) : (
                  <i className='fas fa-times-circle text-danger ml-2'></i>
                )}
              </p>
            </div>
            <div className='card-body'>
              <div className='container-fluid p-0'>
                <div className='row'>
                  <div className='col-12 col-md-3 text-center'>
                    <img src={avatar_url} className='img-fluid' alt='' />
                  </div>
                  <div className='col-12 col-md-8'>
                    <div>
                      {bio && (
                        <Fragment>
                          <p className='h3'>Bio</p>
                          <p>{bio}</p>
                          <a
                            href={html_url}
                            rel='noreferrer'
                            target='_blank'
                            className='btn btn-primary rounded-0 mb-2'
                          >
                            Visit GitHub Profile
                          </a>
                          <ul className='list-inline'>
                            <li>
                              {login && (
                                <Fragment>
                                  <strong>Username: </strong> {login}
                                </Fragment>
                              )}
                            </li>
                            <li>
                              {company && (
                                <Fragment>
                                  <strong>Company: </strong> {company}
                                </Fragment>
                              )}
                            </li>
                            <li>
                              {blog && (
                                <Fragment>
                                  <strong>Website: </strong> {blog}
                                </Fragment>
                              )}
                            </li>
                          </ul>
                        </Fragment>
                      )}
                      <div className='d-flex mb-2'>
                        <div className='badge badge-primary mr-2'>
                          Followers: {followers}
                        </div>
                        <div className='badge badge-success mr-2'>
                          Following: {following}
                        </div>
                      </div>
                      <div className='d-flex mb-2'>
                        <div className='badge badge-primary mr-2'>
                          Public Repos: {public_repos}
                        </div>
                        <div className='badge badge-success mr-2'>
                          Public Gists: {public_gists}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='list-group list-group-flush'>
              <Repos repos={repos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
