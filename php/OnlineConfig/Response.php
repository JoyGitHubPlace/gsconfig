<?php
header("Content-type: text/html; charset=utf-8");
class Response{
    private $GET_SUCCESS = 1;
    private $GET_ERROR = 101;
    private $CON_IS_NULL = 102;
    private $IS_EXIST = 103;
    private $USER_INS_ERROR = 104;
    private $USER_UPD_ERROR = 105;
    private $USER_OPENID_NULL = 106;
    private $TOKEN_LAST_TIME = 107;
    private $ADD_HISTORY = 108;
    private $USER_CODE = 109;


    private function getCode($code) {
        $data = [
            $this->GET_SUCCESS=>'成功',
            $this->GET_ERROR => '没有数据了',
            $this->CON_IS_NULL => '提交参数不合法'

        ];
        return $data[$code];
    }
    //初始化
    private $messagesuccess = array('success' => true, 'msg' => '','version'=>'v1'); 

    private $messagefail = array('success' => false, 'msg' => ''); 

    function __construct(){			
    } 	
   
    
    public function Messagesuccessdata($returndata,$version)
    {
        $this->messagesuccess['msg'] =$this->getCode($this->GET_SUCCESS);
        $this->messagesuccess['data'] = $returndata;
        $this->messagesuccess['version'] = $version;
        $Rdata = $this->messagesuccess;
        return json_encode($Rdata,JSON_UNESCAPED_UNICODE);
    }
    public function Messagefaildata($code,$returndata,$version)
    {
        $this->messagefail['msg'] =$this->getCode($code);
        $this->messagefail['version'] = $version;
        $Rdata = $this->messagefail;
        return json_encode($Rdata,JSON_UNESCAPED_UNICODE);
    }
}
?>