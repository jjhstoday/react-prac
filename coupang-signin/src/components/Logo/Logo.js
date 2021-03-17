import { ReactComponent as Color } from '../../assets/Logo/colorful.svg';
import { ReactComponent as Mono } from '../../assets/Logo/mono.svg';
import { ReactComponent as Black } from '../../assets/Logo/black.svg';

export default function Logo({ type, ...restProps }) {
  let Comp = null;

  switch (type) {
    case 'color':
      Comp = Color;
      break;
    case 'mono':
      Comp = Mono;
      break;
    case 'black':
      Comp = Black;
      break;
    default:
      throw new Error('Unhandled Logo type')
  }
  return (
    <Comp { ...restProps } />
  )
}

Logo.defaultProps = {
  type: 'color'
};