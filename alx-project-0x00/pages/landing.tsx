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
                    <Button title="Small Button" size="small" />
                    <Button title="Medium Button" size="medium" />
                    <Button title="Large Button" size="large" />
                </div>
            </div>

            {/* Button Shapes Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Button Shapes</h2>
                <div className="flex gap-4 items-center">
                    <Button title="Rounded Small" shape="rounded-sm" />
                    <Button title="Rounded Medium" shape="rounded-md" />
                    <Button title="Rounded Full" shape="rounded-full" />
                </div>
            </div>

            {/* Combined Variations Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Combined Variations</h2>
                <div className="grid grid-cols-3 gap-4">
                    <Button title="Small + Rounded SM" size="small" shape="rounded-sm" />
                    <Button title="Small + Rounded MD" size="small" shape="rounded-md" />
                    <Button title="Small + Rounded Full" size="small" shape="rounded-full" />

                    <Button title="Medium + Rounded SM" size="medium" shape="rounded-sm" />
                    <Button title="Medium + Rounded MD" size="medium" shape="rounded-md" />
                    <Button title="Medium + Rounded Full" size="medium" shape="rounded-full" />

                    <Button title="Large + Rounded SM" size="large" shape="rounded-sm" />
                    <Button title="Large + Rounded MD" size="large" shape="rounded-md" />
                    <Button title="Large + Rounded Full" size="large" shape="rounded-full" />
                </div>
            </div>

            <Card />
        </div>
    )
}
export default Landing