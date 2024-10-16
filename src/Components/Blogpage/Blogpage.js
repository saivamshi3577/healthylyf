
import React from 'react';
import './BlogPage.css';
import sproutsHealthImg from '../Assets/sprouts-health.jpg';
import sproutsWeightLossImg from '../Assets/sprouts-weight-loss.jpg';
import growSproutsImg from '../Assets/grow-sprouts.jpg';

const blogs = [
  {
    title: "The Health Benefits of Sprouts",
    date: "05 July 2022",
    author: "Kevin Martin",
    description: "Discover how incorporating sprouts into your daily diet can improve your health. This blog covers the nutritional benefits, different types of sprouts, and tips on how to enjoy them in your meals.",
    image: sproutsHealthImg,
  },
  {
    title: "Sprouts for Weight Loss: Myth or Reality?",
    date: "05 July 2022",
    author: "Kevin Martin",
    description: "Are sprouts truly effective for weight loss? Learn about the low-calorie, high-nutrient properties of sprouts that make them a perfect addition to a weight-loss diet.",
    image: sproutsWeightLossImg,
  },
  {
    title: "Growing Your Own Sprouts at Home",
    date: "05 July 2022",
    author: "Kevin Martin",
    description: "Find out how easy and cost-effective it is to grow your own sprouts. This guide walks you through the steps to grow a variety of sprouts at home with minimal equipment.",
    image: growSproutsImg,
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-content">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-details">
              <div className="blog-date">
                <span>{blog.date}</span>
              </div>
              <h2>{blog.title}</h2>
              <p>by {blog.author} • 0 comments</p>
              <p>{blog.description}</p>
              <a href="/" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <aside className="blog-sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search here..." />
          <button type="submit">🔍</button>
        </div>
        <div className="sidebar-section">
          <h3>Latest Posts</h3>
          {blogs.map((blog, index) => (
            <div key={index} className="latest-post">
              <img src={blog.image} alt={blog.title} />
              <p>{blog.title}</p>
            </div>
          ))}
        </div>
        <div className="sidebar-section">
          <h3>Categories</h3>
          <ul>
            <li>Sprouts</li>
            <li>Dry Fruits</li>
            <li>Vegetables</li>
            <li>Fresh Vegetables</li>
            <li>Organic Fruits</li>
            <li>Organic Food</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Tags</h3>
          <div className="tags">
            <span>Agriculture</span>
            <span>Farming</span>
            <span>Harvest</span>
            <span>Organic</span>
            <span>Vegetables</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
