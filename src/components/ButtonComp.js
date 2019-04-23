import React from 'react';

class ButtonComp extends React.Component {
  state = {
    buttonCount: null
  };

  componentDidMount() {
    //
    this.setState({
      buttonCount: this.props.count
    });
  }

  componentDidUpdate(prevProps) {
    //
    if (prevProps.count !== this.props.count) {
      //
      this.setState({
        buttonCount: this.props.count
      });
    }
  }

  render() {
    //
    // props.updateCount <== the actual property name "updateCount" is a string from line 31
    // the value held by props.updateCount is the function defined on line 18
    return (
      <div>
        <button
          onClick={e => this.props.updateCount(e, this.state.buttonCount + 1)}
        >
          {/* Increment  */}
          Hit +
        </button>
        
        <button
          onClick={e => this.props.updateCount(e, this.state.buttonCount - 1)}
        >
          {/* Decrement  */}
          Foul -
        </button>

        <button
          onClick={e => this.props.updateCount(e, this.state.buttonCount - 1)}
        >
          {/* Decrement  */}
          Strike -
        </button>

        <button
          onClick={e => this.props.updateCount(e, this.state.buttonCount - 1)}
        >
          {/* Decrement  */}
          Reset
        </button>

      </div>
    );
  }
}

export default ButtonComp;
