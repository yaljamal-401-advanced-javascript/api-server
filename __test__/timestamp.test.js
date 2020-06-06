const timestamp=require('../lib/timestamp.js');
describe('timestamp Medelware',()=>{
  const req={};
  const res={};
  const next=jest.fn();
  it('moves to the next ',()=>{
    timestamp(req,res,next);
    expect(next).toHaveBeenCalled();
  });
});