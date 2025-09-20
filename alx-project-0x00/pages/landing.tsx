import Card from "@/components/Card"
import Button from "@/components/Button"
import React from "react"

const Landing: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-xl font-extralight mb-8">Landing Page</h1>

            {/* Button Sizes Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Button Sizes</h2>
                <div className="flex gap-4 items-center">
                    <Button title="Small Button" size="small" styles="" />
                    <Button title="Medium Button" size="medium" styles="" />
                    <Button title="Large Button" size="large" styles="" />
                </div>
            </div>

            {/* Button Shapes Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Button Shapes</h2>
                <div className="flex gap-4 items-center">
                    <Button title="Rounded Small" shape="rounded-sm" styles="" />
                    <Button title="Rounded Medium" shape="rounded-md" styles="" />
                    <Button title="Rounded Large" shape="rounded-lg" styles="" />
                    <Button title="Rounded Full" shape="rounded-full" styles="" />
                </div>
            </div>

            {/* Combined Variations Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Combined Variations</h2>
                <div className="grid grid-cols-4 gap-4">
                    <Button title="Small + Rounded SM" size="small" shape="rounded-sm" styles="" />
                    <Button title="Small + Rounded MD" size="small" shape="rounded-md" styles="" />
                    <Button title="Small + Rounded LG" size="small" shape="rounded-lg" styles="" />
                    <Button title="Small + Rounded Full" size="small" shape="rounded-full" styles="" />

                    <Button title="Medium + Rounded SM" size="medium" shape="rounded-sm" styles="" />
                    <Button title="Medium + Rounded MD" size="medium" shape="rounded-md" styles="" />
                    <Button title="Medium + Rounded LG" size="medium" shape="rounded-lg" styles="" />
                    <Button title="Medium + Rounded Full" size="medium" shape="rounded-full" styles="" />

                    <Button title="Large + Rounded SM" size="large" shape="rounded-sm" styles="" />
                    <Button title="Large + Rounded MD" size="large" shape="rounded-md" styles="" />
                    <Button title="Large + Rounded LG" size="large" shape="rounded-lg" styles="" />
                    <Button title="Large + Rounded Full" size="large" shape="rounded-full" styles="" />
                </div>
            </div>

            <Card />
        </div>
    )
}
export default Landing