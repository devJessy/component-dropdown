import { useEffect, useRef, useState } from "react";
import NarrowIcon from "components/icons/NarrowIcon";
import styled from "styled-components";
import './dropdown.scss'

interface DropdownProps {
  text?: any;
  icon?: any;
  contentAlign?: "right" | "left";
  [index: string]: any;
}
export const Dropdown: React.FC<DropdownProps> = ({ text, icon, contentAlign = "right", children, props }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [valueText, setValueText] = useState(text || "???");
  const dropBox = useRef<any>();

  const dropPannel = useRef<any>();
  useEffect(() => {
    const handle = (event: any) => {
      if (dropBox?.current && !dropBox.current.contains(event.target)) {
        setIsOpened(false);
      }
    };
    window.addEventListener("click", handle);
    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);
  return (
    <div className="drop-down" ref={dropBox} {...props}>
      <div className="drop-down-container"
          onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        {icon}
        {valueText}
        <NarrowIcon />
      </div>
      <div className="drop-down-sub" style={{visibility : isOpened ? "visible" : "hidden",opacity : isOpened ? "1" : "0",  right : contentAlign === "right" ? "0px" : "auto", left : contentAlign === "left" ? "0px" : "auto"}}>
        {(Array.isArray(children)
          ? children?.map((each : any, index) => {
              return (
                <DropdownItem
                  key={index}
                  onClick={() => {
                    if(each?.props.text){
                      setValueText(each?.props.text)
                    }
                    setIsOpened(false);
                  }}
                >
                  {each}
                </DropdownItem>
              );
            })
          : children)}
      </div>
    </div>
  );
};
const DropdownItem = styled.div`
  cursor : pointer;
  whiteSpace: nowrap;
  & > * {
    padding: 5px;
  }
  & > *:hover {
    background: #8888;
  }
`;

interface DropdownItemsProps {
  text?: string;
}

export const DropdownItems : React.FC<DropdownItemsProps> = ({text, children}) => {
  return (
    <div className="drop-down-items">{text}</div>
  )
}