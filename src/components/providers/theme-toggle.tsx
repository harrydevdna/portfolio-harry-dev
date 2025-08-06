import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant='ghost' size='icon' className='rounded-full'>
        <Moon className='!h-6 !w-6 md:!w-8 md:!h-8' />
      </Button>
    )
  }

  return (
    <div className='flex items-center gap-4'>
      <Button
        variant='outline'
        size='icon'
        className='rounded-full cursor-pointer p-4 md:p-6 bg-cyan-50 hover:bg-cyan-100'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'dark' ? (
          <Sun className='!w-6 !h-6 md:!w-8 md:!h-8' />
        ) : (
          <Moon className='!w-6 !h-6 md:!w-8 md:!h-8' />
        )}
      </Button>
    </div>
  )
}
