import { cn } from '../../lib/classnames'; 
import CheckIcon from '../../assets/icons/Check.svg';
import ChevronDownIcon from '../../assets/icons/ChevronDown.svg';
import CloseIcon from '../../assets/icons/Close.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import TokopediaIcon from '../../assets/icons/Tokopedia.svg';

const IconList = new Map([
  ['Search', <SearchIcon />],
  ['Check', <CheckIcon />],
  ['ChevronDown', <ChevronDownIcon />],
  ['Close', <CloseIcon />],
  ['Tokopedia', <TokopediaIcon />],
]);

const getIcon = (type) => IconList.get(type);

const Icon = ({ type, className = '' }) => (
  <i className={cn('[&>svg]:h-auto [&>svg]:w-full w-6', className)}>
    {getIcon(type)}
  </i>
);

export default Icon;
