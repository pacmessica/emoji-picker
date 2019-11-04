import React, { Component } from "react";
import { connect } from "react-redux";
import EmojiPicker from "./EmojiPicker";
import { Manager, Reference, Popper } from "react-popper";

class EmojiButton extends Component {
  state = {
    popperIsOpen: false,
    placement: "bottom"
  };

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
                <EmojiPicker />
              </div>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
}

export default connect()(EmojiButton);
