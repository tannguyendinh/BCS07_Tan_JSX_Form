// rcc
import React, { Component } from "react";
import FromSv from "./FromSv";
import TableSv from "./TableSv";

export default class BaiTapFrom extends Component {
  render() {
    return <div className="container">
        <h3>BaiTapFrom</h3>
        <FromSv/>
        <TableSv/>
    </div>;
  }
}
