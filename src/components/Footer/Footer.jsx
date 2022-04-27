import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <a rel="noreferrer" target="_blank" href="mailto:info@ayda.in">
        <i className="footer-ico fas fa-envelope" />
      </a>
      <i className="footer-ico fab fa-blogger"></i>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/ArchitectYogeshDhaigude/"
      >
        <i className="footer-ico fab fa-facebook-square" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://in.linkedin.com/in/yogesh-dhaigude-06483215"
      >
        <i className="footer-ico fab fa-linkedin" />
      </a>
      <p className="footer-copyright">
        ©{year} Architect Yogesh Dhaigude.All rights reserved
      </p>
    </div>
  );
}
