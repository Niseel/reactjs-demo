import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SongItemList.css";

class SongItemList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { order, title, singer, viewCount } = this.props;
    debugger;
    let singerName = singer.join(", ");

    return (
      <div className="songItem">
        <div className="order-song">{order}</div>
        <div className="song-info">
          <div className="title-name">{title}</div>
          <div className="singer-name">{singerName}</div>
        </div>
        <div className="viewcount">{viewCount}</div>
      </div>
    );
  }
}

SongItemList.defaultProps = {
  viewCount: 0,
};
SongItemList.protoTypes = {
  order: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  singer: PropTypes.array.isRequired,
  viewCount: PropTypes.number,
};
export default SongItemList;
