import Image from "next/image";
import img from "../../images/Rectangle 68.png";
import img2 from "../../images/Rectangle 68 (1).png";
import img3 from "../../images/Rectangle 68 (2).png";
import React from "react";
import Link from "next/link";
import logo from "@/images/Logos.png";
import SearchBar from "../../components/search";
import img4 from "../../images/Rectangle 68 (1).png"

import Features from "../shop/banner";

import tumb from "@/images/Rectangle 1.png";

const Blog = () => {
  const posts = [
    {
      title: "Going all-in with Millenial Design",
      image: img,
      date: "August 23, 2023",
      author: "Nest",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Exploring New Ways of Decorating",
      image: img2,
      date: "August 20, 2023",
      author: "Layla",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Handmade Pieces that Took Time to Make",
      image: img3,
      date: "August 17, 2023",
      author: "Nest",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Handmade Pieces that Took Time to Make",
      image: img4,
      date: "August 17, 2023",
      author: "Nest",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const categories = ["Crafts", "Design", "Homemade", "Interior", "Wood"];

  return (
    <div>
      <div className="relative w-full h-64 md:h-96">
        <Image
          className="w-full h-full object-cover"
          src={tumb}
          alt="background"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            className="mb-5"
            src={logo}
            alt="logo"
            width={80}
            height={80}
          />
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
            Blog
          </h1>
          <p className="text-gray-600 text-center text-sm md:text-2xl">
            Home &gt; Blog
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col-reverse lg:flex-row gap-8 justify-evenly">
          <div className="lg:col-span-3  py-10 w-[90%] ml-4 sm:ml-0 lg:w-[700px]">
            {posts.slice(0,3).map((post, index) => (
              <div key={index} className="mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center mb-4"></div>
                <button className=" text-black underline font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            ))}

            <div className="flex justify-center mt-10">
              <button className="px-4 py-2 mx-1 bg-[#B88E2F] text-white rounded ">
                1
              </button>
              <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded">2</button>
              <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded">3</button>
              <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded">
                Next
              </button>
            </div>
          </div>

          <div className="lg:col-span-1 py-10 ml-4 sm:ml-0 w-[300px]">
            <SearchBar />

            <h2 className="text-2xl font-semibold  mt-10 ">Categories</h2>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mt-5">
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Posts</h2>
            {posts.map((post, index) => (
              <div key={index} className="mb-10 flex ">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 object-cover mb-2"
                />
                <div className=" ml-4">
                  <h3 className="text-sm  mb-2">
                    <Link
                      href="#"
                      className="text-black"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Blog;
