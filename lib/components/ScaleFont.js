import React from "react";
import "./ScaleFont.css";

function isTextElement(child) {
  if (child.type) {
    if (
      child.type === "h1" ||
      child.type === "h2" ||
      child.type === "h3" ||
      child.type === "h4" ||
      child.type === "h5" ||
      child.type === "h6" ||
      child.type === "p"
      //   child.type === "small"
    ) {
      return true;
    }
  }
  return false;
}
class ScaleFont extends React.Component {
  constructor(props) {
    super(props);

    this.getAllTextElements = this.getAllTextElements.bind(this);
    this.parseChildrenToArray = this.parseChildrenToArray.bind(this);
    this.constructScale = this.constructScale.bind(this);

    this.fontScale = this.constructScale();
  }
  parseChildrenToArray(children) {
    return Array.isArray(children) ? children : [children];
  }
  getAllTextElements(children) {
    const childrenArray = this.parseChildrenToArray(children);
    return childrenArray.map(child => {
      if (isTextElement(child)) {
        return this.transformTextElement(child);
      }
      if (child.props && child.props.children) {
        // recursively get child's children elements
        return this.getAllTextElements(child.props.children);
      }
      return child;
    });
  }
  constructScale() {
    const { base, scale } = this.props;
    let fontSizes = [base];
    // build smaller sizes first
    for (let i = 0; i < 3; i++) {
      fontSizes.push(fontSizes[i] / scale);
    }
    // reverse so they are from smallest to highest
    fontSizes.reverse();

    // add bigger than base sizes
    for (let i = 3; i < 6; i++) {
      fontSizes.push(fontSizes[i] * scale);
    }
    return fontSizes;
  }
  transformTextElement(element) {
    let fontSize;
    switch (element.type) {
      case "h1":
        fontSize = this.fontScale[6];
        break;
      case "h2":
        fontSize = this.fontScale[5];
        break;
      case "h3":
        fontSize = this.fontScale[4];
        break;
      case "h4":
      case "p":
        fontSize = this.fontScale[3];
        break;
      case "h5":
        fontSize = this.fontScale[2];
        break;
      case "h6":
        fontSize = this.fontScale[1];
        break;
      //   case "small":
      //     fontSize = this.fontScale[0];
      //     break;
    }
    const oldProps = element.props ? element.props : {};
    return {
      ...element,
      props: {
        ...oldProps,
        style: { ...oldProps.style, fontSize: `${fontSize}px` }
      }
    };
  }

  render() {
    const children = this.getAllTextElements(this.props.children);

    return <>{children}</>;
  }
}

export { ScaleFont };
