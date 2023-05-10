import { FaGithub, FaDownload } from 'react-icons/fa';

export default function FaReactIcons() {
  return (
    <div>
      <a href="https://github.com/AlenZguric/chat-app.git" target="_blank" rel="noopener noreferrer"  className="icon-link">
        <FaGithub className="icon" target='_blanck' title='GitHub Rep.'/>
      </a>
      <a href="https://github.com/AlenZguric/chat-app/archive/refs/heads/master.zip" target='_blank' download className="icon-link" title='Preuzmi .ZIP'rel="noopener noreferrer">
        <FaDownload className="icon" />
      </a>
    </div>
  );
}
