export default interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
