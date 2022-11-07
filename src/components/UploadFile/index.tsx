import { theme } from '@/styles/theme';
import { useDropzone } from 'react-dropzone';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import Button from '../Button';
import FileItem from '../FileItem/FileItem';
import { UploadFileStyled } from './UploadFile.styles';

export interface Props {
  onDrop?: any;
  accept?: any;
  open?: any;
}

function UploadFile({ onDrop, accept }: Props) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ accept, onDrop });

  const files = acceptedFiles.map((file: any) => {
    // const fileTypeDocument = file.path.split('.').pop();
    // setIcon(iconDocument(fileTypeDocument));

    return (
      <div key={file.path}>
        <FileItem title={file.path} size={file.size} />
      </div>
    );
  });

  return (
    <UploadFileStyled>
      <div className="drop-area">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          {files.length > 0 ? (
            files
          ) : (
            <IoCloudDownloadOutline size={50} color={theme.colors.secondary} />
          )}
          <p>Arrastra el excel con la información aquí</p>
          <Button type="button" gradient>
            Clic para cargar el excel
          </Button>
        </div>
      </div>
    </UploadFileStyled>
  );
}

export default UploadFile;
