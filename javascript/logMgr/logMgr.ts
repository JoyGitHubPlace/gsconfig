class PClass { };
export default class logMgr {
    /**
     * author by Joy
     * 日志控制
     */
    private static _instance: logMgr;
    public static get instance(): logMgr {
        if (!logMgr._instance) {
            logMgr._instance = new logMgr(new PClass());
        }
        return logMgr._instance;
    }
    constructor(pc: PClass) {
        this._init();
    }
    private _closedLog: boolean = false;
    private _closedWarn: boolean = false;
    private _closedError: boolean = false;

    private SelfPassKey: string = "";
    private openSelfPassKey: boolean = false;

    private _selfLogFun: any;
    private _selfWarnFun: any;
    private _selfErrorFun: any;

    private _init(): void {
        this._setLogInfo();
        this._setWarnInfo();
        this._setErrorInfo();
    }

    private _setLogInfo() {
        this._selfLogFun = console.log;
        let that = this;
        console.log = function (res) {
            if (that._closedLog) {
                if (that.openSelfPassKey) {
                    let args = Array.prototype.slice.call(arguments);
                    if (args.length > 0 && args[0] == that.SelfPassKey) {
                        that._selfLogFun(args);
                    }
                }
                return;
            }
            let args = Array.prototype.slice.call(arguments);
            that._selfLogFun(args);


        }
    }
    private _setWarnInfo() {
        this._selfWarnFun = console.warn;
        let that = this;
        console.warn = function (res) {
            if (that._closedWarn) {
                if (that.openSelfPassKey) {
                    let args = Array.prototype.slice.call(arguments);
                    if (args.length > 0 && args[0] == that.SelfPassKey) {
                        that._selfWarnFun(args);
                    }
                }
                return;
            }
            let args = Array.prototype.slice.call(arguments);
            that._selfWarnFun(args);
        }
    }
    private _setErrorInfo() {
        this._selfErrorFun = console.error;
        let that = this;
        console.error = function (res) {
            if (that._closedError) {
                if (that.openSelfPassKey) {
                    let args = Array.prototype.slice.call(arguments);
                    if (args.length > 0 && args[0] == that.SelfPassKey) {
                        that._selfErrorFun(args);
                    }
                }
                return;
            }
            let args = Array.prototype.slice.call(arguments);
            that._selfErrorFun(args);



        }
    }
    private _setDebugInfo(debugtype: string, isClosed: boolean = false): void {
        switch (debugtype) {
            case "log":
                this._closedLog = isClosed;
                break;
            case "warn":
                this._closedWarn = isClosed;
                break;
            case "error":
                this._closedError = isClosed;
                break;
            case "all":
                this._closedLog = isClosed;
                this._closedWarn = isClosed;
                this._closedError = isClosed;
                break;
            default:

        }

    }
    private _setPassKey(passKey: string): void {
        if(passKey ==""){
            this.openSelfPassKey = false;
        }else{
            this.openSelfPassKey = true;
        }
        this.SelfPassKey = passKey;

    }
    /**
     * 关闭指定类型的日志
     * @param debugtype 日志类型
     * @param passKey 保留指定参数的日志，默认""不保留
     */
    public closedDebugInfo(debugtype: string, passKey: string = ""): void {
        this._setDebugInfo(debugtype, true);
        this._setPassKey(passKey);
    }
    /**
     * 打开指定类型的日志
     * @param debugtype 日志类型
     */
    public openDebugInfo(debugtype: string): void {
        this._setDebugInfo(debugtype, false);
        this._setPassKey("");
    }
    /**
     * 关闭所有日志log warn error
     */
    public closeAllDebugInfo(): void {
        this._setDebugInfo("all", true);
    }

}