import React, { Component } from "react";

export default class NumericInput extends Component {
  render() {
    const { defaultValue, type, className, placeholder, onChange, numonly } = this.props;
    return (
      <input
        value={defaultValue ? defaultValue : ""}
        type={type || "text"}
        className={className || "iput s24 fontb"}
        placeholder={placeholder || null}
        onChange={onChange || (() => {})}
        onKeyDown={evt => {
          let char = evt.key;
          let txt = evt.target.value;
          
          if(
            "numonly" in props
            && charCode == 46
        ){
            if(txt.indexOf(".") > -1){
                evt.preventDefault();
                evt.stopPropagation();
            }
        }else{
            if(
                charCode > 31
                && (charCode < 48 || charCode > 57)
            ){
                evt.preventDefault();
                evt.stopPropagation();
            }
        }
        return true;
        }}
      />
    );
  }
}
