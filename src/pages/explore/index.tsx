import Layout from "@/layouts/main";
import { Box, Card, Grid, Stack, Text } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import { BiPlayCircle } from "react-icons/bi";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:4001/explore");
  const data = await res.json();

  console.log(res, "res");

  return {
    props: { explore: data },
  };
};

const Explore = ({
  explore,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} ml="20px" mt="30px">
        {explore.map((item: any) => {
          return (
            <Stack key="explore" direction="column" w="220px">
              <Link href={`explore/` + item.id}>
                <Card w="220px" h="5px" mt="30px" bgColor={item.lineColor} />
                <Text pt="30px" fontSize="sm" color="gray.600">
                  {item.blogTitle}
                </Text>
                <Text fontSize="sm" fontWeight="bold" pt="20px" noOfLines={1}>
                  {item.heading}
                </Text>
                <Text fontSize="sm" fontWeight="bold" pb="20px">
                  {item.subHeading}
                </Text>
              </Link>
              <Card w="220px" h="220px" backgroundImage={item.image}>
                <Box w="40px" mt="30px" ml="20px">
                  <BiPlayCircle size="sm" color={item.playButtonColor} />
                </Box>

                <Text mt="80px" ml="20px" color="white" fontSize="18px">
                  {item.imageText}
                </Text>
              </Card>
            </Stack>
          );
        })}
      </Grid>
    </Box>
  );
};

Explore.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Explore;
