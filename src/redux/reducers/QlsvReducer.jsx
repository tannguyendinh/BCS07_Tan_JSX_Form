// import React from 'react'

const stateDefaul = {
  mangSinhVien: [{ maSV: 1, hoTen: "Tân", soDT: "999", email: "abc@c.com" }],
};

export const QlsvReducer = (state = stateDefaul, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN":
      {
        // thêm dữ liệu vào mangSV
        const mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
        state.mangSinhVien = mangSVUpdate;
        return { ...state };
        // console.log(action);
      }
      // break;
    default: {
      return { ...state };
    }
  }
};
