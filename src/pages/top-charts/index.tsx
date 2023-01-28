import Layout from "@/layouts/main";
import { Box, Card, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";

const Charts = () => {
  return (
    <Box
      pt="50px"
      pl={["20px", "30px", "30px", "30px", "30px"]}
      maxWidth={["96vw", "96vw", "95vw", "80vw", "83vw"]}
    >
      <Stack>
        <Heading size="md">Weekly Charts</Heading>

        <HStack gap="5" overflowX="scroll">
          {[
            {
              id: 1,
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              id: 2,
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              id: 3,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 4,
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              id: 5,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 6,
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              id: 7,
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              id: 8,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 9,
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              id: 10,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
          ].map((item) => {
            return (
              <Link key={item.id} href="/top-charts/top100Naija">
                <Stack direction="column" pt="20px">
                  <Card width="200px" height="200px" bgImage={item.chartImage}>
                    {/* <Box alignSelf="end" mr="20px" mt="160px">
                  <CiPlay1 size="30px" />
                </Box> */}
                  </Card>
                  <Text textAlign="left"> {item.chartTitle} </Text>
                </Stack>
              </Link>
            );
          })}
        </HStack>
      </Stack>

      <Stack mt="40px">
        <Heading size="md">Daily Charts</Heading>

        <HStack gap="5" overflowX="scroll">
          {[
            {
              id: 1,
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              id: 2,
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              id: 3,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 4,
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              id: 5,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 6,
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              id: 7,
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              id: 8,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 9,
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              id: 10,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
          ].map((item) => {
            return (
              <Link key={item.id} href="/top-charts/top100Naija">
                <Stack direction="column" pt="20px">
                  <Card width="200px" height="200px" bgImage={item.chartImage}>
                    {/* <Box alignSelf="end" mr="20px" mt="160px">
                  <CiPlay1 size="30px" />
                </Box> */}
                  </Card>
                  <Text textAlign="left"> {item.chartTitle} </Text>
                </Stack>
              </Link>
            );
          })}
        </HStack>
      </Stack>

      <Stack mt="40px" mb="60px">
        <Heading size="md">Monthly Charts</Heading>

        <HStack gap="5" overflowX="scroll">
          {[
            {
              id: 1,
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              id: 2,
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              id: 3,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 4,
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              id: 5,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 6,
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              id: 7,
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              id: 8,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              id: 9,
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              id: 10,
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
          ].map((item) => {
            return (
              <Link key={item.id} href="/top-charts/top100Naija">
                <Stack direction="column" pt="20px">
                  <Card width="200px" height="200px" bgImage={item.chartImage}>
                    {/* <Box alignSelf="end" mr="20px" mt="160px">
                  <CiPlay1 size="30px" />
                </Box> */}
                  </Card>
                  <Text textAlign="left"> {item.chartTitle} </Text>
                </Stack>
              </Link>
            );
          })}
        </HStack>
      </Stack>
    </Box>
  );
};

Charts.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Charts;
