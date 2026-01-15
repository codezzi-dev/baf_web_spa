import React from 'react'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Headset } from 'lucide-react'

const MediaCard = () => {
    return (
        <Card className="w-full border bg-green-900 border-gray-300 flex flex-col py-4 shadow-sm">
            <CardHeader className="text-lg font-medium p-6 text-white">
                <Headset className="h-6 w-6 " />
                <CardTitle>Media Contact</CardTitle>
                <p className="text-sm font-mono">For press inquiries regarding this article</p>
            </CardHeader>
            <CardFooter className="w-full">
                <CardAction className=" w-full rounded-md text-center bg-white text-green-900 py-2">Contact Media Team</CardAction>
            </CardFooter>
        </Card>
    )
}

export default MediaCard