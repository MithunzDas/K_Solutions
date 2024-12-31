document.addEventListener("DOMContentLoaded", function () {
  // Function to inject mobile-specific CSS
  function injectMobileStyles() {
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 480px) {
        .download-catalog-wrapper,
        .ready-secure-wrapper {
          margin: 20px auto;
          width: 90%;
          padding: 15px;
          background-color: var(--surface-color);
          box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .download-catalog-wrapper h4,
        .ready-secure-wrapper h4 {
          font-weight: bold;
          font-size: 18px;
          border-bottom: 2px solid color-mix(in srgb, var(--default-color), transparent 90%);
          padding-bottom: 10px;
          margin-bottom: 10px;
        }

        .download-catalog a,
        .ready-secure-business a {
          display: block;
          font-size: 14px;
          padding: 10px;
          color: var(--default-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .download-catalog a:hover,
        .ready-secure-business a:hover {
          color: var(--accent-color);
        }

        .download-catalog a i {
          color: var(--accent-color);
          margin-right: 8px;
        }

        .download-catalog a + a {
          border-top: 2px solid color-mix(in srgb, var(--default-color), transparent 90%);
          padding-top: 10px;
          margin-top: 10px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Mobile adjustment logic
  if (window.innerWidth <= 480) {
    const footer = document.querySelector(".footer");
    const downloadCatalogBox = document.querySelector(".service-box.download-catalog");
    const readySecureBox = document.querySelector(".service-box.ready-secure-business");

    if (footer && downloadCatalogBox && readySecureBox) {
      // Inject mobile-specific styles
      injectMobileStyles();

      // Create wrappers for the moved elements
      const catalogWrapper = document.createElement("div");
      catalogWrapper.classList.add("download-catalog-wrapper");
      catalogWrapper.appendChild(downloadCatalogBox);

      const readyWrapper = document.createElement("div");
      readyWrapper.classList.add("ready-secure-wrapper");
      readyWrapper.appendChild(readySecureBox);

      // Insert wrappers above the footer
      footer.parentNode.insertBefore(catalogWrapper, footer);
      footer.parentNode.insertBefore(readyWrapper, footer);
    }
  }
});
