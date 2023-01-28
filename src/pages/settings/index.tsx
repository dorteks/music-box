import Layout from "@/layouts/main";
import {
  Box,
  Text,
  Stack,
  HStack,
  Select,
  Switch,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { ReactElement } from "react";

const Settings = () => {
  return (
    <Box
      mt="20px"
      mb="100px"
      width={["100vw", "100vw", "100vw", "83vw", "83vw"]}
      pl={["10px", "30px", "40px", "50px", "60px"]}
      pr={["10px", "30px", "40px", "50px", "60px"]}
    >
      <Stack>
        {/* starts here */}
        <Heading size="lg">Settings</Heading>
        <Stack pt="30px">
          <Heading size="md">Language</Heading>
          <HStack justify="space-between">
            <Text fontSize="15px">
              Choose language - Changes will be applied after restarting the app
            </Text>
            <Select
              width="200px"
              ml="20px"
              fontSize="15px"
              placeholder="English  (English)"
            >
              <option value="lang1">Polski (Polish)</option>
              <option value="lang2">Francais (French)</option>
              <option value="lang3">Deutsch (German)</option>
            </Select>
          </HStack>
        </Stack>

        {[
          {
            id: 1,
            title: "Stream via Wi-Fi only ",
            subtitle:
              "To reduce carrier data charges, do not stream music over mobile networks",
          },
          {
            id: 2,
            title: "Limit mobile data usage ",
            subtitle: "Only stream HD video on Wi-Fi",
          },
          {
            id: 3,
            title: "Restricted mode ",
            subtitle:
              "Restricted mode hides songs and videos that may contain inappropriate content flagged by users and other signals. No filter is 100% accurate, but it should help you avoid most inappropriate content",
          },
          {
            id: 4,
            title: "Recommendation notification",
            subtitle:
              "Notify me of music I might like based on what I listen to",
          },
          {
            id: 5,
            title: "Playlist update notification",
            subtitle: "Notify me when playlists I like are updated",
          },
          {
            id: 6,
            title: "Product update notification",
            subtitle:
              "Notify me about new features, product news, and tips for getting started on Music-box",
          },
        ].map((item) => {
          return (
            <Stack key={item.id} pt="30px">
              <Heading size="sm">{item.title}</Heading>
              <HStack justify="space-between">
                <Text width="600px" fontSize="15px">
                  {item.subtitle}
                </Text>
                <Switch />
              </HStack>
              <Divider pt="20px" />
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

Settings.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Settings;
