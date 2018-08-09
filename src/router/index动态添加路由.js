import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import axios from 'axios';
import {api_url, ERR_OK} from '@/config/config';
import sign from "@/utils/sign";

if (process.env.NODE_ENV === 'development') {
  Vue.use(Router);
}

// 移动端
const WcLogin = resolve => require.ensure([], () => resolve(require('@/pages/mobile/login/wclogin')), 'mobile');
const MobileLogin = resolve => require.ensure([], () => resolve(require('@/pages/mobile/login/login')), 'mobile');

// 学生登录
const SLogin = resolve => require.ensure([], () => resolve(require('@/pages/student/login/slogin')), 'slogin');
const ForgotPass = resolve => require.ensure([], () => resolve(require('@/pages/student/login/forgotpass')), 'slogin');

// 学生端头部
const StuExpCourse = resolve => require.ensure([], () => resolve(require('@/pages/student/experiencecourse/stuexpcourse')), 'sheader');
const MyNews = resolve => require.ensure([], () => resolve(require('@/pages/student/mynews/mynews')), 'sheader');
const MyNewsDetail = resolve => require.ensure([], () => resolve(require('@/pages/student/mynews/mynewsdetail')), 'sheader');
const CourseOrder = resolve => require.ensure([], () => resolve(require('@/pages/student/courseorder/courseorder')), 'sheader');
const EngCommunity = resolve => require.ensure([], () => resolve(require('@/pages/student/engcommunity/engcommunity')), 'sheader');
const CommunityDetail = resolve => require.ensure([], () => resolve(require('@/pages/student/engcommunity/communitydetail')), 'sheader');


// 学生个人中心
const Personal = resolve => require.ensure([], () => resolve(require('@/pages/student/personalcenter/personalcenterleft')), 'personal');
const PersonalCenterOld = resolve => require.ensure([], () => resolve(require('@/pages/student/personalcenter/personalcenterold')), 'personal');
const LevelReport = resolve => require.ensure([], () => resolve(require('@/pages/student/personalcenter/levelreport')), 'personal');

// 个人中心-预约上课
const OrderClass = resolve => require.ensure([], () => resolve(require('@/pages/student/markclass/orderclass')), 'orderclass');
const TeacherInfo = resolve => require.ensure([], () => resolve(require('@/pages/student/markclass/teacherinfo')), 'orderclass');
const MarkCourse = resolve => require.ensure([], () => resolve(require('@/pages/student/markclass/markcourse')), 'orderclass');

// 个人中心-上课记录
const ClassRecord = resolve => require.ensure([], () => resolve(require('@/pages/student/classrecord/classrecord')), 'classrecord');
const MyComment = resolve => require.ensure([], () => resolve(require('@/pages/student/classrecord/mycomment')), 'classrecord');
const PreviewVideo = resolve => require.ensure([], () => resolve(require('@/pages/student/classrecord/previewvideo')), 'classrecord');
const PlayVideo = resolve => require.ensure([], () => resolve(require('@/pages/student/classrecord/playvideo')), 'classrecord');
const RemedialLesson = resolve => require.ensure([], () => resolve(require('@/pages/student/classrecord/remediallesson')), 'classrecord');
const CompHomework = resolve => require.ensure([], () => resolve(require('@/pages/student/classrecord/comphomework')), 'classrecord');
const sTeacherComment = resolve => require.ensure([], () => resolve(require('@/pages/student/classrecord/steachercomment')), 'classrecord');


// 个人中心-课程中心
const CourseCenter = resolve => require.ensure([], () => resolve(require('@/pages/student/coursecenter/coursecenter')), 'coursecenter');
const CourseDetail = resolve => require.ensure([], () => resolve(require('@/pages/student/coursecenter/coursedetail')), 'coursecenter');
const BuyCourse = resolve => require.ensure([], () => resolve(require('@/pages/student/coursecenter/buycourse')), 'coursecenter');


// 个人中心-财富中心
const WealthCenter = resolve => require.ensure([], () => resolve(require('@/pages/student/wealthcenter/wealthcenter')), 'wealthcenter');
const Pay = resolve => require.ensure([], () => resolve(require('@/pages/student/wealthcenter/pay')), 'wealthcenter');


//个人中心-我的小组
const MyGroup = resolve => require.ensure([], () => resolve(require('@/pages/student/mygroup/mygroup')), 'mygroup');
const GroupNotice = resolve => require.ensure([], () => resolve(require('@/pages/student/mygroup/groupnotice')), 'mygroup');


