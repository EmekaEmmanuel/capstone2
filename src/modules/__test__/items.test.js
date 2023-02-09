/* eslint-disable */
import { describe, expect, test } from '@jest/globals';
import { totalNumMovies } from './__mock__/dummyAPi';

describe('Total shows', () => {
  test(' Test1', () => {
    const totalShows = [
      {
        id: 1,
        name: 'movie 1',
      },
      {
        id: 2,
        name: 'movie 2',
      },
    ];
    const shows = totalNumMovies(totalShows);

    expect(shows).toBe(2);
  });

  test('Test2', () => {
    const totalShows2 = [
      {
        id: 1,
        name: 'movie 1',
      },
    ];
    const shows2 = totalNumMovies(totalShows2);

    expect(shows2).toBe(1);
  });
});