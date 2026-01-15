import { Calendar, User } from 'lucide-react'
import React from 'react'

const StoryDetailsCard = ({ story, details }) => {
    return (
        <div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
                {story.title}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
                <User className="h-4 w-4 mr-2" />
                {details.author}, {details.authorRole} &nbsp;|&nbsp; <Calendar className="h-4 w-4 mr-2" /> {story.date}
            </div>
            <div className="prose prose-lg max-w-none text-foreground mb-8">
                {details.content.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}
            </div>
        </div>
    )
}

export default StoryDetailsCard