// 个人信息
const PersonalInfo = resolve => require.ensure([], () => resolve(require('@/pages/student/personalinfo/personalinfo')), 'personalinfo');

// 后台登录页
const Login = resolve => require.ensure([], () => resolve(require('@/pages/admin/login/login')), 'alogin');

// 后台主页

const AdminHome = resolve => require.ensure([], () => resolve(require('@/pages/admin/adminhome/adminhome')), 'adminhome');
const SystemNew = resolve => require.ensure([], () => resolve(require('@/pages/admin/homepage/systemNew')), 'systemNew');

// 约课

const EditForCourse = resolve => require.ensure([], () => resolve(require('@/pages/admin/aboutclass/editforeigncourse')), 'aboutclass');
const StudentComment = resolve => require.ensure([], () => resolve(require('@/pages/admin/aboutclass/studentcomment')), 'aboutclass');
const TeacherComment = resolve => require.ensure([], () => resolve(require('@/pages/admin/aboutclass/teachercomment')), 'aboutclass');
const DeviceReport = resolve => require.ensure([], () => resolve(require('@/pages/admin/aboutclass/devicereport')), 'aboutclass');
const EditDevice = resolve => require.ensure([], () => resolve(require('@/pages/admin/aboutclass/editdevice')), 'aboutclass');
const EditExperienceCourse = resolve => require.ensure([], () => resolve(require('@/pages/admin/aboutclass/editexperiencecourse')), 'aboutclass');
const ExperienceReport = resolve => require.ensure([], () => resolve(require('@/pages/admin/aboutclass/experiencereport')), 'aboutclass');

const LookTime = resolve => require.ensure([], () => resolve(require('@/pages/admin/arrangecourse/looktime')), 'arrangecourse');
const LookTeacher = resolve => require.ensure([], () => resolve(require('@/pages/admin/arrangecourse/lookteacher')), 'arrangecourse');

const ShareDetail = resolve => require.ensure([], () => resolve(require('@/pages/admin/operate/sharedetail')), 'operate');
const TakenDetail = resolve => require.ensure([], () => resolve(require('@/pages/admin/operate/takendetail')), 'operate');
const AddDiscount = resolve => require.ensure([], () => resolve(require('@/pages/admin/operate/adddiscount')), 'operate');
const CheckEngnews = resolve => require.ensure([], () => resolve(require('@/pages/admin/operate/checkengnews')), 'operate');
const Engnews = resolve => require.ensure([], () => resolve(require('@/pages/admin/operate/engnews')), 'operate');

// 用户
const ViewStu = resolve => require.ensure([], () => resolve(require('@/pages/admin/user/viewstu')), 'user');
const ViewGroup = resolve => require.ensure([], () => resolve(require('@/pages/admin/user/viewgroup')), 'user');
const FeedBack = resolve => require.ensure([], () => resolve(require('@/pages/admin/user/feedback')), 'user');


// 系统
const PlugInfo = resolve => require.ensure([], () => resolve(require('@/pages/admin/system/pluginfo')), 'system');

const Protocol = resolve => require.ensure([], () => resolve(require('@/base/protocol')), 'protocol');

Vue.use(Router);

// 页面刷新时，重新赋值token
// if (window.sessionStorage.getItem('token')) {
//   store.commit(types.SET_LOGIN, sessionStorage.getItem('token'))
// }

