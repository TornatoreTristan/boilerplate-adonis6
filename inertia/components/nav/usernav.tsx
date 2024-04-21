import { Avatar, AvatarFallback, AvatarImage } from '#front/components/ui/avatar.tsx'

export default function userNav() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
