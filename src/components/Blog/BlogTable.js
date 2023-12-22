import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogTable() {
  const [data, setData] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    if (categoryId) {
      axios.get(`GetBlogDetailByCategoryID?categoryId=${categoryId}`)
        .then(response => {
          setData(response.data);
        });
    }
  }, [categoryId]);

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  }

  return (
    <div>
      <h2>Get JSON Data with Asp.Net MVC. </h2>
      <label>Select Category: </label>
      <select onChange={handleChange}>
        {/* Fill options dynamically */}
      </select>
      <table id="blogTable" className="zui-table zui-table-rounded">
        <thead>
          <tr>
            <th>PostId</th>
            <th>Title</th>
            <th>Full Content</th>
            <th>Meta Description</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) =>
              <tr key={i}>
                <td>{item.PostId}</td>
                <td>{item.PostTitle}</td>
                <td>{item.ShortPostContent}</td>
                <td>{item.MetaDescription}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default BlogTable;
