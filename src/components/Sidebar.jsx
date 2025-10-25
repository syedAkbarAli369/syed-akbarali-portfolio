

import { navItems } from '@/constants';

const Sidebar = () => {

  return (
    <div>
      <div>
        <div className='mt-20 px-9'>
          <div className='flex flex-col items-center gap-18'>
            {navItems.map((item, index) => (
              <div key={index} className='side-bar-item opacity-0 cursor-pointer hover:underline transition-all duration-700'>
                <a href={item.href} className='gradient-title text-2xl font-bold'>
                  {item.name}
                </a>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar