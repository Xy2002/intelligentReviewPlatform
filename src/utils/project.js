import Vue from 'vue'
let vue = new Vue()

function joinProject(code){
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/joinProject',
      'data': {
        'token':token,
        'code': code
      }
    }).then(async (res) => {
      if (res.data.length !== 0) {
        resolve(res)
      } else {
        reject(res.msg)
      }
    })
  })
}

function checkProject(code){
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/checkProject',
      'data': {
        'token':token,
        'code': code
      }
    }).then(async (res) => {
      if (res.hasOwnProperty("data")) {
        resolve(true)
      } else {
        reject(res.msg)
      }
    })
  })
}

function getMyProject() {
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/getMyProject',
      'data': {
        'token':token
      }
    }).then(async (res) => {
      if (res.data.length !== 0) {
        resolve(res)
      } else {
        reject(res.msg)
      }
    })
  })
}

function addProject(obj) {
  let token = wx.getStorageSync('token')
  function randomString() {
    let t = 16;
    for (var e = "oOLlABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789", n = e.length, l = "", i = 0; i < t; i++)
      l += e.charAt(Math.floor(Math.random() * n));
    return l
  }
  console.log(obj.matchName,obj.creatorName)
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/addProject',
      'data': {
        'matchName':obj.matchName,
        'status':0,
        'description':obj.description,
        'startTime':obj.startTime,
        'code':randomString(),
        'creatorName':obj.creatorName,
        'matchOptions':obj.matchOptions,
        'token':token
      }
    }).then(async (res) => {
      if (res.data.length !== 0) {
        resolve("创建成功！")
      } else {
        reject(res.msg)
      }
    })
  })
}

function updateProject(obj) {
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/updateProject',
      'data': {
        'matchName':obj.matchName,
        'description':obj.description,
        'startTime':obj.startTime,
        'creatorName':obj.creatorName,
        'matchOptions':obj.matchOptions,
        'token':token,
        'matchID':obj.matchID
      }
    }).then(async (res) => {
      console.log(res)
      if (res.data.length !== 0) {
        resolve("修改成功！")
      } else {
        reject(res.msg)
      }
    })
      .catch(async (err)=>{
        reject(err.data)
    })
  })
}

function endProject(matchID) {
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/endProject',
      'data': {
        'token':token,
        'matchID':matchID
      }
    }).then(async (res) => {
      console.log(res)
      if (res.data.length !== 0) {
        resolve("比赛已结束！")
      } else {
        reject(res.msg)
      }
    })
      .catch(async (err)=>{
        reject(err.data)
      })
  })
}

function getCreatedProject() {
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/getCreatedProject',
      'data': {
        'token':token
      }
    }).then(async (res) => {
      if (res.data.length !== 0) {
        resolve(res)
      } else {
        reject(res.msg)
      }
    })
  })
}

function getProjectDetailInfo(matchID){
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/getProjectDetailInfo',
      'data': {
        'token':token,
        'matchID': matchID
      }
    }).then(async (res) => {
      if (res.data.length !== 0) {
        resolve(res)
      } else {
        reject(res.msg)
      }
    })
  })
}

function canICheckProject(code){
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    vue.$http.post({
      'url': '/project/checkProject',
      'data': {
        'token':token,
        'code': code
      }
    }).then(async (res) => {
      if (res.hasOwnProperty("data")) {
        resolve(res.data)
      } else {
        reject(res.msg)
      }
    })
  })
}
export default {
  addProject,
  getCreatedProject,
  getProjectDetailInfo,
  updateProject,
  endProject,
  joinProject,
  checkProject,
  getMyProject,
  canICheckProject
}
