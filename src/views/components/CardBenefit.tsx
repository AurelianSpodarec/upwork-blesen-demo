function CardBenefit({ title, description, image }:any) {
    return (
        <article className="shadow-xl bg-[#f9fcff] rounded">
            <img src={image} className="h-[270px] w-full object-cover" />

            <header className="px-7 py-6 text-center">
                <h3 className="font-extrabold text-lg mb-2">{title}</h3>
                <p className="text-sm leading-1">{description}</p>
            </header>

        </article>
    )
}

export default CardBenefit;