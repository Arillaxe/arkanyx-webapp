import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@src/pages/common/components';

import './post.styl';

const Post = (props) => {
  const { title, body } = props;

  return (
    <div className="post">
      <div className="post-header">{title}</div>
      <div className="post-body">{body}</div>
      <div className="post-footer">
        <Button title="Continue..." />
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
