import style from './style.module.scss';

type ButtonProps = {
  text: string;
  onClick: () => object;
}

const Button = ({text, onClick}: ButtonProps) => {
  return (
    <button className={style.btn} onClick={onClick}>{text}</button>
  )
};

export default Button;