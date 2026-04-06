import { useState, useEffect, ChangeEvent } from 'react';
import { 
  Menu, 
  X, 
  User, 
  TrendingUp, 
  TrendingDown, 
  Shield, 
  Verified, 
  ArrowRight,
  ChevronRight,
  Lock,
  Clock,
  CheckCircle2,
  MessageSquare,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Search,
  LayoutGrid,
  Gem,
  Coins,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ activeScreen, setActiveScreen }: { activeScreen: string, setActiveScreen: (s: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beli Koleksi', id: 'catalog' },
    { name: 'Jual Emas', id: 'appraisal' },
    { name: 'Penaksiran', id: 'appraisal' },
    { name: 'Tentang Kami', id: 'home' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/95 backdrop-blur-md border-b border-primary/10 h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button onClick={() => setActiveScreen('home')} className="text-2xl font-bold tracking-widest text-primary font-headline">TAN</button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setActiveScreen(link.id)}
                className={`font-headline tracking-tight transition-colors ${activeScreen === link.id ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/80 hover:text-primary'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <div className="flex items-center gap-2 text-primary font-label text-[11px] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Live Gold Price
            </div>
            <span className="text-lg font-bold text-on-surface font-label tracking-tight">IDR 1.245.000<span className="text-xs font-normal text-on-surface-variant ml-1">/gr</span></span>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant/20 rounded-sm hover:bg-surface-container transition-all duration-300">
            <User className="w-5 h-5 text-primary" />
            <span className="hidden sm:inline font-label text-xs font-bold uppercase tracking-wider text-on-surface">Akun</span>
          </button>

          <button className="md:hidden text-on-surface" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-primary/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActiveScreen(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2 font-headline text-lg text-on-surface/70 hover:text-primary"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActiveScreen }: { setActiveScreen: (s: string) => void }) => {
  return (
    <footer className="w-full py-16 px-8 border-t border-primary/20 bg-surface mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <button onClick={() => setActiveScreen('home')} className="text-2xl font-bold text-primary mb-4 block font-headline tracking-widest">TAN</button>
          <p className="text-sm leading-relaxed text-on-surface/80">Digital platform penyedia aset emas fisik dan perhiasan premium untuk kedaulatan finansial Anda.</p>
        </div>
        <div>
          <h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-6">Navigasi</h4>
          <ul className="space-y-4 text-sm text-on-surface/80">
            <li><button onClick={() => setActiveScreen('catalog')} className="hover:text-primary transition-colors">Beli Koleksi</button></li>
            <li><button onClick={() => setActiveScreen('appraisal')} className="hover:text-primary transition-colors">Jual Emas</button></li>
            <li><button onClick={() => setActiveScreen('appraisal')} className="hover:text-primary transition-colors">Penaksiran</button></li>
            <li><button className="hover:text-primary transition-colors">Tentang Kami</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-6">Sosial Media</h4>
          <ul className="space-y-4 text-sm text-on-surface/80">
            <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> <a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li className="flex items-center gap-2"><Linkedin className="w-4 h-4" /> <a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-6">Legalitas</h4>
          <ul className="space-y-4 text-sm text-on-surface/80">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs leading-relaxed text-on-surface/60">© 2024 Triliun Anugrah Nusantara. The Digital Sovereign of Wealth.</p>
        <div className="flex gap-4">
          <img src="https://flagcdn.com/w40/id.png" alt="ID" className="w-6 h-4 object-cover rounded-sm opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
          <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-6 h-4 object-cover rounded-sm opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

// --- Screens ---

const HomeScreen = ({ setActiveScreen }: { setActiveScreen: (s: string) => void }) => {
  return (
    <main className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full lg:w-3/5 h-full bg-surface"></div>
        <div className="hidden lg:block w-2/5 h-full relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpeIX15Y87pVZUvYXuH4We_hTd48V52LcgH0rcDwyh6AD_5EZH3JuXdSEf-xytxFGY-hCh_qzX54GDBioCBOBUuZQWIvN3h-zXVsqx6G2H9Vd_YqtHMcsbY-mxZ2IGaj4v99UMfRGHV1DVDWlPAx5N49zcYgK4BUMDipF89g11uUm4r0qJYpl0MD_Gz01dvRdPUtlYIZByUtqAq4FGw3WJJxtzNrlLN9Km92lAV3Bwkl099QXIleo_Gwekc7OZgPAPh6N0yPThl2g" 
            alt="Gold bars and jewelry" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[30%] opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-surface/80 to-surface"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-primary-container"></div>
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary">Triliun Anugrah Nusantara</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-on-surface leading-[1.1] mb-8 tracking-tight">
            TAN: Nilai Murni dalam <span className="italic text-primary block lg:inline">Estetika Abadi.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-sans leading-relaxed mb-12">
            Platform terpercaya untuk jual-beli perhiasan dan emas batangan Anda. Menggabungkan keamanan transaksi finansial dengan kurasi seni perhiasan kelas atas.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <button 
              onClick={() => setActiveScreen('catalog')}
              className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-label font-extrabold uppercase tracking-widest text-sm rounded-sm hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/10"
            >
              Mulai Investasi
            </button>
            <button 
              onClick={() => setActiveScreen('appraisal')}
              className="px-10 py-5 border border-primary/20 bg-surface/50 backdrop-blur-md text-primary font-label font-extrabold uppercase tracking-widest text-sm rounded-sm hover:bg-primary/5 transition-all"
            >
              Jual Emas Saya
            </button>
          </div>

          <div className="mt-16 flex items-center gap-12 opacity-50">
            <div className="flex items-center gap-2">
              <Verified className="w-5 h-5 text-primary" />
              <span className="font-label text-[10px] uppercase tracking-widest">Terdaftar OJK</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-label text-[10px] uppercase tracking-widest">Brink's Insured</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end"
        >
          <div className="w-full max-w-sm bg-surface-container-high p-8 rounded-sm relative overflow-hidden border border-primary/20 shadow-2xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface">Pasar Hari Ini</h3>
                <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Update 2m yang lalu</p>
              </div>
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Beli Emas (24K)</span>
                  <p className="text-2xl font-bold font-label">Rp 1.245.000</p>
                </div>
                <span className="text-primary font-label text-xs mb-1 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +0.45%
                </span>
              </div>
              <div className="h-[1px] bg-outline-variant/30 w-full"></div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Jual Kembali (Buyback)</span>
                  <p className="text-2xl font-bold font-label">Rp 1.134.000</p>
                </div>
                <span className="text-red-600 font-label text-xs mb-1 flex items-center">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  -0.12%
                </span>
              </div>
            </div>
            <button className="block w-full text-center py-4 text-xs font-label font-bold uppercase tracking-widest text-primary border border-primary/30 hover:bg-primary/5 transition-all">
              Lihat Grafik Lengkap
            </button>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

const CatalogScreen = ({ setActiveScreen }: { setActiveScreen: (s: string) => void }) => {
  const categories = ['Semua', 'Kalung', 'Cincin', 'Gelang', 'Anting'];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const items = [
    {
      id: 1,
      name: 'Aurelian Serenity',
      collection: 'Solid Gold Collection',
      price: 'IDR 24.500.000',
      weight: '12.50 gr',
      purity: '24K (99.9%)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYdOiLOP-9ELZtUdzSwEoP6ba_mMPwTvcur7jGd6xdovPfrfh_fuwgrlU-Ln_ab_LmQtnWAHS8RKMghl2NykPG7i-AM6JwKJE0GcwNWD-mxK5SKpqyM0dQdENTrTeQsnoN2kKz0sgdSsdaH-Cxm8N6r-15mssEWQYkfPXZzmWA0CkMF_HcQqGx7fv1a7aQC0LT-WPA_Emfm2MCFZbE1EhTd20CUqvrgQ3puDuO3Rkux5RqY0F3oAdbhmjYKwoW-1FRwBndZp4aA5U'
    },
    {
      id: 2,
      name: 'Imperial Signet',
      collection: 'Heritage Series',
      price: 'IDR 8.750.000',
      weight: '4.20 gr',
      purity: '18K (75%)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF7lgeveC9MombuLadICtvIGMJr5mPT1cklsc98M6YdVLvv_ywmD8NqUhiTgSi4fTuYfDg3rjcJap3MI7Td_diqmjRE8Zgn42-4kwTPjU-QgsxjmV-ggsHkXLLDHuudFrtLD9YW_PKamkKdBjm2gSCXXz13Sj-QmgSn_aanSi9qC9l6VJa7tBi5GoSzwjMMD5Da-H1Nbsi8IkzPGJtl6g5Av8ciz9ROd1M4Z3kZbf4rSgq-PRkVvWGksBO638uE4vI0-V-QPDN3Uc'
    },
    {
      id: 3,
      name: 'Sovereign Cuff',
      collection: 'Bespoke Design',
      price: 'IDR 15.200.000',
      weight: '8.45 gr',
      purity: '24K (99.9%)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA3Gvw89KN0kEc8YC29Fx9ItjbdP2LnpcSxAP8j3rElDHaMqj4NJlRYSm8ivoehKVFwIwC27o7S9uzrf0rhRnm8zz3vpp-XbPaKWroUQGx7k_GeKW--I9eqwTTliDIPs-YCuGY_dFfcMBjjX0_y86f1XK1LqgTTqcbbZgX9IDvfbpsjIIcQGo-JkBAbqilVaa0UAuA7A4EccczCOfIB_LDFDhAaC5Y-yiNf_WBEXhENDqdOFL-HUPZ60PiAOIfd3ZoYDj6yI-7UEo'
    },
    {
      id: 4,
      name: 'Nocturnal Drops',
      collection: 'Evening Gala',
      price: 'IDR 11.120.000',
      weight: '5.80 gr',
      purity: '18K (75%)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7dN6rnx_PkgmyonYuyeIUe7hs2tFhZQ2R_X55JwkO6CYGJsR6O9SjGbzOKYhRNA7vraEGMTMfosNXH4EI7hdnCsC6mfC8bIPiHlgYhxw7s0OqbIKXH1XXEFz_zIgF4GrRR56Q2p1yODjnrYkREhKm3C9IlIgFRYzJm5enB56CuyNu3YS-jHrz0DmhhnTZD_zYohGlb2S-fKTOQ0enn78eTKSnVKdaMcavgipVvUvrygcMBpe6BMN9gXd5CKxljPOWKMSsknDB4JI'
    },
    {
      id: 5,
      name: 'Linear Apex',
      collection: 'Industrial Luxury',
      price: 'IDR 38.400.000',
      weight: '22.10 gr',
      purity: '24K (99.9%)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMQZBBgI7KVhufpFcMCXuBZgzSsOrmSHsNWoKOrhRYBGu2PR3bin435mUhkCQsl92cBVSlV9Numsg6wO-aoqp69xDiXxyPUmHzOO-JeY9N7HllynMYMCgyhVcxAlPM-1J7BY9i7g9LV2QbXDeg6AQ5k6KAYjnoKi4pgO6WZBxrHSJY6qRrFwUrV_E-dlkhBnvai0--1H2B5sYd_-RdPCYVDkBbZWIpa6sK11q6wd7BVxLq93EimX2GDuXdZvHnqR5Hm4Qwt8mrl8g'
    },
    {
      id: 6,
      name: 'Filigree Soul',
      collection: 'Signature TAN',
      price: 'IDR 12.900.000',
      weight: '6.70 gr',
      purity: '24K (99.9%)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRAvP6W9c050ZjeJkO3po7W3xbX13Qz8PhxAk9AGCj7NnzHR5rPsfU6pFhSV2HedduFsVY2U-HQNNBC9egTtvmt_ctqtU7bEwsdAO4gPuS9JZIxwqFA2GqS1U48XWZXgPxu9bzN-2P0dyIQ-RmbP_gmxtxSZU-X5ToTHXD3q_Cc1V5sYnqH_6HElPcvBYRsoWYorep2ARfshCPGnb3TgrDPdryfmvZnNO97qLJ3uunDTOh8cvyo0UQZRlXtoiHKr3Gk61ds2Fjn0k'
    }
  ];

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-headline tracking-tight mb-6">Katalog Mahakarya</h1>
          <p className="text-on-surface-variant font-sans text-lg leading-relaxed max-w-xl">
            Discover our sovereign collection of meticulously crafted 24K and 18K gold treasures. A dialogue between legacy wealth and contemporary precision.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 font-label text-xs uppercase tracking-widest">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 transition-all border border-outline-variant/10 ${activeCategory === cat ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container-high text-on-surface-variant hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative bg-surface-container-low overflow-hidden transition-all duration-500 ${idx % 3 === 1 ? 'lg:mt-12' : ''}`}
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="font-headline text-2xl text-white mb-1">{item.name}</h3>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">{item.collection}</p>
                </div>
                <div className="text-right">
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/60 mb-1">Live Price</p>
                  <p className="text-primary font-bold text-lg leading-none">{item.price}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6 border-t border-white/10 pt-4">
                <div>
                  <p className="font-label text-[10px] uppercase text-white/50 mb-1">Net Weight</p>
                  <p className="font-sans text-sm text-white">{item.weight}</p>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase text-white/50 mb-1">Purity (Kadar)</p>
                  <p className="font-sans text-sm text-white">{item.purity}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-3 bg-primary text-on-primary font-label text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">Beli via WA</button>
                <button 
                  onClick={() => setActiveScreen('appraisal')}
                  className="flex-1 py-3 bg-surface/20 backdrop-blur-md text-white font-label text-xs font-bold uppercase tracking-widest border border-white/30 hover:bg-surface/30 transition-all"
                >
                  Tukar Tambah
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

const AppraisalScreen = ({ setActiveScreen }: { setActiveScreen: (s: string) => void }) => {
  const [step, setStep] = useState(1);
  const [assetType, setAssetType] = useState('Antam/UBS');
  const [formData, setFormData] = useState({
    berat: '',
    kadar: '',
    nama: '',
    hp: '',
    email: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Basic validation based on field name
    if (name === 'berat' || name === 'kadar' || name === 'hp') {
      // Only allow numbers and decimal point for berat/kadar, only numbers for hp
      const numericValue = value.replace(/[^0-9.]/g, '');
      if (name === 'hp') {
        setFormData(prev => ({ ...prev, [name]: value.replace(/[^0-9]/g, '') }));
      } else {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
      return;
    }

    if (name === 'nama') {
      // Only allow letters and spaces
      const alphaValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: alphaValue }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    if (!formData.berat || !formData.nama || !formData.hp) {
      alert('Mohon lengkapi data berat, nama, dan nomor HP Anda.');
      return;
    }

    const message = `Halo TAN, saya ingin menaksir aset emas saya:
- Jenis: ${assetType}
- Berat: ${formData.berat} gr
- Kadar: ${formData.kadar} Karat
- Nama: ${formData.nama}
- Nomor HP: ${formData.hp}
- Email: ${formData.email}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285230100970?text=${encodedMessage}`, '_blank');
    setActiveScreen('confirmation');
  };

  const steps = [
    { id: '01', title: 'Klasifikasi', desc: 'Pilih jenis aset emas Anda.' },
    { id: '02', title: 'Spesifikasi', desc: 'Berat dan kadar karat.' },
    { id: '03', title: 'Verifikasi Visual', desc: 'Unggah dokumentasi aset.' },
    { id: '04', title: 'Kontak Digital', desc: 'Informasi pengiriman penawaran.' },
  ];

  const assetTypes = [
    { name: 'Antam/UBS', desc: 'Logam mulia bersertifikat', icon: <Verified className="w-8 h-8" /> },
    { name: 'Perhiasan Toko', desc: 'Kalung, Cincin, Gelang utuh', icon: <Gem className="w-8 h-8" /> },
    { name: 'Perhiasan Rongsok', desc: 'Patah, Rusak, atau Batangan', icon: <Scale className="w-8 h-8" /> },
  ];

  return (
    <main className="pt-20 pb-24 min-h-screen">
      <div className="relative h-[409px] w-full flex items-center px-8 md:px-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_O-euBQUa6YGE6iuoXeIyYpZsAupFphUVVExK2ik8XE9pBOXrrU6H0W7qZvw2cjmunbhTBoDzxH2Z3CMEOLy_doEY8_utzW_My5a7ri6RdOUGwC-sVrYEayG5y0DxTBB1aWaPYcH3YyHL7kkPI3FA48GNH417MYrTeuz7XdtTnNtZdiu2QiKm_uGFY9kMzPTl-LW4LjH3NBIhWTCLRf4RhE5yAWjrVsh_ovEqXwnH_c-lLMphuaZVRVvSzjhnOrrH1wZ1ngdYqtc" 
            alt="Gold bars and jewelry" 
            className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <span className="text-primary font-label text-xs uppercase tracking-[0.3em] mb-4 block">Exclusive Service</span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface leading-tight mb-4">The Vault: Asset Appraisal</h1>
          <p className="text-on-surface-variant font-sans leading-relaxed max-w-lg">Transform legacy into liquidity. Our precise appraisal process ensures you receive the maximum sovereign value for your gold and jewelry.</p>
        </div>
      </div>

      <div className="px-6 md:px-20 -mt-20 relative z-20 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 space-y-12">
              <div className="space-y-8">
                {steps.map((s, idx) => (
                  <div key={s.id} className={`flex items-start gap-4 transition-opacity ${step === idx + 1 ? 'opacity-100' : 'opacity-30'}`}>
                    <span className={`font-label font-bold ${step === idx + 1 ? 'text-primary' : 'text-on-surface-variant'}`}>{s.id}</span>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface">{s.title}</h4>
                      <p className="text-xs text-on-surface-variant mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-surface-container-high border-l-2 border-primary/30">
                <h5 className="text-primary font-label text-xs uppercase tracking-widest mb-2">Market Insight</h5>
                <p className="text-sm font-sans italic text-on-surface-variant leading-relaxed">"Harga emas saat ini menunjukkan tren stabilitas premium. Moment yang tepat untuk likuidasi aset simpanan."</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10">
              <div className="bg-surface-container-high px-8 py-6 flex justify-between items-center border-b border-on-surface/5">
                <h2 className="text-on-surface font-headline font-bold text-xl">Langkah {step}: {steps[step-1].title}</h2>
                <span className="text-on-surface/60 font-label text-sm uppercase tracking-tighter">Step {step} of 4</span>
              </div>
              
              <div className="p-8 md:p-12 space-y-12">
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {assetTypes.map((type) => (
                      <button
                        key={type.name}
                        onClick={() => setAssetType(type.name)}
                        className={`group relative flex flex-col items-center justify-center p-8 bg-surface border-2 transition-all rounded-lg text-center ${assetType === type.name ? 'border-primary shadow-lg' : 'border-transparent hover:border-primary-container'}`}
                      >
                        <div className={`mb-4 transition-transform group-hover:scale-110 ${assetType === type.name ? 'text-primary' : 'text-on-surface'}`}>
                          {type.icon}
                        </div>
                        <span className="text-on-surface font-headline font-bold mb-1">{type.name}</span>
                        <span className="text-on-surface-variant text-xs font-sans">{type.desc}</span>
                        {assetType === type.name && (
                          <div className="absolute top-4 right-4 text-primary">
                            <CheckCircle2 className="w-5 h-5 fill-primary text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                <div className="space-y-8 pt-8 border-t border-on-surface/5">
                  <h3 className="text-on-surface font-headline font-bold text-lg">Detail Spesifikasi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-on-surface-variant font-label text-xs uppercase font-bold tracking-wider">Berat Estimasi (Gram)</label>
                      <input 
                        name="berat"
                        value={formData.berat}
                        onChange={handleInputChange}
                        className="bg-transparent border-b-2 border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface font-headline text-2xl py-3 transition-colors outline-none" 
                        placeholder="Contoh: 10.5" 
                        type="text"
                        inputMode="decimal"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-on-surface-variant font-label text-xs uppercase font-bold tracking-wider">Kadar Kemurnian (Karat)</label>
                      <input 
                        name="kadar"
                        value={formData.kadar}
                        onChange={handleInputChange}
                        className="bg-transparent border-b-2 border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface font-headline text-2xl py-3 transition-colors outline-none" 
                        placeholder="Contoh: 24" 
                        type="text"
                        inputMode="numeric"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-on-surface-variant font-label text-xs uppercase font-bold tracking-wider">Nama Lengkap</label>
                      <input 
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className="bg-transparent border-b-2 border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface font-headline text-2xl py-3 transition-colors outline-none" 
                        placeholder="Nama Anda" 
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-on-surface-variant font-label text-xs uppercase font-bold tracking-wider">Nomor HP (WhatsApp)</label>
                      <input 
                        name="hp"
                        value={formData.hp}
                        onChange={handleInputChange}
                        className="bg-transparent border-b-2 border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface font-headline text-2xl py-3 transition-colors outline-none" 
                        placeholder="0812..." 
                        type="text"
                        inputMode="tel"
                      />
                    </div>
                    <div className="flex flex-col md:col-span-2 gap-2">
                      <label className="text-on-surface-variant font-label text-xs uppercase font-bold tracking-wider">Alamat Email</label>
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-transparent border-b-2 border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface font-headline text-2xl py-3 transition-colors outline-none" 
                        placeholder="email@anda.com" 
                        type="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-on-surface/5">
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <Lock className="w-4 h-4" />
                    <p className="text-xs font-sans">Data Anda dienkripsi dan diproses secara privat oleh pakar kami.</p>
                  </div>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary font-label font-extrabold uppercase tracking-widest px-10 py-5 rounded-md hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all"
                  >
                    Kirim Penaksiran via WA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const ConfirmationScreen = ({ setActiveScreen }: { setActiveScreen: (s: string) => void }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative px-6 py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNwKBQ1QZ7WJpgfN7xTfn2isN9fuhKt9eR77e5YCp0JbUIUrGo5otvxxQqCnDO3dGMeR8fx0O4gTp4pbzn-2fkDrabQr8QBUSpPL8m4rwrx4NxFE-WXdDAmKXon2PPBdkx1bug3r68eAKI9wAg6nw74XZ93XKCPiXcQI1gWZ02ovZh2J1Vk0A39vdzM8-zgJAtDae06ZDsMF7pvBsuaf9oPx4CyJlN8RdHFkxZKezDK_orRxa4Ctp0Mwpp85Z6ATfMTYxI1QlMbg0" 
          alt="Architectural pattern" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, stiffness: 100 }}
          className="mb-10 relative"
        >
          <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full"></div>
          <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-surface-container-high border border-primary/20">
            <CheckCircle2 className="w-12 h-12 text-primary fill-primary/20" />
          </div>
        </motion.div>

        <div className="text-center space-y-6 mb-16">
          <p className="font-label text-primary tracking-[0.2em] text-xs uppercase font-bold">Transaction Confirmed</p>
          <h1 className="font-headline text-4xl md:text-6xl text-on-surface font-bold tracking-tight leading-tight max-w-2xl mx-auto">
            Detail Aset Anda Telah Kami Terima.
          </h1>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded bg-surface-container-low border border-outline-variant/30">
            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Reference ID</span>
            <span className="font-mono text-primary font-bold tracking-wider">TAN-VAL-88294</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {[
            { id: '01', title: 'Form Terkirim', desc: 'Data aset berhasil masuk ke sistem kami.', icon: <CheckCircle2 className="text-primary" />, active: true },
            { id: '02', title: 'Review Tim Ahli', desc: 'Analisis valuasi oleh gemologis bersertifikat.', icon: <TrendingUp className="text-primary animate-pulse" />, active: true },
            { id: '03', title: 'Penawaran Dikirim', desc: 'Proposal harga final akan dikirim via email.', icon: <Mail className="text-on-surface/20" />, active: false },
            { id: '04', title: 'Konsep Perhiasan', desc: 'Opsional: Redesain aset menjadi karya seni baru.', icon: <Gem className="text-on-surface/20" />, active: false },
          ].map((s) => (
            <div key={s.id} className={`glass-panel p-6 rounded-xl border-l-2 relative overflow-hidden group ${s.active ? 'border-primary' : 'border-outline-variant/20 opacity-60'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="w-6 h-6">{s.icon}</div>
                <span className={`font-label text-[10px] font-bold ${s.active ? 'text-primary' : 'text-on-surface-variant'}`}>STEP {s.id}</span>
              </div>
              <h3 className="font-headline text-lg text-on-surface mb-1">{s.title}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-xl text-center space-y-10">
          <div className="p-6 rounded-lg bg-surface-container-high/50 border border-outline-variant/10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-primary-container" />
              <p className="font-sans text-on-surface-variant text-sm">Kami menjamin respons dalam 1 (satu) jam kerja.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-on-primary font-label font-bold text-sm tracking-widest rounded-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
              <MessageSquare className="w-5 h-5" />
              HUBUNGI KAMI DI WHATSAPP
            </button>
            <button 
              onClick={() => setActiveScreen('home')}
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-outline-variant/30 text-on-surface font-label font-bold text-sm tracking-widest rounded-md hover:bg-surface-container-high transition-all flex items-center justify-center"
            >
              KEMBALI KE BERANDA
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 max-w-7xl mx-auto">
        {[
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBXAzA9WI1CVcVoty19q_kMLlKRge9wEB4VOCDVLHZkx60ZNZDGvOPtvoTW3eQijHR4_0clHhNvUaZMK0z7SJYbnhJtMNhA4u6ZxPso1-1wJO8ajRg63FbGeMvGRuP2OjDoWUqB7EDYcQAD4-zQggoei__0TLriVMvykhoIZX_3ijkkcAXrtBER7h5QssH6wEomG5sMBB1LahWK0lVxS1MnRMi5uFrq0GMOzmDYKodwR3k7WrWZxbpVC4OLO8Nh-0yZ93m2VNAVAm0',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCpNg89h-5hocKS8pewH99hymy7PfyjXCLeFLO0UrXXKgad-kYVpktdJHMNi3lmU2PSv_bnrQec11jctBGdpw--6M21WNANvJuhAx4Gox50HG9tI_E55oANPix6P4z2YqaUu9I0vom5W1BTu5Qi9_GXlHYETkl_sQXK-gvpbVBXlqprI0Pb2UFhgRiumSYq6eKlEGe2mGDAesvLPvLRZ0Pls2SegL5_7vFouHuZ7K346Vzsb4ft4HiF4ijoT37bcIOQBue32jrpo_w',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBZxdAihe-MmLSUeFixTlWFjmUWMibOWeCoodSao30-i-qAv+Ss4YK8EMgTDZijLbQl9RtPQjGOeJwAgqQ0kuVksPH01Y-2YqGR82bv402lElVJ-HMKGusCEPco7tTTrcuzbenf3p9_gkRuZrcY3I_lz_t_I_rEbAWYR02FMaGdcJIVbgte0dvoNHhXWyv5acXijAylpMYzi1eNyKbIeRo-_1a0W5zOVKa2FHbFpmvtlCbaLiVL3Ct4P04PEjCOUwaiASvoxU5KpWE',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ4Ke5cACKrZY0ChUvNmbNXmj76OD2m60BHqMKPSyK7RYDT12nCgmQKsGPb4RfEEXFPja7EDz2t5QLHUZASdPMv2zwd8R8Xy4eK3HmwuDCYrptkw4xu8thK5mX0Jr1hHVPLk2J2jrfEqyFCkFhnLCyGpWj3uFJ9am49mS_u3IvDDxvTVhqtmMmLItmzprZnwrLqotm8LenRAjhqwibKBuTxeEHwlm0bnvoqYNDgyjdkoI3kZszxxHR-t6qFrus46nBktUlZHt0V9g'
        ].map((src, i) => (
          <img key={i} src={src} alt="Decorative asset" className="aspect-square object-cover rounded shadow-2xl" referrerPolicy="no-referrer" />
        ))}
      </div>
    </main>
  );
};

// --- Main App ---

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeScreen]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeScreen === 'home' && <HomeScreen setActiveScreen={setActiveScreen} />}
          {activeScreen === 'catalog' && <CatalogScreen setActiveScreen={setActiveScreen} />}
          {activeScreen === 'appraisal' && <AppraisalScreen setActiveScreen={setActiveScreen} />}
          {activeScreen === 'confirmation' && <ConfirmationScreen setActiveScreen={setActiveScreen} />}
        </motion.div>
      </AnimatePresence>

      <Footer setActiveScreen={setActiveScreen} />

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface-container/95 backdrop-blur-md border-t border-primary/10 rounded-t-xl shadow-[0_-4px_24px_rgba(0,0,0,0.1)]">
        <button 
          onClick={() => setActiveScreen('catalog')}
          className={`flex flex-col items-center justify-center transition-colors ${activeScreen === 'catalog' ? 'text-primary font-bold' : 'text-on-surface/50'}`}
        >
          <LayoutGrid className="w-6 h-6" />
          <span className="font-label text-[10px] uppercase tracking-wider mt-1">Beli</span>
        </button>
        <button 
          onClick={() => setActiveScreen('appraisal')}
          className={`flex flex-col items-center justify-center transition-colors ${activeScreen === 'appraisal' ? 'text-primary font-bold' : 'text-on-surface/50'}`}
        >
          <Coins className="w-6 h-6" />
          <span className="font-label text-[10px] uppercase tracking-wider mt-1">Jual</span>
        </button>
        <button 
          onClick={() => setActiveScreen('appraisal')}
          className={`flex flex-col items-center justify-center transition-colors ${activeScreen === 'appraisal' ? 'text-primary font-bold' : 'text-on-surface/50'}`}
        >
          <Scale className="w-6 h-6" />
          <span className="font-label text-[10px] uppercase tracking-wider mt-1">Taksir</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface/50">
          <User className="w-6 h-6" />
          <span className="font-label text-[10px] uppercase tracking-wider mt-1">Profil</span>
        </button>
      </nav>
    </div>
  );
}
