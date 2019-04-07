import request from "@/utils/request";

// 取得訂單
export function getOrder(currentPage) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/admin/orders?page=${currentPage}`,
    method: "get"
  });
}

// 取得訂單
export function getSingOrder(orderId) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/order/${orderId}`,
    method: "get"
  });
}

// 新增訂單
export function createOrder(data) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/order`,
    method: "post",
    data: {
      data: {
        ...data
      }
    }
  });
}

// 付款訂單
export function payOrder(orderId) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/pay/${orderId}`,
    method: "post"
  });
}
