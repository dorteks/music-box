import Layout from "@/layouts/main";
import { Box, Card, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";

const Charts = () => {
  return (
    <Box
      pt="50px"
      pl={["20px", "30px", "30px", "30px", "30px"]}
      maxWidth={["96vw", "96vw", "95vw", "80vw", "90vw"]}
    >
      <Stack>
        <Heading size="md">Weekly Charts</Heading>

        <HStack gap="5" overflowX="scroll">
          {[
            {
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
          ].map((item) => {
            return (
              <Link key="chartTitle" href="/top-charts/top100Naija">
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
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
          ].map((item) => {
            return (
              <Link key="chartTitle" href="/top-charts/top100Naija">
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
              chartImage: "/images/top100naija.jpeg",
              chartTitle: "Top 100 Nigeria",
            },
            {
              chartImage: "/images/top100africa.jpeg",
              chartTitle: "Top 100 Africa",
            },
            {
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
            {
              chartImage: "/images/top100international.jpeg",
              chartTitle: "Top 100 International",
            },
            {
              chartImage: "/images/topGospel.jpeg",
              chartTitle: "Top 100 Gospel",
            },
          ].map((item) => {
            return (
              <Link key="chartTitle" href="/top-charts/top100Naija">
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
