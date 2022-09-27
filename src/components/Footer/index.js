import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Copyright, Sns } from "./styles";

const SNS_LIST = [
  { id: 1, name: "페이스북", href: "", icon: faFacebook },
  { id: 2, name: "유튜브", href: "", icon: faYoutube },
  { id: 3, name: "인스타그램", href: "", icon: faInstagram },
  { id: 4, name: "트위터", href: "", icon: faTwitter },
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
                <FontAwesomeIcon icon={icon} fontSize={"23px"} />
              </a>
            </li>
          );
        })}
      </Sns>
    </Container>
  );
};

export default Footer;
