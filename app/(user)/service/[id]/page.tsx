import { CardProductDetailComponent } from "@/components/card/CardProductDetailComponent";
import React from "react";

type PropsParams = {
  params: {
    id: number;
  };
  searchParams: any;
};

// Server component fetching data
const ENDPOINT = "https://fakestoreapi.com/products/";
const getDate = async (id: number) => {
  const res = await fetch(`${ENDPOINT}${id}`); // As in nextJs has the defual caching, so when we want to remove caching -> code below

  // const res = await fetch(`${ENDPOINT}${id}`, { cache: "no-store" }); // {cache: ""no-store"} this mean remove caching
  // const res = await fetch(`${ENDPOINT}${id}`, { next: { revalidate: 10 } }); // revalidate is use for refetch data

  // However in this page is need to cach data because it is the dynamic rendering without interaction with the user

  const data = await res.json();
  return data;
};

export default async function page(props: PropsParams) {
  let data = await getDate(props.params.id);
  return (
    <div className="h-screen grid place-content-center">
      <CardProductDetailComponent
        title={data?.title || "No title"}
        description={data?.description || "No description"}
        image={
          data?.image ||
          "https://flowbite-react.com/images/products/apple-watch.png"
        }
      />
    </div>
  );
}
