import IconDocument from "../assets/icon-document.svg";
import IconFolder from "../assets/icon-folder.svg";
import IconUpload from "../assets/icon-upload.svg";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="storage-card">
      <img src={Logo} alt="Fylo logo" className="storage-card__logo" />
      <div className="storage-card__actions">
        <button
          type="button"
          className="storage-card__action-btn"
          aria-label="Document action"
        >
          <img
            src={IconDocument}
            alt=""
            aria-hidden="true"
            className="storage-card__action-icon"
          />
        </button>
        <button
          type="button"
          className="storage-card__action-btn"
          aria-label="Folder action"
        >
          <img
            src={IconFolder}
            alt=""
            aria-hidden="true"
            className="storage-card__action-icon"
          />
        </button>
        <button
          type="button"
          className="storage-card__action-btn"
          aria-label="Upload action"
        >
          <img
            src={IconUpload}
            alt=""
            aria-hidden="true"
            className="storage-card__action-icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
