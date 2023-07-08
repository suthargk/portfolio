import { styled } from "@stitches/react";
import { darkTheme } from "../../../stitches.config";
import ChevronArrow from "../../assets/icons/ChevronArrow";
import CustomLink from "../common/CustomLink";

const WhatIUses = styled("section", {
  backgroundColor: "$blue2",
  padding: "50px 0",

  [`.${darkTheme} &`]: {
    backgroundColor: "$indigoDark1",
  },
});

const WhatIUsesContainer = styled("div", {
  width: "60%",
  margin: "0 auto",

  "@lg": {
    width: "80%",
  },
});

const Title = styled("li", {
  listStyle: "none",
  fontSize: "16px",
  fontWeight: 500,
});

const HeadingSecondary = styled("h2", {});

const Wrapper = styled("div", {
  // display: "flex",
});

const Item = styled("li", {
  listStyle: "none",
  color: "$indigo9",

  "&:not(:last-child)": {
    marginBottom: "10px",
  },
});

const EmptySection = () => {
  return (
    <WhatIUses>
      <WhatIUsesContainer>
        <HeadingSecondary>Things I use</HeadingSecondary>

        <Wrapper>
          <Title>
            Workstation
            <ul>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <CustomLink
                  href="https://www.apple.com/in/shop/buy-mac/macbook-air/13-inch-m1"
                  target="_blank"
                >
                  Macbook Air M1
                </CustomLink>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <CustomLink
                  href="https://www.apple.com/in/shop/product/MK2E3ZM/A/magic-mouse-white-multi-touch-surface"
                  target="_blank"
                >
                  Apple Magic Mouse
                </CustomLink>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <CustomLink
                  href="https://www.sony.co.in/electronics/headband-headphones/wh-1000xm4"
                  target="_blank"
                >
                  Sony 1000xm4 headphone
                </CustomLink>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <CustomLink
                  href="https://www.apple.com/in/shop/product/MME73HN/A/airpods-3rd-generation-with-magsafe-charging-case"
                  target="_blank"
                >
                  AirPods (3rd generation)
                </CustomLink>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <CustomLink
                  href="https://www.amazon.in/Monarch-Adjustable-Electric-Ergonomic-Sit-Stand/dp/B094RD5M2W"
                  target="_blank"
                >
                  Monarch Height Adjustable Desk
                </CustomLink>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <CustomLink
                  target="_blank"
                  href="https://www.amazon.in/SIHOO-Ergonomic-Adjustable-Armrests-Skin-Friendly/dp/B07GN4H96T"
                >
                  SIHOO M57 Ergonomic Office Chair
                </CustomLink>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <CustomLink
                  href="https://www.playstation.com/en-in/ps4/"
                  target="_blank"
                >
                  PS4 △○×□
                </CustomLink>
              </Item>
            </ul>
          </Title>

          <Title>
            Tech
            <ul>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>React</span>
                <span>
                  The most widely used frontend framework in the world
                </span>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>Redux</span>
                <span>
                  A sophisticated state management container for javascript
                  apps.
                </span>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>Prettier</span>
                <span>I can't imagine life without it.</span>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>TailwindCSS</span>
                <span>
                  A great way to keep my styling consistent and stay productive.
                </span>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>Stitches</span>
                <span>
                  Stitches has a fully-typed API, to minimize the learning curve
                </span>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>Radix UI</span>
                <span>
                  Unstyled, accessible components for building high‑quality
                  design systems and web apps in React.
                </span>
              </Item>
            </ul>
          </Title>

          <Title>
            Editor
            <ul>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>Visual Studio Code</span>
                <span></span>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>Material Theme Ocean High Contrast</span>
              </Item>
              <Item>
                <ChevronArrow strokeWidth={4} />
                <span>Material Theme Icons</span>
              </Item>
            </ul>
          </Title>
        </Wrapper>
      </WhatIUsesContainer>
    </WhatIUses>
  );
};

export default EmptySection;
