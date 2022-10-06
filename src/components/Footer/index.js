import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faReadme,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Copyright, Sns } from "./styles";

const { GATSBY_GIT_HUB, GATSBY_NOTION, GATSBY_FIGMA } = {
  GATSBY_GIT_HUB: "https://github.com/headring/oreum-blog-gatsby",
  GATSBY_NOTION:
    "https://pebble-thrush-93f.notion.site/160a803753ae4e41865b195bec8af3ad",
  GATSBY_FIGMA:
    "https://www.figma.com/file/h9cANtcy71kGmCGPt4YWc1/TS-blog-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=1%3A4",
};

const SNS_LIST = [
  {
    id: 1,
    name: "깃허브",
    href: `${GATSBY_GIT_HUB}`,
    icon: faGithub,
  },
  {
    id: 3,
    name: "노션",
    href: `${GATSBY_NOTION}`,
    icon: faReadme,
  },
  {
    id: 4,
    name: "피그마",
    href: `${GATSBY_FIGMA}`,
    icon: faFigma,
  },
  { id: 2, name: "유튜브", href: "", icon: faYoutube },
];

const Footer = () => {
  return (
    <Container>
      <Copyright>Copyright 2022. Team Oreum all rights reserved.</Copyright>
      <Sns>
        {SNS_LIST.map((sns) => {
          const { id, name, href, icon } = sns;
          return (
            <li key={id}>
              <a href={href} target="_blank" alt={name}>
                <FontAwesomeIcon icon={icon} fontSize={"22px"} />
              </a>
            </li>
          );
        })}
      </Sns>
    </Container>
  );
};

export default Footer;
