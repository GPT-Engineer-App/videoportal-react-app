import { Box, Flex, Heading, Image, Text, VStack, Button, IconButton, useColorMode, useColorModeValue, Container, SimpleGrid } from "@chakra-ui/react";
import { FaSun, FaMoon, FaPlayCircle } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Explore the Ocean",
    description: "Dive into the depths of the ocean and discover its wonders.",
    thumbnail: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHZpZGVvJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMzg3NTk3NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Mountain Adventure",
    description: "Climb the highest peaks and experience breathtaking views.",
    thumbnail: "https://images.unsplash.com/photo-1576801488695-2e4d7a14b8b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpZGVvJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMzg3NTk3Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Forest Retreat",
    description: "Unwind in the serene atmosphere of a lush forest.",
    thumbnail: "https://images.unsplash.com/photo-1512348685137-98ad6f766061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB2aWRlbyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTM4NzU5NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl" color={color}>
          Video Portal
        </Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} aria-label="Toggle color mode" />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {videos.map((video) => (
          <Box key={video.id} bg={bgColor} p={5} borderRadius="lg" shadow="md">
            <Image src={video.thumbnail} borderRadius="md" />
            <VStack align="stretch" mt={4}>
              <Heading as="h3" size="md">
                {video.title}
              </Heading>
              <Text fontSize="sm">{video.description}</Text>
              <Button leftIcon={<FaPlayCircle />} colorScheme="teal" variant="solid">
                Watch Now
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
