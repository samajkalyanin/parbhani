export const navClass = (isActive) => {
  const baseClasses = 'nav-link transition-colors duration-200'
  return isActive 
    ? `${baseClasses} nav-link-active`
    : `${baseClasses} nav-link-inactive`
}
