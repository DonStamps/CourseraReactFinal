import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Don!";
const bio1 = "Thank you for visiting my website.";
const bio2 =
  "A little bit about me. I am a frontend developer skilled in HTML, CSS, and React with 20+ years experience across many aspects of informaton technology from software development to system architecture, security, and site reliability.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const avatarUrl = "https://i.pravatar.cc/150?img=69";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" src={avatarUrl} />
      <Heading size="lg">{greeting}</Heading>
      <Heading size="md" fontWeight="normal" maxWidth={80}>
        {bio1}
      </Heading>
      <Heading size="md" fontWeight="normal" maxWidth={80}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
