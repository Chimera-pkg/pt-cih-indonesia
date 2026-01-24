export default function Organization() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6 text-center">
        <h4 className="text-ocean-blue font-bold uppercase tracking-widest mb-2">Organisasi</h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Struktur Manajemen</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-gray-300">
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Manajer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Siti Rahmawati</h3>
            <p className="text-gray-500">Manajer Produksi</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-gray-300">
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" alt="Manajer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Ahmad Hidayat</h3>
            <p className="text-gray-500">Manajer Operasional</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-gray-300">
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" alt="Manajer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Ahmad Hidayat</h3>
            <p className="text-gray-500">Manajer Operasional</p>
          </div>

          
        </div>
        <p className="mt-8 text-sm text-gray-500 italic">*Bagan struktur organisasi lengkap tersedia dalam dokumen perusahaan.</p>
      </div>
    </section>
  );
}
