/**
 * Smoothly scrolls the window to the top.
 */
export const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior })
}

/**
 * Simple email validation helper.
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

/**
 * Truncate long paragraph strings.
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}
