import styled from "styled-components";

export const PickerContainer = styled("div")`
  margin-top: 12px;
  width: 280px;
  height: 220px; /* list is 220px  */
  box-shadow: 0 0px 6px rgba(32, 33, 36, 0.28);
  background-color: #eeeeee;
  color: #797980;
  border-radius: 10px;
  padding: 10px;

  .row {
    text-align: left;
    line-height: 30px;
  }

  .emoji {
    text-align: center;
    cursor: pointer;
    font-size: 25px;
    width: 35px;
    display: inline-block;
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
    border-width: 22px;
    margin-left: -22px;
  }

  /* TODO add styles for arrow in other positions */
`;
