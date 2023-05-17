import CardBenefit from "../../../components/CardBenefit";
import Container from "../../../components/Container";
import benefitGran from "./../../../../assets/benefit-gran.png";
import benefitGranm from "./../../../../assets/benefit-granm.png";
import benefitBook from "./../../../../assets/benefit-book.png";


function SolutionBenefits() {
    return (
        <div className="py-8">
            <Container>

            <header className="text-center mb-8">
                <h2 className="text-2xl font-bold">Solution Benefits</h2>
            </header>

            <div className="grid lg:grid-cols-3 gap-4">
                <CardBenefit 
                    image={benefitGran}
                    title="Improved staff experience" 
                    description="Increase workforce efficiency in resident monitoring, data collection and reporting to free up time for direct care."
                />
                <CardBenefit 
                    image={benefitGranm}
                    title="Improved care and safety" 
                    description="Timely detect and efficently manage risks associated with resident care and safety."
                />
                <CardBenefit 
                    image={benefitBook}
                    title="Reduced costs" 
                    description="Reduce costs through workforce efficiency, improved compilance and resident outcomes."
                />

            </div>
            </Container>
        </div>
    )
}

export default SolutionBenefits;