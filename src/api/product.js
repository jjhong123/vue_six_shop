import request from "@/utils/request";

// 取得全部產品
export function getCustProduct(id) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/products`,
    method: "get"
  });
}

// 取得全部產品
export function getAllProduct(id) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/admin/products`,
    method: "get"
  });
}

// 取得單項產品
export function getSingleProduct(id) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/product/${id}`,
    method: "get"
  });
}

// 新建產品
export function createProduct(data) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product`,
    method: "post",
    data: {
      data: {
        ...data
      }
    }
  });
}

// 更新產品
export function updateProduct(data) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product/${data.id}`,
    method: "put",
    data: {
      data: {
        ...data
      }
    }
  });
}

// 刪除產品
export function delProduct(id) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product/${id}`,
    method: "delete"
  });
}

// 取得頁面產品
export function getProduct(id) {
  return request({
    url: `/api/${process.env.VUE_APP_COUSTOMPATH}/admin/products?page=${id}`,
    method: "get"
  });
}

// 取得單項產品
export function getSgProduct(id) {
  return request({
    url: `/admin/${id}`,
    method: "get"
  });
}

// 上傳產品
export function uploadImg() {
  return request({
    url: `/admin/uploadImg`,
    method: "post"
  });
}
