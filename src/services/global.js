import request from '@/utils/request';

export const fetchCurrentUser = async () => {
  return request('/api/currentUser').then(res => res)
}