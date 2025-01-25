'use client'
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface FilteredDataType {
  title: string;
  slug: {
    current: string;
  };
  productImage: {
    asset: {
      _ref: string;
    };
  };
  description: string;
}

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<FilteredDataType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchValue: string) => {
    setLoading(true);
    try {
      const query = `*[_type == "product"]{
        title,
        slug {
          current
        },
        productImage {
          asset {
            _ref
          }
        },
        description
      }`;
      const response = await client.fetch(query);
      const filteredData: FilteredDataType[] = response.filter(
        (item: FilteredDataType) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
      );

      setData(filteredData.slice(0, 7));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        className="px-2 sm:px-4 py-1 sm:py-2 rounded-full dark:border-black border w-[300px] sm:w-[200px] lg:w-72"
      />
      {value && (
        <div className="absolute z-30 mt-2 w-screen top-[60px] ">
          <div className="flex w-[500px]  sm:left-0">
            <div className="shadow-lg left-0 border w-[400px] lg:w-[700px] bg-[#F9F1E7] dark:bg-black rounded-md">
              {data.length === 0 ? (
                <h2 className="text-center">Not Found</h2>
              ) : (
                data.map((item) => (
                  <Link
                    href={`/singlepage/${item.slug.current}`}
                    key={item.title}
                    onClick={() => setValue("")}
                  >
                    <div className="px-4 py-2 border-b">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={urlFor(item.productImage).url()}
                          width={80}
                          height={100}
                          alt={item.title}
                          className="rounded object-cover"
                        />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="line-clamp-1">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
              {loading && <p className="text-center py-2">Loading...</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;