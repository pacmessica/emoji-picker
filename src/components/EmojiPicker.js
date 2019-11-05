import React, { Component } from "react";
import List from "react-virtualized/dist/commonjs/List";
import { setEmoji } from "../redux/actions";
import { connect } from "react-redux";
import { BottomBar, PickerContainer, Arrow } from "./styles";
import { categories } from "./emojis.js";

class EmojiPicker extends Component {
  state = {
    categoryRowIndexes: {},
    scrollTop: 0
  };

  componentDidMount() {
    var categoryRowIndexes = {};
    this.props.rows.forEach((row, index) => {
      if (row.type === "category") {
        categoryRowIndexes[row.value] = index;
      }
    });

    this.setState({ categoryRowIndexes });
  }

  handleOnSelectEmoji = emoji => {
    this.props.setEmoji(emoji);
    this.props.onSelectEmoji();
  };

  handleOnSelectCategory = category => {
    this.setState({
      scrollTop: this.state.categoryRowIndexes[category] * 30 + 12 // rowIndex * rowHeight + top padding
    });
  };

  render() {
    const { rows } = this.props;
    return (
      <PickerContainer>
        <Arrow />
        <List
          className="list"
          width={300}
          height={220}
          rowCount={rows.length}
          rowHeight={30}
          scrollTop={this.state.scrollTop}
          rowRenderer={({ key, index, isScrolling, isVisible, style }) => {
            return (
              <div className="row" key={key} style={style}>
                {rows[index].type === "category" &&
                  rows[index].value.toUpperCase()}
                {rows[index].type === "emoji" &&
                  rows[index].value.map((emoji, colIndex) => {
                    return (
                      <div
                        key={`${index}-${colIndex}`}
                        className="emoji"
                        onClick={() => this.handleOnSelectEmoji(emoji)}
                      >
                        {emoji}
                      </div>
                    );
                  })}
              </div>
            );
          }}
        />
        <BottomBar>
          {Object.keys(categories).map(catName => {
            return (
              <div
                key={catName}
                className="menu-category"
                onClick={() => this.handleOnSelectCategory(catName)}
              >
                {categories[catName]}
              </div>
            );
          })}
        </BottomBar>
      </PickerContainer>
    );
  }
}

export default connect(
  null,
  { setEmoji }
)(EmojiPicker);
