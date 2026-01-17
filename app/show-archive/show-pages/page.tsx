import Image from 'next/image'

// Haus of Horror runway images
const runwayImages = [
  '/images/show/haus-of-horror/hoh-1.png',
  '/images/show/haus-of-horror/hoh-2.png',
  '/images/show/haus-of-horror/hoh3.png',
  '/images/show/haus-of-horror/hoh4.png',
  '/images/show/haus-of-horror/hoh5.png',
  '/images/show/haus-of-horror/hoh6.png',
  '/images/show/haus-of-horror/hoh7.png',
  '/images/show/haus-of-horror/hoh8.png',
  '/images/show/haus-of-horror/hoh9.png',
  '/images/show/haus-of-horror/hoh10.png',
  '/images/show/haus-of-horror/hoh11.png',
  '/images/show/haus-of-horror/hoh12.png',
]

export default function HausOfHorror() {
  return (
    <div className="bg-black min-h-screen relative">
      <div className="px-8 lg:px-16 xl:px-40 pt-[2rem] pb-16">
        {/* Header Section */}
        <div className="relative mb-[5rem] flex flex-col items-center">
          {/* Season - top right */}
          <div className="flex flex-col items-center">
            <p 
              className="text-white text-[1rem] font-bold" 
              style={{ fontFamily: 'var(--font-helvetica-bold)' }}
            >
              FALL/WINTER 2025
            </p>
          </div>
          
          {/* Title - centered and stacked */}
          <div className="flex flex-col items-center pt-[1.5rem]">
            <h1 
              className="text-white text-[7rem] font-normal leading-[116px] text-center" 
              style={{ fontFamily: 'var(--font-didot-title)' }}
            >
              <span className="block">HAUS OF</span>
              <span className="block">HORROR</span>
            </h1>
            
            {/* Byline - centered below title */}
            <p 
              className="text-white text-[1.25rem] italic text-center" 
              style={{ fontFamily: 'var(--font-didot-italic)' }}
            >
              by Anthony Lam and Anthony Lam
            </p>
          </div>
          
          {/* Divider Line - centered */}
          <div className="mt-[2.5rem] h-px w-full max-w-[85.0625rem] bg-white mx-auto"></div>
        </div>

        {/* Runway Images Grid - 3 columns matching Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {runwayImages.map((src, index) => (
            <div key={index} className="relative w-full aspect-[440/661]">
              <Image
                src={src}
                alt={`Runway look ${index + 1} from Haus of Horror collection`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 440px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
