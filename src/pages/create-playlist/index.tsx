import {
  Box,
  Text,
  Input,
  Modal,
  Radio,
  Stack,
  Button,
  HStack,
  VStack,
  Divider,
  ModalBody,
  RadioGroup,
  FormControl,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Link from "next/link";
import { RiPlayList2Fill } from "react-icons/ri";
import Layout from "@/layouts/main";

const CreatePlaylist = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);

  const [value, setValue] = React.useState("1");

  return (
    <Box height="100vh" display="flex" justifyContent="center">
      <VStack alignContent="center" justify="center">
        <RiPlayList2Fill size="70px" />
        <Text pt="50px" pb="20px">
          Create your playlists here
        </Text>

        <Button onClick={onOpen}>Create Playlist </Button>
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={finalRef}
          size={["sm", "sm", "md", "md", "md"]}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Playlist</ModalHeader>
            <ModalCloseButton size="lg" />
            <Divider />

            <ModalBody mt="20px">
              <FormControl>
                <Input
                  height="50px"
                  ref={initialRef}
                  placeholder="Enter Title"
                />
              </FormControl>

              <HStack mt="30px">
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="row" pl="20px" gap={10}>
                    <Radio value="1">Add to private </Radio>
                    <Radio value="2">Add to public</Radio>
                  </Stack>
                </RadioGroup>
              </HStack>
            </ModalBody>

            <ModalFooter mt="40px" mb="30px" justifyContent="center">
              <Link href="/playlists">
                <Button colorScheme="blue">Create</Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};

CreatePlaylist.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default CreatePlaylist;
