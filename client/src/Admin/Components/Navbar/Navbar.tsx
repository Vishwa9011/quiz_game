import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import "./Navbar.css";
import { Divide } from "hamburger-react";
// import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  const [admin, setAdmin] = useState({});
  // const navigate = useNavigate();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Admin Menu
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dashboard</DrawerHeader>
          <DrawerBody>
            <div id="admin_menu">
              <h4>Home</h4>
              <h4>Users</h4>
              <h4>Add Question</h4>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
