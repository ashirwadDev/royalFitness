import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileMenu(){
  const [open, setOpen] = useState(false)

  useEffect(()=> {
    document.body.style.overflow = open ? 'hidden' : ''
    return ()=> { document.body.style.overflow = '' }
  }, [open])

  return (
    <div>
      <button onClick={()=>setOpen(true)} aria-label="Open menu" className="p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)' }}>
        <Menu size={20} color="#ffffff" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            <div className="absolute inset-0" onClick={()=>setOpen(false)} style={{ background: 'rgba(0,0,0,0.75)' }} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 320, damping: 30 }} className="absolute right-0 top-0 w-3/4 max-w-xs h-full" style={{ background: '#0a0a0a', padding: '1.25rem' }}>
              <div className="flex items-center justify-between">
                <div className="font-bold text-lg" style={{ color: '#ffffff' }}>Menu</div>
                <button onClick={()=>setOpen(false)} aria-label="Close menu" className="p-2">
                  <X size={18} color="#ffffff" />
                </button>
              </div>
              <nav className="mt-6 flex flex-col gap-4" style={{ color: '#ffffff' }}>
                <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
                <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
                <Link to="/classes" onClick={()=>setOpen(false)}>Classes</Link>
                <Link to="/trainers" onClick={()=>setOpen(false)}>Trainers</Link>
                <Link to="/contact" onClick={()=>setOpen(false)} style={{ marginTop: '0.75rem', backgroundColor: '#ff0000', color: '#000000', padding: '8px 12px', borderRadius: '8px', display: 'inline-block' }}>Contact</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
