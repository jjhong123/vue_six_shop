import request from "@/utils/request";

// 取得購物車
export function getCart() {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/cart`,
    method: "get"
  });
}

// 刪除單項購物車產品
export function deleteCart(id) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/cart/${id}`,
    method: "delete"
  });
}

// 新增單項購物車產品
export function addCart(data) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/cart`,
    method: "post",
    data:{
      data:{
        ...data
      }
    }
  });
}
