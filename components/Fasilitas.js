export default function Fasilitas() {
    const items = [
        { img: "/rk.png", title: "Ruangan Kelas" },
        { img: "/toi.png", title: "Kamar Mandi" },
        { img: "/musola.png", title: "Musholla" },
        { img: "/lk.png", title: "Lab Komputer" },
    ];

    return (
        <section id="fasilitas" className="py-12 bg-lime-100 px-4">
            <h2 className="text-2xl font-bold text-green-500 mb-6 bg-lime-400 h-10 items-center justify-center">Fasilitas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((item, i) => (
                    <div key={i} className="p-2">
                        <img src={item.img} alt={item.title} className="max-w-full h-auto rounded-lg" />
                        <div className="text-left font-semibold">{item.title}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
