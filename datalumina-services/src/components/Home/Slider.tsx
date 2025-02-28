"use client"


export default function Slider() {

    const services = [
        {
            id: "01",
            title: "Development",
            heading: "Custom AI solutions & data platforms",
            description:
                "Whether it's data warehousing or intelligent systems, we architect and implement scalable solutions that transform complex problems into competitive advantages for our clients.",
        },
        {
            id: "02",
            title: "Consulting",
            heading: "Strategic AI implementation & transformation",
            description:
                "We guide organizations and startups through their AI journey, combining deep technical expertise with strong strategic insight.",
        },
        {
            id: "03",
            title: "Training",
            heading: "AI education & skill development",
            description:
                "We provide comprehensive training programs to help your team master the latest AI technologies and methodologies.",
        },
    ]

    return (
        <div className="w-full h-full flex flex-col items-center justify-center py-12 px-4 md:px-8">
            <h1>Slider goes here</h1>
        </div>
    )
}

