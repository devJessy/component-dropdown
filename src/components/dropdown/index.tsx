import { useEffect, useRef, useState } from "react";
// import { Box, Input } from "components/base/initial";
import { Box } from "@material-ui/core";
// import {  NarrowIcon } from "components/icons";
import NarrowIcon from "components/icons/NarrowIcon";
import styled from "styled-components";
import { stringify } from "querystring";

interface DropdownProps {
  text?: any;
  icon?: any;
  contentAlign?: "right" | "left";
  [index: string]: any;
}
export const Dropdown: React.FC<DropdownProps> = ({ text, icon, contentAlign = "right", children, props }) => {
  const [isOpened, setIsOpened] = useState(false);
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
    <div style={{position : "relative", display : "inline-block"}}   ref={dropBox} {...props}>
      <Box
        
        height={"40px"}
        px={"10px"}
        fontWeight={["500"]}
        fontSize={["14px"]}
        lineHeight={["16px"]}
        style={{cursor : "pointer", background : "#323634", borderRadius : '8px'}}
        display={"flex"}
        alignItems={"center"}
        gridGap={"12px"}
        flexWrap={"nowrap"}
        whiteSpace={"nowrap"}
        color={"white"}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        {icon}
        {text || "???"}
        {/* <NarrowIcon dir={isOpened ? "up" : "down"} /> */}
        <NarrowIcon />
      </Box>
      {/* <Box visibility={isOpened ? "visible" : "hidden"} style={{opacity : isOpened ? "1" : "0", background : "darkgray"}} position={"absolute"} top={"110%"} right={contentAlign === "right" ? "0px" : "auto"} left={contentAlign === "left" ? "0px" : "auto"} px={"22px"} py={"12px"} border={"1px solid #333333"} borderRadius={"8px"} ref={dropPannel} display={"flex"} flexDirection={"column"} transition={"var(--transition)"} zIndex={3}> */}
      <div style={{visibility : isOpened ? "visible" : "hidden",opacity : isOpened ? "1" : "0", background : "#323634" , position : 'absolute', top : 'calc(100% - 10px)', right : contentAlign === "right" ? "0px" : "auto", left : contentAlign === "left" ? "0px" : "auto", padding : '12px 12px', display : 'flex' , flexDirection : "column", zIndex : 3, transition : "0.5s", color : "white", width : "100%", borderRadius : '8px'}}>
        {typeof children === "object" && <DropdownItem
                  onClick={() => {
                    setIsOpened(false);
                  }}
                  style={{
                      cursor : "pointer"
                  }}
                  whiteSpace={"nowrap"}
                >
                  {children}
                </DropdownItem>}
        {typeof children !== "object" && (Array.isArray(children)
          ? children?.map((each, index) => {
              return (
                <DropdownItem
                  key={index}
                  onClick={() => {
                    setIsOpened(false);
                  }}
                  style={{
                      cursor : "pointer"
                  }}
                  whiteSpace={"nowrap"}
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
const DropdownItem = styled(Box)`
  & > * {
    // padding: 5px;
  }
  & > *:hover {
    background: #8888;
  }
`;

interface DropdownItemsProps {
  text?: any;
}

export const DropdownItems : React.FC<DropdownItemsProps> = ({children}) => {
  return (
    <div style={{marginTop : '10px', padding: '5px', width : '100%', textAlign : 'center'}}>{children}</div>
  )
}