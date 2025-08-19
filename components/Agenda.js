export default function Agenda() {
    const items = [
        { img: "/a1.png", title: "Semarak SDI Daarul Ilmi Depok" },
        { img: "/a2.png", title: "Outing Class Go To Museum" },
        { img: "/a3.png", title: "Modesty Fest 2025" },
    ];

    return (
        <section id="agenda" className="py-12 px-4 bg-white">
            <h2 className="text-2xl font-bold text-green-500 mb-6 bg-lime-400">Agenda</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {items.map((item, i) => (
                    <div key={i}>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
                            <img src={item.img} alt={item.title} className="max-w-full h-auto rounded-lg" />
                        </div>
                        <div className="p-1 font-semibold">{item.title}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
