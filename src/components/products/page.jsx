"use client";
import { getProducts } from "@/tanstack/queries/queries";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CgToggleOff } from "react-icons/cg";
import { CgToggleOn } from "react-icons/cg";

const page = () => {
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState({});
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Product", submitSearch],
    queryFn: () => getProducts({ search }),
  });

  function SearchFunction() {
    if (search.trim()) {
      setSubmitSearch(!submitSearch);
    }
  }

  if (isLoading)
    return <h1 className="text-mist-300 text-[20px]">Loading...</h1>;
  if (error)
    return <h1 className="text-mist-300 text-[20px]">{error.message}</h1>;

  return (
    <div className="w-[80%] flex justify-start items-start flex-col gap-[50px] pt-[50px]">
      <div>
        <div className="flex justify-center items-start flex-col">
          <p className="text-mist-200 text-[30px]">Products</p>
          <div className="flex justify-center items-center gap-[10px]">
            <input
              type="search"
              placeholder="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="w-[300px] h-[30px] border-1 bg-mist-800 border-blue-500 rounded-[8px] outline-0 px-[10px] text-mist-300 placeholder:text-mist-300"
            />
            <button
              onClick={SearchFunction}
              className="w-[100px] h-[30px] bg-blue-500 text-mist-200 rounded-[8px]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[80vh] flex justify-start items-center flex-col gap-[30px] bg-mist-800 p-[50px] rounded-[12px] overflow-auto scrollbar-none">
        {products.data.data.items.map((item) => (
          <div
            key={item.id}
            className="text-mist-300 text-[17px] flex justify-start items-center]"
          >
            <div className="w-[250px]">
              <img
                src={`${item.image}`}
                alt={`${item.name}`}
                className="w-[80px] rounded-[8px]"
              />
            </div>
            <p className="w-[250px]">{item.name}</p>
            <p className="w-[350px]">{item.description}</p>
            <p className="w-[250px]">
              {item.price} <span className="text-green-700">UZS</span>
            </p>
            <p className="w-[100px]">
              {item.isActive ? (
                <CgToggleOn className="text-[35px] text-green-500" />
              ) : (
                <CgToggleOff className="text-[35px] text-red-500" />
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
