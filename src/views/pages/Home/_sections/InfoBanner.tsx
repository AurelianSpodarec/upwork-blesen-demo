import Container from "../../../components/Container";

function InfoBanner({ title, description }:InfoBannerProps) {
    return (
        <div className="bg-[#7a8dc8] text-white text-center py-28">
        <Container>

            <h2 className="text-4xl">{title}</h2>
            {description && <p className="mt-6">{description}</p>}
            
        </Container>
        </div>
    )
}

export default InfoBanner;

interface InfoBannerProps {
    title: string;
    description?: string;
}