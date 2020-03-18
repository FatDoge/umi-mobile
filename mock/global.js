export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': (req, res) => (
    res
    .writeHead(200, {   
      'Content-Type' : 'text/plain;charset=utf-8'
    // 添加charset=utf-8解决中文乱码问题   
    })
    .end(`{
      status: 200,
      success: true,
      message: "有效"
  }`)), 

  'GET /api/user': (req, res) => (
    res
    .writeHead(200, {   
      'Content-Type' : 'text/plain;charset=utf-8'
    // 添加charset=utf-8解决中文乱码问题   
    })
    .end(`{
      status: 200,
      success: true,
      message: "有效"
  }`)), 

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};