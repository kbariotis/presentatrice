import styled from "styled-components";
import { useRef, useContext } from "react";
import { FileSystemHandle } from "browser-fs-access";

import { SlidesContext } from "../context/slides";
import { DeckContext } from "../context/deck";

import StyledButton from "./menu/StyledButton";
import Image from "./menu/Image";
import Save from "./menu/Save";
import Load from "./menu/Load";
import { ReactComponent as GitHubIcon } from "../icons/github.svg";
import { ReactComponent as HelpIcon } from "../icons/help.svg";

const Container = styled.div`
  display: flex;
  flex-orientation: column;
  align-items: center;
  justify-content: center;
  padding: 0.1em 0.5em;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
`;
const Right = styled.div`
  text-align: right;
  flex: 1;
`;

function Elements({ togglePresent }: { togglePresent: () => void }) {
  const fileHandle = useRef<FileSystemHandle | null>(null);

  const { addElement } = useContext(SlidesContext);
  const { currentSlide } = useContext(DeckContext);

  return (
    <Container>
      <Left>
        <StyledButton
          onClick={() => {
            togglePresent();
          }}
          title="Present"
        >
          Present
        </StyledButton>
        <Save ref={fileHandle} />
        <Load ref={fileHandle} />
      </Left>
      <Center>
        <StyledButton
          title="Heading 1"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 1,
              value: "Heading 1",
            })
          }
        >
          H1
        </StyledButton>
        <StyledButton
          title="Heading 2"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 2,
              value: "Heading 2",
            })
          }
        >
          H2
        </StyledButton>
        <StyledButton
          title="Heading 3"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 3,
              value: "Heading 3",
            })
          }
        >
          H3
        </StyledButton>
        <StyledButton
          title="Heading 4"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 4,
              value: "Heading 4",
            })
          }
        >
          H4
        </StyledButton>
        <StyledButton
          title="Heading 5"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 5,
              value: "Heading 5",
            })
          }
        >
          H5
        </StyledButton>
        <StyledButton
          title="Heading 6"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 6,
              value: "Heading 6",
            })
          }
        >
          H6
        </StyledButton>
        <StyledButton
          title="Paragraph"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "paragraph",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            })
          }
        >
          P
        </StyledButton>
        <Image />
        <StyledButton
          title="List"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "list",
              value: "<li>Point one to make</li>",
            })
          }
        >
          Li
        </StyledButton>
        <StyledButton
          title="Quote"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "blockquote",
              value: "A wise man once said...",
            })
          }
        >
          Q
        </StyledButton>
        <StyledButton
          title="Footer item"
          onClick={() =>
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "footer",
              value: "Made with Presentador",
            })
          }
        >
          F
        </StyledButton>
      </Center>
      <Right>
        <a href="https://github.com/kbariotis/presentador.app" target="blank">
          <GitHubIcon
            style={{ color: "#aaa", width: "32px", height: "32px" }}
          />
        </a>
        <a
          href="https://github.com/kbariotis/presentador.app/issues"
          target="blank"
        >
          <HelpIcon style={{ color: "#aaa", width: "32px", height: "32px" }} />
        </a>
      </Right>
    </Container>
  );
}

export default Elements;
