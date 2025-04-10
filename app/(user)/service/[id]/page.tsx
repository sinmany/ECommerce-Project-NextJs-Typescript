import { CardProductDetailComponent } from "@/components/card/CardProductDetailComponent";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Server component fetching data
const ENDPOINT = "https://fakestoreapi.com/products/";
const getDate = async (id: string) => {
  const res = await fetch(`${ENDPOINT}${id}`); // As in nextJs has the defual caching, so when we want to remove caching -> code below

  // const res = await fetch(`${ENDPOINT}${id}`, { cache: "no-store" }); // {cache: ""no-store"} this mean remove caching
  // const res = await fetch(`${ENDPOINT}${id}`, { next: { revalidate: 10 } }); // revalidate is use for refetch data

  // However in this page is need to cach data because it is the dynamic rendering without interaction with the user

  const data = await res.json();
  return data;
};

// Generate Dynamic Matadata
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata //  ResolvingMetadata used to take matadata from parents
): Promise<Metadata> {
  // read route params
  const id = params.id;
  const parentMeta = await parent;
  console.log('parentMeta', parentMeta)

  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    themeColor: "#102E50",
    openGraph: {
      images: product.image,
    },
  };
}

export default async function page(props: Props) {
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
