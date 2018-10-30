import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe;
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  beforeEach(() => { 
    pipe = new DurationPipe();
  });

  it('Pipe transforms time', () => {
    const length = 60;
    const expected = '1h 0m';
    expect(pipe.transform(length)).toBe(expected);
  });

});
