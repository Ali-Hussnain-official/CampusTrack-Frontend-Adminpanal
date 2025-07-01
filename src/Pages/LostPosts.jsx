import React from 'react';
import PostTable from '../Components/PostTable';

const dummyLost = [
  { id: 1, title: 'Black Wallet', date: '2024-05-10', status: 'Pending', type: 'Lost' },
  { id: 3, title: 'Campus ID',   date: '2024-05-14', status: 'Rejected', type: 'Lost' },
];

const LostPosts = () => (
  <PostTable title="Lost Posts" posts={dummyLost} />
);

export default LostPosts;
