import Image from 'next/image';

import circles from 'src/lib/assets/svg/bg_circles.svg';

const CirclesBG = () => {
  return (
    <div className="page-background bg-color6">
      <Image className="decoration" src={circles} alt="circles" />
    </div>
  );
};

export default CirclesBG;
