import cx from "styles/Button.module.scss";
import Link from "next/Link";

interface ButtonProps {
  content: string;
  active: boolean;
}

const Button = (ButtonProps: ButtonProps): JSX.Element => {
  return (
    <>
      {ButtonProps.active ? (
        <div className={cx.ButtonActive}>
          <div className={cx.ContentActive}>
            <Link href={`/country/${ButtonProps.content}`}>
              <a>{ButtonProps.content}</a>
            </Link>
          </div>
        </div>
      ) : (
        <div className={cx.Button}>
          <div className={cx.Content}>
            <Link href={`/country/${ButtonProps.content}`}>
              <a>{ButtonProps.content}</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
