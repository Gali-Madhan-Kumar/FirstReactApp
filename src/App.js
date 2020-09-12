import React from 'react';
import './App.css';
import BlogCard from './BlogCard';

function App() {

  const blogArr = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    }
  ]

  const blogCards = blogArr.map((item) => {
    return (
      <BlogCard key={item.id} title={item.title} description={item.description} />
    )
  });

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
