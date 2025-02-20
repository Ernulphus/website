import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import './FileDownloader.css';

function FileDownloader () {
  const onButtonClick = () => {
    const pdfUrl = "";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "KaufmanResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Link onClick={onButtonClick}>Resume <DownloadIcon /></Link>
  )
};

export default FileDownloader;