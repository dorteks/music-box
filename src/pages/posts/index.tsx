import { Box, Link } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();

  return {
    props: { albums },
  };
};

const PostAlbums = ({
  albums,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <p>List of Albums</p>

      {albums.map((post: any) => (
        <Link href={`/posts/` + post.id} key={post.id}>
          <Box mb="30px" mt="30px">
            {post.id} - {post.title}
          </Box>
        </Link>
      ))}
    </div>
  );
};

export default PostAlbums;
