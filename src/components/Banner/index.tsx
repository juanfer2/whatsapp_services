import { BannerStyled } from './Banner.styles';

export interface Props {
  imgUrl: string;
  title?: string;
  children?: React.ReactNode;
}

function Banner({ imgUrl, title, children }: Props) {
  return (
    <BannerStyled>
      <img src={imgUrl} alt="banner" />
      <div className="info">
        {title && <h1>{title}</h1>}

        {children}
      </div>
    </BannerStyled>
  );
}

export default Banner;
