// rcc

import React, { Component } from "react";
import { connect } from "react-redux";

class FromSv extends Component {
  state = {
    maSV: "",
    hoTen: "",
    email: "",
    soDT: "",
  };

  handleChange = (e) => {
    // lấy giá trị value từ input khi ng dùng nhập
    let tagInput = e.target;

    // let name = tagInput.name
    // let value = tagInput.value
    // console.log(name, value)

    let { name, value } = tagInput;

    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); //không load  lại trang 
    // Lấy thông tin sinh viên từ state

    this.props.themSinhVien(this.state)

    // const { maSV, hoTen, email, soDT } = this.state;

    // // Tạo đối tượng sinhVien từ thông tin đã lấy
    // const sinhVien = {
    //   maSV,
    //   hoTen,
    //   email,
    //   soDT,
    // };

    // // Gọi action themSinhVien để thêm sinh viên vào Redux store
    // this.props.themSinhVien(sinhVien);

    // // Sau khi thêm, clear thông tin trong form
    // this.setState({
    //   maSV: "",
    //   hoTen: "",
    //   email: "",
    //   soDT: "",
    // });
  };


  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white text-center">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <div className="card-body m-2">
            <form onSubmit={this.handleSubmit}>
              {/* row 1 */}
              <div className="row mb-2">
                <div className="form-group col-6">
                  <span>Mã Sinh Viên</span>
                  <input
                    name="maSV"
                    className="form-control"
                    value={this.state.maSV}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-6">
                  <span>Họ Tên Sinh Viên</span>
                  <input
                    name="hoTen"
                    className="form-control"
                    value={this.state.hoTen}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {/* row 2 */}

              <div className="row mb-2">
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    name="soDT"
                    className="form-control"
                    value={this.state.soDT}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* nút thêm sv  */}
              <div className="text-center">
                <div className="col-md-12 text-center"></div>
                <button type="submit" className="btn btn-success">Thêm Sinh Viên</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(FromSv);
