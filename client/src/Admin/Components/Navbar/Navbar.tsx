import { Box, Flex, Stack, Text, Center } from "@chakra-ui/react";
import { FaCog, FaHome, FaUsers } from "react-icons/fa";

const navItems = [
  {
    icon: FaHome,
    label: "Dashboard",
  },
  {
    icon: FaUsers,
    label: "Users",
  },
  {
    icon: FaCog,
    label: "Settings",
  },
];

const SideNavbar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      left={0}
      top={0}
      w="10%"
      h="100vh"
      bg="gray.800"
      color="white"
      overflow="hidden"
    >
      <Flex direction="column" h="full" align="center">
        <Box p="4">
          <Text fontSize="xl" fontWeight="bold">
            Admin
          </Text>
        </Box>
        <Stack spacing="10" p="3" mt="30%">
          {navItems.map((item) => (
            <Box key={item.label} color="white" as="a" href="#">
              <item.icon size="50%" />
            </Box>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default SideNavbar;
