"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/src/components/Footer";
import Link from "next/link";

// Function to fetch blog data dynamically
const fetchData = async () => {
  return [
    {
      img: "/Neelo-longhair.png",
      title: "Neelo's Long Hair Oil",
      slug: "neelos-long-hair-oil",
    },
    {
      img: "/pexels-828860-2639947.jpg",
      title: "Must-Have Beauty Products for 2025",
      slug: "must-have-beauty-products-2025",
    },
    {
      img: "https://th.bing.com/th/id/R.d04ad041b191445a1ce67f950ee61802?rik=pVnA%2bnhHpvaQ8Q&pid=ImgRaw&r=0",
      title: "Why Organic Skin Care Products Are a Game Changer",
      slug: "organic-skin-care-products",
    },
  ];
};

const Blog = () => {
  const [data, setData] = useState<Array<any>>([]);

  // Fetch blog data on component mount
  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchDataAsync();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section with Background Image */}
      <div
        className="bg-cover bg-center shadow py-32 h-[50vh]"
        style={{ backgroundImage: 'url("/beauty.png")' }} // Background image URL
      >
        <main className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to Latest Blogs!</h1>
          <p className="text-lg text-white mt-2">
            Stay updated with our latest beauty tips and trends.
          </p>
        </main>
      </div>

      {/* Blog Cards Section */}
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 object-cover" // Image with a height of 64
              />
              {/* Blog Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{blog.comments}</p>
                {/* Link to Dynamic Blog Post */}
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Blog;
