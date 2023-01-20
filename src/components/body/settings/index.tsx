import {
  Box,
  Text,
  Stack,
  HStack,
  Select,
  Switch,
  Heading,
} from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box width="85vw" pl="10vw" pr="10vw">
      <Stack bgColor="blue.50">
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
            title: "Stream via Wi-Fi only ",
            subtitle:
              "To reduce carrier data charges, do not stream music over mobile networks",
          },
          {
            title: "Limit mobile data usage ",
            subtitle: "Only stream HD video on Wi-Fi",
          },
          {
            title: "Restricted mode ",
            subtitle:
              "Restricted mode hides songs and videos that may contain inappropriate content flagged by users and other signals. No filter is 100% accurate, but it should help you avoid most inappropriate content",
          },
          {
            title: "Recommendation notification",
            subtitle:
              "Notify me of music I might like based on what I listen to",
          },
          {
            title: "Playlist update notification",
            subtitle: "Notify me when playlists I like are updated",
          },
          {
            title: "Product update notification",
            subtitle:
              "Notify me about new features, product news, and tips for getting started on Music-box",
          },
        ].map((item) => {
          return (
            <Stack pt="30px">
              <Heading size="sm">{item.title}</Heading>
              <HStack justify="space-between">
                <Text width="600px" fontSize="15px">
                  {item.subtitle}
                </Text>
                <Switch pr="90px" />
              </HStack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Settings;
