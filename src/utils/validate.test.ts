import validator from './validate';

describe('validator test', () => {
  
  it('should check if name input is empty', () => {
    const input = { name: '', email: 'email@email.com', phone: '' };
    const error = validator(input);
    expect(error.name).toEqual('name is required');
  });
  it('should check if email input is empty', () => {
    const input = { name: 'sdfsdf', email: '', phone: '65765' };
    const error = validator(input);
    expect(error.email).toEqual('email is required');
  });
  it('should check if email input is an email', () => {
    const input = { name: 'sdfsf', email: 'asdfda', phone: '' };
    const error = validator(input);
    expect(error.email).toEqual('input must be an email');
  });
  it('should check if email input is an email', () => {
    const input = { name: 'adfdf', email: 'asdfda@asdf.com', phone: 'jojef' };
    const error = validator(input);
    expect(error.phone).toEqual('phone must be numeric');
  });
});
