jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.NativeModules.ReactConfig = {};
  return rn;
});
