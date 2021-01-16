import React from 'react';
import PropTypes from 'prop-types'


const RepoItem = ({repo}) => {
    return (
        <div className="card p-3 mt-4" >
            <h3 >
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo:PropTypes.object.isRequired,
}

export default RepoItem