import Layout from "@/layouts/main";
import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import { BsPlay } from "react-icons/bs";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get("http://localhost:8000/explore");
  const data = await res.data;

  const paths = data.map((explore: { id: any }) => {
    return {
      params: {
        id: explore.id.toString(),
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
  const res = await axios.get(`http://localhost:8000/explore/` + id);
  const data = await res.data;

  return {
    props: { data },
  };
};

const ExploreSong = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Box pt="40px" pl="20px" pb="60px">
      <VStack key="blogTitle" gap={4}>
        <Heading size="2xl" textAlign="center">
          {data.blog}
        </Heading>
        <Text>by {data.blogAuthor} </Text>
        <Text> {data.date} </Text>

        <Card width="1000px" height="550px" bgImage={data.songCoverImage}>
          blog picture here
        </Card>

        <Text> Blog here </Text>
        <Text width="800px">{data.blogParag1}</Text>
        <Text width="800px">{data.blogParag2}</Text>
        <Text width="800px">{data.blogParag3}</Text>
        <Text width="800px">{data.blogParag4}</Text>

        <Card width="500px" height="300px" bgImage={data.songCoverImage}>
          <Box alignSelf="center">
            <BsPlay size="80px" />
          </Box>
        </Card>

        <HStack pt="40px" gap={10}>
          <Button width="300px">
            <HiArrowLeft size="20px" />
            <Text pl="30px">Previous Post</Text>
          </Button>
          <Button width="300px">
            <Text pr="30px">Next Post </Text>
            <HiArrowRight size="20px" />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

ExploreSong.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ExploreSong;
