v0.1

1: 	前端开发的时候做测试动态开关肯定是最舒服了，来一波 gsconfig

v0.2

2:	最讨厌项目中一大堆日志疯一样的刷出来，尤其用的websocket后同事在协议里面加日志，真心无语，
	只能自己写一个工具把日志屏蔽一波，只给自己开放出来，使用的时候加一个param关键词debug就好了，舒服
	import logMgr from "./script/utils/logUtils/logMgr";
	logMgr.instance.closedDebugInfo("log","debug"); 