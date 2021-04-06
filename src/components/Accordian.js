import React, { Component } from "react";
import PropTypes from "prop-types";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
    this.onClick = this.onClick.bind(this);
    this.inputElement = React.createRef();
  }

  // componentDidMount() {
  //   this.inputElement.current.focus();
  // }

  onClick() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }
  render() {
    const { heading, children } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div className="Accrodian" onClick={this.onClick}>
        {" "}
        {heading}
        {!isCollapsed && <div className="Children">{children}</div>}
      </div>
    );
  }
}

Accordian.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Accordian;
