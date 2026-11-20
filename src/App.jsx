import { useEffect, useRef, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import Footer from './components/shared/Footer.jsx'
import ScrollToTop from './components/shared/ScrollToTop.jsx'

// Home eager (landing page, harus cepat)
import Home from './pages/Home.jsx'

// Semua page lain lazy → bundle terpecah, load on-demand
const Profile = lazy(() => import('./pages/Profile.jsx'))
const ExperimentsList = lazy(() => import('./pages/ExperimentsList.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Exp001 = lazy(() => import('./pages/Exp001.jsx'))
const Exp002 = lazy(() => import('./pages/Exp002.jsx'))
const Exp003 = lazy(() => import('./pages/Exp003.jsx'))
const Exp004 = lazy(() => import('./pages/Exp004.jsx'))
const Exp005 = lazy(() => import('./pages/Exp005.jsx'))
const Exp006 = lazy(() => import('./pages/Exp006.jsx'))
const Exp007 = lazy(() => import('./pages/Exp007.jsx'))
const Exp008 = lazy(() => import('./pages/Exp008.jsx'))
const Exp009 = lazy(() => import('./pages/Exp009.jsx'))
const Exp010 = lazy(() => import('./pages/Exp010.jsx'))
const Exp011 = lazy(() => import('./pages/Exp011.jsx'))
const Exp012 = lazy(() => import('./pages/Exp012.jsx'))
const Exp013 = lazy(() => import('./pages/Exp013.jsx'))
const Exp014 = lazy(() => import('./pages/Exp014.jsx'))
const Exp015 = lazy(() => import('./pages/Exp015.jsx'))
const Exp016 = lazy(() => import('./pages/Exp016.jsx'))
const Exp017 = lazy(() => import('./pages/Exp017.jsx'))

/*
  GtagTracker — fire GA4 page_view tiap SPA route change.
  Load awal udah ke-track sama gtag config di index.html,
  jadi kita skip event pertama biar gak dobel.
*/
function GtagTracker() {
  const location = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      })
    }
  }, [location])

  return null
}

/*
  Loading fallback — muncul saat lazy chunk masih di-load.
  Simple spinner, gak nge-block interaksi.
*/
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-neutral-200 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

/*
  M2 — routing.
  Clean URLs tanpa ekstensi .html (/profile, /exp001, dst) + redirect .html ke clean URL.

  Performance (M10): React.lazy() untuk semua page kecuali Home.
  Bundle terpecah jadi kecil-kecil, load on-demand per route.
*/
export default function App() {
  return (
    <BrowserRouter>
      <GtagTracker />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile.html" element={<Navigate to="/profile" replace />} />
          <Route path="/experiments-list" element={<ExperimentsList />} />
          <Route path="/experiments-list.html" element={<Navigate to="/experiments-list" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="/exp001" element={<Exp001 />} />
          <Route path="/exp001.html" element={<Navigate to="/exp001" replace />} />
          <Route path="/exp002" element={<Exp002 />} />
          <Route path="/exp002.html" element={<Navigate to="/exp002" replace />} />
          <Route path="/exp003" element={<Exp003 />} />
          <Route path="/exp003.html" element={<Navigate to="/exp003" replace />} />
          <Route path="/exp004" element={<Exp004 />} />
          <Route path="/exp004.html" element={<Navigate to="/exp004" replace />} />
          <Route path="/exp005" element={<Exp005 />} />
          <Route path="/exp005.html" element={<Navigate to="/exp005" replace />} />
          <Route path="/exp006" element={<Exp006 />} />
          <Route path="/exp006.html" element={<Navigate to="/exp006" replace />} />
          <Route path="/exp007" element={<Exp007 />} />
          <Route path="/exp007.html" element={<Navigate to="/exp007" replace />} />
          <Route path="/exp008" element={<Exp008 />} />
          <Route path="/exp008.html" element={<Navigate to="/exp008" replace />} />
          <Route path="/exp009" element={<Exp009 />} />
          <Route path="/exp009.html" element={<Navigate to="/exp009" replace />} />
          <Route path="/exp010" element={<Exp010 />} />
          <Route path="/exp010.html" element={<Navigate to="/exp010" replace />} />
          <Route path="/exp011" element={<Exp011 />} />
          <Route path="/exp011.html" element={<Navigate to="/exp011" replace />} />
          <Route path="/exp012" element={<Exp012 />} />
          <Route path="/exp012.html" element={<Navigate to="/exp012" replace />} />
          <Route path="/exp013" element={<Exp013 />} />
          <Route path="/exp013.html" element={<Navigate to="/exp013" replace />} />
          <Route path="/exp014" element={<Exp014 />} />
          <Route path="/exp014.html" element={<Navigate to="/exp014" replace />} />
          <Route path="/exp015" element={<Exp015 />} />
          <Route path="/exp015.html" element={<Navigate to="/exp015" replace />} />
          <Route path="/exp016" element={<Exp016 />} />
          <Route path="/exp016.html" element={<Navigate to="/exp016" replace />} />
          <Route path="/exp017" element={<Exp017 />} />
          <Route path="/exp017.html" element={<Navigate to="/exp017" replace />} />
          {/* 404 fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
