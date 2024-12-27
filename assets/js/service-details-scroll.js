

  document.addEventListener("DOMContentLoaded", () => {
    const serviceLinks = document.querySelectorAll(".services-list a");
    const container = document.querySelector(".services-list-container");

    // Function to set the active class based on the current URL
    function setActiveLink() {
      const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
      serviceLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active"); // Add 'active' to the matching link
          // Scroll to the active link
          container.scrollTo({
            top: link.offsetTop - container.offsetTop,
            behavior: "smooth", // Optional smooth scrolling
          });
        } else {
          link.classList.remove("active"); // Remove 'active' from non-matching links
        }
      });
    }

    // Call the function on page load
    setActiveLink();
  });





