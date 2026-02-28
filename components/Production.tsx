export default function Production() {
  return (
    <section id="produksi" className="py-20 bg-maritime-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-blue-300 font-bold uppercase tracking-widest mb-2">New Building</h4>
          <h2 className="text-3xl md:text-4xl font-bold">Layanan Produksi Kapal</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Kami merancang dan membangun berbagai jenis kapal sesuai kebutuhan spesifik klien dengan presisi tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group relative overflow-hidden rounded-xl h-80 cursor-pointer shadow-lg">
            <img 
                src="tugboat.jpg" 
                alt="Tugboat" 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Tugboat (Kapal Tunda)</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300 translate-y-4 group-hover:translate-y-0">
                Konstruksi kuat dengan daya tarik tinggi untuk manuver pelabuhan dan lepas pantai.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl h-80 cursor-pointer shadow-lg">
            <img 
                src="barge.jpg  " 
                alt="Tongkang" 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Barge (Tongkang)</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300 translate-y-4 group-hover:translate-y-0">
                Kapasitas muatan besar, dirancang untuk efisiensi transportasi material tambang dan kargo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
