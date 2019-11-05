import styled from "styled-components";

export const PickerContainer = styled("div")`
  margin-top: 12px;
  width: 300px; /* 8 emojis/row * 35px/emoji + 2*10px for list padding */
  height: 260px; /* list is 220px  + bottombar is 40px */
  box-shadow: 0 0px 6px rgba(32, 33, 36, 0.28);
  background-color: #eeeeee;
  color: #797980;
  border-radius: 10px;

  .row {
    text-align: left;
    line-height: 30px;
  }

  .list {
    padding: 10px 10px 0 10px;
  }

  .emoji {
    text-align: center;
    cursor: pointer;
    font-size: 25px;
    width: 35px;
    display: inline-block;
  }
`;

export const BottomBar = styled("div")`
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #ccc;

  .menu-category {
    display: inline-block;
    width: 35px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Arrow = styled("div")`
  position: relative;
  background: #eeeeee;

  &::after {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(238, 238, 238, 0);
    border-bottom-color: #eeeeee;
    border-width: 12px;
    margin-left: -12px;
  }

  /* TODO add styles for arrow in other positions */
`;
