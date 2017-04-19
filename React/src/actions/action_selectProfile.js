export const SELECT_PROFILE = 'SELECT_PROFILE';

export function getFeed() {
  return {
    type: SELECT_PROFILE,
    payload: sampleData,
  }
}
