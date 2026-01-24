export default function Maintenance() {
  return (
    <section id="perawatan" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img 
                src="repair.png" 
                alt="Repair" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h4 className="text-ocean-blue font-bold uppercase tracking-widest mb-2">Maintenance & Repair</h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perawatan & Perbaikan Kapal</h2>
            <p className="text-gray-600 mb-6">
              Layanan <em>docking</em> dan perbaikan menyeluruh untuk memastikan armada Anda tetap beroperasi dengan performa maksimal dan memenuhi standar kelaikan laut.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded border-l-4 border-ocean-blue">
                <h5 className="font-bold text-gray-800">Hull Painting</h5>
                <p className="text-xs text-gray-500">Pengecatan & sandblasting</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-ocean-blue">
                <h5 className="font-bold text-gray-800">Engine Overhaul</h5>
                <p className="text-xs text-gray-500">Perbaikan mesin utama</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-ocean-blue">
                <h5 className="font-bold text-gray-800">Steel Replacement</h5>
                <p className="text-xs text-gray-500">Penggantian pelat baja</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-ocean-blue">
                <h5 className="font-bold text-gray-800">Electrical</h5>
                <p className="text-xs text-gray-500">Instalasi kelistrikan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
