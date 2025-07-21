import { Input } from "antd"

const LoginInp = ({placeholder, type}:{placeholder?:string, type?: string}) => {
  return (
    <Input type={type} className="text-center !py-[10px] !px-[58px] !rounded-[17px] font-bold !text-[20px]" style={{ boxShadow: '0 0 10px #CBCBCB' }} placeholder={placeholder}/>
  )
}

export default LoginInp