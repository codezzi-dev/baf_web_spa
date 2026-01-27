import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}
const Loading = () => {
    return (
        <section className='bg-accent text-accent-foreground flex justify-center items-center h-screen w-full gap-4' >
            <Spinner /> Loading
        </section>
    )
}

export default Loading