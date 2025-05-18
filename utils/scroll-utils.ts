// Optimized scroll utility with better performance
export const scrollToSection = (elementId: string): void => {
  // Get the element to scroll to
  const element = document.getElementById(elementId)

  if (element) {
    // Get the height of the navbar (assuming it's around 80px)
    const navbarHeight = 80

    // Use modern scrollIntoView with options when supported
    if ("scrollBehavior" in document.documentElement.style) {
      const offsetPosition = element.offsetTop - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    } else {
      // Fallback for browsers that don't support smooth scrolling
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo(0, offsetPosition)
    }
  }
}
