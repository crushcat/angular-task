import { OrderByPipe } from './order-by.pipe';
import { ICourse } from '../../interfaces';

const Day1: number = (1 * 24 * 60 * 60 * 1000);
const mockCourses: ICourse[] = [{
  id: 0,
  name: 'Webpack',
  date: new Date(),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
},
{
  id: 0,
  name: 'Webpack',
  date: new Date(Date.now() - Day1),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
},
{
  id: 0,
  name: 'Webpack',
  date: new Date(Date.now() + Day1),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
}];

const expectedResult: ICourse[] = [{
  id: 0,
  name: 'Webpack',
  date: new Date(Date.now() - Day1),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
},
{
  id: 0,
  name: 'Webpack',
  date: new Date(),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
},
{
  id: 0,
  name: 'Webpack',
  date: new Date(Date.now() + Day1),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
}];

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('Pipe sorts courses by key', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform(mockCourses, 'date')).toEqual(expectedResult);
  });
});
