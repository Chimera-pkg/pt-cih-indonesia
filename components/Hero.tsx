import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('image.png')" }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-maritime-blue/70 z-10"></div>

      <div className="relative z-20 container mx-auto px-6 text-center md:text-left md:flex md:items-center h-full">
        <div className="md:w-2/3 mt-20 fade-in-up">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Membangun Masa Depan <br /> Di Atas Samudera
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light">
            Solusi terintegrasi untuk pembuatan kapal baru dan perbaikan kapal dengan standar keselamatan internasional.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#produksi"
              className="px-8 py-3 bg-white text-maritime-blue font-bold rounded hover:bg-gray-100 transition shadow-lg text-center"
            >
              Lihat Layanan
            </Link>
            <Link
              href="#profil"
              className="px-8 py-3 border border-white text-white font-bold rounded hover:bg-white/10 transition text-center"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-col space-y-8 absolute right-10 bottom-20 z-20">
          <div className="text-right border-r-4 border-white/30 pr-4">
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-sm opacity-80">Tahun Pengalaman</p>
          </div>
          <div className="text-right border-r-4 border-ocean-blue pr-4">
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-sm opacity-80">Proyek Selesai</p>
          </div>
        </div>
      </div>
    </header>
  );
}
