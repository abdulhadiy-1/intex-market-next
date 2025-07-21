import { Button } from "antd"
import type { FC, FormEventHandler, ReactNode } from "react"

const LoginModal:FC<{children: ReactNode, title: string, button: string, text: string, classList?: string, onSubmit?:FormEventHandler<HTMLFormElement>}> = ({children, title, button, text, classList, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className={`bg-white px-[37px] mx-auto text-[var(--clr-grey)] text-center pt-[35px] pb-[46px] flex flex-col items-center justify-between rounded-[25px] ${classList}`}>
        <span style={{ fontFamily: "Signika" }} className="text-[50px] text-[#009398]">{title}</span>
        <p className=" text-[25px] font-bold">{text}</p>
        <div className="">
          {children}
        </div>

        <Button className="!py-[20px] !px-[65px] !text-[25px] !font-semibold" type="primary" htmlType="submit" >{button}</Button>
    </form>
  )
}

export default LoginModal