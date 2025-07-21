
const Heading = ({title, classList}:{title: string, classList?: string}) => {
  return <strong className={`text-[35px] font-bold pb-[8px] ${classList} text-[var(--clr-grey)]`}>{title}</strong>

}

export default Heading