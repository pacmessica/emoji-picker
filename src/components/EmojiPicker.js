import React, { Component } from "react";
import List from "react-virtualized/dist/commonjs/List";
import { setEmoji } from "../redux/actions";
import { connect } from "react-redux";
import { PickerContainer, Arrow } from "./styles";

class EmojiPicker extends Component {
  state = {
    rows: this.props.rows
  };

  handleOnClick = emoji => {
    this.props.setEmoji(emoji);
    this.props.onSelectEmoji();
  };

  render() {
    return (
      <PickerContainer>
        <Arrow />
        <List
          className="list"
          width={280}
          height={220}
          rowCount={this.state.rows.length}
          rowHeight={30}
          rowRenderer={({ key, index, isScrolling, isVisible, style }) => {
            return (
              <div className="row" key={key} style={style}>
                {this.state.rows[index].type === "category" &&
                  this.state.rows[index].value.toUpperCase()}
                {this.state.rows[index].type === "emoji" &&
                  this.state.rows[index].value.map(emoji => {
                    return (
                      <div
                        className="emoji"
                        onClick={() => this.handleOnClick(emoji)}
                      >
                        {emoji}
                      </div>
                    );
                  })}
              </div>
            );
          }}
        />
      </PickerContainer>
    );
  }
}

export default connect(
  null,
  { setEmoji }
)(EmojiPicker);
