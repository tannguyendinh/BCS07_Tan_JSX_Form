// rcc

import React, { Component } from "react";
import { connect } from "react-redux";

class FromSv extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
  };

  handleChange = (event) => {
    // lấy giá trị value từ input khi ng dùng nhập
    let tagInput = event.target;
    let { name, value } = tagInput;

    let errorMessage = "";

    // check rỗng
    if (value.trim() === "") {
      errorMessage = name + " Không được để trống!";
    }

    // ckeck email
    if (name === "email") {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(value)) {
        errorMessage = name + " Không đúng định dạng! ";
      }
    }

    // Kiểm tra số điện thoại
    if (name === "soDT") {
      const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (!regex.test(value)) {
        errorMessage = name + " Không đúng định dạng!";
      }
    }

    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };

    // check có lỗi ẩn thêm sv
    let isButtonDisabled = Object.values(errors).some((error) => error !== "");

    this.setState(
      {
        values: values,
        errors: errors,
        isButtonDisabled: isButtonDisabled,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault(); //không load  lại trang
    // Lấy thông tin sinh viên từ state

    this.props.themSinhVien(this.state.values);

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
                    type="text"
                    name="maSV"
                    className="form-control"
                    value={this.state.values.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>

                <div className="form-group col-6">
                  <span>Họ Tên Sinh Viên</span>
                  <input
                    type="text"
                    name="hoTen"
                    className="form-control"
                    value={this.state.values.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>

              {/* row 2 */}

              <div className="row mb-2">
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>

                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    type="text"
                    name="soDT"
                    className="form-control"
                    value={this.state.values.soDT}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDT}</p>
                </div>
              </div>
              {/* nút thêm sv  */}
              <div className="text-center">
                <div className="col-md-12 text-center"></div>
                <button type="submit" className="btn btn-success" disabled={this.state.isButtonDisabled}>
                  Thêm Sinh Viên
                </button>
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
