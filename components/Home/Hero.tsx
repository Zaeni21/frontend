import Link from "next/link"
import { Button } from "../ui/button"
import { HotCollections } from "@/constants"
import HotCollectionCard from "../HotCollectionCard"

const Hero = () => {
    return (
        <section className="w-full flex flex-col justify-center gap-10">
            <div className=" relative flex-center flex-col w-full pt-56 gap-2">
                <h1 className="h1-heading items-center"> Like-minded people makes you idea great.</h1>
                <p className="p-content">A decentralized co-creation platform where you only need an idea, set the rules,</p>
                <p className="p-content">The community will make it come true.</p>
            </div>
            <div className="relative flex-center gap-20">
                <Button asChild
                    variant="yellow"
                >
                    <Link href="/create">Get Started</Link>
                </Button>
                <Button asChild
                    variant="yellow"
                >
                    <Link href="/doc">Read the doc</Link>
                </Button>
            </div>
            <div className=" mt-16 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {HotCollections.map((coll) => (
                    <HotCollectionCard key={coll.collName} {...coll} />
                ))}
            </div>
        </section>
    )
}

export default Hero