import { describe, expect, test } from '@jest/globals';
import { totalNumMovies, totalComment } from './__mock__/dummyAPi.js';

describe('Total Comments', () => {
  test(' Test1', () => {
    const comments = [
      {
        username: 'clinton',
        creation_date: '2022-02-01',
        comment: 'Nice movie',
      },
      { comment: 'ahmed', creation_date: '2022-02-01', username: 'very scary' },

      { comment: 'ammar', creation_date: '2022-02-01', username: 'i like it' },
    ];

    const commentsTotal = totalComment(comments);

    expect(commentsTotal).toBe(3);
  });
  test(' Test1', () => {
    const comments2 = [
      {
        username: 'clinton',
        creation_date: '2022-02-01',
        comment: 'Nice movie',
      },
    ];
    const commentsTotal2 = totalComment(comments2);
    expect(commentsTotal2).toBe(1);
  });
  test(' Test1', () => {
    const comments = [];

    const commentsTotal = totalComment(comments);

    expect(commentsTotal).toBe(0);
  });
});

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
  test(' Test1', () => {
    const totalShows = [];
    const shows = totalNumMovies(totalShows);

    expect(shows).toBe(0);
  });
});