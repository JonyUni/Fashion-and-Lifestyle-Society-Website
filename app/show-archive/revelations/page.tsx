import Image from 'next/image'

// Image paths - replace these with local paths once images are downloaded from Figma
// Images should be placed in: public/images/show/revelations/
const runwayImages = [
  '/images/show/revelations/IMG_4920.JPG',
  '/images/show/revelations/IMG_4921.JPG',
  '/images/show/revelations/IMG_4923.JPG',
  '/images/show/revelations/IMG_4924.JPG',
  '/images/show/revelations/IMG_4925.JPG',
  '/images/show/revelations/IMG_4926.JPG',
  '/images/show/revelations/IMG_4927.JPG',
  '/images/show/revelations/IMG_4929.JPG',
  '/images/show/revelations/IMG_4932.JPG',
  '/images/show/revelations/IMG_4933.JPG',
  '/images/show/revelations/IMG_4935.JPG',
  '/images/show/revelations/IMG_4936.JPG',
  '/images/show/revelations/IMG_4937.JPG',
  '/images/show/revelations/IMG_4938.JPG',
  '/images/show/revelations/IMG_4939.JPG',
  '/images/show/revelations/IMG_4940.JPG',
  '/images/show/revelations/IMG_4941.JPG',
  '/images/show/revelations/IMG_4943.JPG',
  '/images/show/revelations/IMG_4944.JPG',
  '/images/show/revelations/IMG_4946.JPG',
  '/images/show/revelations/IMG_4947.JPG',
  '/images/show/revelations/IMG_4948.JPG',
  '/images/show/revelations/IMG_4949.JPG',
  '/images/show/revelations/IMG_4951.JPG',
  '/images/show/revelations/IMG_4952.JPG',
  '/images/show/revelations/IMG_4956.JPG',
  '/images/show/revelations/IMG_4958.PNG',
]

export default function Revelations() {
  return (
    <div className="bg-black min-h-screen relative">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 pt-[2rem] pb-16">
        {/* Header Section */}
        <div className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-[5rem] flex flex-col items-center">
          {/* Season */}
          <div className="flex flex-col items-center">
            <p
              className="text-white text-sm sm:text-base md:text-lg lg:text-[1rem] font-bold"
              style={{ fontFamily: 'var(--font-helvetica-bold)' }}
            >
              FALL/WINTER 2025
            </p>
          </div>

          {/* Title */}
          <div className="flex flex-col items-center pt-4 sm:pt-6 md:pt-8 lg:pt-[1.5rem] w-full px-4">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-normal leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[116px] text-center"
              style={{ fontFamily: 'var(--font-didot-title)' }}
            >
              Revelations
            </h1>

            {/* Byline */}
            <p
              className="text-white text-sm sm:text-base md:text-lg lg:text-[1.25rem] italic text-center mt-2 sm:mt-3 md:mt-4"
              style={{ fontFamily: 'var(--font-didot-italic)' }}
            >
              Directed by Chelsea Ngungu
            </p>
          </div>

          {/* Divider Line */}
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-[2.5rem] h-px w-full max-w-[85.0625rem] bg-white mx-auto"></div>
        </div>

        {/* Runway Images Grid - 3 columns matching Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {runwayImages.map((src, index) => (
            <div key={index} className="relative w-full aspect-[440/661]">
              <Image
                src={src}
                alt={`Runway look ${index + 1} from Revelations collection`}
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
