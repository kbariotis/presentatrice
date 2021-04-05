import { useEffect, useRef, useState, useContext } from "react";
import { ReactComponent as H1Icon } from "bootstrap-icons/icons/type-h1.svg";
import { ReactComponent as ParagraphIcon } from "bootstrap-icons/icons/text-paragraph.svg";
import { ReactComponent as ListUlIcon } from "bootstrap-icons/icons/list-ul.svg";
import { ReactComponent as ListOlIcon } from "bootstrap-icons/icons/list-ol.svg";
import { ReactComponent as BlockquoteIcon } from "bootstrap-icons/icons/blockquote-left.svg";
import { ReactComponent as FooterIcon } from "bootstrap-icons/icons/align-bottom.svg";

import { SlidesContext } from "../context/slides";
import { DeckContext } from "../context/deck";

import StyledButton from "./menu/StyledButton";
import Image from "./menu/Image";

function Elements() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { addElement } = useContext(SlidesContext);
  const { currentSlide } = useContext(DeckContext);

  const [headingSelected, setHeadingSelected] = useState(false);
  const [listSelected, setListSelected] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setHeadingSelected(false);
        setListSelected(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (headingSelected) {
    return (
      <div ref={ref}>
        <StyledButton
          title="Heading 1"
          onClick={() => {
            setHeadingSelected(false);
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 1,
              value: "Heading 1",
            });
          }}
        >
          H1
        </StyledButton>
        <StyledButton
          title="Heading 2"
          onClick={() => {
            setHeadingSelected(false);
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 2,
              value: "Heading 2",
            });
          }}
        >
          H2
        </StyledButton>
        <StyledButton
          title="Heading 3"
          onClick={() => {
            setHeadingSelected(false);
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 3,
              value: "Heading 3",
            });
          }}
        >
          H3
        </StyledButton>
        <StyledButton
          title="Heading 4"
          onClick={() => {
            setHeadingSelected(false);
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 4,
              value: "Heading 4",
            });
          }}
        >
          H4
        </StyledButton>
        <StyledButton
          title="Heading 5"
          onClick={() => {
            setHeadingSelected(false);
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 5,
              value: "Heading 5",
            });
          }}
        >
          H5
        </StyledButton>
        <StyledButton
          title="Heading 6"
          onClick={() => {
            setHeadingSelected(false);
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "heading",
              level: 6,
              value: "Heading 6",
            });
          }}
        >
          H6
        </StyledButton>
      </div>
    );
  }

  if (listSelected) {
    return (
      <div ref={ref}>
        <StyledButton
          title="List"
          onClick={() => {
            setListSelected(false);
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "list",
              value: "<li>Point one to make</li>",
              listType: "unordered",
            });
          }}
        >
          <ListUlIcon />
        </StyledButton>
        <StyledButton
          title="List"
          onClick={() => {
            setListSelected(false);
            addElement(currentSlide, {
              id: new Date().getTime(),
              type: "list",
              value: "<li>Point one to make</li>",
              listType: "ordered",
            });
          }}
        >
          <ListOlIcon />
        </StyledButton>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <StyledButton
        title="Heading"
        onClick={(event) => {
          event.stopPropagation();
          setHeadingSelected(true);
        }}
      >
        <H1Icon />
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
        <ParagraphIcon />
      </StyledButton>
      <Image />
      <StyledButton
        title="List"
        onClick={(event) => {
          event.stopPropagation();
          setListSelected(true);
        }}
      >
        <ListUlIcon />
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
        <BlockquoteIcon />
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
        <FooterIcon />
      </StyledButton>
    </div>
  );
}

export default Elements;
