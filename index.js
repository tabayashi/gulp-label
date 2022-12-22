export const label = (name, func) => {
  if (func.displayName) {
    func = func.bind({});
  }
  func.displayName = name;
  return func;
}

export default label;
