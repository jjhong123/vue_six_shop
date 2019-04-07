import request from '@/utils/request';

export function login(username, password) {
  return request({
    url: '/admin/signin',
    method: 'post',
    data: {
      username,
      password
    }
  });
}

export function getInfo() {
  return request({
    url: '/user/getinfo',
    method: 'get',
    // params: { token }
  });
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  });
}

export function check() {
  return request({
    url: '/api/user/check',
    method: 'post',
  });
}
