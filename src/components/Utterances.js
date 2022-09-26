import React from "react";

class Utterances extends React.Component {
  constructor(props) {
    super(props);

    this.commentsEl = React.createRef();
    this.state = { status: "pending" };
  }

  componentDidMount() {
    const scriptEl = document.createElement("script");
    scriptEl.onload = () => this.setState({ status: "success" });
    scriptEl.onerror = () => this.setState({ status: "failed" });
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "callmejeje/oreum-comments");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");
    this.commentsEl.current.appendChild(scriptEl);
    console.log(scriptEl);
    console.log(this.commentsEl);
  }

  render() {
    const { status } = this.state;

    return (
      <div className="comments-wrapper">
        {status === "failed" && <div>Error. Please try again.</div>}
        {status === "pending" && <div>Loading script...</div>}
        <div ref={this.commentsEl} />
      </div>
    );
  }
}

export default Utterances;
