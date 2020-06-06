const looger=require('../lib/logger.js');
describe('looger ',()=>{
  let consleSpy;
  const req={};
  const res={};
  const next=jest.fn();

  beforeEach(()=>{
    consleSpy=jest.spyOn(console,'log').mockImplementation();
  });
  afterEach(()=>{
    consleSpy.mockRestore();
  });
  it('log the outpot of the methode and the path',()=>{
    looger(req,res,next);
    expect(consleSpy).toHaveBeenCalled();
  });



});