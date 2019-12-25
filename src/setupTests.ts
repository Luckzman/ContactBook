import { configure } from 'enzyme';
import 'jest-enzyme';
import * as redux from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: (): any => jest.fn(),
  useSelector: jest.fn(fn => fn()),
  shallowEqual: true,
}));
