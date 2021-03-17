import { ReactComponent as EmailIcon } from '../../assets/Input/email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/Input/password.svg';
import { ReactComponent as ShowIcon } from '../../assets/Input/show.svg';
import { ReactComponent as HideIcon } from '../../assets/Input/hide.svg';

export default function Icon({ type, ...restProps }) {
  let Comp = null;

  switch (type) {
    case "email":
      Comp = EmailIcon
      break;
    case 'password':
      Comp = PasswordIcon
      break;
    case 'show':
      Comp = ShowIcon
      break;
    case 'hide':
      Comp = HideIcon
      break;
    default:
      throw new Error('Unhandled Icon type')
  }
  return <Comp {...restProps} />
};
