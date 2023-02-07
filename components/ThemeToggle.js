import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import  {BsFillSunFill , BsFillMoonFill} from "react-icons/bs"

const ToggleButton = styled.button`
  --toggle-width: 40px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
//   border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
//   background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    // outline: none;
  }
  &:hover {
    // box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
`;



const ThemeToggle = () => {

    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    const ToggleThumb = styled.span`
    //...
    transition: transform 0.25s ease-in-out;
    transform: ${(p) =>
      p.activeTheme === "dark"
        ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
        : "none"};
  `;

    useEffect(() => {
    document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

  return (
    <>
        <ToggleButton className="flex justify-center items-center bg-white rounded-full toggle_container" type="button" onClick={() => setActiveTheme(inactiveTheme)}>
        <ToggleThumb activeTheme={activeTheme} className="themeChangeIcon" />
        {
          activeTheme=== "light" ?<span className="text-black"><BsFillMoonFill className="themeChangeIcon" /></span>:<span className="text-black"><BsFillSunFill className="themeChangeIcon" /></span>
        }

        <style>
          {`
          .toggle_container{
            justify-content: center !important;
            transition: all 0.25s ease-in-out;
          }
          .themeChangeIcon{
            transition: all 0.25s linear ;
          }

          `}
        </style>
        </ToggleButton>
    </>
  );
};

export default ThemeToggle;