const router = new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/adminhome',
    // },
    // {
    //   path: "/hello",
    //   component: HelloWorld
    // },
    // 首页-注册-用户协议
    {
      path: '/protocol',
      name: 'Protocol',
      component: Protocol,
      meta: {
        title: 'ABC5国际在线官网'
      }
    },

    // 移动端
    {
      path: "/mobile/wclogin",
      component: WcLogin,
      meta: {
        title: 'ABC5国际在线官网',
        requireCompany: true
      }
    },
    {
      path: "/mobile/login",
      component: MobileLogin,
      meta: {
        title: 'ABC5国际在线官网',
        requireCompany: true
      }
    },

    // 后台路由
    {
      path: "/admin",
      component: Login,
      meta: {
        title: 'ABC5国际在线管理系统',
        requireCompany: true
      }
    },


    // 首页-登录
    {
      path: '/',
      name: 'SLogin',
      component: SLogin,
      meta: {
        title: 'ABC5国际在线官网',
        requireCompany: true
      }
    },
    // 首页-登录-找回密码
    {
      path: '/forgotpass',
      name: 'ForgotPass',
      component: ForgotPass,
      meta: {
        title: 'ABC5国际在线官网',
        requireCompany: true
      }
    },
    // 老师详情
    {
      path: '/teacherinfo/:id/:type',
      name: 'TeacherInfo',
      component: TeacherInfo,
      meta: {
        title: 'ABC5国际在线课程',
        requireStudent: true,  // 添加该字段，表示进入这个路由是需要登录的,
        requireCompany: true
      }
    },
    // 我的小组-消息列表
    {
      path: "/groupnotice",
      name: 'GroupNotice',
      component: GroupNotice,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 预约老师
    {
      path: '/markcourse/:id/:type/:name',
      name: 'MarkCourse',
      component: MarkCourse,
      meta: {
        title: 'ABC5国际在线课程',
        requireStudent: true  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 我要评价， 我的评价
    {
      path: "/mycomment/:id/:type",
      component: MyComment,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 课前预习，课后预习
    {
      path: "/previewvideo/:id/:type",
      component: PreviewVideo,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 课堂回放
    {
      path: "/playvideo/:course_id/:lesson_id",
      component: PlayVideo,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 申请补课
    {
      path: "/remediallesson",
      component: RemedialLesson,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 完成的课后作业
    {
      path: "/comphomework/:id",
      component: CompHomework,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 学生端老师评价
    {
      path: "/steachercomment/:id",
      component: sTeacherComment,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 课程详情
    {
      path: "/coursedetail/:id",
      component: CourseDetail,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 购买课程
    {
      path: "/buycourse/:id",
      component: BuyCourse,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    /*
     * 头部目录路由
    */
    // 体验课
    {
      path: "/stuexpcourse",
      component: StuExpCourse,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 我的消息
    {
      path: "/mynews",
      component: MyNews,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 我的消息-详情
    {
      path: "/mynewsdetail/:id",
      component: MyNewsDetail,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 课程订单
    {
      path: "/courseorder",
      component: CourseOrder,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 英语学习社区
    {
      path: "/engcommunity",
      component: EngCommunity,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 英语学习社区-详情
    {
      path: "/communitydetail/:id",
      component: CommunityDetail,
      meta: {
        title: 'ABC5国际在线课程',
        requireStudent: true
      }
    },
    // 个人信息
    {
      path: "/personalinfo",
      component: PersonalInfo,
      meta: {
        title: 'ABC5国际在线课程',
        requireCompany: true,
        requireStudent: true
      }
    },
    // 财富中心-支付
    {
      path: "/pay",
      name: 'Pay',
      meta: {
        title: '我的收银台',
        requireCompany: true
      },
      component: Pay
    },
    // 学生路由
    {
      path: "/personal",
      component: Personal,
      meta: {
        title: 'ABC5国际在线课程',
        requireStudent: true,  // 添加该字段，表示进入这个路由是需要登录的
        requireCompany: true
      },
      children: [
        // 老生
        {
          path: "/personal/personalcenterold",
          name: 'PersonalCenterOld',
          component: PersonalCenterOld,
          meta: {
            title: 'ABC5国际在线课程'
          }
        },
        // 查看测试报告
        {
          path: "/personal/levelreport/:id",
          name: 'LevelReport',
          component: LevelReport,
          meta: {
            title: 'ABC5国际在线课程'
          }
        },
        // 预约上课
        {
          path: "/personal/orderclass",
          name: 'OrderClass',
          component: OrderClass,
          meta: {
            title: 'ABC5国际在线课程'
          }
        },
        {
          path: "/personal/classrecord",
          component: ClassRecord,
          meta: {
            title: 'ABC5国际在线课程'
          }
        },
        // 我的小组
        {
          path: "/personal/mygroup",
          name: 'MyGroup',
          component: MyGroup,
          meta: {
            title: 'ABC5国际在线课程'
          }
        },
        // 财富中心
        {
          path: "/personal/wealthcenter",
          name: 'WealthCenter',
          component: WealthCenter,
          meta: {
            title: 'ABC5国际在线课程'
          }
        },
        // 课程中心
        {
          path: "/personal/coursecenter",
          name: 'CourseCenter',
          component: CourseCenter,
          meta: {
            title: 'ABC5国际在线课程'
          }
        },
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
});

let childrenRouter = [
  // 约课-编辑外教课
  {
    path: "/adminhome/editcourse/:id",
    name: "EditForCourse",
    component: EditForCourse,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 约课-学生评语
  {
    path: "/adminhome/studentcomment/:id/:stu_id",
    name: "StudentComment",
    component: StudentComment,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 约课-老师评语
  {
    path: "/adminhome/teachercomment/:id/:stu_id",
    name: "TeacherComment",
    component: TeacherComment,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 约课-编辑设备测试课
  {
    path: "/adminhome/editdevice/:id",
    name: "EditDevice",
    component: EditDevice,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 约课-设备测试课报告
  {
    path: "/adminhome/devicereport/:id",
    name: "DeviceReport",
    component: DeviceReport,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 约课-编辑外教体验课
  {
    path: "/adminhome/editexperience/:id",
    name: 'EditExperienceCourse',
    component: EditExperienceCourse,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 约课-外教体验课报告
  {
    path: "/adminhome/experiencereport/:id/:level",
    name: 'ExperienceReport',
    component: ExperienceReport,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 排课-外教课排课-按24小时查看
  {
    path: "/adminhome/looktime/:id",
    name: 'LookTime',
    component: LookTime,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 排课-外教课排课-按老师查看
  {
    path: "/adminhome/lookteacher/:id",
    name: 'LookTeacher',
    component: LookTeacher,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 运营-分享管理
  {
    path: "/adminhome/sharedetail/:id",
    name: "ShareDetail",
    component: ShareDetail,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  {
    path: "/adminhome/takendetail/:id",
    name: "TakenDetail",
    component: TakenDetail,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  {
    path: "/adminhome/adddiscount",
    name: "AddDiscount",
    component: AddDiscount,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  {
    path: "/adminhome/engnews/:id",
    name: "Engnews",
    component: Engnews,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  {
    path: "/adminhome/checkengnews/:id",
    name: "CheckEngnews",
    component: CheckEngnews,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // {
  //   path: "/adminhome/upload",
  //   name: "Upload",
  //   component: Upload,
  //   meta: {
  //     title: 'ABC5国际在线管理系统'
  //   }
  // },
  // 用户-学生-查看学生详情
  {
    path: "/adminhome/viewstu/:id",
    name: 'ViewStu',
    component: ViewStu,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 用户-学生-查看小组详情
  {
    path: "/adminhome/viewgroup/:id",
    name: 'ViewGroup',
    component: ViewGroup,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 用户-中教反馈-添加中教反馈
  {
    path: "/adminhome/feedback/:id/:name",
    name: 'FeedBack',
    component: FeedBack,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  // 系统-插件设置
  {
    path: "/adminhome/pluginfo/:id",
    name: 'PlugInfo',
    component: PlugInfo,
    meta: {
      title: 'ABC5国际在线管理系统'
    }
  },
  //系统消息
  {
    path: '/systemNew',
    component: SystemNew,
    meta: {
      title: 'ABC5国际在线管理系统',
      role: '2'
    }

  },
]

router.beforeEach((to, from, next) => {
  // console.log(1)
  if (window.sessionStorage.companyKey) {
    let haveCont = window.sessionStorage.getItem('companyCont')
    let haveKey = window.sessionStorage.getItem('companyKey')
    let ruleArr = JSON.parse(haveKey).rule_list;
    let ruleLinkArr = JSON.parse(haveKey).rule_tree;
    if (!haveCont || haveCont == {}) {
      sign.params = {
        curr: 1,
        limits: 100
      }
      // console.log(sign.params)
      const params = sign.encode_post();
      axios({
        url: api_url + 'system/config.api/info',
        method: 'post',
        data: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res) => {
        let list = res.data;
        list = sign.decode_post(list);
        // console.log(list)
        if (list.code === ERR_OK && list.data) {
          window.sessionStorage.companyCont = JSON.stringify(list.data);
          createMeta(list.data.site_keywords.values, 'keywords');
          createMeta(list.data.site_description.values, 'description');
          document.title = list.data.site_title.values;
          createLink(data.site_ico.host_values);
          // let link = document.createElement("link");
          // link.href = list.data.site_ico.host_values;
          // link.rel = "shortcut icon";
          // document.head.appendChild(link);
          setRouterList(ruleArr, ruleLinkArr, next, to);
        }
      })
    } else {
      let data = JSON.parse(window.sessionStorage.getItem('companyCont'))
      createMeta(data.site_keywords.values, 'keywords');
      createMeta(data.site_description.values, 'description');
      document.title = data.site_title.values;
      createLink(data.site_ico.host_values);
      // let link = document.createElement("link");
      // link.href = data.site_ico.host_values;
      // link.rel = "shortcut icon";
      // document.head.appendChild(link);
      setRouterList(ruleArr, ruleLinkArr, next, to);
    }
  } else {
    let host = window.location.host;
    let pattern = /^(www.)+/;
    pattern.test(host) ? host = host.replace(pattern, '') : '';
    // console.log(host);
    sign.params = {
      domain: host
    }
    // console.log(sign.params)
    const params = sign.encode_post_nokey();
    axios({
      url: api_url + 'opening/cominterface.api/get_company_key',
      method: 'post',
      data: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      let list = res.data;
      list = sign.decode_post(list);
      // console.log(list)
      if (list.code === ERR_OK && list.data && list.data.apikey != '') {
        window.sessionStorage.companyKey = JSON.stringify(list.data);
        let ruleArr = list.data.rule_list;
        let ruleLinkArr = list.data.rule_tree;
        let haveCont = window.sessionStorage.getItem('companyCont')
        if (!haveCont || haveCont == {}) {
          sign.params = {
            curr: 1,
            limits: 100
          }
          // console.log(sign.params)
          const params = sign.encode_post();
          axios({
            url: api_url + 'system/config.api/info',
            method: 'post',
            data: params,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then((res) => {
            let list = res.data;
            list = sign.decode_post(list);
            // console.log(list)
            if (list.code === ERR_OK && list.data) {
              window.sessionStorage.companyCont = JSON.stringify(list.data);
              store.dispatch('setGoldType', list.data.site_gold_type.values);
              // store.commit(types.SET_GOLD_TYPE, list.data.site_gold_type.values);
              document.title = list.data.site_title.values;
              // createMeta(list.data.site_keywords.values, 'keywords');
              // createMeta(list.data.site_description.values, 'description');
              createLink(list.data.site_ico.host_values);
              // let link = document.createElement("link");
              // link.href = list.data.site_ico.host_values;
              // link.rel = "shortcut icon";
              // document.head.appendChild(link);
              setRouterList(ruleArr, ruleLinkArr, next, to);
            }
          })
        } else {
          let data = JSON.parse(window.sessionStorage.getItem('companyCont'))
          document.title = data.site_title.values;
          // createMeta(data.site_keywords.values, 'keywords');
          // createMeta(data.site_description.values, 'description');
          createLink(data.site_ico.host_values);
          // let link = document.createElement("link");
          // link.href = data.site_ico.host_values;
          // link.rel = "shortcut icon";
          // document.head.appendChild(link);
          setRouterList(ruleArr, ruleLinkArr, next, to);
        }
      }
    })
  }
})

function checkLogin(to, next) {
  if (to.matched.some(r => r.meta.requireAdmin)) {
    if (window.sessionStorage.getItem('token') == '1') {
      next();
    } else {
      next({
        path: '/admin'
      })
    }
  } else if (to.matched.some(r => r.meta.requireStudent)) {
    if (window.sessionStorage.getItem('sToken') == '1') {
      next();
    } else {
      next({
        path: '/slogin'
      })
    }
  } else {
    next();
  }
}

let i = 1;

function setRouterList(ruleArr, ruleLinkArr, next, to) {
  if (!ruleArr.length) {
    next();
    return;
  }
  if (store.getters.newRouter.length) {
    checkLogin(to, next);
  } else {
    let newRouter = [
      {
        path: "/adminhome",
        component: AdminHome,
        meta: {
          requireAdmin: true,  // 添加该字段，表示进入这个路由是需要登录的
          requireCompany: true
        },
        children: []
      }
    ];
    ruleArr.map(val => {
      i++;
      if (val.pid !== 0) {
        newRouter[0].children.push({
          path: `/${val.name}`,
          component: r => require.ensure([], () => r(require(`@/pages/${val.taginfo}`)), 'big-pages'),
          meta: {
            title: ''
          }
        })
      }
    });

    // newRouter[0].children.concat(childrenRouter);
    newRouter[0].children = [...newRouter[0].children, ...childrenRouter];
    router.addRoutes(newRouter); //添加动态路由
    store.dispatch('setNewRouter', ruleLinkArr)
      .then(res => {
        next({...to})
      }).catch(() => {
    })
  }
}

function createMeta(val, name) {
  let keywords = document.getElementsByTagName('meta').keywords;
  let description = document.getElementsByTagName('meta').description;
  if (keywords && description) return;
  let meta = document.createElement("meta");
  meta.name = name || '';
  meta.content = val;
  document.head.appendChild(meta);
}
let flag = true;
function createLink(val) {
  if (flag) {
    let link = document.createElement("link");
    link.href = val;
    link.rel = "shortcut icon";
    document.head.appendChild(link);
    flag = false;
  }

}

export default router;
