import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import './FileDownloader.css';

function FileDownloader ({ className, text, url, filename }) {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Link className="filedownloader-wrapper" onClick={onButtonClick}>
      <div className={className}>
        {text} <DownloadIcon />
      </div>
    </Link>
  )
  // return (
  //   <a href={url} download={filename}>{text} <DownloadIcon /></a>
  // )
};

export default FileDownloader;