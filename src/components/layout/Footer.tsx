import Container from './Container';

export default function Footer() {
  return (
    <footer className='w-full bg-card text-[#666] font-mono border-t border-black'>
      <Container className='px-6 sm:px-12 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
          {/* Brand */}
          <div className='col-span-1 md:col-span-2 pr-0 md:pr-12'>
            <h2 className='text-white text-2xl font-black uppercase tracking-tighter mb-6 flex items-center'>
              <span className='w-4 h-4 bg-white mr-3'></span>
              spaces<span className='text-[#333]'>.</span>
            </h2>
            <p className='text-xs leading-relaxed max-w-sm text-[#888]'>
              Sourcing decommissioned infrastructure for the obsession of
              creation. We provide the raw volume required for industrial-scale
              operations and high-fidelity audio-visual experiences.
            </p>
          </div>

          {/* Links 1 */}
          <div className='space-y-6 text-xs tracking-widest uppercase'>
            <h3 className='text-white font-bold border-b border-[#333] pb-2 inline-block min-w-[100px]'>
              Directory
            </h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-1 h-1 bg-[#333] mr-2 group-hover:bg-white transition-colors'></span>
                  Index_01
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-1 h-1 bg-[#333] mr-2 group-hover:bg-white transition-colors'></span>
                  Locations
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-1 h-1 bg-[#333] mr-2 group-hover:bg-white transition-colors'></span>
                  Logistics
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-1 h-1 bg-[#333] mr-2 group-hover:bg-white transition-colors'></span>
                  Manifesto
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className='space-y-6 text-xs tracking-widest uppercase'>
            <h3 className='text-white font-bold border-b border-[#333] pb-2 inline-block min-w-[100px]'>
              Network
            </h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-1 h-1 bg-[#333] mr-2 group-hover:bg-white transition-colors'></span>
                  Protocol_X
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-1 h-1 bg-[#333] mr-2 group-hover:bg-white transition-colors'></span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-1 h-1 bg-[#333] mr-2 group-hover:bg-white transition-colors'></span>
                  Comms_Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-[#333] flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] uppercase tracking-wider gap-4'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-green-900'></div>
            <span>© 2024 STRUCTURAL_INC // SYSTEM_V.2.0.4</span>
          </div>
          <div className='flex gap-8'>
            <a href='#' className='hover:text-white transition-colors'>
              Privacy_Policy
            </a>
            <a href='#' className='hover:text-white transition-colors'>
              Terms_of_Service
            </a>
            <a href='#' className='hover:text-white transition-colors'>
              Access_Request
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
