import { useEffect } from 'react';

export default function LoadStylesheets() {
  useEffect(() => {
    const stylesheets = [
      "admin-asset/css/bootstrap.min.css",
      "admin-asset/css/font-awesome-all.min.css",
      "admin-asset/css/charts.min.css",
      "admin-asset/css/datatables.min.css",
      "admin-asset/css/jvector-map.css",
      "admin-asset/css/slickslider.min.css",
      "admin-asset/css/jquery-ui.css",
      "admin-asset/css/reset.css",
      "admin-asset/style.css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
      "https://unpkg.com/swiper/swiper-bundle.min.css"
    ];

    stylesheets.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });

    // Optional cleanup if needed
    return () => {
      stylesheets.forEach((href) => {
        const links = document.querySelectorAll(`link[href="${href}"]`);
        links.forEach(link => document.head.removeChild(link));
      });
    };
  }, []);

  return null; // This component just loads stylesheets
}
