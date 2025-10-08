type FrameContainerProps = {
  styles: string[];
  src: string;
};

export const FrameContainer = ({ styles = [], src }: FrameContainerProps) => {
  const classes = ['w-full', 'max-w-3xl', 'mx-auto', ...styles].join(' ');
  return (
    <div className={classes}>
      <div className="w-full max-w-[300px] sm:max-w-[600px]">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe src={src} className="absolute top-0 left-0 w-full h-full rounded-lg" loading="lazy" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};
