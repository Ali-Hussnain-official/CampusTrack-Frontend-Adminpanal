import React from 'react';
import PostTable from '../Components/PostTable';

const dummyFound = [
  { id: 2, title: 'Silver Ring', date: '2024-05-12', status: 'Approved', type: 'Found' },
];

const FoundPosts = () => (
  <PostTable title="Found Posts" posts={dummyFound} />
);

export default FoundPosts;
