<?php

 require_once("./OnlineConfig/Response.php");
    $event=isset($_GET['event'])?$_GET['event']:'get';
    $version=isset($_GET['version'])?$_GET['version']:'v1';
    if(true)
    {
        $path = "./OnlineConfig/OnlineConfig_".$version.".json";
        
        if($event =="")
        {
            $raw_qwe = "event can not be null";
        }else if($event =="set")
        {
            $param=isset($_GET['param'])?$_GET['param']:"a";
            $value=isset($_GET['value'])?$_GET['value']:123;
            if(is_numeric($value))
            {
                $value = floatval($value);
            }
            $data=null;
            $data = json_decode(file_get_contents($path));
            $data->$param =$value;
            file_put_contents($path, json_encode($data, JSON_UNESCAPED_UNICODE));

            $data = json_decode(file_get_contents($path));
            $raw_qwe = $data;
            
        }else if($event =="delete")
        {
            $param=isset($_GET['param'])?$_GET['param']:"a";
            $data=null;
            $data = json_decode(file_get_contents($path));
            $data->$param =null;
            $stringF=json_encode($data, JSON_UNESCAPED_UNICODE);
            $stringD = str_replace('"'.$param.'":null',"",$stringF);
            $stringE = str_replace(',}',"}",$stringD);
            $stringC = str_replace(',,',",",$stringE);
            $stringB = str_replace('{,',"{",$stringC);
            file_put_contents($path, $stringB);

            $data = json_decode(file_get_contents($path));
            $raw_qwe = $data;
            
        }else
        {
            $data=null;
            $data = json_decode(file_get_contents($path));
            $raw_qwe = $data;
        }
    }
    
    $Response = new Response();
    if($raw_qwe!=null)
    {
        $Rdata = $Response->Messagesuccessdata($raw_qwe,$version);
    }else
    {
        $Rdata = $Response->Messagefaildata(101,$raw_qwe,$version);
    }
    echo($Rdata);
?>