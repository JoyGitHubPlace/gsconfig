class GlobalParam {
    static _instance = null;
    static getInstance() {
        if (GlobalParam._instance === null) {
            GlobalParam._instance = new GlobalParam();
        }
        return GlobalParam._instance;
    }
    constructor() { }
    init() {
        this.className = "GlobalParam";
        console.log(this.className, "init function");

        this.globalSetting();

    }

    globalSetting() {
        this.SEVER_CONFIG__URL = "https://..../getGSconfig.php";
        this.SEVER_CONFIG_VERSION ="v2";
    }

    //获取自定义配置：

    //获取：
    //https://..../getGSconfig.php?event=get
    //设置：
    //https://..../getGSconfig.php?event=set&param=openmode1&value=1
    //删除：
    //https://..../getGSconfig.php?event=delete&param=openmode1


    //OnlineConfig_v1.json 的文件全选要设置为777,不然修改配置不会生效




}
module.exports = GlobalParam;
