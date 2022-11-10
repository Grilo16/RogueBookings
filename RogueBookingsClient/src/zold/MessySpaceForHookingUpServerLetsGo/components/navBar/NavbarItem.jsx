import { useContext, useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from '@react-spring/web'
import { HolderContext } from "../../MasterContainer";
import {ReactComponent as OpenTab} from "../../svgsRaw/OpenTab.svg";
import paths from "./paths";




const NavLi = styled.li`
position: absolute;
top: ${(props)=>(props.position)}px;
margin-top: -1%;
min-width : 15.2vw;
max-width : 15.2vw;
z-index: ${(props)=>(props.selected ? props.maxIndex + 1 :props.zIndex)};
`


const LiDiv = styled.div`
display: flex;
margin-top: -14.2vh;
margin-left: 2vw;
`


const LiText = styled.h4`
position: relative;
color: white;
width: 100%;
height: 7vh;
font-size: 1vw;
margin-left: 1vw;
z-index: ${(props) => props.id + props.maxIndex}

`

const NavbarItem = ({item, zIndex, maxIndex, position, id}) => {

  const {state, dispatch} = useContext(HolderContext)

const [color, setColor] = useState("magenta")
const [rightCorners, setRightCorners] = useState("30%")
const [selected, setSelected] = useState(0)
const [zIndexState, setZIndexState] = useState(zIndex)



const handleClick = () => { 
  dispatch({type: "SetSelectedTab", tabSelected: id})
  dispatch({type: "SetPageColor", color: item.fill})
  dispatch({type: "SetPageTitle", title : item.name})
};  



const animatedProps = useSpring({
  d: state.selectedTab === id 
  ? paths.openTab() 
  : state.selectedTab - 1 === id
  ? paths.specialClosedTab()
  : paths.normalClosedTab()
})


    return (
        <NavLi  zIndex={zIndex} maxIndex={maxIndex} fill={item.fill} position={position} selected={selected}>
            <svg viewBox="0 0 306 231" >
            <animated.path  d={animatedProps.d} fill={item.fill}/>
            </svg>
            <LiDiv>
              <img src="https://via.placeholder.com/69" alt="" style={{height: "69px", borderRadius: "50%"}} />

            <LiText onClick={handleClick} maxIndex={maxIndex} id={id} zIndex={zIndex} >
              {item.name}
            </LiText>
            </LiDiv>
        </NavLi>
            
    )
};

export default NavbarItem