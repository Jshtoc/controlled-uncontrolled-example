import React from "react";

class UncontrolledComponent extends React.Component {
  inputRef = React.createRef();
  // 랜더할때 inputRef를 넣어놓고 필요할때 쓴다. 저장소라고 생각하면 된다.
  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값 (value) 를 꺼내서 전송한다.
    // const input = document.querySelector("#my-input");
    // console.log(input.value);

    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledComponent;
