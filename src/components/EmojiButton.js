import React, { Component } from "react";
import { connect } from "react-redux";
import EmojiPicker from "./EmojiPicker";
import { Manager, Reference, Popper } from "react-popper";
import { emojis } from "./emojis.js";

class EmojiButton extends Component {
  state = {
    popperIsOpen: false,
    placement: "bottom",
    pickerRows: []
  };

  componentDidMount() {
    let pickerRows = [];
    Object.keys(emojis).forEach(function(key) {
      pickerRows.push({ value: key, type: "category" });

      let rowEmojis = [];
      emojis[key].forEach(emoji => {
        rowEmojis.push(emoji);
        if (rowEmojis.length === 8) {
          pickerRows.push({ value: rowEmojis, type: "emoji" });
          rowEmojis = [];
        }
      });
    });
    this.setState({ pickerRows });
  }

  togglePopper = () => {
    this.setState(prevState => ({
      popperIsOpen: !prevState.popperIsOpen
    }));
  };

  render() {
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <div className="emoji-button" ref={ref}>
              <button type="button" onClick={() => this.togglePopper()}>
                CLICK ME
              </button>
            </div>
          )}
        </Reference>
        {this.state.popperIsOpen && (
          <Popper placement={this.state.placement}>
            {({ ref, style, placement, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                <EmojiPicker rows={this.state.pickerRows} />
              </div>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
}

export default connect()(EmojiButton);
