import Image from 'next/image'

// Image paths - replace these with local paths once images are downloaded from Figma
// Images should be placed in: public/images/show/revelations/
const runwayImages = [
  '/images/show/revelations/01.png', // imgSz5A77104
  '/images/show/revelations/02.png', // imgSz5A69541
  '/images/show/revelations/03.png', // imgSz5A71811
  '/images/show/revelations/04.png', // imgSz5A71091
  '/images/show/revelations/05.png', // imgSz5A68031
  '/images/show/revelations/06.png', // imgSz5A67041
  '/images/show/revelations/07.png', // imgSz5A74871
  '/images/show/revelations/08.png', // imgSz5A74161
  '/images/show/revelations/09.png', // imgSz5A66701
  '/images/show/revelations/10.png', // imgSz5A72921
  '/images/show/revelations/11.png', // imgSz5A76891
  '/images/show/revelations/12.png', // imgSz5A68411
]

export default function Revelations() {
  return (
    <div className="bg-black min-h-screen relative">
      <div className="px-[2.5rem] pt-[10.3125rem] pb-16">
        {/* Header Section */}
        <div className="relative mb-[5rem]">
          {/* Season - positioned above title */}
          <p 
            className="text-white text-[1.25rem] font-bold absolute left-[39.1875rem] top-0" 
            style={{ fontFamily: 'var(--font-helvetica-bold)' }}
          >
            FALL/WINTER 2025
          </p>
          
          {/* Title */}
          <h1 
            className="text-white text-[8rem] font-normal leading-[116px] w-[36.875rem]" 
            style={{ fontFamily: 'var(--font-didot)' }}
          >
            Revelations
          </h1>
          
          {/* Byline */}
          <p 
            className="text-white text-[1.25rem] italic mt-4 ml-[9.875rem]" 
            style={{ fontFamily: 'var(--font-didot-italic)' }}
          >
            by Anthony Lam and Anthony Lam
          </p>
          
          {/* Divider Line */}
          <div className="mt-[2.5rem] h-px w-[85.0625rem] bg-white"></div>
        </div>

        {/* Runway Images Grid - 3 columns matching Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
