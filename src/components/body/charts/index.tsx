import { Box, Card, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const Charts = () => {
  return (
    <Box pt="20px" pl="20px">
      <Stack>
        <Heading size="md">Weekly Charts</Heading>

        <HStack gap="5">
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
              <Stack direction="column" pt="20px">
                <Card width="200px" height="200px" bgImage={item.chartImage}>
                  {/* <Box alignSelf="end" mr="20px" mt="160px">
                  <CiPlay1 size="30px" />
                </Box> */}
                </Card>
                <Text textAlign="left"> {item.chartTitle} </Text>
              </Stack>
            );
          })}
        </HStack>
      </Stack>

      <Stack mt="40px">
        <Heading size="md">Daily Charts</Heading>

        <HStack gap="5">
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
              <Stack direction="column" pt="20px">
                <Card width="200px" height="200px" bgImage={item.chartImage}>
                  {/* <Box alignSelf="end" mr="20px" mt="160px">
                  <CiPlay1 size="30px" />
                </Box> */}
                </Card>
                <Text textAlign="left"> {item.chartTitle} </Text>
              </Stack>
            );
          })}
        </HStack>
      </Stack>

      <Stack mt="40px">
        <Heading size="md">Monthly Charts</Heading>

        <HStack gap="5">
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
              <Stack direction="column" pt="20px">
                <Card width="200px" height="200px" bgImage={item.chartImage}>
                  {/* <Box alignSelf="end" mr="20px" mt="160px">
                  <CiPlay1 size="30px" />
                </Box> */}
                </Card>
                <Text textAlign="left"> {item.chartTitle} </Text>
              </Stack>
            );
          })}
        </HStack>
      </Stack>
    </Box>
  );
};

export default Charts;
