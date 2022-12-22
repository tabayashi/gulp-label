export const label = (name, func) => {
  func.displayName = name;
  return func;
}

export default label;
