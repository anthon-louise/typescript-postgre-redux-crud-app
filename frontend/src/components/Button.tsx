interface Props {
    text: string
    onClick?: () => void
    type?: "button" | "submit"
}

const Button = ({
    text,
    onClick,
    type="button"
}: Props) => {
    return <button onClick={onClick} type={type}> {text} </button>
}

export default Button