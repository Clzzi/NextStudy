import cx from "styles/Button.module.scss";
import Link from "next/Link";

interface ButtonProps {
  content: string;
  active: boolean;
  onClick: () => void;
}

const Button = (ButtonProps: ButtonProps): JSX.Element => {
  return (
    <>
      {ButtonProps.active ? (
        <div className={cx.ButtonActive}>
          <div className={cx.ContentActive}>{ButtonProps.content}</div>
        </div>
      ) : (
        <div className={cx.Button} onClick={ButtonProps.onClick}>
          <div className={cx.Content}>{ButtonProps.content}</div>
        </div>
      )}
    </>
  );
};

export default Button;
