import Hero from "../../components/Hero";

import hands from "./../../../assets/hands.png";

import imageBed from "./../../../assets/image-bed.png";
import SolutionBenefits from "./_sections/SolutionBenefits";
import TabsSolutions from "./_sections/TabsSolutions";

function HomeIndex() {
    return (
        <div>
            <Hero 
                title="Reducing risk and improving safety in residential aged care" 
                image={imageBed}
                link={{
                    text: "Learn more", 
                    url: ""
                }}
            />
            <TabsSolutions />
            <Hero 
                kicker="6-WEEK PROGRAM STARTING JULY 2023"
                description="Register your interest to be part of our first-to-market solution that provides unprecedented insight into personalised care and safety"
                size="small"
                image={hands}
                link={{
                    text: "Register Interest", 
                    url: ""
                }}
            />
            <SolutionBenefits />
        </div>
    )
}

export default HomeIndex;