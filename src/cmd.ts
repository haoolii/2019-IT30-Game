interface cmdType {
  [key: string]: string
}

var cmd: cmdType = {}
/*=================================================
  REQ RES
=================================================*/
cmd.REQ_USER_LOGIN = '00000001'
cmd.RES_USER_LOGIN = '00000002'

cmd.REQ_USER_BETOUT = '00000003'
cmd.RES_USER_BETOUT = '00000004'

cmd.REQ_USER_BET_INFO = '00000005'
cmd.RES_USER_BET_INFO = '00000006'

cmd.REQ_TB_INFO = '00000007'
cmd.RES_TB_INFO = '00000008'

cmd.REQ_USER_INFO = '00000009'
cmd.RES_USER_INFO = '00000010'

cmd.REQ_USER_TB_SITDOWN = '00000010'
cmd.RES_USER_TB_SITDOWN = '00000011'

/*=================================================
  NTF 100
=================================================*/
cmd.MSG_ERROR_NTF = '99999999'
cmd.MSG_TB_NTF = '00000100'
cmd.MSG_BT_NTF = '00000110'
cmd.MSG_USER_NTF = '00000120'

export default cmd
