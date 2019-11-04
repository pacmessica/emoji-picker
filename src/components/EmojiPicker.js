import React, { Component } from "react";
import List from "react-virtualized/dist/commonjs/List";
import { setEmoji } from "../redux/actions";
import { connect } from "react-redux";

class EmojiPicker extends Component {
  state = {
    rows: this.props.rows
  };

  render() {
    return (
      <div>
        <List
          width={220}
          height={220}
          rowCount={this.state.rows.length}
          rowHeight={30}
          rowRenderer={({ key, index, isScrolling, isVisible, style }) => {
            return (
              <div className="row" key={key} style={style}>
                {this.state.rows[index].type === "category" &&
                  this.state.rows[index].value}
                {this.state.rows[index].type === "emoji" &&
                  this.state.rows[index].value.map(emoji => {
                    return (
                      <span
                        className="emoji"
                        onClick={() => this.props.setEmoji(emoji)}
                      >
                        {emoji}
                      </span>
                    );
                  })}
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { setEmoji }
)(EmojiPicker);
