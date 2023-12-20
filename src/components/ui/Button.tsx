

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}
const Button = ({ title, className, onClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`
        outline-none
        text-pryColor bg-white py-[13px] px-10 rounded-lg ${className}`}>{title}</button>
    </>
  )
}

export default Button