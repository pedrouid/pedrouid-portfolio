import * as React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import placeholder from "../assets/placeholder.png";

interface IImageWithFallbackStyleProps {
  size: number;
  show: boolean;
  hexColor?: string;
}

const SImageWithFallback = styled.div<IImageWithFallbackStyleProps>`
  position: relative;
  border-radius: ${({ size }) => `${size / 7.5}px`};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
    display: ${({ show }) => (show ? "block" : "none")};
  }
`;

class ImageWithFallback extends React.Component<any, any> {
  public static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.number
  };

  public static defaultProps = {
    size: 45
  };

  public imgRef: React.RefObject<HTMLImageElement>;

  set img(value: any) {
    return;
  }

  get img() {
    const _img: HTMLImageElement | null =
      this.imgRef && this.imgRef.current ? this.imgRef.current : null;
    return _img;
  }

  constructor(props: any) {
    super(props);
    this.imgRef = React.createRef();
  }

  public componentDidUpdate(prevProps: any) {
    this.updateSrc(prevProps);
  }

  public updateSrc = (prevProps?: any) => {
    if (this.img) {
      if (!this.props.src) {
        this.img.src = this.props.fallbackImage || placeholder;
      } else if (
        this.props.src &&
        (prevProps && this.props.src !== prevProps.src)
      ) {
        this.img.src = this.props.src;
      }
    }
  };

  public render() {
    const { src, alt, size, ...props } = this.props;
    return (
      <SImageWithFallback show={!!src} size={size} {...props}>
        <img
          ref={this.imgRef}
          src={src}
          alt={alt}
          onError={(event: any) => this.updateSrc()}
        />
      </SImageWithFallback>
    );
  }
}

export default ImageWithFallback;
