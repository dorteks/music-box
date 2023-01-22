import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
// import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  const paths = data.map((album: { id: any }) => {
    return {
      params: {
        id: album.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/` + id);
  const data = await res.json();

  console.log(id);
  console.log(data.title, "data");

  return {
    props: { data },
  };
};

const Posts = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Box>
        <h1> Details Page </h1>
        <h5>The data ID is {data.id}</h5>
        <h5>the title of the album is {data.title}</h5>
        <Link href="/posts">Back</Link>
      </Box>
    </>
  );
};

export default Posts;
