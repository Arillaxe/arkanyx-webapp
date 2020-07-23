import React from 'react';
import { Post } from './components';

import './news.styl';

const News = () => {
  const postData = Array(10).fill(0).map((_, idx) => ({
    title: `Title ${idx}`,
    body: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Nobis est itaque doloribus eum minima ipsum pariatur consequatur
      placeat impedit odit veritatis quasi asperiores nihil quaerat, alias
      nemo assumenda totam temporibus.
    `,
  }));

  return (
    <main className="news">
      {postData.map(({ title, body }) => <Post key={`${title}-${body}`} title={title} body={body} />)}
    </main>
  );
};

export default News;
